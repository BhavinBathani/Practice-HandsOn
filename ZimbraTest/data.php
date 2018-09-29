<?php
/**
 * this server file contain the array which stores information.
 * it also perform the Necessary decision making to generate response.
 */
	$families = array
	(
		"India"=>array
		(
			"Gujarat"=>array
			(
				"Ahemedabad",
				"Baroda",
				"Surat",
				"Rajkot"
			),
			"Rajasthan"=>array
			(
				"Jodhpur",
				"Udaypur",
				"Puskar"
			),
			"Maharashtra"=>array
			(
				"Mumbai",
				"Nagpur",
				"Pune"
			),
			
		),
		"USA"=>array
		(
			"Nevada"=>array
			(
				"Wellington",
				"LasVegas",
				"Henderson"
			),
			"California"=>array
			(
				"SantaRosa",
				"SanFrancisco",
				"SanDiego"
			),
			"Ohio"=>array
			(
				"Dayton",
				"Lancaster",
				"Canton"
			),
		),
		"UK"=>array
		(
			"London"=>array
			(
				"Kingston",
				"Watford",
				"Wembley"
			),
			"Birmingham"=>array
			(
				"Hollywood",
				"Dudely",
				"Rubery"
			),
			"Manchester"=>array
			(
				"Salford",
				"Prestwich",
				"Swinton"
			),
			)
	);
	
	if($_GET["requestFor"] == "getCountry") { //identifying the request to response accordingly
		$temp = array_keys($families);
		//$tmp = implode(',',$temp);		
		echo json_encode($temp);
	}
	else if($_GET["requestFor"] == "getState")
	{
		$country=$_GET["country"];
		$subtemp = array_keys($families[$country]);
		//$subtmp = implode(',',$subtemp);
		echo json_encode($subtemp);
	}
	else if($_GET["requestFor"] == "getCity")
	{
		$country=$_GET["country"];
		$state=$_GET["state"];
		$subtemp = array_values($families[$country][$state]);
		//$subtmp = implode(',',$subtemp);
		echo json_encode($subtemp);
	}
?>