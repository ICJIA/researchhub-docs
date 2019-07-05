(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("This page of the documentation is intended for the internal ICJIA staff.")])]),e._v(" "),a("p",[e._v("This guide is meant for ICJIA staff members who author and manage contents on "),a("em",[e._v("ICJIA Reseasrch Hub")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents","aria-hidden":"true"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("p",[e._v("You will find in this Guide:")]),e._v(" "),a("ul",[a("li",[e._v("Overview: Current page.")]),e._v(" "),a("li",[a("router-link",{attrs:{to:"/auth-guide/workflow.html"}},[e._v("Workflow")]),e._v(": A detailed description of the new workflow supported by "),a("em",[e._v("ICJIA Research Hub")]),e._v(".")],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/auth-guide/studio.html"}},[e._v("Using Studio")]),e._v(": A closer look into "),a("em",[e._v("Research Hub Studio")]),e._v(" for content management and publication.")],1)]),e._v(" "),a("h2",{attrs:{id:"better-authoring-experience"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#better-authoring-experience","aria-hidden":"true"}},[e._v("#")]),e._v(" Better authoring experience")]),e._v(" "),a("p",[e._v("One of the key objectives of the "),a("em",[e._v("ICJIA Research Hub")]),e._v(" project is to improve the process of content publication and management for the ICJIA Research and Analysis (R&A) Unit.")]),e._v(" "),a("p",[e._v("To that end, the "),a("em",[e._v("ICJIA Research Hub")]),e._v(" project provides an architecture that seamlessly integrates the authoring, reviewing and publishing phases of the content management process. The new "),a("em",[e._v("Research Hub Studio")]),e._v(" app allows the R&A authors to draft new contents and manage existing content as well as their publication status. The "),a("em",[e._v("Research Hub Preview")]),e._v(" app generates temporary URLs for contents ready for reviews and comments.")]),e._v(" "),a("p",[e._v("With "),a("em",[e._v("ICJIA Research Hub")]),e._v(", the R&A authors can be in charge of their own contents and work independently of the IT team throughout the process. The "),a("em",[e._v("Studio")]),e._v(" and "),a("em",[e._v("Preview")]),e._v(" apps provide authors with instant feedbacks on their contents and empower them to make updates without any unnecesary delay.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("See "),a("router-link",{attrs:{to:"/dev-guide/architecture.html"}},[e._v("the Project Architecture page")]),e._v(" of the Developer Guide for more on different components of "),a("em",[e._v("ICJIA Research Hub")]),e._v(" and how they relate to one another.")],1)]),e._v(" "),a("h2",{attrs:{id:"improved-content-type-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improved-content-type-system","aria-hidden":"true"}},[e._v("#")]),e._v(" Improved content type system")]),e._v(" "),a("p",[e._v("Prior to the "),a("em",[e._v("ICJIA Research Hub")]),e._v(' project, articles were generally considered to be the main publication type. More recently, however, the R&A Unit began to publish contents that cannot be easily categorized as articles such as interactive dashboard and "continuum" pages.')]),e._v(" "),a("p",[e._v("Meanwhile, a collection of datasets maintained by the R&A Unit did not have a proper user interface to provide relevant metadata. Each dataset was also not in the machine-friendly format often expected in modern data analysis practices.")]),e._v(" "),a("p",[e._v("To address these issues, "),a("em",[e._v("ICJIA Research Hub")]),e._v(" implements a new content type system.")]),e._v(" "),a("h3",{attrs:{id:"icjia-research-hub-content-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icjia-research-hub-content-types","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("em",[e._v("ICJIA Research Hub")]),e._v(" content types")]),e._v(" "),a("p",[a("em",[e._v("ICJIA Research Hub")]),e._v(" defines and implements three clearly distinguished content types for all research publications: Apps, Articles and Datasets.")]),e._v(" "),a("ul",[a("li",[e._v("Apps type is for any research publication that offers meaningful user interactions.")]),e._v(" "),a("li",[e._v("Articles type is for traditioanl research publications that are intended to be read.")]),e._v(" "),a("li",[e._v("Datasets type is for data files that can be download and used for analysis.")])]),e._v(" "),a("p",[e._v("These content types are not superficial distinctions. In fact, they are deeply integrated into the "),a("em",[e._v("ICJIA Research Hub")]),e._v(" platform as a whole, in terms of not only how the contents are displayed in public but also how they are authored and managed internally.")]),e._v(" "),a("p",[e._v("There are three main implications:")]),e._v(" "),a("ol",[a("li",[e._v("A clear seperation of interactive and static contents. That is, all interactive components should be standalone Apps items instead of somehow embedeed in an Article item.")]),e._v(" "),a("li",[e._v("Each content type is now associated with a clearly defined set of fields, whose values are explicitly standardized when needed.")]),e._v(" "),a("li",[e._v("Relations across content types can be explicitly specified. This can support a more comprehensive publication package without jamming everything into a single entry. (For example, a research report (Articles type) accompanied with a dataset used in analysis (Datasets type) and a dashboard for exploring the dataset interactively (Apps type).)")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("See "),a("router-link",{attrs:{to:"/dev-guide/schema.html"}},[e._v("the Data Schema page")]),e._v(" in Developer Guide for more on the content type specification.")],1)])])},[],!1,null,null,null);t.default=s.exports}}]);