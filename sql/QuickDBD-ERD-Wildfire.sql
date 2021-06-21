-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Wildfire

CREATE TABLE "wildfire_data_final" (
    "Fire_Size" int   NOT NULL,
    "Fire_Size_Class" varchar(1)   NOT NULL,
    "Fire_Cause" varchar   NOT NULL,
    "Latitude" int   NOT NULL,
    "Longitude" int   NOT NULL,
    "State" varchar(2)   NOT NULL,
    "Discovery_Month" int   NOT NULL,
    "Discovery_Date" date   NOT NULL,
    "Discovery_Year" int   NOT NULL,
    "Vegetation" varchar   NOT NULL,
    "Fire_Magnitude" int   NOT NULL,
    "Temp_Pre_30" int   NOT NULL,
    "Temp_Pre_15" int   NOT NULL,
    "Temp_Pre_7" int   NOT NULL,
    "Temp_Present" int   NOT NULL,
    "Wind_Pre_30" int   NOT NULL,
    "Wind_Pre_15" int   NOT NULL,
    "Wind_Pre_7" int   NOT NULL,
    "Wind_Present" int   NOT NULL,
    "Hum_Pre_30" int   NOT NULL,
    "Hum_Pre_15" int   NOT NULL,
    "Hum_Pre_7" int   NOT NULL,
    "Hum_Present" int   NOT NULL,
    "Prec_Pre_30" int   NOT NULL,
    "Prec_Pre_15" int   NOT NULL,
    "Prec_Pre_7" int   NOT NULL,
    "Prec_Present" int   NOT NULL,
    CONSTRAINT "pk_wildfire_data_final" PRIMARY KEY (
        "Latitude","Longitude"
     )
);

CREATE TABLE "county_latlong" (
    "index" int   NOT NULL,
    "Longitude" int   NOT NULL,
    "Latitude" int   NOT NULL,
    "County" varchar   NOT NULL,
    CONSTRAINT "pk_county_latlong" PRIMARY KEY (
        "Longitude","Latitude"
     )
);

ALTER TABLE "wildfire_data_final" ADD CONSTRAINT "fk_wildfire_data_final_Latitude_Longitude" FOREIGN KEY("Latitude", "Longitude")
REFERENCES "county_latlong" ("Latitude", "Longitude");

