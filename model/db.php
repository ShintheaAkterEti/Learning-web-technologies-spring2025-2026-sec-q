<?php
$host = "127.0.0.1";
$dbuser = "root";
$dbname = "webtech";
$dbpass = "";

function getConnection(){
    global $host, $dbuser, $dbpass, $dbname;
    return mysqli_connect($host, $dbuser, $dbpass, $dbname);
}
?>