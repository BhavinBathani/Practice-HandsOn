<?php 
$con = mysql_connect("localhost","root","") or die("could not establish connection to server");
mysql_select_db("extjs_php",$con) or die("could not find database");
$SQL = "SELECT * FROM tbl_test"; //ORDER BY test_id LIMIT ".(isset($_POST['start']) ? $_POST['start'] : "0" ).", ".(isset($_POST['limit']) ? $_POST['limit'] : "1" ).")
$result_set = mysql_query($SQL,$con) or die("problem in executiong query");
$total = mysql_num_rows($result_set);
$data = array();
$cnt = 0;
while($row = mysql_fetch_array($result_set)){
	$data[$cnt]['test_id'] = $row['test_id'];
	$data[$cnt]['test_name'] = $row['test_name'];
	$data[$cnt]['test_contact'] = $row['test_contact'];
	$cnt++;
}
echo json_encode($data);
?>