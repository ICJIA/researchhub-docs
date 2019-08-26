---
meta:
  - name: robots
    content: noindex
---

# Create a new article

<StaffOnly />

::: tip TIP
Read [the "Create page" section on the Using Studio page](../studio.md#create-page) to learn what the Create page is about.
:::

## 1. Go to Create page

When you log in, you will see three "task cards." Click on a card saying `CREATE CONTENTS`. Alternatively, you can click `CREATE` button on the tool bar. This will take you to the Create page.

<div style="text-align:center">
<span class="fig-title">Figure 1. Go to Create page</span>

![Go to Create page](/docs/assets/img/tutorial-create1.png)

</div>

## 2. Select the content type

The Create page allows you to author an item of one of the three available content types. Select "Articles" and click the <i class="material-icons">navigate_next</i> button to see the input form for the Articles type.

<div style="text-align:center">
<span class="fig-title">Figure 2. Select the content type</span>

![Select the content type](/docs/assets/img/tutorial-create2.png)

</div>

## 3. Fill out the form

The Articles form has many fields for you to fill out and looks like the following:

<div style="text-align:center">
<span class="fig-title">Figure 3. Article form</span>

![Fill out the form A](/docs/assets/img/tutorial-create3a.png)

</div>

Start filling out the fields. While some of the fields are optional, many including `Title`, `Categories`, `Authors`, and `Abstract` are required.

<div style="text-align:center">
<span class="fig-title">Figure 4. Fill out the form</span>

![Fill out the form B](/docs/assets/img/tutorial-create3b.png)

</div>

### Tags (optional)

When you are filling out the `Tags` field, consider choosing from the existing tags. Click the <i class="material-icons">zoom_in</i> button next to the tags input field to see the options. Select tags by checking the boxes and click `USE` button to add them to `Tags` field.

<div style="text-align:center">
<span class="fig-title">Figure 5a. Click the <i class="material-icons">zoom_in</i> button</span>

![Fill out the form, tags 1](/docs/assets/img/tutorial-create3-tags1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 5b. Select tags to use</span>

![Fill out the form, tags 2](/docs/assets/img/tutorial-create3-tags2.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 5c. Selected tags appear in the field</span>

![Fill out the form, tags 3](/docs/assets/img/tutorial-create3-tags3.png)

</div>

If the existing tags are not sufficient, simply type in more tags to use. Tags must be seperated by a comma.

<div style="text-align:center">
<span class="fig-title">Figure 6. Type in a new tag</span>

![Fill out the form, tags 3](/docs/assets/img/tutorial-create3-tags4.png)

</div>

::: warning NOTE
**The recommended number of `Tags` is two or three.** Whenever possible, use a single word for each tag. Limit the number of tags to five.

Keep it mind that the main function of `Tags` is to complement the Article's title, which should be sufficiently informative on its own and can be used in search.
:::

### Authors

As in `Tags`, first consider choosing from the existing authors of published Articles to avoid creating duplicated values with minor differences. Click the <i class="material-icons">zoom_in</i> button next to the authors input field to see the options. Select authors by checking the boxes and click the `USE` button to add them to `Authors` field.

<div style="text-align:center">
<span class="fig-title">Figure 7a. Click the <i class="material-icons">zoom_in</i> button</span>

![Fill out the form, authors](/docs/assets/img/tutorial-create3-authors1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 7b. Select authors to use</span>

![Fill out the form, authors](/docs/assets/img/tutorial-create3-authors2.png)

</div>

Clicking the `USE` button only copies over the names. You still need to provide a one-paragraph description for each author. **Please keep the description concise and up-to-date.** Two to three sentences on each author's current position, affiliation, and domain of expertise will do.

Please note that the format requires you to:

- Separate name from description using the vertical bar or "pipe" symbol (`|`). Press `<Shift> + \` to get the pipe symbol. Backslash (`\`) is usually found above the `<Enter>` key and below the `Backspace` key.
- Seperate authors using new lines (press `<Enter>`).

<div style="text-align:center">
<span class="fig-title">Figure 8a. Selected authors appear in the field</span>

![Fill out the form, authors](/docs/assets/img/tutorial-create3-authors3.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 8b. Type in descriptions</span>

![Fill out the form, authors](/docs/assets/img/tutorial-create3-authors4.png)

</div>

::: danger WARNING
**Do not use different names for the same author** unless the name has officially changed. Avoid adding or removing middle name, using different letters, or making any changes that deviates from the existing spelling.

Also, **do not include titles for the name value**. Titles such as Dr. and Ph.D. should only be used in the author's description.
:::

### Splash image and figures

`Splash` is required while `Figures` may be added as needed. Only one image is allowed for `Splash`.

To add an image, you can either "drag and drop" an image to the appropriate box or click the box to find your file by browsing the file explorer window. A thumbnail of the added image will appear in the box when successfully uploaded.

<div style="text-align:center">
<span class="fig-title">Figure 9a. Adding a Splash image with drag and drop</span>

![Fill out the form, images 1](/docs/assets/img/tutorial-create3-images1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 9b. Adding a Splash image via file explorer</span>

![Fill out the form, images 2](/docs/assets/img/tutorial-create3-images2.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 9c. A Splash image is added</span>

![Fill out the form, images 3](/docs/assets/img/tutorial-create3-images3.png)

</div>

You can add `Figures` in the same way. Multiple images are allowed for `Figures`.

This tutorial is adding two image files, "barchart.png" and "linechart.jpg."

<div style="text-align:center">
<span class="fig-title">Figure 10. Figures images are added</span>

![Fill out the form, images 4](/docs/assets/img/tutorial-create3-images4.png)

</div>

While image file name is irrelevant for `Splash`, file names for `Figures` inputs are important as they are used as indicators when writing the markdown document. See [the "Special tags" section in the "Write with Markdown" page](./markdown.md#special-tags) for more on this.

::: warning NOTE
**Keep your images small.** To optimize the server performance, _Studio_ limits the image size. You may use free online image compression services such as [TinyPNG](https://tinypng.com/).

Recommended for `Splash` is:

- 150 KB or less in file size (max allowed is 500 KB)
- 1260 pixels or less in the horizontal demension

Recommended for _each_ `Figure` is:

- 25 KB or less in file size (max allowed is 100 KB)
- 900 pixels or less in the horizontal demension

:::

::: tip TIP
Use simple file names for Figures, such as "figure1.png", "figure2.jpg" and so on. This will help you to remember which image goes where in your article.
:::

### Markdown

Fill in the the grey text area for the Article body using the Markdown syntax. You will see the rendered text with some basic styles will appear on the right of the text area. Alternatively, use [ICJIA Markdown Editor](https://markdown.icjia.cloud/) to put together the Markdown text and copy/past it here.

<div style="text-align:center">
<span class="fig-title">Figure 11. Fill out the markdown input</span>

![Fill out the form, markdown](/docs/assets/img/tutorial-create3-markdown.png)

</div>

<details>
  <summary><strong>To see the full markdown for the tutorial article, click here.</strong></summary>

```markdown
## Introduction

Welcome to this tutorial on creating an Article item.[^1] In this tutorial, you learn how to

- fill out the forms
- add images
- and more!

## Adding images

To render images with proper styles, you have to surround them with a special HTML tag.

Here are examples:

<div class="article-figure">

#### Figure 1.

#### My bar chart

![My bar chart][barchart]

</div>

<div class="article-figure">

#### Figure 2.

#### My bar chart

![My line chart][linechart]

###### Note: You can add note like this.

</div>

## Adding tables

As in images, tables also have a special HTML tag to give proper styles.

<div class="article-table">
	
#### Table 1.
#### My table
	
| Hello | ICJIA | R&A | authors |
| --- | --- | --- | --- |
| Look | at | this | table |
| What | an | awesome | table |
| Eeny | meeny | miny | moe |

###### Source: N/A

</div>

## Blockquotes

> Blockquote has a special styling as well.

## Conclusion

Thank you for reading along this tutorial!

[^1]: This article is written for instructional purposes only.
```

</details>

::: warning NOTE
While the "HTML preview" on this page or the ICJIA Markdown Editor can give you a clue as to how the final article will look like, you should not rely on either preview. Instead, use them only as a guide. You will be able to see the full preview with the `PREVIEW` button as described below.
:::

::: tip TIP
Read [the Write with Markdown page](markdown.md) to learn more about Markdown and its syntax for authoring _Research Hub_ Articles.
:::

### Suggested citation and funding acknowledgement (optional)

You can add suggested citation and funding acknowledgment to the current Article item. If specified, they will appear at the bottom of the article body with proper styles.

<div style="text-align:center">
<span class="fig-title">Figure 12. Fill out suggested ciation and funding acknowledgement</span>

![Fill out the form, suggested citation and funding acknowledgement](/docs/assets/img/tutorial-create3-citation-funding.png)

</div>

### Related items (optional)

You can create links to published Apps or Datasets items that are related to the current Article. If created, they will appear at the bottom of the article body with proper styles.

<div style="text-align:center">
<span class="fig-title">Figure 12a. Choose from published Apps</span>

![Fill out the form, related](/docs/assets/img/tutorial-create3-related1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 12b. Selected item appear in the field</span>

![Fill out the form, related](/docs/assets/img/tutorial-create3-related2.png)

</div>

Note that "created" or "submitted" items are not available as options to choose from. However, the created link is two-way, which means that once the draft is published, the link will appear in the target item as well.

## 4. Save and preview

Once you filled out all the required fields, click the `SAVE` button on the bottom to save the values. This allows _Studio_ to generate a preview for the item. You will get a notice from your browser that the change is saved. Click `OK` to close the notice.

<div style="text-align:center">
<span class="fig-title">Figure 13a. Save your work</span>

![Save the form](/docs/assets/img/tutorial-create4-save1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 13b. Work is saved</span>

![Saved](/docs/assets/img/tutorial-create4-save2.png)

</div>

Once the item is saved, you can click the `PREVIEW` button to see the rendered item just as it would appear in _Research Hub_. The preview first shows the full view--you can toggle between card view and full view by clicking the `SHOW CARD`/`SHOW VIEW` button on the top right. You can close the preview by clicking the <i class="material-icons">close</i> button on the top right or pressing `<ESC>` on your keyboard.

<div style="text-align:center">
<span class="fig-title">Figure 14a. Preview is now enabled</span>

![Preview enabled](/docs/assets/img/tutorial-create4-preview1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 14b. See Preview dialog</span>

![Preview dialog](/docs/assets/img/tutorial-create4-preview2.png)

</div>

::: warning NOTE
A preview generated by _Studio_ does not offer the full functionalities of the published item. For example, clicking the `MORE` button on the card view or the `BACK` button on the full view will not work.
:::

::: danger WARNING
**Do not click the back button on your browser to return to the form.** This will instead take you to a previous page you were on (e.g. the home page) and the saved inputs will be lost!

To properly close the preview and return to the form, click the <i class="material-icons">close</i> button on the top right.
:::

## 5. Reset

If for whatever reason you need to start from the clean slate, you can reset the form at any point. Click `RESET` button on the top right of the form and you will see the dialog box asking for confirmation. Click `RESET` againto proceed. You may click `BACK` to go back to the form and make futher changes if needed.

<div style="text-align:center">
<span class="fig-title">Figure 16a. Click RESET</span>

![Submit saved](/docs/assets/img/tutorial-create5a.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 16b. See Reset dialog</span>

![Submit saved](/docs/assets/img/tutorial-create5b.png)

</div>

## 6. Submit

Once you are ready, click the blue `CREATE` button on the top right of the form. You will see the dialog box asking for confirmation. Click the `CREATE` button again to proceeed. You may click `BACK` to go back to the form and make futher changes if needed.

If you proceed and `CREATE`, you will get a notice from your browser that the new item is created. Click `OK` to close the notice. You will be taken back to the home page.

<div style="text-align:center">
<span class="fig-title">Figure 16a. Click CREATE</span>

![Submit, click CREATE](/docs/assets/img/tutorial-create6a.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 16b. See Create dialog</span>

![Submit, see Create dialog](/docs/assets/img/tutorial-create6b.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 16c. Article is created</span>

![Submit, Article is created](/docs/assets/img/tutorial-create6c.png)

</div>

:tada: Congratulations! Now the Article is created.
