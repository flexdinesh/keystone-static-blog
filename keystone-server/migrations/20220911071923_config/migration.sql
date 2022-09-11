-- CreateTable
CREATE TABLE "Config" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "theme" TEXT NOT NULL DEFAULT 'default',
    "homepageFeedStyle" TEXT NOT NULL DEFAULT 'flat'
);

-- CreateIndex
CREATE UNIQUE INDEX "Config_theme_key" ON "Config"("theme");
