(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{314:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"routes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routes"}},[e._v("#")]),e._v(" Routes")]),e._v(" "),t("p",[e._v("You can specify routes for your upstream servers in the OAG configuration")]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("routes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("route1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" webapplication\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /myservice/"),t("span",{pre:!0,attrs:{class:"token important"}},[e._v("**")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//backend.my/\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("allowAnonymous")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" yes\n")])])]),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("You can specify multiple routes under the "),t("code",[e._v("routes")]),e._v(" property. You must specify a unique name for each route. It is recommended to use something meaningful like frontend, backend, or the name of the service.")]),e._v(" "),t("h3",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" "),t("code",[e._v("type")])]),e._v(" "),t("p",[e._v("The type property specifies the name of the "),t("a",{attrs:{href:"/docs/Configuration-SecurityProfiles"}},[e._v("Security Profile")]),e._v(" that is used for this route. You must set a valid security profile, you can either use a default one or define your own security profile.")]),e._v(" "),t("h3",{attrs:{id:"path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" "),t("code",[e._v("path")])]),e._v(" "),t("p",[e._v("The path setting specifies which requests to OAG are routed with this route. In the upper example all requests to "),t("code",[e._v("/myservice")]),e._v(" are routes to "),t("code",[e._v("https://backend.my/")]),e._v(". You can use ant-style patterns for routes:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/myservice/")]),e._v(" matches only "),t("code",[e._v("/myservice/")])]),e._v(" "),t("li",[t("code",[e._v("/myservice/*")]),e._v(" matches with one level wildcard, i.e. "),t("code",[e._v("/myservice/foo")])]),e._v(" "),t("li",[t("code",[e._v("/myservice/**")]),e._v(" matches all hierarchical request, i.e. "),t("code",[e._v("/myservice/foo/bar")])])]),e._v(" "),t("h3",{attrs:{id:"url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[e._v("#")]),e._v(" "),t("code",[e._v("url")])]),e._v(" "),t("p",[e._v("The URL setting specifies the upstream service to which OAG forwards the request. The path from the route will not be forwarded. For instance, if you call with the example before "),t("code",[e._v("/myservice/foo")]),e._v(" OAG forwards the request to "),t("code",[e._v("https://backend.my/foo")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"allowanonymous"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allowanonymous"}},[e._v("#")]),e._v(" "),t("code",[e._v("allowAnonymous")])]),e._v(" "),t("p",[e._v("Boolean variable: If you specify "),t("code",[e._v("no")]),e._v(" OAG only allows authenticated requests to this route. This setting is useful if your backend application expects only authenticated users. Another use case for this option is if you want to secure a web service that has no authentication implemented. This method is then only secure if you specify only Login provider from private IdPs and not social logins.")]),e._v(" "),t("h3",{attrs:{id:"rewrite-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rewrite-optional"}},[e._v("#")]),e._v(" "),t("code",[e._v("rewrite")]),e._v(" (optional)")]),e._v(" "),t("p",[e._v("The default rewrite behaviour is designed to be intuitive. This is why strips the heading path segments when wildcards are used. i:e. "),t("code",[e._v("/api/endpoint")]),e._v(" is rewritten to "),t("code",[e._v("https://backend/endpoint")]),e._v(" if the route path is "),t("code",[e._v("/api/**")]),e._v(" and the route url is "),t("code",[e._v("https://backend/")]),e._v('. This is because most of the time a backend api is only interested in relevant api endpoint and not the full path. If the backend server needs the "api" part in the url the route url can simply be set to '),t("code",[e._v("https://backend/api/")]),e._v(", then the request would get forwarded to with the original path "),t("code",[e._v("https://backend/api/endpoint")]),e._v(".")]),e._v(" "),t("p",[e._v("We expect that this behaviour is good enough and intuitive to understand for most use-cases. However, if you want to implement more complex rewrite behaviour you can use arbitrary regex and replacement strings.")]),e._v(" "),t("p",[e._v("With the rewrite configuration you can overwrite the default path rewrite behaviour of OAG.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("regex")]),e._v(" Regex that matches the route and might extract relevant path segments")]),e._v(" "),t("li",[t("code",[e._v("replacement")]),e._v(" Replacement string that can use defines path segments")])]),e._v(" "),t("p",[e._v("Internally the regex and replacement is processed by the Spring Cloud Gateway with the Java String replaceAll method. See snippet bellow:")]),e._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getURI")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getRawPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" newPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("replaceAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("regexp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" replacement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h4",{attrs:{id:"default-rewrite-behaviour-detailed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-rewrite-behaviour-detailed"}},[e._v("#")]),e._v(" Default Rewrite Behaviour (Detailed)")]),e._v(" "),t("p",[e._v("If no rewrite configuration is defined the following default configuration is used:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("regex")]),e._v(": "),t("code",[e._v("<route-path-base>(?<segment>.*)")]),e._v(" where "),t("code",[e._v("<route-path-base>")]),e._v(" is the path of the route without trailing wildcards")]),e._v(" "),t("li",[t("code",[e._v("replacement")]),e._v(": "),t("code",[e._v("<route-uri-path>${segment}")]),e._v(" where "),t("code",[e._v("<route-uri-path>")]),e._v(" is the path of the defined url for this route with a trailing slash")])]),e._v(" "),t("p",[e._v("This leads to the following default behaviour:")]),e._v(" "),t("h5",{attrs:{id:"example-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[e._v("#")]),e._v(" Example 1")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Route Path:                   /api/**\nRoute Url:                    http://localhost:7777/\nRequest Path:                 /api/messages/123\nResulting downstream request: http://localhost:7777/messages/123\n")])])]),t("h5",{attrs:{id:"example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example 2")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Route Path:                   /rewrite1/**\nRoute Url:                    http://localhost:7777/rewritten/\nRequest Path:                 /rewrite1/message.txt\nResulting downstream request: http://localhost:7777/rewritten/message.txt\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);