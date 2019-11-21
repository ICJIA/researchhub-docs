---
meta:
  - name: robots
    content: noindex
---

# Project Architecture

_ICJIA Research Hub_ consists of multiple parts, or components, each built on many popular open-source projects. Together, they provide an integrated platform for publishing ICJIA R&A's research contents (as well as contributions from others).

## Main components

There are six main components of the _ICJIA Research Hub_ project:

- API server ([GitHub](https://github.com/ICJIA/researchhub-api))
- Component library ([GitHub](https://github.com/ICJIA/researchhub-lib))
- Documentation ([GitHub](https://github.com/ICJIA/researchhub-docs))
- _Research Hub_ ([GitHub](https://github.com/ICJIA/researchhub))
- _Research Hub Preview_ ([GitHub](https://github.com/ICJIA/researchhub-preview))
- _Research Hub Studio_ ([GitHub](https://github.com/ICJIA/researchhub-studio))

_Figure 1_ below provides a graphical summary of how these components relate to one another.

<div style="text-align:center">
<span class="fig-title">Figure 1. Main components</span>

![architecture diagram](/researchhub/docs/assets/img/diagram-architecture.png)

</div>

::: warning NOTE
In _Figure 1_ above, as well as in _Figure 2_ below,

- the stacked server icon indicates that a service is deployed on-premise;
- the cloud icon indicates that a service is deployed on the cloud hosting service; and
- the lock icon indicates that a service requires authentication.

:::

::: tip TIP
In _Figure 1_, "published" and "submitted" are possible values for the content status.
:::

### API server

_ICJIA Research Hub_'s API server ([GitHub](https://github.com/ICJIA/research-hub-api)) provides as a headless content management system (CMS) for _ICJIA Research Hub_ and makes its contents accessible via HTTP calls.

The API server is powered by:

- [MongoDB](https://www.mongodb.com/) for _ICJIA Research Hub_ contents database; and
- [Strapi](https://strapi.io/) for managing authentication and contents as well as handling HTTP calls from clients.

### Component library

The main purpose of the custom component library ([GitHub](https://github.com/ICJIA/researchhub-lib)) is to improve the maintainability of Vue components and a CSS stylesheet shared by three frontend apps. The shared Vue components currently include the menu toolbar, footer and content-specific components (i.e. "cards" and "views" for Apps, Articles and Datasets).

The component library is powered by the following key technologies:

- [Vue.js](https://vuejs.org/) for the JavaScript web application framework; and
- [Vuetify.js](https://vuetifyjs.com/) for Material Design UI components.

### Documentation

The current site ([GitHub](https://github.com/ICJIA/researchhub-docs)) serves as the documentation for the _ICJIA Research Hub_ project, consisting of three "Guides" intended for users, developers and content authors (ICJIA staff).

The documentation site is powered by [VuePress](https://vuepress.vuejs.org/).

### Frontend apps

_Research Hub_, _Research Hub Preview_ and _Research Hub Studio_ are main frontend apps and share a lot in common. They all send request to the API server for data and depend on a custom Vue component library for the common UI components.

All three frontend apps are powered by the following key technologies:

- [Vue.js](https://vuejs.org/) for the JavaScript web application framework; and
- [Vuetify.js](https://vuetifyjs.com/) for Material Design UI components.

#### _Research Hub_

_Research Hub_ ([GitHub](https://github.com/ICJIA/researchhub)) serves as the main graphical user interface (GUI) to public contents.

#### _Research Preview_ and _Research Studio_

Research Hub Preview ([GitHub](https://github.com/ICJIA/researchhub-studio)) and Research Hub Studio ([GitHub](https://github.com/ICJIA/researchhub-studio)) together model and streamline ICJIA's internal content publication process.

## Deployment strategy

::: warning NOTE
GitHub repository for the API server contains an older setup. The API server is currently not deployed using Docker.
:::

<div style="text-align:center">
<span class="fig-title">Figure 2. Deployment strategy</span>

![organization diagram](/researchhub/docs/assets/img/diagram-organization.png)

</div>

<FundingStatement />
