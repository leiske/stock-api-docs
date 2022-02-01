"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[506],{75032:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return p}});var n=a(87462),r=a(63366),l=(a(15007),a(64983)),d=a(99536),i=["components"],o={},m={_frontmatter:o},s=d.Z;function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.mdx)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"fotolia-api-migration-resources"},"Fotolia API migration resources"),(0,l.mdx)("p",null,"This guide is intended for developers migrating from Fotolia API to the Adobe Stock API."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#first-steps"},"First steps")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#feature-mapping"},"Feature mapping"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#endpoints"},"Endpoints")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#search-filters-and-parameters"},"Search filters and parameters")))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#deprecated-api-methods"},"Deprecated API methods")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#licensing-and-authentication"},"Licensing and authentication"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#licensing-changes"},"Licensing changes")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#authentication"},"Authentication")))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#next-steps"},"Next steps"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#get-registered"},"Get registered")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#get-a-stock-account"},"Get a Stock account")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#sign-a-contract"},"Sign a contract")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#build-an-app"},"Build an app"))))),(0,l.mdx)("a",{id:"first-steps"}),(0,l.mdx)("h2",{id:"first-steps"},"First steps"),(0,l.mdx)("p",null,"If you are new to using Adobe APIs, we recommend you begin by reading ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html"},"Getting Started with the Adobe Stock API"),", and browse the ",(0,l.mdx)("a",{parentName:"p",href:"https://stock.adobe.com/"},"Adobe Stock website")," to become familar with navigation, search, and the new content types available."),(0,l.mdx)("p",null,"Overall, the transition from the Fotolia API to the Adobe Stock API should not require much work, since most of the commands and parameters are the same, and both return standard JSON responses. One of the main advantages of switching to Adobe Stock is the robust platform offered by Adobe I/O, which hosts all of Adobe's APIs. Unlike Fotolia, Adobe Stock does not currently enforce API limits. For marketers, creative agencies and production houses, Stock also has a greater amount of quality content. In addition to all the photo, vector and video content on Fotolia, Adobe Stock has exclusive asset types such as 3D, Templates (including Motion Graphics Templates), Editorial assets, and a deep collection of Premium content by award-winning artists and agencies."),(0,l.mdx)("p",null,"The most significant difference between the APIs is the authentication method. Fotolia supported only basic authentication based on user name and password to receive a token, while Adobe requires a more secure method. Adobe offers two methods: one based on user login (OAuth), and a fully automated method for enterprise service accounts. See ",(0,l.mdx)("a",{parentName:"p",href:"#authentication"},"Authentication")," for more details."),(0,l.mdx)("p",null,"Because the licensing workflow is different, we recommend you also review ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/getting-started/apps/06-licensing-assets.md"},"our guide on licensing"),". Furthermore, unlike Fotolia, when licensing a Standard image from Stock (non-Premium and non-Editorial), you will always receive a license for the ",(0,l.mdx)("em",{parentName:"p"},"original size"),'. Therefore, there is no reason for "L", "XL" and "XXL" licenses. See ',(0,l.mdx)("a",{parentName:"p",href:"#licensing-changes"},"Licensing changes")," for specific details on the differences."),(0,l.mdx)("a",{id:"feature-mapping"}),(0,l.mdx)("h2",{id:"feature-mapping"},"Feature mapping"),(0,l.mdx)("a",{id:"endpoints"}),(0,l.mdx)("h3",{id:"endpoints"},"Endpoints"),(0,l.mdx)("p",null,'Here is a list of existing Fotolia API endpoints and their new Stock API equivalents. Please note that some replacement methods are still being developed (marked with "TBA", To Be Announced). Further, not all Fotolia methods are being carried over to Stock. See ',(0,l.mdx)("a",{parentName:"p",href:"#deprecated-api-methods"},"Deprecated API methods")," for more information."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Fotolia"),(0,l.mdx)("th",{parentName:"tr",align:null},"Adobe Stock"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"Search")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/getSearchResults"},"getSearchResults")),(0,l.mdx)("td",{parentName:"tr",align:null},"Search/Files"),(0,l.mdx)("td",{parentName:"tr",align:null},"Full search capabilities"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#search-filters-and-parameters"},"Search filters and parameters")," for details on search filters")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/getCategories1"},"getCategories1"),(0,l.mdx)("br",null),(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/getCategories2"},"getCategories2")),(0,l.mdx)("td",{parentName:"tr",align:null},"Search/CategoryTree"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return categories"),(0,l.mdx)("td",{parentName:"tr",align:null},"Categories are considered a legacy feature. While they are still available on Adobe Stock, they are less reliable than searching by keywords")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"Media")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/getMediaData"},"getMediaData")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"api/19-bulk-metadata-files-reference.md"},"Media/1/Files")),(0,l.mdx)("td",{parentName:"tr",align:null},"Return all information about a media"),(0,l.mdx)("td",{parentName:"tr",align:null},"This API can be used to get metadata for files one at time, or in bulk")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/getBulkMediaData"},"getBulkMediaData")),(0,l.mdx)("td",{parentName:"tr",align:null},"Media/1/Files]","(","api/19-bulk-metadata-files-reference.md)"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return all information about a media"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same as above")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/getMedia"},"getMedia")),(0,l.mdx)("td",{parentName:"tr",align:null},"Content/License"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return download link (media purchase)"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/getMediaComp"},"getMediaComp")),(0,l.mdx)("td",{parentName:"tr",align:null},"Search/Files"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return url of the comp image"),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"User")),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/loginUser"},"loginUser")),(0,l.mdx)("td",{parentName:"tr",align:null},"/ims/authorize (IMS)"),(0,l.mdx)("td",{parentName:"tr",align:null},"Login a user (needed for authentification)"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#authentication"},"Authentication"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/refreshToken"},"refreshToken")),(0,l.mdx)("td",{parentName:"tr",align:null},"/ims/token (IMS)"),(0,l.mdx)("td",{parentName:"tr",align:null},"Renew authentication token"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#authentication"},"Authentication"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://us.fotolia.com/Services/API/Rest/Method/getUserData"},"getUserData")),(0,l.mdx)("td",{parentName:"tr",align:null},"Member/Profile"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return information about the logged user and get available credits"),(0,l.mdx)("td",{parentName:"tr",align:null},"To get license quota, use Member/Profile. Stock does not store information about the user, only about entitlements available")))),(0,l.mdx)("p",null,"If you have a business requirement to access Stock Contributor APIs, please please ",(0,l.mdx)("a",{parentName:"p",href:"mailto:Grp-AdobeStockPartnerships@adobe.com?subject=%5BFotolia%5D%20Stock%20API%20question"},"contact us"),"."),(0,l.mdx)("a",{id:"search-filters-and-parameters"}),(0,l.mdx)("h3",{id:"search-filters-and-parameters"},"Search filters and parameters"),(0,l.mdx)("p",null,"Nearly all the Fotolia search parameters and filters are also available in Adobe Stock. Note that there are more filters available to Adobe Stock, especially for new content types (Templates, 3D, Premium, Editorial, etc.), as well as more controls for searching by similar images. Refer the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/api/11-search-reference.md"},"Stock Search API Reference")," for full details."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Fotolia"),(0,l.mdx)("th",{parentName:"tr",align:null},"Adobe Stock"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[language_id]"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"locale")),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"api/14-locale-codes.md"},"Locale codes reference"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[words]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Keyword search")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[creator_id]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search by creator")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[cat1","_","id]",(0,l.mdx)("br",null),"search_parameters","[cat2","_","id]"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"search_parameters","[category]")),(0,l.mdx)("td",{parentName:"tr",align:null},"Search by  category")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[gallery_id]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search by Fotolia gallery ID")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[model_id]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search by same model")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[serie_id]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search by same photographer collection")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[similar]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search by similar media ID")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][content_type:photo]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search for photos")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][content_type:illustration]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search for illustrations")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][content_type:vector]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search for vectors")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][content_type:video]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search for videos")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][offensive:2]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Explicit/nudity/violence included")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][isolated:on]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Isolated contents (on white background)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][panoramic:on]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Panoramic images")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][license_L:on]"," ",(0,l.mdx)("br",null),"search_parameters","[filters][license_XL:on]"," ",(0,l.mdx)("br",null),"search_parameters","[filters][license_XXL:on]"," ",(0,l.mdx)("br",null),"search_parameters","[filters][license_XXL&gt;25MP:on]"),(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][area_m_pixels]",(0,l.mdx)("br",null),"search_parameters","[filters][image_width]",(0,l.mdx)("br",null),"search_parameters","[filters][image_height]",(0,l.mdx)("br",null),(0,l.mdx)("del",{parentName:"td"},"search_parameters","[filters][area_pixels]")),(0,l.mdx)("td",{parentName:"tr",align:null},"Filter by size in megapixels (width ","*"," height). In Stock, standard images are always licensed at full resolution. Note that ",(0,l.mdx)("inlineCode",{parentName:"td"},"[area_pixels]")," has been deprecated and the other filters should be used instead")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][orientation]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search assets of the specified orientation")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][video_duration]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Filter by videos whose length is no longer than the specified duration in seconds")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][colors]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"comma separated listed of hexadecimal colors (without any # prefix)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[filters][has_releases]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Filters if the asset has model or property releases")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[order]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Sort order when returning assets")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[limit]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Maximum number of assets returned per request")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[offset]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Start position in query")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[thumbnail_size]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Same"),(0,l.mdx)("td",{parentName:"tr",align:null},"Sets the desired thumbnail size in pixels")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"result_columns"),(0,l.mdx)("td",{parentName:"tr",align:null},"result_columns[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Refer to the ",(0,l.mdx)("a",{parentName:"td",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/api/11-search-reference.md"},"Stock Search API Reference")," for a full list of fields that can be returned. Default fields returned are mostly the same, but have slight differences.")))),(0,l.mdx)("a",{id:"deprecated-api-methods"}),(0,l.mdx)("h2",{id:"deprecated-api-methods"},"Deprecated API methods"),(0,l.mdx)("p",null,"The following API endpoints and methods will be deprecated in Adobe Stock API as they are either not currently being used, no longer supported, or no longer necessary. These APIs either receive no traffic, or have such low usage that they are candidates for removal."),(0,l.mdx)("p",null,"If you have a business requirement for any of the APIs below, please ",(0,l.mdx)("a",{parentName:"p",href:"mailto:Grp-AdobeStockPartnerships@adobe.com?subject=%5BFotolia%5D%20Stock%20API%20question"},"contact us"),"."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Fotolia"),(0,l.mdx)("th",{parentName:"tr",align:null},"Adobe Stock"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"getTags"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return tag cloud")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"getGalleries"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return public galleries")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"getSeasonalGalleries"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return seasonal galleries")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"getCountries"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return countries list")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"getMediaGalleries"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return galleries attached to a media")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"getHomePageImages"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return images features on the homepage")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"shoppingcart.getList"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return shopping cart content")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"shoppingcart.add"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Add a media to the user's shopping cart")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"shoppingcart.update"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Update a media into the user's shopping cart")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"shoppingcart.remove"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Remove a media from the user's shopping cart")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"shoppingcart.transferToLightbox"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Remove a media from the user's shopping cart and add to to his lightbox")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"shoppingcart.clear"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Clear the user's shopping cart")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"getData"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Retun general information about Fotolia")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"test"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},'Return "success"')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"user.subaccount.getIds"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Return an array of all available subaccount IDs")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"user.subaccount.create"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Create a reseller subaccount")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"user.subaccount.delete"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Delete a reseller subaccount")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"user.subaccount.edit"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Update data of a reseller subaccount")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"user.subaccount.get"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Get reseller subaccount details")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"user.subaccount.getPurchasedContents"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Get the list of purchases made by a subaccount")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"media.getLicense"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"Get the licence between the reseller and his customer for a specific sale")))),(0,l.mdx)("a",{id:"licensing-and-authentication"}),(0,l.mdx)("h2",{id:"licensing-and-authentication"},"Licensing and authentication"),(0,l.mdx)("a",{id:"licensing-changes"}),(0,l.mdx)("h3",{id:"licensing-changes"},"Licensing changes"),(0,l.mdx)("p",null,'Adobe Stock has a flexible licensing system that allow individual and team customers to purchase image licensing subscriptions as well as "universal" credit packs which can be used to license any asset. Enterprise customers typically have a quota of licenses that is not fixed; they can exceed their quota and simply pay the same negotiated rate for additional credits.'),(0,l.mdx)("p",null,"For more information on consumer (non-Enterprise) plans, see ",(0,l.mdx)("a",{parentName:"p",href:"https://stock.adobe.com/plans"},"Adobe Stock pricing and membership plans"),". For information on Stock for Enterprise, see ",(0,l.mdx)("a",{parentName:"p",href:"https://landing.adobe.com/en/na/products/creative-cloud/ctir-4625-stock-for-enterprise/index.html"},"this page")," for details."),(0,l.mdx)("p",null,'Unlike Fotolia, all Standard assets require one license or credit to purchase, regardless of size. "Standard" assets include non-Premium photos, illustrations and vectors. Each Standard license gives access to the full resolution of the original asset. Other asset types may require multiple credits to purchase, and may come in different sizes. Extended licenses are also available for assets; see ',(0,l.mdx)("a",{parentName:"p",href:"https://stock.adobe.com/license-terms"},"License information and Terms of Use"),"."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("strong",{parentName:"p"},"Note for Print on Demand (POD) customers:")," If you license assets for use with printed goods that you sell, there are special rules you must follow. For example, you must use universal credits instead of subscription plans when licensing. Also, you will need to license the asset again in most cases, especially if used for different customer orders or for multiple products. And lastly, you will need to accept special terms and conditions before you can begin selling Stock images on your printed goods."),(0,l.mdx)("p",{parentName:"blockquote"},"Note that if you purchase Extended licenses, these precautions are not necessary, but the cost per asset is much higher. To discuss your use case and expected volume, please ",(0,l.mdx)("a",{parentName:"p",href:"mailto:Grp-AdobeStockPartnerships@adobe.com?subject=%5BFotolia%5D%20Stock%20API%20question"},"contact us")," for additional terms and instructions.")),(0,l.mdx)("p",null,"In terms of technical workflow, continue reading for an overview. Please refer to ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/getting-started/apps/06-licensing-assets.md"},"Licensing assets and stuff")," for full details."),(0,l.mdx)("p",null,"To license an asset, your application will want to follow these steps:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Get a token: See ",(0,l.mdx)("a",{parentName:"li",href:"#authentication"},"Authentication"),", below."),(0,l.mdx)("li",{parentName:"ol"},"Get a Stock asset ID by using the Search API, or by entering it from data."),(0,l.mdx)("li",{parentName:"ol"},"Check if the asset is already licensed. If you are a Print on Demand retailer (see above), continue the process. But if you are using the image for internal use such as on a marketing campaign or website, go to step #6."),(0,l.mdx)("li",{parentName:"ol"},"Check if licensing is possible. Because there are multiple types of assets and credits, it is possible that your plan does not include the asset you are trying to license. This step will let you know and give you the available remaining credits."),(0,l.mdx)("li",{parentName:"ol"},"License the asset. This uses credits from the account and results in a download link, but does not start the download. As discussed above, if you are a POD retailer, the API provides a command to license an asset again. See the ",(0,l.mdx)("a",{parentName:"li",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/15-faq.md"},"FAQ"),"."),(0,l.mdx)("li",{parentName:"ol"},"Download the file from the link. This link is also available from a standard search. Note that unlike Fotolia, downloading the asset does not trigger a license action. Users can download the asset as often as needed with a valid token.")),(0,l.mdx)("p",null,"Another use of the License API is to retrieve a history of licensed assets. For more details, see the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/api/13-license-history.md"},"License History reference"),"."),(0,l.mdx)("a",{id:"authentication"}),(0,l.mdx)("h3",{id:"authentication"},"Authentication"),(0,l.mdx)("p",null,"The Fotolia API supported basic authentication by posting a user name and plain-text password, and receiving back a session token. This has been replaced at Adobe with a much more secure authentication workflow which is common to all Adobe cloud-based services."),(0,l.mdx)("p",null,"Here is an overview of authentication types supported by Adobe Stock, but for full details, see the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/authentication.html"},"Adobe I/O Authentication guide"),"."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"JWT service account: Allows for fully automated scripting without requiring a user login. In this scheme, a developer shares a public key certificate with Adobe, and uses scope and credentials to create a signed JWT. The JWT is exchanged with Adobe to receive an access token.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"This authentication type is available to ",(0,l.mdx)("em",{parentName:"li"},"Adobe Enterprise customers only"),"."))),(0,l.mdx)("li",{parentName:"ul"},"OAuth: Allows your application to sign in a user to access their Adobe services, including Stock. This is based on the OAuth 2.0 model, which is used by other services such as Facebook, Google, Dropbox, etc. Once the user signs in, your application will receive an access token and a refresh token. The refresh token is used to renew the login for a set amount of time.")),(0,l.mdx)("p",null,"For technical details on either workflow, see the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/getting-started/07-workflow-guides.md"},"Stock workflow guides"),"."),(0,l.mdx)("p",null,"Both workflows result in creating an access token, which is used to identify that user (or Enterprise organization), and can be used to license assets, get license history, and authorize downloads. The token must be treated like a secret, and not be exposed to the public."),(0,l.mdx)("a",{id:"next-steps"}),(0,l.mdx)("h2",{id:"next-steps"},"Next steps"),(0,l.mdx)("p",null,"Now that you have an overview, check out the links below."),(0,l.mdx)("a",{id:"get-registered"}),(0,l.mdx)("h3",{id:"get-registered"},"Get registered"),(0,l.mdx)("p",null,"You may start testing the Search APIs at any time; all that is required is a free Adobe ID account to receive an API key. Look at ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/getting-started/02-register-app.md"},"Register your application")," for details."),(0,l.mdx)("a",{id:"get-a-stock-account"}),(0,l.mdx)("h3",{id:"get-a-stock-account"},"Get a Stock account"),(0,l.mdx)("p",null,"If you are an individual customer, go to the ",(0,l.mdx)("a",{parentName:"p",href:"https://stock.adobe.com/plans"},"Plans and Pricing")," page to sign up for an account. Note that if you plan to sell images for print use (e.g., you have a Print on Demand business), you will need to ",(0,l.mdx)("a",{parentName:"p",href:"mailto:Grp-AdobeStockPartnerships@adobe.com?subject=%5BFotolia%5D%20Stock%20API%20question"},"contact us")," for additional terms and instructions, and to discuss your volume and use case. If you plan to use assets only for internal use (such as for general marketing and design), then you can choose your plan accordingly."),(0,l.mdx)("p",null,"If you do not need your own account but need to sign in others using the OAuth model, refer to the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/adobe/stock-api-docs/raw/master/supplemental/Stock-Authorization-Code-Workflow.pdf"},"Authorization code workflow")," guide. If you have a business need, you may ",(0,l.mdx)("a",{parentName:"p",href:"mailto:Grp-AdobeStockPartnerships@adobe.com?subject=%5BFotolia%5D%20Stock%20API%20question"},"contact us")," if you need access to a demo account with dummy credits to test licensing."),(0,l.mdx)("a",{id:"sign-a-contract"}),(0,l.mdx)("h3",{id:"sign-a-contract"},"Sign a contract"),(0,l.mdx)("p",null,"As discussed earlier, if you plan to use Adobe Stock for commercial purposes--especially for selling printed goods--you will need to ",(0,l.mdx)("a",{parentName:"p",href:"mailto:Grp-AdobeStockPartnerships@adobe.com?subject=%5BFotolia%5D%20Stock%20API%20question"},"contact us"),". In many cases, you may need only accept our terms and conditions, and will be ready to begin."),(0,l.mdx)("a",{id:"build-an-app"}),(0,l.mdx)("h3",{id:"build-an-app"},"Build an app"),(0,l.mdx)("p",null,"You should begin with the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html"},"Getting started guide"),", and then look at ",(0,l.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/creativecloud/stock/docs.html#!adobe/stock-api-docs/master/docs/getting-started/04-creating-apps.md"},"Creating Adobe Stock applications"),". If you have integration questions, send a message to ",(0,l.mdx)("a",{parentName:"p",href:"mailto:stockapis@adobe.com"},"stockapis@adobe.com"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-faq-18-fotolia-migration-resources-md-571d1d29a91c0520c04b.js.map