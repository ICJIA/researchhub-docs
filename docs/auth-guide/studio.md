---
meta:
  - name: robots
    content: noindex
---

# Using _Studio_

<StaffOnly />

## About _Studio_

_Research Hub Studio_ ([https://research.icjia.cloud/studio/](https://research.icjia.cloud/studio/)) is the central tool for the content management and publication workflow supported by the _ICJIA Research Hub_ project. Using _Research Hub Studio_, you, Author, can not only create new contents but also manage them throughout the whole publication process.

::: tip TIP
See [the Workflow page](workflow.md) for more on the publication process supported by _ICJIA Research Hub_.
:::

### "What you see is what you get"

_Research Hub Studio_ allows you, Author, to preview the content at any stage of the publication process at any time--even before pressing that `CREATE` button for a new item. Therefore, you can always be sure that what they see is what they get at the end of the publication process.

### Authenticated users only

All features of _Research Hub Studio_ are available to authenticated users only. If you need to use _Research Hub Studio_, please contact your supervisor in the R&A Unit or IT Team to obtain account information.

<div style="text-align:center">
<span class="fig-title">Figure 1. Login page</span>

![workflow diagram](/docs/assets/img/login.png)

</div>

### Supported tasks

_Research Hub Studio_ supports three main tasks: Create, Update and Manage. Each task has a corresponding page on _Research Hub Studio_ that provides necessary features to complete the task.

<div style="text-align:center">
<span class="fig-title">Figure 2. Home page</span>

![Research Hub Studio home page](/docs/assets/img/home.png)

</div>

## Create page

Here you, Author, generate a new content item, thus initiating the publication process. It supports creating all three content types: Apps, Articles, and Datasets.

### Creating a new item

::: tip TIP
See [this tutorial page](tutorials/create-article.md) on creating a new article.
:::

::: warning NOTE
Uploading attachment files, e.g. PDFs for Articles and CSV files for Datasets, is _not_ available in the Create page. To add attachments, you must first create an item without attachments, and edit it in [the Update page](#update-page).
:::

::: warning NOTE
Be mindful of the size of images you use. Large images may lead to failure to create an item. Here are some suggestions:

- Resize a `splash` image so that the it is no larger than 1,200 pixels horizontally.
- Use free image compression services to optimize image size. (Recommended: [TinyPNG](https://tinypng.com/))
- In general, keep the size under 200KB for an Article `splash` image, and 25KB for others.
  :::

#### Fill out the form

You first need to choose the content type of the new item. Then you can click the <i class="material-icons">navigate_next</i> button on the right to process to filling out the form. Once you filled out the form, you must save the form by clicking the `SAVE` button on the bottom to use that information.

#### Reset the form

If you want to start it over with a clean slate, click the `RESET` button on the top right of the form and the form will be reset.

#### Preview the item

Once saved, the item is available for a preview. Click the `PREVIEW` button next to the `SAVE` button to see the item preview. Click the <i class="material-icons">close</i> button on the top left to close the preview. You can also toggle between "full view" and "card view" by clicking the `SHOW VIEW` or `SHOW CARD` button placed next to the <i class="material-icons">close</i> button.

#### Create the item

If the saved item as shown in the preview looks as expected, you may proceed to actually create it by clicking the `CREATE` button on the top right of the form (next to `RESET`). A popup dialog will appear asking for your confirmation. Click `CREATE` again to proceed.

## Update page

Update page allows you, Author, to make changes to any item of the "created" status.

### Updating a created item

::: tip TIP
See [this tutorial page](tutorials/update-article.md) on updating an article.
:::

::: warning NOTE
Downloading attachment files is _not_ available in the _Research Hub Studio_ previews. To test file downloads, use _Research Hub Preview_ links.
:::

#### Select an item to update

As in [the Create page](#create-page), start with selecting the content type and clicking the <i class="material-icons">navigate_next</i> button on the right. You will then find a table of all "created" items of the select content type.

You can select an item to update by clicking the <i class="material-icons">edit</i> button on the right. Also, you can preview any item in the table by clicking the <i class="material-icons">visibility</i> button. Once you have selected an item to update, you can proceed to updating by clicking the <i class="material-icons">navigate_next</i> button on the right to the table.

#### Make and save the changes

The update form looks identical to the create form except that the text-based fields are already filled with the exiting values. For non-text fields such as images and file attachments, the original values are used even thought they do not show up in the form.

To make updates, change the values and click `SAVE`. Click the `PREVIEW` button next to the `SAVE` button to preview the changes.

Once you are done with making changes to the item, proceed to apply the changes by clicking the `UPDATE` button on the top right of the form. As before, a popup dialog will appear asking for your confirmation. Click `UPDATE` again to proceed.

## Manage page

In the Manage page, you, Author, can change the status of any existing item or even delete it if needed.

### Managing the item status

::: tip TIP
See [this tutorial page](tutorials/manage-article.md) on managing an article.
:::

#### Select the content type and status

Again, start with selecting the content type and clicking the <i class="material-icons">navigate_next</i> button on the right. You will see a table of items of the select content type. On the top left of the table, you will also find status options: "published", "submitted", and "created."

::: danger WARNING
Any "action" on an item takes effect immediately unless it fails. **Be extra careful when you delete any "created" item because deleting an item _cannot_ be undone!**
:::

#### Manage "created" items

Three actions are available for each "created" item:

- <i class="material-icons">visibility</i> Preview the item
  - Click the `SHOW CARD` button on the top to switch to a card view. To return to the full view, click the `SHOW VIEW` button at the same location.
  - Click the <i class="material-icons">close</i> button on the top right to close the preview window.
- <i class="material-icons">check</i> Submit the item (change the status to "submitted")
  - Submitting an item will show a popup box on the top displaying the preview URL for the item and reload the table.
- <i class="material-icons" style="color:red;">delete_forever</i> Delete the item
  - Deleting an item cannot be undone! A popup box will appear on the top to ask for confirmation.

#### Manage "submitted" items

Three actions are available for each "submitted" item:

- <i class="material-icons">visibility</i> Preview the item.
  - Click the blue `PREVIEW LINK` button on the top to see the item on _Research Hub Preview_.
  - Click the `SHOW CARD` button on the top to switch to a card view. To return to the full view, click the `SHOW VIEW` button at the same location.
  - Click the <i class="material-icons">close</i> button on the top right to close the preview window.
- <i class="material-icons">check</i> Publish the item (change the status to "published")
  - Publishing an item will show a popup box on the top displaying the public URL for the item and reload the table.
- <i class="material-icons">close</i> Un-submit the item (change the status to "created")

#### Manage "published" items

For regular Author, only one action is available for each "published" item:

- <i class="material-icons">visibility</i> Preview the item.
  - Click the blue `PUBLIC LINK` button on the top to see the item on _Research Hub_.
  - Click the `SHOW CARD` button on the top to switch to a card view. To return to the full view, click the `SHOW VIEW` button at the same location.
  - Click the <i class="material-icons">close</i> button on the top right to close the preview window.
