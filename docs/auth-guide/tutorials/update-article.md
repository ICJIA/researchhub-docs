---
meta:
  - name: robots
    content: noindex
---

# Update an article

<StaffOnly />

::: tip TIP
Read [the "Update page" section on the Using Studio page](/auth-guide/studio.md#update-page) to learn what the Update page is about.
:::

## 1. Go to the Update page

When you log in, you will see three "task cards." Click on a card saying `UPDATE CONTENTS`. Alternatively, you can click `UPDATE` button on the tool bar. This will take you to the Update page.

<div style="text-align:center">
<span class="fig-title">Figure 1. Go to Update page</span>

![Go to Update page](/docs/assets/img/tutorial-update1.png)

</div>

::: tip TIP
Click the `GO TO AUTHOR GUIDE` button below the task cards to open the Author Guide on a new browser tab. (See the orange arrow in _Figure 1_.)
:::

## 2. Select the content type

The Update page allows you to edit an item of one of the three available content types. Select "Articles" and click the <i class="material-icons">navigate_next</i> button to see the list of Articles items available for making edits.

<div style="text-align:center">
<span class="fig-title">Figure 2. Select the content type</span>

![Select the content type](/docs/assets/img/tutorial-update2.png)

</div>

::: tip TIP
Click the `GO TO TUTORIAL PAGE` button below the task cards to open this tutorial page on a new browser tab. (See the orange arrow in _Figure 2_.)
:::

## 3. Select the item

The list shows date and title of each Articles item to help you to find an item to edit. If you need a visual reminder, click the <i class="material-icons">visibility</i> button to see the preview for the item.

<div style="text-align:center">
<span class="fig-title">Figure 3. Item table</span>

![Select the item, table](/docs/assets/img/tutorial-update3-table.png)

</div>

When you know which item to edit, click the <i class="material-icons">edit</i> button to select it. You will get a notice from your browser that the changed is selected. Click `OK` to close the notice.

<div style="text-align:center">
<span class="fig-title">Figure 4a. Click the <i class="material-icons">edit</i> button to select</span>

![Select the item, selected](/docs/assets/img/tutorial-update3-selected1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 4b. Item selected</span>

![Select the item, selected dialog](/docs/assets/img/tutorial-update3-selected2.png)

</div>

When an item is selected, a popup dialog will appear to confirm that the item is indeed selected. Click "OK" to close the dialog and click the <i class="material-icons">navigate_next</i> button see the input form for the Articles type.

<div style="text-align:center">
<span class="fig-title">Figure 5. Navigate to form</span>

![Select the item, navigate to form](/docs/assets/img/tutorial-update3-navigate.png)

</div>

## 4. Make changes

The form already has most of the input fields filled with the original value from the "created" item. You can edit almost any inputs except for the slug which was automatically generated from the original title and serves as the identifier for the item.

In this tutorial, the `Abstract` value is updated.

<div style="text-align:center">
<span class="fig-title">Figure 6a. Update form with original value</span>

![Make changes](/docs/assets/img/tutorial-update4-change1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 6b. Make changes</span>

![Make changes](/docs/assets/img/tutorial-update4-change2.png)

</div>

### Attachments

You can finally add file attachments to the draft in the Update form. Two types of attachments are available for an Article item: "main" and "extra."

Following the general practices, the Update form expects you to have at least one attachment file and the `Attach files?` value is set to "Yes" by default. If there is no attachment to the Article item, you may uncheck the box.

<div style="text-align:center">
<span class="fig-title">Figure 7. "Attach files?" option  </span>

![Make changes, "Attach files?" option](/docs/assets/img/tutorial-update4-file1.png)

</div>

Setting `the Attach files?` to "yes" shows additional input fields related to adding attachments: `Main file type`, `Main file` and `Extra file`.

A main file refers to either the full report of which the Article is a summary or simple the PDF version of the same content. In either case, the `Main file` input is expected to be in the PDF format.

An extra file refers to any other supplementary materials. If there are more than one file, they must be zipped into a single file and then added to the form.

In this tutorial, `Main file type` is set to "full report" and one PDF file is added to the `Main file` box.

<div style="text-align:center">
<span class="fig-title">Figure 8. Add a dummy PDF file to Main file</span>

![Make changes, add a dummy PDF file](/docs/assets/img/tutorial-update4-file2.png)

</div>

::: warning NOTE
When editing an item that already has attachments, the existing files do not appear in the Edit form. If you do not add new files, the original files will be preserved.
:::

::: warning NOTE
**Keep your files small.** To optimize the server performance, _Studio_ limits the file size. You may use free online PDF compression services such as [iLovePDF](https://www.ilovepdf.com/compress_pdf) or [PDF2Go](https://www.pdf2go.com/compress-pdf).

Recommended for `Main file` is:

- 1 MB or less in file size (max allowed is 5 MB)

Recommended for `Extra file` is:

- 1 MB or less in file size (max allowed is 10 MB)

:::

### Images

As in attachments, original images, for either `Splash` or `Figures`, do not appear in the Edit form. If you do not make any changes, the original images are preserved.

In this tutorial, a new `Splash` image is added to replace the old one for demonstration's sake.

<div style="text-align:center">
<span class="fig-title">Figure 9. Add a new Splash image</span>

![Make changes](/docs/assets/img/tutorial-update4-image.png)

</div>

::: danger WARNING
**Adding new `Figures` images will lead to the loss of _all_ original images.** If new images need to be used, either to replace existing `Figures` images or to simply add more `Figures`, you must add the entire set of images including the ones not getting updated.
:::

## 5. Save and preview changes

Once you made all the necessary changes, click the `SAVE` button on the bottom to save the changed values. This allows _Studio_ to update a preview for the item. You will get a notice from your browser that the change is saved. Click `OK` to close the notice.

<div style="text-align:center">
<span class="fig-title">Figure 10a. Save your work</span>

![Save the form](/docs/assets/img/tutorial-update5-save1.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 10b. Work is saved</span>

![Saved](/docs/assets/img/tutorial-update5-save2.png)

</div>

Click the `PREVIEW` button to see the changes as it would appear in _Research Hub_. The preview first shows the full view--you can toggle between card view and full view by clicking the `SHOW CARD`/`SHOW VIEW` button on the top right. You can close the preview by clicking the <i class="material-icons">close</i> button on the top right or pressing `<ESC>` on your keyboard.

<div style="text-align:center">
<span class="fig-title">Figure 11. See Preview dialog</span>

![Preview dialog](/docs/assets/img/tutorial-update5-preview.png)

</div>

Preview reflects the changes in the `Abstract` value and the `Splash` image. As a reminder, you may see the previous `Splash` image [here](./create-article.md#_4-save-and-preview).

::: warning NOTE
Download buttons for new file attachments do not appear on the Preview dialog for the Update form. However, you will still see them when using Preview in the Manage page.
:::

## 6. Reset

As in creating a new item, you can reset the form at any point if you need to start from the clean slate. Unlike in the create form, however, `RESET` in the Edit form means recovering the original values.

Click `RESET` button on the top right of the form and you will see the dialog box asking for confirmation. Click `RESET` again to proceed. You may click `BACK` to go back to the form and make further changes if needed.

<div style="text-align:center">
<span class="fig-title">Figure 12a. Click RESET</span>

![Submit saved](/docs/assets/img/tutorial-update6a.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 12b. See Reset dialog</span>

![Submit saved](/docs/assets/img/tutorial-update6b.png)

</div>

## 7. Submit the saved changes

Once you are ready, click the blue `UPDATE` button on the top right of the form. You will see the dialog box asking for confirmation. Click the `UPDATE` button again to proceed. You may click `BACK` to go back to the form and make further changes if needed.

If you proceed and `UPDATE`, you will get a notice from your browser that the item is updated. Click `OK` to close the notice. You will be taken back to the home page.

<div style="text-align:center">
<span class="fig-title">Figure 13a. Click UPDATE</span>

![Submit, click UPDATE](/docs/assets/img/tutorial-update7a.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 13b. See Update dialog</span>

![Submit, see Update dialog](/docs/assets/img/tutorial-update7b.png)

</div>

<div style="text-align:center">
<span class="fig-title">Figure 13c. Article is updated</span>

![Submit, Article is updated](/docs/assets/img/tutorial-update7c.png)

</div>

🎉 Congratulations! Now the Article is updated.

<FundingStatement />
