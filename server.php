<?php

  $host = "localhost";
  $username = "root";
  $password = "";
  $db = "country_details";

  $conn = mysqli_connect($host, $username, $password, $db);
  $sql = "SELECT * FROM country_list";
  $results = mysqli_query($conn, $sql);
  $json_array = array();

  while ($data = mysqli_fetch_assoc($results)) {
    $json_array[] = $data;
  }

  echo json_encode($json_array);
?>