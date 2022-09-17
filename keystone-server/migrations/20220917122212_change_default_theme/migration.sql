-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Config" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "theme" TEXT NOT NULL DEFAULT 'sleek',
    "homepageFeedStyle" TEXT NOT NULL DEFAULT 'flat'
);
INSERT INTO "new_Config" ("homepageFeedStyle", "id", "theme") SELECT "homepageFeedStyle", "id", "theme" FROM "Config";
DROP TABLE "Config";
ALTER TABLE "new_Config" RENAME TO "Config";
CREATE UNIQUE INDEX "Config_theme_key" ON "Config"("theme");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
