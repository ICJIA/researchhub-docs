---
meta:
  - name: robots
    content: noindex
---

# Overview

<StaffOnly />

This guide is meant for ICJIA staff members who author and manage contents on _ICJIA Research Hub_.

## Contents

You will find in this Guide:

- Overview: Current page.
- [Workflow](workflow.md): A detailed description of the new workflow supported by _ICJIA Research Hub_.
- [Using Studio](studio.md): A closer look into _Research Hub Studio_ for content management and publication.

## Better authoring experience

One of the key objectives of the _ICJIA Research Hub_ project is to improve the process of content publication and management for the ICJIA Research and Analysis (R&A) Unit.

To that end, the _ICJIA Research Hub_ project provides an architecture that seamlessly integrates the authoring, reviewing and publishing phases of the content management process. The new _Research Hub Studio_ app allows the R&A authors to draft new contents and manage existing content as well as their publication status. The _Research Hub Preview_ app generates temporary URLs for contents ready for reviews and comments.

With _ICJIA Research Hub_, the R&A authors can be in charge of their own contents and work independently of the IT team throughout the process. The _Studio_ and _Preview_ apps provide authors with instant feedbacks on their contents and empower them to make updates without any unnecesary delay.

::: tip TIP
See [the Project Architecture page](/dev-guide/architecture.md) of the Developer Guide for more on different components of _ICJIA Research Hub_ and how they relate to one another.
:::

## Improved content type system

Prior to the _ICJIA Research Hub_ project, articles were generally considered to be the main publication type. More recently, however, the R&A Unit began to publish contents that cannot be easily categorized as articles such as interactive dashboard and "continuum" pages.

Meanwhile, a collection of datasets maintained by the R&A Unit did not have a proper user interface to provide relevant metadata. Each dataset was also not in the machine-friendly format often expected in modern data analysis practices.

To address these issues, _ICJIA Research Hub_ implements a new content type system.

### _ICJIA Research Hub_ content types

_ICJIA Research Hub_ defines and implements three clearly distinguished content types for all research publications: Apps, Articles and Datasets.

- Apps type is for any research publication that offers meaningful user interactions.
- Articles type is for traditioanl research publications that are intended to be read.
- Datasets type is for data files that can be download and used for analysis.

These content types are not superficial distinctions. In fact, they are deeply integrated into the _ICJIA Research Hub_ platform as a whole, in terms of not only how the contents are displayed in public but also how they are authored and managed internally.

There are three main implications:

1. A clear seperation of interactive and static contents. That is, all interactive components should be standalone Apps items instead of somehow embedeed in an Article item.
2. Each content type is now associated with a clearly defined set of fields, whose values are explicitly standardized when needed.
3. Relations across content types can be explicitly specified. This can support a more comprehensive publication package without jamming everything into a single entry. (For example, a research report (Articles type) accompanied with a dataset used in analysis (Datasets type) and a dashboard for exploring the dataset interactively (Apps type).)

::: tip TIP
See [the Data Schema page](/dev-guide/schema.md) in Developer Guide for more on the content type specification.
:::

<FundingStatement />
