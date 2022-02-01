"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[859],{56116:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return p}});var n=a(87462),r=a(63366),l=(a(15007),a(64983)),d=a(99536),i=["components"],m={},o={_frontmatter:m},s=d.Z;function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.mdx)(s,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"license-history-reference"},"License History Reference"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#license-history-calls"},"License History calls"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#authentication"},"Authentication")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#request-headers"},"Request headers")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#url-parameters"},"URL parameters")))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#responses"},"Responses")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#example-requests-and-responses"},"Example requests and responses"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#simple-example"},"Simple example")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#example-fetching-all-history-and-using-pagination"},"Example fetching all history and using pagination"))))),(0,l.mdx)("p",null,"The License History API is used to retrieve past license history. For information on licensing Adobe Stock content, see ",(0,l.mdx)("a",{parentName:"p",href:"../getting-started/apps/06-licensing-assets.md"},"Licensing Stock assets"),"."),(0,l.mdx)("a",{id:"license-history-calls"}),(0,l.mdx)("h2",{id:"license-history-calls"},"License History calls"),(0,l.mdx)("p",null,"The License History API returns a list of assets licensed for a given user or organization."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.mdx)("th",{parentName:"tr",align:null},"Method"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"https://stock.adobe.io/Rest/Libraries/1/Member/LicenseHistory"},"https://stock.adobe.io/Rest/Libraries/1/Member/LicenseHistory")),(0,l.mdx)("td",{parentName:"tr",align:null},"GET")))),(0,l.mdx)("a",{id:"authentication"}),(0,l.mdx)("h3",{id:"authentication"},"Authentication"),(0,l.mdx)("p",null,"The Authorization header is required for any of the licensing calls. The API uses the header to determine the user's member number, licensing status, and default locale. See ",(0,l.mdx)("a",{parentName:"p",href:"../getting-started/03-api-authentication.md"},"API authentication")," for more information."),(0,l.mdx)("a",{id:"request-headers"}),(0,l.mdx)("h3",{id:"request-headers"},"Request headers"),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"10-headers-for-api-calls.md"},"Headers for Stock API calls")," for details about header content."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Required headers: ",(0,l.mdx)("inlineCode",{parentName:"li"},"x-Product"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"x-api-key"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"Authorization")),(0,l.mdx)("li",{parentName:"ul"},"Optional headers: ",(0,l.mdx)("inlineCode",{parentName:"li"},"X-Request-Id"))),(0,l.mdx)("a",{id:"url-parameters"}),(0,l.mdx)("h3",{id:"url-parameters"},"URL parameters"),(0,l.mdx)("p",null,"Pass the following URL parameters with the GET request."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"locale"),(0,l.mdx)("td",{parentName:"tr",align:null},"Location language code. String. Default is ",(0,l.mdx)("inlineCode",{parentName:"td"},"en_US"),". See the full list of ",(0,l.mdx)("a",{href:"14-locale-codes.md"},"Locales"),".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[limit]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional, for pagination. Maximum number of assets to return in the call. Call repeatedly with different ",(0,l.mdx)("inlineCode",{parentName:"td"},"[offset]")," values to page through the found assets. Valid values are 1 through 100. Integer. Default is 100.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[offset]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional, start position in query. Valid values are 0 (the first found asset) or higher integers. Integer. Default is 0. ",(0,l.mdx)("br",null),(0,l.mdx)("br",null)," With each successive call for your search, increment this by the ",(0,l.mdx)("inlineCode",{parentName:"td"},"[limit]")," value to get the next page of assets. For example, by default your first call uses a 0 offset and limit of 100 to return the first 100 found assets. Call this API again with an offset of 100 to retrieve the next page.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search_parameters","[thumbnail_size]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional, thumbnail size in pixels. Specify the size of thumbnail to return for each found asset. Integer. ",(0,l.mdx)("br",null),(0,l.mdx)("br",null),"Valid values and meanings:",(0,l.mdx)("br",null)," ",(0,l.mdx)("inlineCode",{parentName:"td"},"110"),": Small (110px)",(0,l.mdx)("br",null)," ",(0,l.mdx)("inlineCode",{parentName:"td"},"160"),": Medium (160px)",(0,l.mdx)("br",null)," ",(0,l.mdx)("inlineCode",{parentName:"td"},"240"),": Large (240px)",(0,l.mdx)("br",null)," ",(0,l.mdx)("inlineCode",{parentName:"td"},"500"),": Extra large (500px). Returned with watermark.",(0,l.mdx)("br",null)," ",(0,l.mdx)("inlineCode",{parentName:"td"},"1000"),": Extra-extra large (1000px). Returned with watermark.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"all"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional, set to true or false to indicate whether all license history for the organization should be returned, or only the license history for the currently selected user or profile (PLC). Boolean.",(0,l.mdx)("br",null),(0,l.mdx)("br",null),"Valid values and meanings:",(0,l.mdx)("br",null),(0,l.mdx)("inlineCode",{parentName:"td"},"true"),": Show all license history for the entire organization.",(0,l.mdx)("br",null),(0,l.mdx)("inlineCode",{parentName:"td"},"false")," (or remove parameter): Show only history for the current user or Stock profile. Default.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"result_columns[]"),(0,l.mdx)("td",{parentName:"tr",align:null},"Allowable fields to include in the history results. For more information, see ",(0,l.mdx)("a",{parentName:"td",href:"11-search-reference.md"},"Search API reference"),".",(0,l.mdx)("br",null),(0,l.mdx)("br",null)," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_110_url")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_110_height")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_110_width")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_160_url")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_160_height")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_160_width")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_220_url")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_220_height")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_220_width")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_240_url")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_240_height")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_240_width")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_500_url")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_500_height")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_500_width")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_1000_url")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_1000_height")," ",(0,l.mdx)("inlineCode",{parentName:"td"},"thumbnail_1000_width"))))),(0,l.mdx)("a",{id:"responses"}),(0,l.mdx)("h2",{id:"responses"},"Responses"),(0,l.mdx)("p",null,"Files are returned in a JSON array with this structure."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "nb_results": 0,\n  "files": [\n    {\n      "license": "string",\n      "license_date": "string",\n      "download_url": "string",\n      "id": 0,\n      "title": "string",\n      "width": 0,\n      "height": 0,\n      "creator_name": "string",\n      "creator_id": 0,\n      "media_type_id": 1,\n      "vector_type": "Unknown Type: string,null",\n      "content_type": "string",\n      "thumbnail_url": "string",\n      "thumbnail_width": 0,\n      "thumbnail_height": 0,\n      "details_url": "string"\n    }\n  ]\n}\n')),(0,l.mdx)("p",null,"In the table below, fields marked with ",(0,l.mdx)("strong",{parentName:"p"},"*")," are returned by default."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","nb_results"),(0,l.mdx)("td",{parentName:"tr",align:null},"Total number of found assets in the search result. Integer.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","license"),(0,l.mdx)("td",{parentName:"tr",align:null},"License type (",(0,l.mdx)("inlineCode",{parentName:"td"},"Standard"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"Standard_M"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"Extended"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"Video_HD"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"Video_4K"),"). String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","license_date"),(0,l.mdx)("td",{parentName:"tr",align:null},"Date asset was licensed. String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","download_url"),(0,l.mdx)("td",{parentName:"tr",align:null},"URL to download the licensed asset (requires authentication). String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","id"),(0,l.mdx)("td",{parentName:"tr",align:null},"Item ID. Integer.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","title"),(0,l.mdx)("td",{parentName:"tr",align:null},"Item title. String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","creator_name"),(0,l.mdx)("td",{parentName:"tr",align:null},"Creator Name. String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","creator_id"),(0,l.mdx)("td",{parentName:"tr",align:null},"Creator unique ID. String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","content_url"),(0,l.mdx)("td",{parentName:"tr",align:null},"(Deprecated). String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","media_type_id"),(0,l.mdx)("td",{parentName:"tr",align:null},"Content type of the asset (",(0,l.mdx)("inlineCode",{parentName:"td"},"1"),": Photos, ",(0,l.mdx)("inlineCode",{parentName:"td"},"2"),": Illustrations, ",(0,l.mdx)("inlineCode",{parentName:"td"},"3"),": Vectors, ",(0,l.mdx)("inlineCode",{parentName:"td"},"4"),": Videos, ",(0,l.mdx)("inlineCode",{parentName:"td"},"6"),": 3D, ",(0,l.mdx)("inlineCode",{parentName:"td"},"7"),": Templates). Integer.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","vector_type"),(0,l.mdx)("td",{parentName:"tr",align:null},"If the file is a vector indicates if its a svg or a ai/eps (reported as zip). String or Null.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*","content_type"),(0,l.mdx)("td",{parentName:"tr",align:null},"Content type of the file (e.g. ",(0,l.mdx)("inlineCode",{parentName:"td"},"image/jpeg"),"). String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*height"),(0,l.mdx)("td",{parentName:"tr",align:null},"Item height. Integer.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*width"),(0,l.mdx)("td",{parentName:"tr",align:null},"Item width. Integer.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"*details_url"),(0,l.mdx)("td",{parentName:"tr",align:null},"URL to Adobe Stock with content details. String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thumbnail","_","**url"),(0,l.mdx)("td",{parentName:"tr",align:null},"URL for the requested thumbnail size, where ","*"," is the thumbnail size in pixels. You can use this to display the thumbnail on your page using your preferred display method. String.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thumbnail***width"),(0,l.mdx)("td",{parentName:"tr",align:null},"Width for the thumbnail of the requested size, where ","*"," is the thumbnail size in pixels. Integer. For example: ",(0,l.mdx)("inlineCode",{parentName:"td"},'"thumbnail_160_width": 200'))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thumbnail**","_","height"),(0,l.mdx)("td",{parentName:"tr",align:null},"Height for the thumbnail of the requested size, where ","*"," is the thumbnail size in pixels. Integer.")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"*Note:")," Allowable values for ",(0,l.mdx)("inlineCode",{parentName:"p"},"thumbnail_*_url"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"thumbnail_*_width")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"thumbnail_*_height")," fields: ",(0,l.mdx)("inlineCode",{parentName:"p"},"110"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"160"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"220"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"240"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"500"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"1000"),".*"),(0,l.mdx)("a",{id:"example-requests-and-responses"}),(0,l.mdx)("h2",{id:"example-requests-and-responses"},"Example requests and responses"),(0,l.mdx)("a",{id:"simple-example"}),(0,l.mdx)("h3",{id:"simple-example"},"Simple example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://stock.adobe.io/Rest/Libraries/1/Member/LicenseHistory?locale=en_US' --header 'X-Product:  MySampleApp/1.0' --header 'x-api-key:  MyApiKey' --header 'Authorization:  Bearer MyAccessToken'\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n    "nb_results": 13,\n    "files": [\n        {\n            "license": "Standard",\n            "license_date": "9/21/17, 9:00 PM",\n            "download_url": "https://stock.adobe.com/Download/DownloadFileDirectly/xM0nanNQXGEFjXOfV3RBTMet3uP2qDwe",\n            "id": 121684652,\n            "title": "Modern Album Layouts",\n            "creator_name": "Creativedash",\n            "creator_id": 206267052,\n            "content_url": "https://stock.adobe.com/Rest/stock-photo/modern-album-layouts/121684652",\n            "media_type_id": 7,\n            "vector_type": null,\n            "content_type": "image/vnd.adobe.photoshop.template",\n            "height": 1424,\n            "width": 2048,\n            "details_url": "https://stock.adobe.com/121684652?as_channel=affiliate&as_source=api&as_content=73ebcc931b9c454b8cb150816fadb06a"\n        }, /*... more files */\n    ]\n}\n')),(0,l.mdx)("a",{id:"example-fetching-all-history-and-using-pagination"}),(0,l.mdx)("h3",{id:"example-fetching-all-history-and-using-pagination"},"Example fetching all history and using pagination"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"curl --location -g --request GET 'https://stock.adobe.io/Rest/Libraries/1/Member/LicenseHistory?locale=en_US&search_parameters[limit]=20&search_parameters[offset]=0&all=true' --header 'X-Product:  MySampleApp/1.0' --header 'x-api-key:  MyApiKey' --header 'Authorization:  Bearer MyAccessToken'\n")),(0,l.mdx)("p",null,"In the example above, the request will return the first 20 of 239 results. Without this command, the API returned only 13 results (see previous example.)"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n    "nb_results": 239,\n    "files": [\n        {\n            "license": "Standard",\n            "license_date": "9/21/17, 9:00 PM",\n            "download_url": "https://stock.adobe.com/Download/DownloadFileDirectly/xM0nanNQXGEFjXOfV3RBTMet3uP2qDwe",\n            "id": 121684652,\n            "title": "Modern Album Layouts",\n            "creator_name": "Creativedash",\n            "creator_id": 206267052,\n            "content_url": "https://stock.adobe.com/Rest/stock-photo/modern-album-layouts/121684652",\n            "media_type_id": 7,\n            "vector_type": null,\n            "content_type": "image/vnd.adobe.photoshop.template",\n            "height": 1424,\n            "width": 2048,\n            "details_url": "https://stock.adobe.com/121684652?as_channel=affiliate&as_source=api&as_content=73ebcc931b9c454b8cb150816fadb06a"\n        }, /*... more files */\n    ]\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-13-license-history-md-2139d3c1401de83c303b.js.map