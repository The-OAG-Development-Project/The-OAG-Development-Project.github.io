(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{328:function(e,o,t){"use strict";t.r(o);var n=t(14),i=Object(n.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"logging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),o("p",[e._v("In this section we explain how the log subsystem is configured.")]),e._v(" "),o("p",[e._v("You configure the log in file application.yaml found in the resources folder of OAG.\nThere the section "),o("code",[e._v("logging:")]),e._v(" is relevant. This section is standard SpringBoot and you can find details about log configuration "),o("a",{attrs:{href:"https://howtodoinjava.com/spring-boot2/logging/configure-logging-application-yml/",target:"_blank",rel:"noopener noreferrer"}},[e._v("for example here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("One special thing we are using is the log-pattern. Here we apply "),o("code",[e._v("%X{oag.CorrId}")]),e._v(". This makes sure that the trace id (or correlation id) is written with each log statement. So make sure your log pattern contains "),o("code",[e._v("%X{oag.CorrId}")]),e._v(" if you need log correlation - which we strongly recommend.")]),e._v(" "),o("p",[e._v("When it comes to log destinations we currently ship only what comes with SpringBoot out of the box.")])])}),[],!1,null,null,null);o.default=i.exports}}]);