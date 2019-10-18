---
meta:
  - name: robots
    content: noindex
---

# Overview

Welcome to _ICJIA Research Hub_ Developer Guide!

This guide is meant for developers and other curious citizens who are interested in technical details of the _ICJIA Research Hub_ project and making contributions to it.

## Contents

You will find in this Guide:

- Overview: Current page.
- [Project Architecture](architecture.md): Explanation for the _ICJIA Research Hub_ project architecture.
- Contributing
  - [Code of Conduct](contributing/code_of_conduct.md): Code of conduct for contributors.
  - [Codebase](contributing/codebase.md): Guide for contributing to the project's codebase.
  - [Contents](contributing/contents.md): Guide for contributing to the project's contents.
- [API Reference](api.md): Reference for the _ICJIA Research Hub_ API.
- [Data Schema](schema.md): Explanation for the _ICJIA Research Hub_ data schema.

## Contributing to _ICJIA Research Hub_

::: warning NOTE
The _ICJIA Research Hub_ project and everyone participating in it is governed by a shared Code of Conduct found [here](contributing/code_of_conduct.md). By participating, you are expected to uphold this code.
:::

We appreciate your interest in contributing to _ICJIA Research Hub_! :heart_eyes:

_ICJIA Research Hub_ aspires to be an open-source project that allows you as a member of the public to shape it to best reflect your interests and concerns and improve your user experience. In that spirit, we ask for your contributions to the _ICJIA Research Hub_ project, either to its codebase or contents.

## Running locally

You can run its individual elements locally on your workstation. In order to replicate the full _ICJIA Research Hub_ experience, however, you will have to setup proxying for frontend apps.

### _Research Hub_ (also _Studio_ or _Preview_)

The following example is for the _Research Hub_ main app. Change the repo name for _Research Hub Studio_ and _Research Hub Preview_ apps.

::: warning NOTE
All three apps expects the API server to be running to access content data and user information.
:::

```sh
# clone source repo
git clone https://github.com/ICJIA/icjia-research.git

# change directory
cd icjia-research

# install node modules
npm install

# serve for development
npm run serve

# Build for production.
npm run build
```

### API server

::: warning NOTE
GitHub repository for the API server contains an older setup. The API server is currently not deployed using Docker. However, you can still use it for local development.
:::

::: tip TIP
Refer to [the Docker Compose documentation](https://docs.docker.com/compose/) for more options.
:::

```sh
# clone source repo
git clone https://github.com/ICJIA/icjia-research-api.git

# change directory
cd icjia-research-api

# bring up compose
docker-compose up
```

### Documentation

```sh
# clone source repo
git clone https://github.com/ICJIA/icjia-research-docs.git

# change directory
cd icjia-research-docs

# install node modules
npm install

# serve for writing
npm run docs:dev

# build to static files.
npm run docs:build
```

<FundingStatement />
