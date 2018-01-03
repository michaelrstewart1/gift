<?php
	//Set the pid number of the script
	$GLOBALS['mypid'] = "[pid ".getmypid()."]";
	$GLOBALS['hostname'] = gethostname();
	/*
		Config.php file.  Use this config file to change anthing in the project
		from the prod to dev to stage environment.
	*/

	$GLOBALS['currentMode'] = 'dev'; 
	$GLOBALS['currentVersion'] = "0.1";
	$GLOBALS['email'] = array(
		'dev' => array(
			'admin' => 'michaelrstewart1@gmail.com',
			'cc' => '',
			'from' => 'Gift Alerts (DEV) <manage-gifts-alerts@manage-gifts.com>'
		)
	);
	$GLOBALS['db'] = array(
		'gift' => array(
			'dev' => array(
				'hostname' => '35.202.82.191',
				'username' => 'gift',
				'password' => 'RandomPass',
				'timezone' => 'US/Eastern'
			),
		)
	);
	$GLOBALS['projectRoot'] = array(
		'dev' => '/srv/gift/',
	);
	$GLOBALS['path'] = array(
		'config' => $GLOBALS['projectRoot'][$GLOBALS['currentMode']].'config/',
		'includes' => $GLOBALS['projectRoot'][$GLOBALS['currentMode']].'includes/'
	);
?>
