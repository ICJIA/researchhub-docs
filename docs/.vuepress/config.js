module.exports = {
  base: "/",
  title: "Research Hub",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/img/icjia-default.jpg"
      }
    ]
  ],
  themeConfig: {
    logo: "/assets/img/icjia-default.jpg",
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
          collapsable: false,
          children: ["/guide/apps", "/guide/articles", "/guide/datasets"]
        },
        "/guide/faq"
      ],
      "/dev-guide/": [
        "/dev-guide/",
        "/dev-guide/architecture",
        {
          title: "Contributing",
          collapsable: false,
          children: [
            "/dev-guide/contributing",
            "/dev-guide/contributing-code",
            "/dev-guide/contributing-content"
          ]
        },
        "/dev-guide/api",
        "/dev-guide/schema"
      ],
      "/auth-guide": [
        "/auth-guide/",
        "/auth-guide/workflow",
        "/auth-guide/studio"
      ]
    },
    repo: "vuejs/vuepress",
    repoLabel: "GitHub"
  }
};
