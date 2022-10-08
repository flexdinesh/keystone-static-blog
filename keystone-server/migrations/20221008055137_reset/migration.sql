-- CreateTable
CREATE TABLE "Config" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "uniqueField" TEXT NOT NULL DEFAULT 'config',
    "homepageFeedStyle" TEXT NOT NULL DEFAULT 'flat'
);

-- CreateTable
CREATE TABLE "Meta" (
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

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "status" TEXT DEFAULT 'draft',
    "category" TEXT,
    "publishDate" DATETIME,
    "metaDescription" TEXT NOT NULL DEFAULT '',
    "metaImageUrl" TEXT NOT NULL DEFAULT '',
    "metaImageAltText" TEXT NOT NULL DEFAULT '',
    "metaImageWidth" TEXT NOT NULL DEFAULT '',
    "metaImageHeight" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    CONSTRAINT "Post_category_fkey" FOREIGN KEY ("category") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL DEFAULT '',
    "status" TEXT DEFAULT 'published',
    "category" TEXT,
    "publishDate" DATETIME,
    CONSTRAINT "Link_category_fkey" FOREIGN KEY ("category") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'blog'
);

-- CreateIndex
CREATE UNIQUE INDEX "Config_uniqueField_key" ON "Config"("uniqueField");

-- CreateIndex
CREATE UNIQUE INDEX "Meta_uniqueField_key" ON "Meta"("uniqueField");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE INDEX "Post_category_idx" ON "Post"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Link_url_key" ON "Link"("url");

-- CreateIndex
CREATE INDEX "Link_category_idx" ON "Link"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
