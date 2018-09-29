<?php
/**
 * this server file contain the array which stores information related the user.
 * it also perform the Necessary calculations to generate response.
 */
	$userDetail = array
	(
		"bhavin" => array
		(
			"userName" => "bhavin",
			"passWord" => "bhavin",
		),
		"xyz" => array
		(
			"userName" => "xyz",
			"passWord" => "xyz",
		),
		"abc" => array
		(
			"userName" => "abc",
			"passWord" => "abc",
		),
	);	

	if( array_key_exists($_POST["user"], $userDetail ) ){// checking that userID is exist or not
    	if( $userDetail[$_POST["user"]]["passWord"] == $_POST["pass"]) { //check for password match
			$dateAge = $_POST["date"]."-".$_POST["month"]."-".$_POST["year"];
			$diffPara1 = date_create($dateAge);
			
			$dateDOB = $_POST["date"]."-".$_POST["month"]."-".date('Y');
			$diffPara1DOB = date_create($dateDOB);
			$intervalDOB = date_diff($diffPara1DOB,date_create("now"));
			
			if( date_create("now") < $diffPara1DOB ){ // check that b'day is passed or not for current year
				echo $intervalDOB->format('your next birthday is after %m months %d days<br />');
			} else {
				echo $intervalDOB->format('your last birthday was before %m months %d days<br />');
			}
			
			$interval = date_diff($diffPara1,date_create("now"));		
			echo $interval->format('your age is : '.'%y years %m months %d days');
			echo '<br />'."IP address : ".$_SERVER['SERVER_ADDR'];
			echo '<br />'."GATEWAY_INTERFACE : ".$_SERVER['GATEWAY_INTERFACE'];
			echo '<br />'."SERVER_NAME : ".$_SERVER['SERVER_NAME'];
			echo '<br />'."REQUEST_METHOD : ".$_SERVER['REQUEST_METHOD'];
			echo '<br />'."HTTP_CONNECTION : ".$_SERVER['HTTP_CONNECTION' ];
			echo '<br />'."REQUEST_TIME : ".$_SERVER['REQUEST_TIME'];
			echo '<br />'."PHP_SELF : ".$_SERVER['PHP_SELF'];
			echo '<br />'."SERVER_SOFTWARE : ".$_SERVER['SERVER_SOFTWARE'];
		} else {
			echo 'username or password not matched';
		}
	} else {
		echo 'username or password not matched';
	}
?>