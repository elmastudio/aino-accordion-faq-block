(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{9:function(e,t,o){}}]),function(e){function t(t){for(var n,r,c=t[0],i=t[1],s=t[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(b&&b(t);p.length;)p.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,c=1;c<o.length;c++){var i=o[c];0!==a[i]&&(n=!1)}n&&(l.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={1:0},l=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/build/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var b=i;l.push([8,2]),o()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,o){var n;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var r=a.apply(null,n);r&&e.push(r)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var c in n)o.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},,function(e,t){e.exports=window.wp.blocks},function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,o.apply(this,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){e.exports=o(13)},,,,,function(e,t,o){"use strict";o.r(t);var n=o(6),a=(o(9),o(0));const{Path:l,SVG:r}=wp.components;var c=Object(a.createElement)(r,{className:"components-ainoblocks-svg","aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"#4caeab",d:"M0 8h16v11h-11.72l-4.28 4z"}),Object(a.createElement)("path",{fill:"#7bd9d6",d:"M24 1h-16v11h11.72l4.28 4z"}),Object(a.createElement)("path",{fill:"#216f6d",d:"M8 8h8v4h-8v-4z"})),i=o(4),s=o.n(i),b=o(1),d=o(3),p=o(2),u=o(7),f=o.n(u);Object(n.registerBlockType)("ainoblocks/accordion-faq-block",{icon:c,edit:function({attributes:e,setAttributes:t,className:o,onSelect:n}){const{question:l,borderRadius:r,iconPosition:c,border:i,paddingTop:u,paddingBottom:f,paddingLeft:_,paddingRight:v}=e,g=s()(o,c,{["br__"+r]:r||void 0,["pt__"+u]:u||void 0,["pb__"+f]:f||void 0,["pl__"+_]:_||void 0,["pr__"+v]:v||void 0,"has-border":i}),h=Object(d.useBlockProps)({className:g,style:{borderRadius:r?r+"px":void 0}}),m=[{value:"none",label:Object(b.__)("Not set","ainoblocks")},{value:"xxs",label:Object(b.__)("SSX","ainoblocks")},{value:"xs",label:Object(b.__)("XS","ainoblocks")},{value:"s",label:Object(b.__)("S","ainoblocks")},{value:"m",label:Object(b.__)("M","ainoblocks")},{value:"l",label:Object(b.__)("L","ainoblocks")},{value:"xl",label:Object(b.__)("XL","ainoblocks")},{value:"xxl",label:Object(b.__)("XXL","ainoblocks")},{value:"xxxl",label:Object(b.__)("3XL","ainoblocks")},{value:"xxxxl",label:Object(b.__)("4XL","ainoblocks")}],O=[{value:"icon__right",label:Object(b.__)("right-aligned","accordion-faq-block")},{value:"icon__left",label:Object(b.__)("left-aligned","accordion-faq-block")}],[j,x]=Object(a.useState)(!1);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(d.InspectorControls,null,Object(a.createElement)(p.PanelBody,{title:Object(b.__)("Accordion FAQ settings","accordion-faq-block")},Object(a.createElement)(p.SelectControl,{label:Object(b.__)("Icon Position","accordion-faq-block"),value:c,options:O,onChange:e=>t({iconPosition:e})}),Object(a.createElement)(p.ToggleControl,{label:Object(b.__)("Bottom Border","accordion-faq-block"),checked:!!i,onChange:()=>t({border:!i}),help:i?Object(b.__)("THe block has bottom border.","accordion-faq-block"):Object(b.__)("Toggle for a border below the block.","accordion-faq-block")}),Object(a.createElement)(p.SelectControl,{label:Object(b.__)("Border Radius (all)","ainoblocks"),value:r,options:m,onChange:e=>t({borderRadius:e})})),Object(a.createElement)(p.PanelBody,{title:Object(b.__)("Responsive Spacing","accordion-faq-block")},Object(a.createElement)(p.RangeControl,{label:Object(b.__)("Padding Top","ainoblocks"),value:u,onChange:e=>t({paddingTop:e}),min:0,max:19,allowReset:!0,resetFallbackValue:0}),Object(a.createElement)(p.RangeControl,{label:Object(b.__)("Padding Bottom","ainoblocks"),value:f,onChange:e=>t({paddingBottom:e}),min:0,max:19,allowReset:!0,resetFallbackValue:0}),Object(a.createElement)(p.RangeControl,{label:Object(b.__)("Padding Left","ainoblocks"),value:_,onChange:e=>t({paddingLeft:e}),min:0,max:19,allowReset:!0,resetFallbackValue:0}),Object(a.createElement)(p.RangeControl,{label:Object(b.__)("Padding Right","ainoblocks"),value:v,onChange:e=>t({paddingRight:e}),min:0,max:19,allowReset:!0,resetFallbackValue:0}))),Object(a.createElement)("div",h,Object(a.createElement)("div",{className:"accordion"},Object(a.createElement)(d.RichText,{tagName:"h3",allowedFormats:["core/bold","core/italic"],value:l,className:"has-xxs-font-size",placeholder:Object(b.__)("Write a question ...","ainoblocks"),onChange:e=>t({question:e})})),Object(a.createElement)("div",{className:"panel"},Object(a.createElement)(d.InnerBlocks,{template:[["core/paragraph",{placeholder:"Write an answer ..."}]]}))))},save:function({attributes:e}){const{borderRadius:t,iconPosition:o,border:n,question:l,paddingTop:r,paddingBottom:c,paddingLeft:i,paddingRight:b}=e,p=s()(s.a,o,{["br__"+t]:t||void 0,["pt__"+r]:r||void 0,["pb__"+c]:c||void 0,["pl__"+i]:i||void 0,["pr__"+b]:b||void 0,"has-border":n}),u=d.useBlockProps.save({className:p,style:{borderRadius:t?t+"px":void 0}});return Object(a.createElement)("div",f()({},u,{"x-data":"{ open: false }","@click":"open = !open",":class":"{'open': open, 'close': ! open }"}),Object(a.createElement)("div",{className:"accordion"},Object(a.createElement)(d.RichText.Content,{tagName:"h3",className:"has-xxs-font-size",value:l})),Object(a.createElement)("div",{className:"panel"},Object(a.createElement)(d.InnerBlocks.Content,null)))}})}]);