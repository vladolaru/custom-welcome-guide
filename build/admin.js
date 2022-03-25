!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=17)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(5);o(6);const c=custom_welcome_guide_script_params.rest_url,s=()=>{const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{(async()=>{const e=await fetch(c+"wp/v2/guides?filter[orderby]=date&order=asc"),o=await e.json();t(o)})()},[]),e}},function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,o.apply(this,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.api},function(e,t,o){"use strict";var n=o(4),c=o.n(n),s=o(0),i=(o(2),o(1)),l=o(3);t.a=e=>{const t=Object(l.a)(),{parentPostId:o}=e;function n(e){let t=document.createElement("div");t.innerHTML=e;let o=t.querySelectorAll("style, script"),n=o.length;for(;n--;)o[n].parentNode.removeChild(o[n]);return t.innerHTML}return t.length>0&&Object(s.createElement)(i.Guide,c()({},e,{className:"edit-post-welcome-guide custom-welcome-guide",pages:t.filter(e=>e.parent==o||e.id==o).map(e=>({image:e.featured_image?Object(s.createElement)("div",{className:"post-thumbnail"},Object(s.createElement)("img",{src:e.featured_image})):"",content:Object(s.createElement)("div",null,Object(s.createElement)("h2",{className:"edit-post-welcome-guide__heading"},e.title.rendered),Object(s.createElement)("div",{className:"edit-post-welcome-guide__text",dangerouslySetInnerHTML:{__html:n(e.content.rendered)}}))}))}))}},function(e,t,o){"use strict";var n=o(4),c=o.n(n),s=o(0),i=(o(2),o(1)),l=o(3);t.a=e=>{const t=Object(l.a)(),{parentPostId:o}=e;function n(e){let t=document.createElement("div");t.innerHTML=e;let o=t.querySelectorAll("style, script"),n=o.length;for(;n--;)o[n].parentNode.removeChild(o[n]);return t.innerHTML}return t.length>0&&Object(s.createElement)(i.Guide,c()({className:"custom-deprecated-guide"},e),t.filter(e=>e.parent==o||e.id==o).map((e,t)=>Object(s.createElement)(i.GuidePage,{key:t,className:"edit-post-welcome-guide__page"},Object(s.createElement)("div",{className:"post-thumbnail"},Object(s.createElement)("img",{className:"edit-post-welcome-guide__image",src:e.featured_image})),Object(s.createElement)("h1",{className:"edit-post-welcome-guide__heading"},e.title.rendered),Object(s.createElement)("div",{className:"edit-post-welcome-guide__text",dangerouslySetInnerHTML:{__html:n(e.content.rendered)}}))))}},function(e,t){e.exports=window.wp.data},function(e,t,o){"use strict";var n=o(0),c=(o(3),o(7)),s=o(8);t.a=e=>{const t=custom_welcome_guide_script_params.show_deprecated_guide,[o,i]=Object(n.useState)(!0),l=custom_welcome_guide_script_params.guide_settings.featured_post_id;return!localStorage.getItem("custom-welcome-guide")&&l&&Object(n.createElement)(n.Fragment,null,o&&(t?Object(n.createElement)(s.a,{parentPostId:l,onFinish:()=>{i(!1),localStorage.setItem("custom-welcome-guide","yes")}}):Object(n.createElement)(c.a,{parentPostId:l,onFinish:()=>{i(!1),localStorage.setItem("custom-welcome-guide","yes")}})))}},,,function(e,t){e.exports=window.wp.compose},,function(e,t){e.exports=window.wp.notices},,function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(1),s=o(2),i=o(6),l=o.n(i),r=o(9),a=o(13),d=(o(15),o(10));const u=Object(a.compose)(Object(r.withSelect)(e=>({notices:e("core/notices").getNotices()})),Object(r.withDispatch)(e=>({removeNotice:e("core/notices").removeNotice})))(({notices:e,removeNotice:t})=>{const o=e?e.filter(e=>"snackbar"===e.type):[];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(c.SnackbarList,{className:"custom-welcome-guide-admin-notices",notices:o,onRemove:t}))}),m=()=>document.body.className.indexOf("block-editor-page")>-1?null:custom_welcome_guide_script_params.guide_settings.is_show_admin?Object(n.createElement)(d.a,null):null;class p extends n.Component{constructor(){super(...arguments),this.state={isAPILoaded:!1,isShowPost:!0,isShowPage:!0,isShowCPT:!1,isShowAdmin:!1,featuredPostId:"",posts:""}}componentDidMount(){l.a.loadPromise.then(()=>{this.settings=new l.a.models.Settings;const{isAPILoaded:e}=this.state;e||this.settings.fetch().then(e=>{this.setState({isShowPost:e.cwg_options.is_show_post?e.cwg_options.is_show_post:"",isShowPage:e.cwg_options.is_show_page?e.cwg_options.is_show_page:"",isShowCPT:e.cwg_options.is_show_cpt?e.cwg_options.is_show_cpt:"",isShowAdmin:e.cwg_options.is_show_admin?e.cwg_options.is_show_admin:"",featuredPostId:e.cwg_options.featured_post_id?e.cwg_options.featured_post_id:"",isAPILoaded:!0})})}),fetch(custom_welcome_guide_script_params.rest_url+"wp/v2/guides").then(e=>e.json()).then(e=>{this.setState({posts:e})})}toggleCheckbox(e){this.setState({[e]:!this.state[e]})}dropdownWithOptions(e){const t=[{label:Object(s.__)("None","custom-welcome-guide"),value:""}];return e.forEach(e=>{0==e.parent&&t.push({label:e.title.rendered,value:e.id})}),t}render(){const{isAPILoaded:e,posts:t,featuredPostId:o}=this.state,i=custom_welcome_guide_script_params.site_url;return e?Object(n.createElement)(n.Fragment,null,Object(n.createElement)("h2",null,Object(n.createElement)(c.Icon,{icon:"admin-plugins"})," ",Object(s.__)("Welcome Guide Options","custom-welcome-guide")),Object(n.createElement)("p",null,Object(s.__)("The settings for the Custom Welcome Guide plugin.","custom-welcome-guide")),0==t.length&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("p",null,"You haven't created any guides yet. Get started by ",Object(n.createElement)("a",{href:i+"/wp-admin/edit.php?post_type=guides"},""+Object(s.__)("adding a guide.","custom-welcome-guide")))),Object(n.createElement)(c.PanelBody,null,Object(n.createElement)(c.PanelRow,null,Object(n.createElement)(c.ToggleControl,{label:Object(s.__)("Show guides in the Post editor","custom-welcome-guide"),help:Object(s.__)("Show a list of all the admin guides in the post editor's sidebar.","custom-welcome-guide"),checked:this.state.isShowPost,onChange:this.toggleCheckbox.bind(this,"isShowPost")})),Object(n.createElement)(c.PanelRow,null,Object(n.createElement)(c.ToggleControl,{label:Object(s.__)("Show guides in the Page editor","custom-welcome-guide"),help:Object(s.__)("Display the admin guides in the page editor's sidebar.","custom-welcome-guide"),checked:this.state.isShowPage,onChange:this.toggleCheckbox.bind(this,"isShowPage")})),Object(n.createElement)(c.PanelRow,null,Object(n.createElement)(c.ToggleControl,{label:Object(s.__)("Show guides in Custom Post Types","custom-welcome-guide"),help:Object(s.__)("Enable the welcome guides for custom post types. Note that they need to use the Block editor for this option to work.","custom-welcome-guide"),checked:this.state.isShowCPT,onChange:this.toggleCheckbox.bind(this,"isShowCPT")})),Object(n.createElement)(c.PanelRow,null,Object(n.createElement)(c.SelectControl,{help:Object(s.__)("Choose a Featured Guide if you want to replace the Block Editor's default Welcome Guide Modal that pops up when you open the Block Editor for the first time.","custom-welcome-guide"),label:Object(s.__)("Featured Guide","custom-welcome-guide"),onChange:e=>this.setState({featuredPostId:e}),options:t&&this.dropdownWithOptions(t),value:o})),Object(n.createElement)(c.PanelRow,null,o&&Object(n.createElement)(c.ToggleControl,{label:Object(s.__)("Show the featured guide in the whole WordPress Admin","custom-welcome-guide"),help:Object(s.__)("By default the featured guide pops up in the Block Editor only. Enable this option to load the featured guide on all admin pages.","custom-welcome-guide"),checked:this.state.isShowAdmin,onChange:this.toggleCheckbox.bind(this,"isShowAdmin")}))),Object(n.createElement)(c.Button,{isPrimary:!0,onClick:()=>{localStorage.removeItem("custom-welcome-guide");const{isShowPost:e,isShowPage:t,isShowCPT:i,isShowAdmin:a}=this.state;new l.a.models.Settings({cwg_options:{is_show_post:e?"true":"",is_show_page:t?"true":"",is_show_cpt:i?"true":"",is_show_admin:a?"true":"",featured_post_id:o}}).save(),Object(r.dispatch)("core/notices").createNotice("success",Object(s.__)("Settings Saved","custom-welcome-guide"),{type:"snackbar",isDismissible:!0,icon:Object(n.createElement)(c.Icon,{icon:"smiley"})})}},Object(s.__)("Save","custom-welcome-guide")),Object(n.createElement)(u,null)):Object(n.createElement)(n.Fragment,null,Object(n.createElement)("h2",null,Object(n.createElement)(c.Icon,{icon:"admin-plugins"})," ",Object(s.__)("Welcome Guide Options","custom-welcome-guide")),Object(n.createElement)(c.PanelBody,null,Object(n.createElement)(c.PanelRow,null,Object(n.createElement)(c.Spinner,null))))}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("custom-welcome-guide-wrapper");e&&Object(n.render)(Object(n.createElement)(p,null),e)}),document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("div"),t=document.body.appendChild(e);t&&Object(n.render)(Object(n.createElement)(m,null),t),localStorage.getItem("cwg-editor-panel-open")||(null!==Object(r.dispatch)("core/edit-post")&&Object(r.dispatch)("core/edit-post").toggleEditorPanelOpened("welcome-guide-plugin-document-setting-panel/welcome-guide"),localStorage.setItem("cwg-editor-panel-open","yes"))})}]);