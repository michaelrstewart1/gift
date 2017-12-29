const gulp = require('gulp')
const sass = require('gulp-sass')
const sassThemes = require('gulp-sass-themes')
const minify = require('gulp-minify-css')
const concat = require('gulp-concat')
const prefix = require('gulp-autoprefixer')
const livereload = require('gulp-livereload')
const webpack = require('webpack-stream')
const watch = require('gulp-watch')
const batch = require('gulp-batch')
const copy = require('gulp-copy')

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}

gulp.task('sass', () => {
	return gulp.src([
			'./sass/main.scss',
			'./sass/frontpage.scss'
		])
		.pipe(concat('app.scss'))
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix())
		.pipe(minify())
		.pipe(gulp.dest('./css/'))
})


// Run webpack
// Make sure to handle the errors so the watch
// handler doesn't fail and exit the process
gulp.task('webpack', function(){
	return gulp.src('vue/main.js')
		.pipe(webpack( require('./webpack.config.js') )
			.on('error', handleError)
		)
		.pipe(gulp.dest('dist/'));
})

// Default task
gulp.task('default', function(){
  gulp.watch('sass/*.scss', ['sass'])
  gulp.watch('vue/**/*.{js,vue}', ['webpack'])
});


