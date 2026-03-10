const articleMeta = {
  "eclectic-language-learning": {
    navTitle: "Eclectic Language Learning",
    section: "Start Here",
  },
  "using-flashcards": {
    navTitle: "Using Flashcards",
    section: "Practical Techniques",
  },
  "using-a-photo-book-for-language-learning": {
    navTitle: "Using a Photo Book for Language Learning",
    section: "Practical Techniques",
  },
  "substitution-drills": {
    navTitle: "Substitution Drills",
    section: "Practical Techniques",
  },
  "reading-signs": {
    navTitle: "Reading Signs",
    section: "Learning from Everyday Life",
  },
  glue: {
    navTitle: "Glue",
    section: "Ideas / Concepts",
  },
};

module.exports = {
  permalink: (data) => `/articles/${data.page.fileSlug}/`,
  eleventyComputed: {
    navTitle: (data) => articleMeta[data.page.fileSlug]?.navTitle ?? data.title,
    section: (data) => articleMeta[data.page.fileSlug]?.section ?? "Articles",
  },
};