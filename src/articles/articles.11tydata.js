const articleMeta = {
  "eclectic-language-learning": {
    navTitle: "Eclectic Language Learning",
  },
  "using-flashcards": {
    navTitle: "Using Flashcards",
  },
  "using-a-photo-book-for-language-learning": {
    navTitle: "Using a Photo Book for Language Learning",
  },
  "substitution-drills": {
    navTitle: "Substitution Drills",
  },
  "reading-signs": {
    navTitle: "Reading Signs",
  },
  glue: {
    navTitle: "Glue",
  },
};

module.exports = {
  permalink: (data) => `/articles/${data.page.fileSlug}/`,
  eleventyComputed: {
    navTitle: (data) => data.navTitle ?? articleMeta[data.page.fileSlug]?.navTitle ?? data.title,
    section: (data) => data.section ?? "Articles",
  },
};
