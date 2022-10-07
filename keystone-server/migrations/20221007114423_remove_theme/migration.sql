/*
  Warnings:

  - You are about to drop the column `theme` on the `Config` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Config" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "uniqueField" TEXT NOT NULL DEFAULT 'config',
    "homepageFeedStyle" TEXT NOT NULL DEFAULT 'flat'
);
INSERT INTO "new_Config" ("homepageFeedStyle", "id", "uniqueField") SELECT "homepageFeedStyle", "id", "uniqueField" FROM "Config";
DROP TABLE "Config";
ALTER TABLE "new_Config" RENAME TO "Config";
CREATE UNIQUE INDEX "Config_uniqueField_key" ON "Config"("uniqueField");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
