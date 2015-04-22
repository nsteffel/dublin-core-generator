<?php 
$outputType = $_POST['outputType'];
switch($outputType)
{
case "xml": $content = $_POST['xmlresults']; break;
case "html": $content = $_POST['htmlresults']; break;
case "xhtml": $content = $_POST['xhtmlresults']; break;
}
$file = "generated/metadata" . date("mjY_His") . ".txt"; 
$Saved_File = fopen($file, 'w'); 
fwrite($Saved_File, $content); 
fclose($Saved_File); 
header("Cache-Control: public");
header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=$file");
header("Content-Type: text/plain");
header("Content-Transfer-Encoding: binary");
readfile($file);
?>