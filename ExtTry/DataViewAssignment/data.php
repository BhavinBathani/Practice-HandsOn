<?php
/**
 * this server file contain the array which stores information.
 * it also perform the Necessary decision making to generate response.
 */
	/*
	$data = array ("families" => array
	(
			"Gujarat"	=>	array
			(
				"id"	=>	"a",
				"name"	=>	"Ahemedabad"
			),
			"Gujarat1"	=>	array
			(	
				"id"	=> "b",
				"name"	=> "Surat"
			),
			"Gujarat2"	=> array
			(
				"id"	=> "c",
				"name"	=>	"Rajkot"
			),
			"Rajasthan"=>array
			(
				"id"	=> "d",
				"name"	=> "Jodhpur"
			),
			"Rajasthan1"	=> array
			(
				"id"	=> "e",
				"name"	=> "Udaypur"
			),
			"Rajasthan2"	=> array
			(
				"id"	=> "f",
				"name" => "Puskar"
			)			
	));
	//$data = array ("data" => $families);
	echo json_encode($data);
	*/
	
$families = array();
for ($i = 1; $i <= 10; $i++) {
    $families[] = array(
        'id' => $i,
        'name' => 'Raw data number ' . $i,
    );
}

$o = array('families' => $families);

echo json_encode($o);



	
?>