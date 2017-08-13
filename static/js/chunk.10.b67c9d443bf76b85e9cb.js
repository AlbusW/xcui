webpackJsonp([10],{398:function(t,a,s){var n=s(0)(s(441),s(443),null,null,null);t.exports=n.exports},429:function(t,a,s){var n=s(430);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(393)("30a4fb3e",n,!0)},430:function(t,a,s){(t.exports=s(392)(!1)).push([t.i,"",""])},441:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(s(442));s(429),a.default={data:function(){return{loading:!0,imgPara:n.default,fullscreenLoading:!1}},methods:{openFullScreen:function(){var t=this;this.fullscreenLoading=!0,setTimeout(function(){t.fullscreenLoading=!1},3e3)}}}},442:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAABCBAMAAADK0p0hAAAAMFBMVEW8vsDk5eb////GyMrs7O3NztDIycvm5+jv7/Dw8PHR0tTV19gAAAAAAAAAAAAAAADgm+79AAAAEHRSTlP///////////////////8A4CNdGQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKRJREFUeAHt2DERwkAQhtEtQQ0nARwg4Rqup4qdk4C0OLh0mZTJzkBB3ifhzTb7R2+JVD9RQpmeJ5UjR44cOZEjR44cucekRO97DKWayZEjR46cyJEjR47cX0aOHDlyNbTtuluuhMiRI0eOHDly5MiR+3XkyOny9Y/fzQ3Z58iRIydy5MiRIydy5MiRU3Kf040cOXLkyIkcOXLkyCkl19uB9FrlFgdEOp+J2PbuAAAAAElFTkSuQmCC"},443:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("Loading 加载中提示")]),t._v(" "),s("p",[t._v("用于页面和区块的加载中状态, 一般在页面局部处于等待异步数据或正在渲染过程时使用。")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("基本使用")]),t._v(" "),s("xcui-demo",[s("div",{slot:"source"},[s("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"400px",height:"60px",padding:"30px",outline:"1px dotted #eee"}},[s("img",{attrs:{src:t.imgPara}})])]),t._v(" "),s("span",{slot:"info-title"},[t._v("说明")]),t._v(" "),s("div",{slot:"info"},[s("p",[t._v("基本使用，在需要加载中提示的区块元素上设置"),s("code",[t._v("v-loading")]),t._v("指令，并绑定"),s("code",[t._v("Boolean")]),t._v("即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加"),s("code",[t._v("body")]),t._v("修饰符，可以使遮罩插入至 "),s("code",[t._v("DOM")]),t._v(" 中的 "),s("code",[t._v("body")]),t._v(" 上。")])]),t._v(" "),s("div",{slot:"highlight"},[s("pre",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("v-loading.body")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("loading"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token style-attr language-css"},[s("span",{staticClass:"token attr-name"},[t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("style")])]),s("span",{staticClass:"token punctuation"},[t._v('="')]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token property"},[t._v("width")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 400px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("height")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 60px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("padding")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),s("span",{staticClass:"token property"},[t._v("outline")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 1px dotted #eee"),s("span",{staticClass:"token punctuation"},[t._v(";")])]),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v(":src")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("imgPara"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("div")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),s("span",{staticClass:"token script language-javascript"},[t._v("\n    "),s("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),s("span",{staticClass:"token function"},[t._v("data")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),s("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                loading"),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token boolean"},[t._v("true")]),t._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),s("h2",[t._v("其他加载效果")]),t._v(" "),s("xcui-demo",[s("div",{slot:"source"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"30%",display:"inline-block","margin-top":"15px",padding:"30px",outline:"1px dotted #eee"},attrs:{"x-loading-type":"grid"}},[s("img",{attrs:{src:t.imgPara}})]),t._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"30%",display:"inline-block","margin-top":"15px",padding:"30px",outline:"1px dotted #eee"},attrs:{"x-loading-type":"dot"}},[s("img",{attrs:{src:t.imgPara}})])]),t._v(" "),s("span",{slot:"info-title"},[t._v("说明")]),t._v(" "),s("div",{slot:"info"},[s("p",[t._v("除了默认效果外，还可以通过在需要Loading的区块元素上设置"),s("code",[t._v("x-loading-type")]),t._v("属性来使用其他两种效果："),s("code",[t._v("grid")]),t._v("和"),s("code",[t._v("dot")]),t._v("。")])]),t._v(" "),s("div",{slot:"highlight"},[s("pre",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("v-loading")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("loading"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("x-loading-type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("grid"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token style-attr language-css"},[s("span",{staticClass:"token attr-name"},[t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("style")])]),s("span",{staticClass:"token punctuation"},[t._v('="')]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token property"},[t._v("width")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30%"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("display")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("inline-block"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("margin-top")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 15px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("padding")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),s("span",{staticClass:"token property"},[t._v("outline")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 1px dotted #eee"),s("span",{staticClass:"token punctuation"},[t._v(";")])]),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v(":src")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("imgPara"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("div")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("v-loading")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("loading"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("x-loading-type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("dot"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token style-attr language-css"},[s("span",{staticClass:"token attr-name"},[t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("style")])]),s("span",{staticClass:"token punctuation"},[t._v('="')]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token property"},[t._v("width")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30%"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("display")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("inline-block"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("margin-top")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 15px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("padding")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),s("span",{staticClass:"token property"},[t._v("outline")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 1px dotted #eee"),s("span",{staticClass:"token punctuation"},[t._v(";")])]),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v(":src")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("imgPara"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("div")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),s("h2",[t._v("整页加载")]),t._v(" "),s("xcui-demo",[s("div",{slot:"source"},[s("x-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:t.openFullScreen}},[t._v("\n        显示整页加载，3 秒后消失\n    ")])],1),t._v(" "),s("span",{slot:"info-title"},[t._v("说明")]),t._v(" "),s("div",{slot:"info"},[s("p",[t._v("当需要全屏遮罩时，可使用"),s("code",[t._v("fullscreen")]),t._v("修饰符（此时遮罩会插入至 body 上）。此时若需要锁定屏幕的滚动，可以使用"),s("code",[t._v("lock")]),t._v("修饰符。")])]),t._v(" "),s("div",{slot:"highlight"},[s("pre",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-button")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("type")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("primary"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("@click")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("openFullScreen"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("v-loading.fullscreen.lock")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("fullscreenLoading"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        显示整页加载，3 秒后消失\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-button")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),s("span",{staticClass:"token script language-javascript"},[t._v("\n    "),s("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),s("span",{staticClass:"token function"},[t._v("data")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),s("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                fullscreenLoading"),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token boolean"},[t._v("false")]),t._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n        "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        methods"),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),s("span",{staticClass:"token function"},[t._v("openFullScreen")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),s("span",{staticClass:"token keyword"},[t._v("this")]),s("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("fullscreenLoading "),s("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),s("span",{staticClass:"token boolean"},[t._v("true")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n                "),s("span",{staticClass:"token function"},[t._v("setTimeout")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),s("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),s("span",{staticClass:"token operator"},[t._v("=")]),s("span",{staticClass:"token operator"},[t._v(">")]),t._v(" "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                    "),s("span",{staticClass:"token keyword"},[t._v("this")]),s("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("fullscreenLoading "),s("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),s("span",{staticClass:"token boolean"},[t._v("false")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n                "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),s("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),s("span",{staticClass:"token number"},[t._v("3000")]),s("span",{staticClass:"token punctuation"},[t._v(")")]),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),s("span",{staticClass:"token punctuation"},[s("span",{staticClass:"token punctuation"},[t._v("}")])]),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")]),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),s("h2",[t._v("自定义加载文案")]),t._v(" "),s("xcui-demo",[s("div",{slot:"source"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"30%",height:"60px",padding:"30px",outline:"1px dotted #eee"},attrs:{"x-loading-text":"拼命加载中"}},[s("img",{attrs:{src:t.imgPara}})])]),t._v(" "),s("span",{slot:"info-title"},[t._v("说明")]),t._v(" "),s("div",{slot:"info"},[s("p",[t._v("通过在需要Loading的区块元素上设置"),s("code",[t._v("x-loading-text")]),t._v("，可进行自定义加载文案。")])]),t._v(" "),s("div",{slot:"highlight"},[s("pre",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("v-loading")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("loading"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("x-loading-text")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("拼命加载中"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token style-attr language-css"},[s("span",{staticClass:"token attr-name"},[t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("style")])]),s("span",{staticClass:"token punctuation"},[t._v('="')]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token property"},[t._v("width")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30%"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("height")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 60px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("padding")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),s("span",{staticClass:"token property"},[t._v("outline")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 1px dotted #eee"),s("span",{staticClass:"token punctuation"},[t._v(";")])]),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v(":src")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("imgPara"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("div")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),s("h2",[t._v("自定义加载图案的大小")]),t._v(" "),s("xcui-demo",[s("div",{slot:"source"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"30%",height:"60px",padding:"30px",outline:"1px dotted #eee"},attrs:{"x-loading-size":"20"}},[s("img",{attrs:{src:t.imgPara}})])]),t._v(" "),s("span",{slot:"info-title"},[t._v("说明")]),t._v(" "),s("div",{slot:"info"},[s("p",[t._v("通过在需要Loading的区块元素上设置"),s("code",[t._v("x-loading-size")]),t._v("，可进行自定义加载图案的大小。默认为40。")])]),t._v(" "),s("div",{slot:"highlight"},[s("pre",[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("v-loading")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("loading"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("x-loading-size")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("20"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token style-attr language-css"},[s("span",{staticClass:"token attr-name"},[t._v(" "),s("span",{staticClass:"token attr-name"},[t._v("style")])]),s("span",{staticClass:"token punctuation"},[t._v('="')]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token property"},[t._v("width")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30%"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("height")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 60px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),s("span",{staticClass:"token property"},[t._v("padding")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 30px"),s("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),s("span",{staticClass:"token property"},[t._v("outline")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" 1px dotted #eee"),s("span",{staticClass:"token punctuation"},[t._v(";")])]),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n        "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{staticClass:"token attr-name"},[t._v(":src")]),s("span",{staticClass:"token attr-value"},[s("span",{staticClass:"token punctuation"},[t._v("=")]),s("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("imgPara"),s("span",{staticClass:"token punctuation"},[t._v('"')])]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("div")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),s("span",{staticClass:"token tag"},[s("span",{staticClass:"token tag"},[s("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),s("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),s("h2",[t._v("Directive Props")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("blockquote",[s("p",[s("code",[t._v("Loading")]),t._v("在XCUI中以指令方式调用。如果完整引入了XCUI，可以直接使用"),s("code",[t._v("v-loading")]),t._v("指令。"),s("br"),t._v("\n在"),s("strong",[t._v("单文件引入")]),t._v("时，由于"),s("code",[t._v("Loading")]),t._v("在XCUI中被注册为一个"),s("a",{attrs:{href:"https://vuejs.org/v2/guide/plugins.html"}},[t._v("Vue 插件")]),t._v(",请使用"),s("code",[t._v("Vue.use(Loading)")]),t._v(" 挂载，再进行使用。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",{staticClass:"markdown-table"},[s("thead",[s("tr",[s("th",[t._v("名字")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("是否必选")]),t._v(" "),s("th",[t._v("可选值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("v-loading")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("与指令的绑定值")]),t._v(" "),s("td",[t._v("必选")]),t._v(" "),s("td",[t._v("true, false")])]),t._v(" "),s("tr",[s("td",[t._v("body")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("指令修饰符，是否将遮罩层插入body")]),t._v(" "),s("td",[t._v("可选")]),t._v(" "),s("td",[t._v("true,false")])]),t._v(" "),s("tr",[s("td",[t._v("fullscreen")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("指令修饰符，是否是全屏Loading")]),t._v(" "),s("td",[t._v("可选")]),t._v(" "),s("td",[t._v("true,false")])]),t._v(" "),s("tr",[s("td",[t._v("lock")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("指令修饰符，全屏时是否锁定滚动条")]),t._v(" "),s("td",[t._v("可选")]),t._v(" "),s("td",[t._v("true,false")])]),t._v(" "),s("tr",[s("td",[t._v("x-loading-type")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td",[t._v("自定义加载动画类型")]),t._v(" "),s("td",[t._v("可选")]),t._v(" "),s("td",[t._v("circle(默认), dot, grid")])]),t._v(" "),s("tr",[s("td",[t._v("x-loading-text")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td",[t._v("自定义加载文案")]),t._v(" "),s("td",[t._v("可选")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("x-loading-size")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("40")]),t._v(" "),s("td",[t._v("加载图案的大小")]),t._v(" "),s("td",[t._v("可选")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("x-loading-class")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td",[t._v("遮罩层的样式名")]),t._v(" "),s("td",[t._v("可选")]),t._v(" "),s("td")])])])}]}}});