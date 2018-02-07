<?php

header("Content-Type: application/json");

//Google Maps Geocoding and Google Maps Place Search Restful API:


//Errs Off
error_reporting(0);


//Get URI encoded data

$city = urlencode(htmlspecialchars(trim($_REQUEST['city'])));
$type = urlencode(htmlspecialchars(trim($_REQUEST['type'])));
$keyword = urlencode(htmlspecialchars(trim($_REQUEST['keyword'])));


$KEY = "AIzaSyADnVTOd-MxHJTR03SgjeXWerzyLadxltg";

//Get geocode of city by Google Geocode API
 
$geoCodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=".$city
				."&key=".$KEY."&location";
$getGeoCodeJson = file_get_contents($geoCodeUrl);
$geoCodeJson = json_decode($getGeoCodeJson);

//Get Longitudes and Latitudes

$lat = $geoCodeJson->results[0]->geometry->location->lat;
$lng = $geoCodeJson->results[0]->geometry->location->lng;

//echo $lat.",".$lng;

//Get Hotels list by sending Geocodes to Google Place Search API

$mapsUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=".$lat.",".$lng."&radius=30000&type=".$type."&keyword=".$keyword."&key=".$KEY;

$getArea = file_get_contents($mapsUrl);

$areaJson = json_encode($getArea);

// JSON Output

echo $areaJson; 


