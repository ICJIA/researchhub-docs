(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{194:function(e,t,n){"use strict";n.r(t);var s=n(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Welcome to "),n("em",[e._v("ICJIA Research Hub")]),e._v(" Developer Guide!")]),e._v(" "),n("p",[e._v("This guide is meant for developers and other curious citizens who are interested in technical details of the "),n("em",[e._v("ICJIA Reseasrch Hub")]),e._v(" project and making contributions to it.")]),e._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents","aria-hidden":"true"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),n("p",[e._v("You will find in this Guide:")]),e._v(" "),n("ul",[n("li",[e._v("Overview: Current page.")]),e._v(" "),n("li",[n("router-link",{attrs:{to:"/dev-guide/architecture.html"}},[e._v("Project Architecture")]),e._v(": Explanation for the "),n("em",[e._v("ICJIA Research Hub")]),e._v(" project architecture.")],1),e._v(" "),n("li",[e._v("Contributing\n"),n("ul",[n("li",[n("router-link",{attrs:{to:"/dev-guide/contributing/code_of_conduct.html"}},[e._v("Code of Conduct")]),e._v(": Code of conduct for contributors.")],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/dev-guide/contributing/codebase.html"}},[e._v("Codebase")]),e._v(": Guide for contributing to the project's codebase.")],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/dev-guide/contributing/contents.html"}},[e._v("Contents")]),e._v(": Guide for contributing to the project's contents.")],1)])]),e._v(" "),n("li",[n("router-link",{attrs:{to:"/dev-guide/api.html"}},[e._v("API Reference")]),e._v(": Reference for the "),n("em",[e._v("ICJIA Research Hub")]),e._v(" API.")],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/dev-guide/schema.html"}},[e._v("Data Schema")]),e._v(": Explanation for the "),n("em",[e._v("ICJIA Research Hub")]),e._v(" data schema.")],1)]),e._v(" "),n("h2",{attrs:{id:"contributing-to-icjia-reseasrch-hub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-icjia-reseasrch-hub","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributing to "),n("em",[e._v("ICJIA Reseasrch Hub")])]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("ICJIA Research Hub")]),e._v(" project and everyone participating in it is governed by a shared Code of Conduct found "),n("router-link",{attrs:{to:"/dev-guide/contributing/code_of_conduct.html"}},[e._v("here")]),e._v(". By participating, you are expected to uphold this code.")],1)]),e._v(" "),n("p",[e._v("We appreciate your interest in contributing to "),n("em",[e._v("ICJIA Research Hub")]),e._v("! 😍")]),e._v(" "),n("p",[n("em",[e._v("ICJIA Research Hub")]),e._v(" aspires to be an open-source project that allows you as a member of the public to shape it to best reflect your interests and concerns and improve your user experience. In that spirit, we ask for your contributions to the "),n("em",[e._v("ICJIA Research Hub")]),e._v(" project, either to its codebase or contents.")]),e._v(" "),n("h2",{attrs:{id:"running-locally"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-locally","aria-hidden":"true"}},[e._v("#")]),e._v(" Running locally")]),e._v(" "),n("p",[e._v("You can run its individual elements locally on your workstation. In order to replicate the full "),n("em",[e._v("ICJIA Research Hub")]),e._v(" experience, however, you will have to setup proxying for frontend apps.")]),e._v(" "),n("h3",{attrs:{id:"research-hub-also-studio-or-preview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#research-hub-also-studio-or-preview","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("em",[e._v("Research Hub")]),e._v(" (also "),n("em",[e._v("Studio")]),e._v(" or "),n("em",[e._v("Preview")]),e._v(")")]),e._v(" "),n("p",[e._v("The following example is for the "),n("em",[e._v("Research Hub")]),e._v(" main app. Change the repo name for "),n("em",[e._v("Research Hub Studio")]),e._v(" and "),n("em",[e._v("Research Hub Preview")]),e._v(" apps.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),n("p",[e._v("All three apps expects the API server to be running, from which they get and post content data.")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# clone source repo")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/ICJIA/icjia-research.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# change directory")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" icjia-research\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install node modules")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# serve for developement")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run serve\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Build for production.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),n("h3",{attrs:{id:"api-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-server","aria-hidden":"true"}},[e._v("#")]),e._v(" API server")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# clone source repo")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/ICJIA/icjia-research-api.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# change directory")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" icjia-research-api\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bring up compose")]),e._v("\ndocker-compose up\n")])])]),n("h3",{attrs:{id:"documentation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#documentation","aria-hidden":"true"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# clone source repo")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/ICJIA/icjia-research-docs.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# change directory")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" icjia-research-docs\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install node modules")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# serve for writing")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run docs:dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# build to static files.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run docs:build\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);