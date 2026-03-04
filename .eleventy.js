const { DateTime } = require("luxon");

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

  return {
    dir: { input: "src", output: "_site" },
  };
};
