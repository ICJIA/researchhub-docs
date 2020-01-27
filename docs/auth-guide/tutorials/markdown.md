---
meta:
  - name: robots
    content: noindex
---

# Write with Markdown

<StaffOnly />

## Introducing Markdown

[According to Wikipedia](https://en.wikipedia.org/wiki/Markdown), Markdown is "a lightweight markup language with plain text formatting syntax." It is primarily used to author Web contents and its syntax supports that of the basic HTML (HyperText Markup Language), a standard markup language for a Web documents.

### Why Markdown

HTML syntax requires any element to be enclosed by special tags. For example, a paragraph is surrounded by an opening `<p>` tag and an closing `</p>` tag. Web browsers recognize such tags in an HTML document and renders it into a page accordingly. If a content is to be published on the Web, it _has to_ be formatted in HTML.

Although the basic HTML tags are fairly straightforward and easy to learn, a document with more than the simplest structure can quickly become full of heavily nested elements. Web browsers have no problem understanding it, but we humans do.

Markdown strikes a balance between explicit structure and human readability. Its syntax has one-to-one correspondence to HTML tags, but removes nested structures, thus making it easier for us humans to compose and consume a document to be published on the Web.

### A brief comparison between HTML and Markdown

The following is the short example document formatted both in HTML and Markdown. The Markdown format is more concise and contains less visual clutter. Markdown also neatly flattens the nested structure of HTML, making the document look closer to its final rendered version.

#### HTML

```html
<h1>This is an h1 heading</h1>
<p>
  This is a paragraph containing some <em>italic font</em> and
  <strong>bold font</strong>.
</p>
<h2>This is an h2 heading</h2>
<p>
  Here is another paragraph containing
  <a href="https://url.to.be.hyperlinked">some hyperlinked text</a>.
</p>
<ul>
  <li>First item in an unordered list</li>
  <li>
    <strong>
      Second item in bold font with
      <a href="https://another.url">a hyperlink</a>
    </strong>
  </li>
</ul>
```

#### Markdown

```markdown
# This is an h1 heading

This is a paragraph containing some _italic font_ and **bold font**.

## This is an h2 heading

Here is another paragraph containing [some hyperlinked text](https://url.to.be.hyperlinked).

- First item in an unordered list
- **Second item in bold font with [a hyperlink](https://another.url)**
```

## Markdown syntax for Articles

Markdown is only used for the _body_ of each Article. Other parts of an Article item, such as the main title, abstract, category, tags, etc., are generated using the relevant field values provided in the form.

### Headings

The highest heading to use in the document for indicating sections is a `h2` heading (`##`). This is because `h1` heading is reserved for the main title, which is _not_ part of the markdown document. `h2` headings will be used to generate the table of contents in the rendered page.

Start an article with a `h2` heading (`##`) on the top. While not enforced, a default option for the first section heading is to use `## Introduction`. Omitting the section heading at the beginning will lead to a confusing table of contents.

As a general guideline, follow the hierarchy of the headings and avoid mixing heading levels (e.g. skipping `h3` heading or `###` and going from `h2` heading or `##` to `h4` heading or `####`).

### Special tags

Markdown allows you to write some HTML directly. For Aritcles, this is used to apply the proper styling (e.g. text alignment, color, etc.) to images, tables and special information blocks in the document.

#### Figures

```markdown
<div class="article-figure">

#### Figure 1.

#### Figure title here

![alt text][image_file_name_without_extension]

###### Note, source, etc.

</div>
```

- The figure item consists of enclosing HTML `<div>` tag, figure number (`h4` heading), figure title (`h4` heading), image with "alt text", file name without extension (e.g. "figure1" instead of "figure1.jpg"), and one or more additional notes (`h6` heading).
- The HTML `<div>` tag must have `class="article-figure` attribute.
- The vertical space (at least one extra line) is required between the opening `<div>` tag line and the first markdown elements.
- The "alt text" is displayed if the image fails to load or used by a screen reader for accessibility.
- Image file name must match that of the uploaded file, without the file extension such as .jpg, .png, etc. For example, if the original image is called "figure1.jpg", simply use "figure1".

#### Tables

```markdown
<div class="article-table">

#### Table 1.

#### Table title here

| column | name | here |
| ------ | :--: | ---: |
| a      |  1   |    d |
| b      |  2   |    e |
| c      |  3   |    f |

###### Note, source, etc.

</div>
```

- The table item consists of enclosing HTML `<div>` tag, table number (`h4` heading), table title (`h4` heading), table in the Markdown format and additional notes (`h6` heading).
- The HTML `<div>` tag must have `class="article-table` attribute.
- The vertical space (at least one extra line) is required between the opening `<div>` tag line and the first markdown elements.

#### Information block

```markdown
<div class="info-block">

<div class="info-block-title">Info block title</div>

Information body

</div>
```

- Information block, or info block, is to provide additional document-level information that does not have place in standard field inputs.
- A custom info block has the styling of other standard info blocks for author information, suggested citation, funding acknowledgement and related items.
- The primary use case for info block is to provide links another Articles that is part of the same series.
- _Do not use info blocks for article contents._ For such purposes, use blockquotes.

### Blockquote

Use blockquote to add a quote or a block of supplementary information. A special styling is applied to a blockquote element to distinguish it from the rest of the Article body.

A blockquote can be added using the following syntax:

```markdown
> This is a blockquote.

> And this is
> a multi-line
> blockquote.
```

If a blockquote needs a title, use `h4` heading.

```markdown
> #### Blockquote title
>
> And blockquote content goes here.
```

### Footnote

A footnote can be added using the following syntax:

```markdown
This text has a footnote.[^1]

[^1]: This is an awesome footnote.
```

While the body of each footnote item can appear anywhere in the document, all footnotes will appear on the bottom of the page in the rendered page.

## Using ICJIA Markdown Editor

[ICJIA Markdown Editor](https://markdown.icjia.cloud/) is a Web application that supports ICJIA staff for writing Markdown documents. It not only displays the rendered HTML of the Markdown in real time but also provides convenient tools to add extra formatting to the text.

In particular, ICJIA Markdown Editor has a "Research" mode to facilitate authoring an Article body. When the "Research" mode is selected, the rendered HTML will have the font and styling similar to that of _Research Hub_. Also, buttons for adding images and tables will insert not only the basic Markdown formatting but also relevant tags and elements specific to Article.

A suggested workflow is to writing your Markdown using ICJIA Markdown Editor, copy it to clipboard, and pasting it to the markdown input field in the _Research Hub Studio_ form.

<FundingStatement />
