<?php 
$block = $_GET['block'];
$arrBlock = explode(':', $block);
if (count($arrBlock)<2){
	exit('Wrong Format To Show The File!');
} else {
	$file = __DIR__ . '/' . $arrBlock[0] . '/_self/' . $arrBlock[1] . '.html';
	if (!file_exists($file)) {
		exit ('File Not Exists:' . $file);
	} else {
		$foldername = $arrBlock[0];
		$filename	= $arrBlock[1];
		$content = file_get_contents($file);
		$content = str_replace('__FOLDER__', $foldername, $content);
		$content = str_replace('__FILE__', $filename, $content);
		echo $content;
	}
}
?>