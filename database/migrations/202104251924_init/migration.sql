-- CreateEnum

CREATE TYPE "appointedCityType" AS ENUM ( 'Commune',
    'Delegated commune'
);

-- CreateTable

CREATE TABLE "townHall" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "townHall.inseeCode" VARCHAR(5) NOT NULL,
    "postcode" VARCHAR(5) NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "cityId" INTEGER,
    "additional" TEXT,
    "postbox" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "website" TEXT,
    "latitude" DECIMAL,
    "longitude" DECIMAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    PRIMARY KEY ("id")
);

-- CreateTable

CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "labelUppercase" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "delegated" BOOLEAN NOT NULL,
    "appointedCityType" "appointedCityType" NULL,
    "appointedCity.Id" INTEGER,
    "labelComplete" TEXT NOT NULL,
    "city.inseeCode" VARCHAR(5) NOT NULL,
    "postcode" VARCHAR(5) NOT NULL,
    "region" TEXT NOT NULL,
    "codeRegion" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "codeDepartment" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

-- CreateTable

CREATE TABLE "appointedCity" (
    "id" SERIAL NOT NULL,
    "ParentId" INTEGER,
    PRIMARY KEY ("id")
);

-- AddForeignKey

ALTER TABLE "townHall"
    ADD FOREIGN KEY ("cityId") REFERENCES "city" ("id") ON DELETE CASCADE ON
            UPDATE
                CASCADE;

ALTER TABLE "appointedCity"
    ADD FOREIGN KEY ("ParentId") REFERENCES "city" ("id") ON DELETE CASCADE ON
            UPDATE
                CASCADE;

ALTER TABLE "city"
    ADD FOREIGN KEY ("appointedCity.Id") REFERENCES "appointedCity" ("id") ON DELETE CASCADE ON
            UPDATE
                CASCADE;
