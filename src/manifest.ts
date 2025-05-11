import pkg from '../package.json' assert { type: 'json' }

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: 'MYGA',
  version: pkg.version,
  action: {
    default_popup: 'popup.html',
  },
  content_scripts: [
    {
      matches: ['https://www.youtube.com/*'],
      js: ['content.js'],
    },
  ],
  permissions: ['storage'],
  host_permissions: ['https://www.youtube.com/*'],
}

export default manifest