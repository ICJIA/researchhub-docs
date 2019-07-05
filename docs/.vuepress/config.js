module.exports = {
  base: "/docs/",
  title: "Research Hub",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/img/icjia-default.jpg"
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
    logo:
      "https://raw.githubusercontent.com/ICJIA/icjia-public-website/master/_themes/icjia/img/logo-icjia-small-blue-3.png",
    nav: [
      { text: "User Guide", link: "/guide/" },
      { text: "Developer Guide", link: "/dev-guide/" },
      { text: "Author Guide", link: "/auth-guide/" },
      { text: "Research Hub", link: "https://research.icjia.cloud" }
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
        "/dev-guide/api",
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
            "/auth-guide/tutorials/manage-article"
          ]
        }
      ]
    },
    repo: "vuejs/vuepress",
    repoLabel: "GitHub"
  }
};
