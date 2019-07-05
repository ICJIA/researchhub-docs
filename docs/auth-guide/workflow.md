---
meta:
  - name: robots
    content: noindex
---

# Workflow

::: warning NOTE
This page of the documentation is intended for the internal ICJIA staff.
:::

_ICJIA Research Hub_ supports a particular workflow that is modeled after and seeks to improve the R&A Unit's real-world publication process. This workflow assumes that the content is ready to be published although this assumption is not necessarily required.

## Reminder: The old process

The old process for publication (or web posting) can be described as the following steps:

1. Content is ready for publication
2. Author puts together and sends the "publication package" to IT Team via email
3. IT Team creates a post based on the "publication package"
4. IT Team generates a temporary URL for previewing the content and share it with Stakeholders (Author, Unit Director, etc.)
5. Stakeholders see the preview content (draft link) and provide IT Team with feedback
6. IT Team makes changes based on feedback and notify Stakeholders
7. Stakeholders review the changes
   - If more changes are needed, go back to step 5
8. Unit Director approves the content and notifies IT Team of the deicision
9. IT Team publishes the content and share the public URL

### Drawback of the old process

One major drawback of the old process is that the R&A Unit must depend on another entity, i.e. IT Team, throughout the publication process. This dependency proved to be a critical bottleneck for at least the following two reasons.

First, authors had to wait until the preview URL is created and _only then_ could see what the content would actually look like. This prevented authors from fixing minor mistakes before the content was reviewed by others.

Second, making changes to the content was largely the reponsibility of IT Team. This frequently led to misinterpretation of one's intent by the other in the process of communication.

The result was a long and unnecessary delay between when a content is ready for publication and when the content is actually published.

## Publication workflow

_ICJIA Research Hub_ provides tools that place Author at the center of the content management and publication process by eliminating the dependency on any external entity. In this workflow, Author not only initiates the web publication process, but also finishes it.

The workflow supported by _ICJIA Research Hub_ relies on changing status of a content "item." In this workflow, Author creates an item and sets its status,based on which the item is made available to different groups of audience.

_Figure 1_ below illustrates this workflow:

<div style="text-align:center">

<span class="fig-title">Figure 1.</span>
![workflow diagram](/assets/img/diagram-workflow.png)

</div>

### Contant status

Using _Research Hub Studio_, Author can not only create a new content item but also change its status, where different statuses reprenset different stages of the publication process.

There are three possible statuses: "created", "submitted", and "published."

::: tip TIP
See [the Using Studio page](studio.md) for more on using _Research Hub Studio_ and its various pages. Also see [this tutorial page](tutorials/create-article.md) on managing an article.
:::

#### Created

"Created" content items are available only on _Research Hub Studio_. Author can create a new item on the Create page of _Resesarch Hub Studio_, which will then have the "created" status.

Authors can make substantive changes to "created" contents only. "Created" items are available on the Update page of _Research Hub Studio_. "Created" items can also be deleted on the Manage page by clicking a red trash bin icon (<i class="material-icons" style="color:red;">delete_forever</i>) on the right side of the table for "created" items.

Author can promote a "Created" content to be of the "Submitted" status. This can be done on the Manage page of _Research Hub Studio_ by clicking check mark icon (<i class="material-icons">check</i>) on the right side of the table for "Created" items.

#### Submitted

"Submitted" content items are available on _Research Hub Preview_. When Author submits an item on the Manage page of _Research Hub Studio_, an alert popup box will show up on the top of the browser window and display the preview URL.

::: warning NOTE
Although preview URLs are generated for internal review purposes only, they are technically accessible to anyone.
:::

Preview URLs have the following format:

```
https://research.icjia.cloud/preview/<content-type>/<slug>
```

Here, `<content-type>` is either`apps`, `articles` or `datasets`. `<slug>` is unique to each content item and is based on the title.

Author can promote a "submitted" item to be of the "published" status by clicking check mark icon (<i class="material-icons">check</i>) on the right side of the table for "Submitted" items. Author can also change the status of an "submitted" item back to "created" for updating or deleting it by clicking a cross mark icon (<i class="material-icons">close</i>) instead.

#### Published

"Published" content items are available on the main _Research Hub_ website for the public viewership. When Author publishes an item, an alert popup box will show up on the top of the browser window and display the public URL.

Public URLs have the following format:

```
https://research.icjia.cloud/<content-type>/<slug>
```

Author may take down "published" items on the Manage page of _Research Hub Studio_ by clicking a cross mark icon (<i class="material-icons">close</i>) on the right side of the table for "published" items.
