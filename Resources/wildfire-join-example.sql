select * from wildfire_data_final;


Select "county_latlong"."Latitude",
	"county_latlong"."Longitude",
	"county_latlong"."County"
Into "join_county"
From "county_latlong"
Inner Join "wildfire_data_final"
On "county_latlong"."Latitude" = "wildfire_data_final"."Latitude" AND
"county_latlong"."Longitude" = "wildfire_data_final"."Longitude";

SELECT * FROM join_county;