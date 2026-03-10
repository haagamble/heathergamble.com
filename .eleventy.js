const { DateTime } = require("luxon");

const TAG_LABELS = {
  ai: "AI",
};

function getVisibleTags(tags = []) {
  return tags.filter((tag) => tag !== "diary");
}

function formatTag(tag = "") {
  return TAG_LABELS[tag] || tag.replace(/(^|-)([a-z])/g, (_, prefix, letter) => `${prefix}${letter.toUpperCase()}`);
}

module.exports = function (eleventyConfig) {
  // Copy static folders/files straight through to _site
  eleventyConfig.addPassthroughCopy({ "src/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Enable manual excerpts in front matter parsing
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

  // Copy styles.css to the root of the output directory
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "LLLL d, yyyy",
    );
  });

  eleventyConfig.addFilter("learningDay", function (date) {
    const start = new Date("2026-01-15");
    const current = new Date(date);

    const diff = current - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return days + 1;
  });

  eleventyConfig.addFilter("visibleTags", (tags) => getVisibleTags(tags || []));
  eleventyConfig.addFilter("formatTag", (tag) => formatTag(tag));

  eleventyConfig.addCollection("articles", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("article")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi.getFilteredByTag("project").sort((a, b) => {
      const aOrder = typeof a.data.order === "number" ? a.data.order : 999;
      const bOrder = typeof b.data.order === "number" ? b.data.order : 999;
      return aOrder - bOrder;
    });
  });

  eleventyConfig.addCollection("diaryTags", (collectionApi) => {
    const tags = new Set();

    collectionApi.getFilteredByTag("diary").forEach((item) => {
      getVisibleTags(item.data.tags || []).forEach((tag) => tags.add(tag));
    });

    return Array.from(tags).sort((a, b) => formatTag(a).localeCompare(formatTag(b)));
  });

  return {
    dir: { input: "src", output: "_site" },
  };
};