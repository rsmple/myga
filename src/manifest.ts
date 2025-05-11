import {EXTENSION_NAME} from './models'

import pkg from '../package.json' assert { type: 'json' }

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: EXTENSION_NAME,
  version: pkg.version,
  action: {
    default_popup: 'popup.html',
  },
  content_scripts: [
    {
      matches: ['https://www.youtube.com/*'],
      js: ['content.js'],
      css: ['content.css'],
    },
  ],
  permissions: ['storage'],
  host_permissions: ['https://www.youtube.com/*'],
}

export default manifest