module.exports = {
  base: "/researchhub/docs/",
  title: "Research Hub",
  description: "Documentation site for ICJIA Research Hub.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/icjia-default.jpg"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  ],
  themeConfig: {
    logo: "/assets/icjia-logo.png",
    nav: [
      { text: "User Guide", link: "/guide/" },
      { text: "Developer Guide", link: "/dev-guide/" },
      { text: "Research Hub", link: "https://icjia.illinois.gov/researchhub" }
    ],
    sidebar: {
      "/guide/": [
        "/guide/",
        {
          title: "Contents",
          children: ["/guide/apps", "/guide/articles", "/guide/datasets"]
        },
        "/guide/faq"
      ],
      "/dev-guide/": [
        "/dev-guide/",
        "/dev-guide/architecture",
        {
          title: "Contributing",
          children: [
            "/dev-guide/contributing/code_of_conduct",
            "/dev-guide/contributing/codebase",
            "/dev-guide/contributing/contents"
          ]
        },
        "/dev-guide/schema"
      ],
      "/auth-guide": [
        "/auth-guide/",
        "/auth-guide/workflow",
        "/auth-guide/studio",
        {
          title: "Tutorials",
          children: [
            "/auth-guide/tutorials/create-article",
            "/auth-guide/tutorials/update-article",
            "/auth-guide/tutorials/manage-article",
            "/auth-guide/tutorials/markdown"
          ]
        }
      ]
    },
    repo: "icjia/icjia-research-docs",
    repoLabel: "GitHub"
  }
};
