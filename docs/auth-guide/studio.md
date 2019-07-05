---
meta:
  - name: robots
    content: noindex
---

# Using _Studio_

::: warning NOTE
This page of the documentation is intended for the internal ICJIA staff.
:::

## About _Research Hub Studio_

_Research Hub Studio_ ([https://research.icjia.cloud/studio/](https://research.icjia.cloud/studio/)) is the central tool for the content management and publication workflow supported by the _ICJIA Research Hub_ project. Using _Research Hub Studio_, you, Author, can not only create new contents but also manage them throughout the whole publication process.

::: tip TIP
See [the Workflow page](workflow.md) for more on the publication process supported by _ICJIA Resesarch Hub_.
:::

### "What you see is what you get"

_Research Hub Studio_ allows you, Author, to preview the content at any stage of the publication process at any time--even before pressing that `CREATE` button for a new item. Therefore, you can always be sure that what they see is what they get at the end of the publication process.

### Authenticated users only

All features of _Research Hub Studio_ are available to authenticated users only. If you need to use _Research Hub Studio_, please contact your supervisor in the R&A Unit or IT Team to obtain account information.

### Supported tasks

_Research Hub Studio_ supports three main tasks: Create, Update and Manage. Each task has a corresponding page on _Research Hub Studio_ that provides necessary features to complete the task.

#### Figure: _Research Hub Studio_ home page

![Research Hub Studio home page]()

## Create page

Here you, Author, generate a new content item, thus initiating the publication process. It supports creating all three content types: Apps, Articles, and Datasets.

### Creating a new item

::: tip TIP
See [this tutorial page](tutorials/create-article.md) on creating a new article.
:::

#### Fill out the form

You first need to choose the content type of the new item. Then you can click the <i class="material-icons">navigate_next</i> button on the right to process to filling out the form. Once you filled out the form, you must save the form by clicking the `SAVE` button on the bottom to use that information.

#### Reset the form

If you want to start it over with a clean slate, click the `RESET` button and the form will be reset.

#### Preview the item

Once saved, the item is available for a preview. Click the `PREVIEW` button next to the `SAVE` button to see the item preview. Click the <i class="material-icons">close</i> button on the top left to close the preview. You can also toggle between "card view" and "full view" by clicking the `SHOW CARD` or `SHOW VIEW` button placed next to the <i class="material-icons">close</i> button.

#### Create the item

If the saved item as shown in the preview looks as expected, you may proceed to actually create it by clicking the `CREATE` button on the top right of the form. A popup dialog will appear asking for your confirmation. Click `CREATE` again to proceed.

## Update page

Update page allows you, Author, to make changes to any item of the "created" status.

### Updating a created item

::: tip TIP
See [this tutorial page](tutorials/update-article.md) on updating an article.
:::

#### Select an item to update

As in the Create page, start with selecting the content type and clicking the <i class="material-icons">navigate_next</i> button on the right. You will then find a table of all "created" items of the select content type.

You can select an item to update by clicking the <i class="material-icons">edit</i> button on the right. Also, you can preview any item in the table by clicking the <i class="material-icons">visibility</i> button. Once you have selected an item to update, you can proceed to updating by clicking the <i class="material-icons">navigate_next</i> button on the right to the table.

#### Make and save the changes

The update form looks identical to the create form except that the fields are already filled with the exiting values. To make updates, change the values and click `SAVE`. Click the `PREVIEW` button next to the `SAVE` button to preview the changes.

Once you are done with makig changes to the item, proceed to apply the changes by clicking the `CREATE` button. As before, a popup dialog will appear asking for your confirmation. Click `CREATE` again to proceed.

## Manage page

In the Manage page, you, Author, can change the status of any existing item or even delete it if needed.

### Managing the item status

::: tip TIP
See [this tutorial page](tutorials/manage-article.md) on managing an article.
:::

#### Select the content type and status

Again, start with selecting the content type and clicking the <i class="material-icons">navigate_next</i> button on the right. You will see a table of items of the select content type. On the top left of the table, you will also find status options: published, submitted, and created.

#### Manage "created" items

Three actions are available for each "created" item:

- <i class="material-icons">visibility</i> Preview the item
- <i class="material-icons">check</i> Submit the item (change the status to "submitted")
  - Submitting an item will show a popup displaying the preview URL for the item and reload the table.
- <i class="material-icons" style="color:red;">delete_forever</i> Delete the item

#### Manage "submitted" items

Three actions are available for each "submitted" item:

- <i class="material-icons">visibility</i> Preview the item.
  - Click the `PREVIEW LINK` button on the top right to see the item on _Research Hub Preview_.
- <i class="material-icons">check</i> Publish the item (change the status to "published")
  - Publishing an item will show a popup displaying the public URL for the item and reload the table.
- <i class="material-icons">close</i> Un-submit the item (change the status to "created")

#### Manage "published" items

Two actions are available for each "published" item:

- <i class="material-icons">visibility</i> Preview the item.
  - Click the `PUBLIC LINK` button on the top right to see the item on _Research Hub_.
- <i class="material-icons">close</i> Unpublish the item (change the status to "submitted")
  - Unpublishing an item will show a popup displaying the preview URL for the item and reload the table.

::: warning WARNING
Any "action" on an item takes effect immediately. **Be extra careful when you delete any "created" item since it cannot be redone!**
:::
