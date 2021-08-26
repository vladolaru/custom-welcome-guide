/**
 * The Main Js file. Written with ESNext standard and JSX support – build step required.
 * It adds and additional tab in the WordPress Block Editor (Gutenberg) sidebar.
 * The plugin takes advantage of the WordPress rest api introduced in version 4.7.
 * It uses Gutenberg components from WordPress core to load a list of user defined guides.
 * @package Admin Welcome Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */

import './style.scss';
const { PluginDocumentSettingPanel } = wp.editPost;

/**
 * Internal dependencies
 */
import GuideList from './templates/guide-list';
import { pluginOptions } from './data'

const { registerPlugin } = wp.plugins;

/** 
 * Determine whether to show a list of guides in the Block Editor sidebar 
 * Based on plugin options 
 * 
 */
function showGuideList() {
  const isPostEditor = document.body.className.indexOf('post-type-post') > -1;
  const isPаgeEditor = document.body.className.indexOf('post-type-page') > -1;
  const isCPTEditor = !isPostEditor && !isPаgeEditor;
  const { isShowPost, isShowPage, isShowCPT} = pluginOptions();
  
console.log(isShowPage);
  if (isPostEditor && isShowPost) {
    return true
  }
  else if (isPаgeEditor && isShowPage) {
    return true
  }
  else if (isCPTEditor && isShowCPT) {
    return true
  }
  else {
    return false
  }
}

/**
 * Register the Welcome Guide plugin in the Block Editor sidebar
 * @package Admin Tour Guide
 * @since 0.0.1
 * @see https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/
 */

const WelcomeGuidePluginDocumentSettingPanel = () => (

  showGuideList() &&
  <PluginDocumentSettingPanel
    name="welcome-guide"
    title="Welcome Guide"
    className="welcome-guide"
  >
    <GuideList />
  </PluginDocumentSettingPanel>
);

registerPlugin('welcome-guide-plugin-document-setting-panel', {
  render: WelcomeGuidePluginDocumentSettingPanel,
  icon: 'welcome-view-site'
})