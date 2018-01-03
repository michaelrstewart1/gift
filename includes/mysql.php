<?php
	$connect = mysqli_connect('35.202.82.191','gift','RandomPass') or die('error connecting to database!');
	$select = mysqli_select_db($connect,'users') or die('Error selecting database!');
	
	/*
	 * Function db_select_query
	 *
	 * common mysql database query function so logging and error checking can be in one place
	 *
	 * @query (string) the DB query statement
	 * @return (object) the query result object NULL on failure
	 */
	function db_select($query) {
			global $connect;
			$db_select_query_result = mysqli_query($connect, $query);
			if ($db_select_query_result == false) {
					echo "MySQL query failed.  Error: ".print_r(mysqli_error($connect),true);
					return NULL;
			}
			return $db_select_query_result;
	}
	
	/*
	 * Function db_insert_ignore_query
	 *
	 * common mysql database query function so logging and error checking can be in one place
	 *
	 * @query (string) the DB query statement
	 * @return (boolean) the query success
	 */
	function db_insert_ignore($query) {
			//because this is an INSERT IGNORE, the error checking logic needs to be ammended
			//check for MYSQL sqlstate.   If it's 0000, then success, else failure
			global $connect;
			$db_insert_ignore_query_result = mysqli_query($connect,$query);
			if (mysqli_sqlstate($connect) !== "00000" || !empty(mysqli_error($connect))) {
					echo "MySQL query failed. State: ".mysqli_sqlstate($connect)."  Error: ".print_r(mysqli_error($connect),true);
					return FALSE;
			}
			return TRUE;
	}
?>
