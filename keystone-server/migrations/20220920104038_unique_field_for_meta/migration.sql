/*
  Warnings:

  - You are about to drop the column `email` on the `Meta` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Config_theme_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "uniqueField" TEXT NOT NULL DEFAULT 'meta',
    "title" TEXT NOT NULL DEFAULT '',
    "about" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "name" TEXT NOT NULL DEFAULT '',
    "github" TEXT NOT NULL DEFAULT '',
    "twitter" TEXT NOT NULL DEFAULT '',
    "metaTitle" TEXT NOT NULL DEFAULT '',
    "metaDescription" TEXT NOT NULL DEFAULT '',
    "metaImageUrl" TEXT NOT NULL DEFAULT '',
    "metaImageAltText" TEXT NOT NULL DEFAULT '',
    "metaImageWidth" TEXT NOT NULL DEFAULT '',
    "metaImageHeight" TEXT NOT NULL DEFAULT '',
    "metaUrl" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Meta" ("about", "github", "id", "metaDescription", "metaImageAltText", "metaImageHeight", "metaImageUrl", "metaImageWidth", "metaTitle", "metaUrl", "name", "title", "twitter") SELECT "about", "github", "id", "metaDescription", "metaImageAltText", "metaImageHeight", "metaImageUrl", "metaImageWidth", "metaTitle", "metaUrl", "name", "title", "twitter" FROM "Meta";
DROP TABLE "Meta";
ALTER TABLE "new_Meta" RENAME TO "Meta";
CREATE UNIQUE INDEX "Meta_uniqueField_key" ON "Meta"("uniqueField");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
