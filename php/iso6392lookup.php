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
	$fetch = mysql_query("SELECT * FROM iso639lookup where RefName like '%" . mysql_real_escape_string($_GET['term']) . "%' and ID6392t<>''"); 

	/* Retrieve and store in array the results of the query.*/
	while ($row = mysql_fetch_array($fetch, MYSQL_ASSOC)) {
		$row_array['label'] = $row['RefName'];
		$row_array['value'] = $row['ID6392t'];

        array_push($return_arr,$row_array);
    }
}
/* Free connection resources. */
mysql_close($conn);

/* Toss back results as json encoded array. */
echo json_encode($return_arr);


?>
