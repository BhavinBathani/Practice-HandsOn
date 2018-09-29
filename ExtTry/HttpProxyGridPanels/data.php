<?php

$families = array();
for ($i = 1; $i <= 10; $i++) {
    $families[] = array(
        'id' => $i,
        'name' => 'data number ' . $i,
    );
}

$o = array('families' => $families);

echo json_encode($o);

?>