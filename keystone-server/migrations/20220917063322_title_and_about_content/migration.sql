-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL DEFAULT '',
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
INSERT INTO "new_Meta" ("email", "github", "id", "metaDescription", "metaImageAltText", "metaImageHeight", "metaImageUrl", "metaImageWidth", "metaTitle", "metaUrl", "name", "twitter") SELECT "email", "github", "id", "metaDescription", "metaImageAltText", "metaImageHeight", "metaImageUrl", "metaImageWidth", "metaTitle", "metaUrl", "name", "twitter" FROM "Meta";
DROP TABLE "Meta";
ALTER TABLE "new_Meta" RENAME TO "Meta";
CREATE UNIQUE INDEX "Meta_email_key" ON "Meta"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
