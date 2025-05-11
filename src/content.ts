chrome.storage.local.get(['gridValue'], (data) => {
  if (!data.gridValue) return

  const applyValue = () => {
    document.querySelectorAll('ytd-rich-grid-renderer').forEach(el => {
      if (!(el instanceof HTMLElement)) return

      el.style.setProperty('--ytd-rich-grid-items-per-row', data.gridValue.toString(), 'important')
    })
  }

  applyValue()

  setInterval(applyValue, 1000)
})