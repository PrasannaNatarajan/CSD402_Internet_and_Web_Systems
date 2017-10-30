<?php

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "quora");

if(!@mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) || !@mysql_select_db(DB_DATABASE)){
    die(mysql_error());
}

$connect = mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE);

?>