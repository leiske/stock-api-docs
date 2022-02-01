"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[955],{93060:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return m}});var n=t(87462),s=t(63366),o=(t(15007),t(64983)),i=t(99536),r=["components"],d={},l={_frontmatter:d},p=i.Z;function m(e){var a=e.components,t=(0,s.Z)(e,r);return(0,o.mdx)(p,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"creating-adobe-stock-applications"},"Creating Adobe Stock applications"),(0,o.mdx)("p",null,"As discussed previously, the Adobe Stock API is a RESTful web service. To call the API, you make requests using HTTPS GET and POST methods. The API provides several methods, defined as URL endpoints, for requesting information or assets from Adobe Stock. There are methods for searching, licensing assets, and getting purchase history. You pass parameters to the method appended to a URL endpoint, and in return the API provides responses in JSON structures. In this section, we will explore the API command structure and learn techniques for searching and licensing content."),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"Here is a summary of the general steps you follow when integrating with the Stock API:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Spend some time browsing and searching content on the ",(0,o.mdx)("a",{parentName:"li",href:"https://stock.adobe.com/"},"Adobe Stock website"),", to get a sense of the typical end-user workflows."),(0,o.mdx)("li",{parentName:"ol"},"Define your requirements for displaying Stock search results on your page. For example,",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"define your thumbnail sizes, localization preferences, and the number of thumbnails to display on the page;"),(0,o.mdx)("li",{parentName:"ul"},"plan which sorting and filtering capabilities to support, such as relevancy, creation date, and what asset types to return, such as only photos or only videos and/or premium content;"),(0,o.mdx)("li",{parentName:"ul"},"and decide which types of searches to support, such as keyword search and image similarity search."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"./02-register-app.md"},"Register your application")," as a client of the Stock API and obtain your API Key (client ID) by creating an integration on the Adobe Developer Console. If you need to call licensing APIs, you will need additional credentials."),(0,o.mdx)("li",{parentName:"ol"},"Set up your ",(0,o.mdx)("a",{parentName:"li",href:"./03-api-authentication.md"},"headers for authentication"),", which could mean only the API key and application name, but could also require a user or organization token.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"You will need to craft additional code (not specific to the Stock APIs) to generate your tokens."))),(0,o.mdx)("li",{parentName:"ol"},"Build and execute a ",(0,o.mdx)("a",{parentName:"li",href:"./apps/05-search-for-assets.md"},"search query")," using your design decisions and user choices. Parse the JSON response and display information or thumbnails for the quantity of assets returned. Include metadata and thumbnails where appropriate.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Display additional results from the Search query using ",(0,o.mdx)("a",{parentName:"li",href:"./apps/05-search-for-assets.md#paginating-results"},"pagination"),"."))),(0,o.mdx)("li",{parentName:"ol"},"If desired, assist your user to ",(0,o.mdx)("a",{parentName:"li",href:"./apps/06-licensing-assets.md"},"license Stock assets"),", and view past ",(0,o.mdx)("a",{parentName:"li",href:"./apps/06-licensing-assets.md#getting-a-license-history"},"license history"),".")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},">",">",">"," NEXT:")," Learn how to use the ",(0,o.mdx)("a",{parentName:"p",href:"./apps/05-search-for-assets.md"},"Search API"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-04-creating-apps-md-ca1dcb8a574f3b04762f.js.map