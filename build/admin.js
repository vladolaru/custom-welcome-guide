!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},,function(e,t){e.exports=window.wp.api},function(e,t){e.exports=window.wp.data},,function(e,t){e.exports=window.wp.notices},,function(e,t){e.exports=window.wp.compose},,function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(1),s=o(2),c=o(4),a=o.n(c),r=o(5),l=(o(9),o(7));const d=()=>{const e=Object(r.useSelect)(e=>e(l.store).getNotices().filter(e=>"snackbar"===e.type),[]);console.log(i.SnackbarList);const{removeNotice:t}=Object(r.useDispatch)(l.store);return Object(n.createElement)(i.SnackbarList,{className:"edit-site-notices",notices:e,onRemove:t})};class u extends n.Component{constructor(){super(...arguments),this.state={isAPILoaded:!1,isShowPost:!0,isShowPage:!0,isShowCPT:!1}}componentDidMount(){a.a.loadPromise.then(()=>{this.settings=new a.a.models.Settings;const{isAPILoaded:e}=this.state;e||this.settings.fetch().then(e=>{this.setState({isShowPost:e.admin_welcome_guide_is_show_post?e.admin_welcome_guide_is_show_post:"",isShowPage:e.admin_welcome_guide_is_show_page?e.admin_welcome_guide_is_show_post:"",isShowCPT:e.admin_welcome_guide_is_show_cpt?e.admin_welcome_guide_is_show_cpt:"",isAPILoaded:!0})})})}toggleCheckbox(e){this.setState({[e]:!this.state[e]})}render(){const{isAPILoaded:e}=this.state;return e?Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"admin-welcome-guide__header"},Object(n.createElement)("h2",null,Object(n.createElement)(i.Icon,{icon:"admin-plugins"})," ",Object(s.__)("Welcome Guide Options","admin-welcome-guide")),Object(n.createElement)(i.PanelBody,null,Object(n.createElement)(i.PanelRow,null,Object(n.createElement)(i.ToggleControl,{label:Object(s.__)("Show guides in the Post editor","admin-welcome-guide"),help:"Show a list of all the admin guides in the post editor's sidebar.",checked:this.state.isShowPost,onChange:this.toggleCheckbox.bind(this,"isShowPost")})),Object(n.createElement)(i.PanelRow,null,Object(n.createElement)(i.ToggleControl,{label:Object(s.__)("Show guides in the Page editor","admin-welcome-guide"),help:"Display the admin guides in the page editor's sidebar.",checked:this.state.isShowPage,onChange:this.toggleCheckbox.bind(this,"isShowPage")})),Object(n.createElement)(i.PanelRow,null,Object(n.createElement)(i.ToggleControl,{label:Object(s.__)("Show guides in Custom Post Types","admin-welcome-guide"),help:"Enable the welcome guides for custom post types. Note that they need to support the Gutenberg editor for this option to work.",checked:this.state.isShowCPT,onChange:this.toggleCheckbox.bind(this,"isShowCPT")}))),Object(n.createElement)(i.Button,{isPrimary:!0,isLarge:!0,onClick:()=>{const{isShowPost:e,isShowPage:t,isShowCPT:o}=this.state;new a.a.models.Settings({admin_welcome_guide_is_show_post:e?"true":"",admin_welcome_guide_is_show_page:t?"true":"",admin_welcome_guide_is_show_cpt:o?"true":""}).save(),Object(r.dispatch)("core/notices").createNotice("success",Object(s.__)("Settings Saved","wholesome-plugin"),{type:"snackbar",isDismissible:!0})}},Object(s.__)("Save","admin-welcome-guide"))),Object(n.createElement)("div",{className:"admin-welcome-guide__notices"},Object(n.createElement)(d,null))):Object(n.createElement)("h2",null,"Loading...")}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("admin-welcome-guide-wrapper");e&&Object(n.render)(Object(n.createElement)(u,null),e)})}]);