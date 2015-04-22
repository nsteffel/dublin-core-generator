<?php

	//connection information
	$dbhost = "localhost";
	$dbuser = "jquery";
	$dbpass = "dcg12Jquery";
	$dbname = "lookups";

$conn = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql');
mysql_select_db($dbname);

$return_arr = array();

/* If connection to database, run sql statement. */
if ($conn)
{
	mysql_query("set names 'utf8'");
	$fetch = mysql_query("SELECT * FROM iso3166lookup where countryname like '%" . mysql_real_escape_string($_GET['term']) . "%'"); 

	/* Retrieve and store in array the results of the query.*/
	while ($row = mysql_fetch_array($fetch, MYSQL_ASSOC)) {
		$row_array['label'] = $row['countryname'];
		$row_array['value'] = $row['countrycode'];

        array_push($return_arr,$row_array);
    }
}
/* Free connection resources. */
mysql_close($conn);

/* Toss back results as json encoded array. */
echo json_encode($return_arr);


?>