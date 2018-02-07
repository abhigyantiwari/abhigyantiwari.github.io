<?php

$photoRef = $_REQUEST['photoRef'];

$API = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=".$photoRef."&key=AIzaSyADnVTOd-MxHJTR03SgjeXWerzyLadxltg";
header("Content-type: image/jpeg");
readfile($API);
