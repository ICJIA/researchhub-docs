---
meta:
  - name: robots
    content: noindex
---

# Data Schema

<InDevelop />

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
|    title     |   string    | Title of the item                 | e.g. "This is an app"                                                            |
|    status    |   string    | Status in the publication process | "created," "submitted," or "published"                                           |
|   external   |   boolean   | Is an external contribution?      | `true` or `false`                                                                |
|     slug     |   string    | Slug for the item URL             | e.g. "this-is-an-app"                                                            |
|     date     |    date     | Date created or updated           | e.g. "2019-01-01"                                                                |
| cateogories  |    json     | Relevant categories               | "corrections," "courts," "crimes," "law enforcement," "victimization" or "other" |
|     tags     |    json     | Relevant tags                     |                                                                                  |
| contributors |    json     | Contributors' title and URL       | e.g. `[ { "title": "Jane Doe", "url": "https://janedoe.com" } ]`                 |
|    image     |   string    | Image in Base64                   |                                                                                  |
| description  |   string    | A short description of the item   |                                                                                  |
|     url      |   string    | URL for the item                  |                                                                                  |
|   citation   |   string    | Suggested citation                |                                                                                  |
|   funding    |   string    | Funding acknowledgement           |                                                                                  |
|   articles   |  relations  | Related Article items if any      |                                                                                  |
|   datasets   |  relations  | Related Dataset items if any      |                                                                                  |

### Apps in JSON

```json
{
  "title": "",
  "status": "",
  "external": false,
  "slug": "",
  "date": "",
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
  "citation": "",
  "funding": "",
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
|    title     |   string    | Title of Article item             | e.g. "This is an article"                                                                    |
|    status    |   string    | Status in the publication process | "created," "submitted," or "published"                                                       |
|   external   |   boolean   | Is an external contribution?      | `true` or `false`                                                                            |
|     slug     |   string    | Slug for Article item URL         | e.g. "this-is-an-article"                                                                    |
|     date     |    date     | Date created or updated           | e.g. "2019-01-01"                                                                            |
| cateogories  |    json     | Relevant categories               | "corrections," "courts," "crimes," "law enforcement," "victimization" or "other"             |
|     tags     |    json     | Relevant tags                     |                                                                                              |
|   authors    |    json     | Authors' title and description    | e.g. `[ { "title": "Jane Doe", "description": "Jane Doe is a Research Analyst at ICJIA" } ]` |
|    splash    |   string    | Splash image in Base64            |                                                                                              |
|  thumbnail   |   string    | thumbnail image in Base64         |                                                                                              |
|    images    |    json     | Article figures in Base64         |                                                                                              |
|   abstract   |   string    | Article abstract                  |                                                                                              |
|   markdown   |    text     | Article body in markdown          |                                                                                              |
|   citation   |   string    | Suggested citation                |                                                                                              |
|     doi      |   string    | Article digital object identifier |                                                                                              |
|   funding    |   string    | Funding acknowledgement           |                                                                                              |
| mainfiletype |   string    | Type of the main atttachment      | "full report", "pdf version"                                                                 |
|   mainfile   |   uploads   | Main attachment file              | e.g. a PDF version of an article                                                             |
|  extrafile   |   uploads   | Extra attachment files            | e.g. a zipfile of appendix materials                                                         |
|     apps     |  relations  | Related App items if any          |                                                                                              |
|   datasets   |  relations  | Related Dataset items if any      |                                                                                              |

### Articles in JSON

```json
{
  "title": "",
  "status": "",
  "external": false,
  "slug": "",
  "date": "",
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
  "citation": "",
  "doi": "",
  "funding": "",
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
|    title    |   string    | Title of Dataset item             | e.g. "This is a dataset"                                                         |
|   status    |   string    | Status in the publication process | "created," "submitted" or "published"                                            |
|  external   |   boolean   | Is an external contribution?      | `true` or `false`                                                                |
|    slug     |   string    | Slug for Dataset item URL         | e.g. "this-is-a-dataset"                                                         |
|    date     |    date     | Date created or updated           | e.g. "2019-01-01"                                                                |
| cateogories |    json     | Relevant categories               | "corrections," "courts," "crimes," "law enforcement," "victimization" or "other" |
|    tags     |    json     | Relevant tags                     | -                                                                                |
|   project   |   boolean   | Is project specific?              | `true` or `false`                                                                |
|   sources   |    json     | Dataset sources' title and URL    | -                                                                                |
|    unit     |   string    | Unit of observation               | "state," "county," "individual," or "other"                                      |
| timeperiod  |    json     | Time period                       | e.g. `{ "yeartype": "calendar", "yearmin": "2009", "yearmax": "2019" }`          |
| description |   string    | Short description of Dataset item | -                                                                                |
|    notes    |    json     | Caveats, warnings, etc.           | -                                                                                |
|  variables  |    json     | Variables information             | -                                                                                |
|  citation   |   string    | Suggested citation                |                                                                                  |
|   funding   |   string    | Funding acknowledgement           |                                                                                  |
|  datafile   |   uploads   | Data file (zipped if needed)      | -                                                                                |
|    apps     |  relations  | Related App items if any          | -                                                                                |
|   authors   |  relations  | Related Dataset items if any      | -                                                                                |

### Datasets in JSON

```json
{
  "title": "",
  "status": "",
  "external": false,
  "slug": "",
  "date": "",
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
  "citation": "",
  "funding": "",
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
