module.exports = function (eleventyConfig) {
  // Copy static folders/files straight through to _site
  eleventyConfig.addPassthroughCopy({ "src/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Enable manual excerpts in front matter parsing
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });

  return {
    dir: { input: "src", output: "_site" }
  };
};
