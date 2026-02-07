module.exports = function (eleventyConfig) {
  // Copy static folders/files straight through to _site
  eleventyConfig.addPassthroughCopy({ "src/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Enable manual excerpts in front matter parsing
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });

  // Copy styles.css to the root of the output directory
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });


  return {
    dir: { input: "src", output: "_site" }
  };
};
