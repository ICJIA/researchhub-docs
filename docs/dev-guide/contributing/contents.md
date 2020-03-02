---
title: Contents
meta:
  - name: robots
    content: noindex
---

<AlertCOVID />

# Contents

<InDevelop />

::: warning NOTE
**Currently, _ICJIA Research Hub_ only accepts content submissions from select contributors.** We are working on establishing an internal protocol to accept submissions from the general public.
:::

To serve as a "Hub" for research on criminal justice in Illinois, _ICJIA Research Hub_ accepts external contributions for Apps, Articles and Datasets.

By contributing your work to _ICJIA Research Hub_, you not only help _ICJIA Research Hub_ to become a truly comprehensive library of criminal justice research in Illinois but also find a broader audience for your own work.

For any content submission to be considered for publication, it must be about criminal justice in Illinois and related subjects. Also, it must include information on a set of required and optional fields to be considered. Please read below for what the relevant fields are for each content type.

Once you have your materials ready, please submit it to [research@icjia.cloud](mailto:research@icjia.cloud) with the subject line "CONTRIBUTION: `<content-type>`" where `<content-type>` is either Apps, Articles or Datasets.

## Apps

You can submit web applications that explores and analyzes criminal justice data. An Apps submission must be self-hosted and available online to be considered a valid submission to _Research Hub_.

### Apps fields

The required fields for an Apps submission are as follows (those prefixed by "?" are optional):

- Title
- URL for the Apps submission
- Information on each contributor
  - Name of person or institution
  - ?URL
  - ?Short description
- Description
- Suggested category(ies): `corrections`, `courts`, `crimes`, `law enforcement`, or `other`
- ?Suggested tags (recommended 3; max 5)
- ?Suggested citation
- ?Funding acknowledgement

## Articles

You can submit research articles and publications on criminal justice in the State of Illinois. An Articles submission must be a summary of key findings and implications of a published research work to be considered a valid submission to _Research Hub_.

Also, the body of the Articles submission must be a separate file in Markdown format.

::: warning NOTE
If you are making an Articles submission, you are highly encouraged to also make a Dataset submission with data used for analysis in the Articles submission.
:::

### Articles fields

The required fields for an Articles submission are as follows (those prefixed by "?" are optional):

- Title
- URL for the Articles submission
- Information on each contributor
  - Name of person or institution
  - ?URL
  - ?Short description
- Abstract (max 250 words)
- Article body file in the Markdown format
  - Minimum 4 paragraphs, maximum 10 paragraphs
  - Maximum 2 figures (PNG or JPG)
- Suggested category(ies): `corrections`, `courts`, `crimes`, `law enforcement`, or `other`
- ?Suggested tags (recommended 3; max 5)
- ?Suggested citation
- ?Funding information

### Articles markdown format

_Research Hub_ uses markdown for Articles body.

Section titles use level-2 heading (`##`) and subsection titles use level-3 heading (`###`). Also note the custom templates for including figures and tables as shown in the following:

```md
## This is a section title

An article must start with a section unless it has no section at all.

If the first section title is missing, it will be "Introduction" by default.[^1]

[^1]: This is a footnote.

### This is a subsection title

Use the following template for including a figure:

<div class="article-figure">

#### Figure 1

#### Title of this figure

![alt text][filename]

###### Additional note (data source, etc.)

</div>

Use the following template for including a table:

<div class="article-table">

#### Table 1

#### Title of this table

| column | names | here   |
| ------ | ----- | ------ |
| put    | value | here   |
| for    | each  | column |

###### Additional note (data source, etc.)

</div>
```

::: tip TIP
For more on basic markdown syntax, please refer to [this article](https://www.markdownguide.org/basic-syntax) or [this cheat sheet](https://www.markdownguide.org/cheat-sheet/) by _Markdown Guide_.
:::

## Datasets

You can submit datasets that provide information on criminal justice and related areas. A Datasets submission must be a single file in the comma separated value (CSV) format to be considered a valid submission to _Research Hub_.

### Datasets fields

The required fields for an Datasets submission are as follows (those prefixed by "?" are optional):

- Title
- Information on each contributor
  - Name of person or institution
  - ?URL
  - ?Short description
- Description
- Data file in the CSV format
  - Maximum size ??? MB
  - If larger, you may provide a link for download
- Suggested category(ies): `corrections`, `courts`, `crimes`, `law enforcement`, or `other`
- ?Suggested tags (recommended 3; max 5)
- ?Time period
  - Min year (yyyy)
  - Max year (yyyy)
  - Year type: `calendar`, `fiscal-federal`, or `fiscal-Illinois`
- ?Age group: `all`, `adult`, `juvenile`
- ?Unit of analysis: `national`, `state`, `county`, `municipal`, or `other`
- ?Notes
- ?Suggested citation
- ?Funding acknowledgement
- Variables information
  - Name
  - Type: `int` (integer), `str` (string/text), `float` (real number), or `bool` (true/false)
  - Definition
  - ?Possible values

### Variables information example

| name        | type  | definition              | values                  |
| ----------- | ----- | ----------------------- | ----------------------- |
| year        | int   | Data year               | Between 2000 and 2019   |
| county      | str   | County name             | Illinois county         |
| cook        | bool  | Is Cook county?         | 1 for true, 0 for false |
| arrest      | int   | Arrest count            | Non-negative            |
| arrest_rate | float | Arrest rate per 100,000 | Non-negative            |

<FundingStatement />
