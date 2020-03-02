---
title: Data Schema
meta:
  - name: robots
    content: noindex
---

<AlertCOVID />

# Data Schema

_ICJIA Research Hub_ has the following four content types:

- [Apps](#apps)
- [Articles](#articles)
- [Datasets](#datasets)

Each of these content types have common fields as well as content-specific fields.

::: warning NOTE
The "strapi type" in the fields tables below refers to "attribute types" offered by Strapi. See the full list of [here](https://strapi.io/documentation/3.x.x/guides/models.html#define-the-attributes). Also see [here](https://strapi.io/documentation/3.x.x/guides/models.html#relations) for more on the "relations" type and [here](https://strapi.io/documentation/3.x.x/guides/upload.html#usage) for more on uploaded files ("files" type in tables below).
:::

## Apps

### Apps fields

|    field     | strapi type | definition                        | values                                                                           |
| :----------: | :---------: | --------------------------------- | -------------------------------------------------------------------------------- |
|    status    |   string    | Status in the publication process | "created," "submitted," or "published"                                           |
|    title     |   string    | Title of the item                 | e.g. "This is an app"                                                            |
|     slug     |   string    | Slug for the item URL             | e.g. "this-is-an-app"                                                            |
|     date     |    date     | Date created or updated           | e.g. "2019-01-01"                                                                |
|   external   |   boolean   | Is an external contribution?      | `true` or `false`                                                                |
|  categories  |    json     | Relevant categories               | "corrections," "courts," "crimes," "law enforcement," "victimization" or "other" |
|     tags     |    json     | Relevant tags                     |                                                                                  |
| contributors |    json     | Contributors' title and URL       | e.g. `[ { "title": "Jane Doe", "url": "https://janedoe.com" } ]`                 |
|    image     |   string    | Image in Base64                   |                                                                                  |
| description  |   string    | A short description of the item   |                                                                                  |
|     url      |   string    | URL for the item                  |                                                                                  |
|   funding    |   string    | Funding acknowledgement           |                                                                                  |
|   citation   |   string    | Suggested citation                |                                                                                  |
|   articles   |  relations  | Related Article items if any      |                                                                                  |
|   datasets   |  relations  | Related Dataset items if any      |                                                                                  |

### Apps in JSON

```json
{
  "status": "",
  "title": "",
  "slug": "",
  "date": "",
  "external": false,
  "categories": [""],
  "tags": [""],
  "image": "",
  "contributors": [
    {
      "title": "",
      "url": ""
    }
  ],
  "description": "",
  "url": "",
  "funding": "",
  "citation": "",
  "articles": [
    {
      "...": "..."
    }
  ],
  "datasets": [
    {
      "...": "..."
    }
  ]
}
```

## Articles

### Articles fields

|    field     | strapi type | definition                        | values                                                                                       |
| :----------: | :---------: | --------------------------------- | -------------------------------------------------------------------------------------------- |
|    status    |   string    | Status in the publication process | "created," "submitted," or "published"                                                       |
|    title     |   string    | Title of Article item             | e.g. "This is an article"                                                                    |
|     slug     |   string    | Slug for Article item URL         | e.g. "this-is-an-article"                                                                    |
|     date     |    date     | Date created or updated           | e.g. "2019-01-01"                                                                            |
|   external   |   boolean   | Is an external contribution?      | `true` or `false`                                                                            |
|  categories  |    json     | Relevant categories               | "corrections," "courts," "crimes," "law enforcement," "victimization" or "other"             |
|     tags     |    json     | Relevant tags                     |                                                                                              |
|   authors    |    json     | Authors' title and description    | e.g. `[ { "title": "Jane Doe", "description": "Jane Doe is a Research Analyst at ICJIA" } ]` |
|    splash    |   string    | Splash image in Base64            |                                                                                              |
|  thumbnail   |   string    | thumbnail image in Base64         |                                                                                              |
|    images    |    json     | Article figures in Base64         |                                                                                              |
|   abstract   |   string    | Article abstract                  |                                                                                              |
|   markdown   |    text     | Article body in markdown          |                                                                                              |
|   funding    |   string    | Funding acknowledgement           |                                                                                              |
|   citation   |   string    | Suggested citation                |                                                                                              |
|     doi      |   string    | Article digital object identifier |                                                                                              |
| mainfiletype |   string    | Type of the main attachment       | "full report", "pdf version"                                                                 |
|   mainfile   |   uploads   | Main attachment file              | e.g. a PDF version of an article                                                             |
|  extrafile   |   uploads   | Extra attachment files            | e.g. a zipfile of appendix materials                                                         |
|     apps     |  relations  | Related App items if any          |                                                                                              |
|   datasets   |  relations  | Related Dataset items if any      |                                                                                              |

### Articles in JSON

```json
{
  "status": "",
  "title": "",
  "slug": "",
  "date": "",
  "external": false,
  "categories": [""],
  "tags": [""],
  "authors": [
    {
      "title": "",
      "description": ""
    }
  ],
  "splash": "",
  "thumbnail": "",
  "images": [
    {
      "title": "",
      "src": ""
    }
  ],
  "abstract": "",
  "markdown": "",
  "funding": "",
  "citation": "",
  "doi": "",
  "mainfiletype": "",
  "mainfile": {
    "...": "..."
  },
  "extrafile": {
    "...": "..."
  },
  "apps": [
    {
      "...": "..."
    }
  ],
  "datasets": [
    {
      "...": "..."
    }
  ]
}
```

## Datasets

### Datasets fields

|    field    | strapi type | definition                        | values                                                                           |
| :---------: | :---------: | --------------------------------- | -------------------------------------------------------------------------------- |
|   status    |   string    | Status in the publication process | "created," "submitted" or "published"                                            |
|    title    |   string    | Title of Dataset item             | e.g. "This is a dataset"                                                         |
|    slug     |   string    | Slug for Dataset item URL         | e.g. "this-is-a-dataset"                                                         |
|    date     |    date     | Date created or updated           | e.g. "2019-01-01"                                                                |
|  external   |   boolean   | Is an external contribution?      | `true` or `false`                                                                |
| categories  |    json     | Relevant categories               | "corrections," "courts," "crimes," "law enforcement," "victimization" or "other" |
|    tags     |    json     | Relevant tags                     | -                                                                                |
|   project   |   boolean   | Is project specific?              | `true` or `false`                                                                |
|   sources   |    json     | Dataset sources' title and URL    | -                                                                                |
|    unit     |   string    | Unit of observation               | "state," "county," "individual," or "other"                                      |
| timeperiod  |    json     | Time period                       | e.g. `{ "yeartype": "calendar", "yearmin": "2009", "yearmax": "2019" }`          |
| description |   string    | Short description of Dataset item | -                                                                                |
|    notes    |    json     | Caveats, warnings, etc.           | -                                                                                |
|  variables  |    json     | Variables information             | -                                                                                |
|   funding   |   string    | Funding acknowledgement           |                                                                                  |
|  citation   |   string    | Suggested citation                |                                                                                  |
|  datafile   |   uploads   | Data file (zipped if needed)      | -                                                                                |
|    apps     |  relations  | Related App items if any          | -                                                                                |
|   authors   |  relations  | Related Dataset items if any      | -                                                                                |

### Datasets in JSON

```json
{
  "status": "",
  "title": "",
  "slug": "",
  "date": "",
  "external": false,
  "categories": [""],
  "tags": [""],
  "project": false,
  "sources": [
    {
      "title": "",
      "url": ""
    }
  ],
  "unit": "",
  "timeperiod": {
    "yeartype": "",
    "yearmin": "",
    "yearmax": ""
  },
  "description": "",
  "notes": [""],
  "variables": [
    {
      "title": "",
      "type": "",
      "definition": "",
      "values": ""
    }
  ],
  "funding": "",
  "citation": "",
  "datafile": {
    "...": "..."
  },
  "apps": [
    {
      "...": "..."
    }
  ],
  "articles": [
    {
      "...": "..."
    }
  ]
}
```

<FundingStatement />
