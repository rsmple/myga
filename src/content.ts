const APPLY_TIMEOUT = 1000

let timeout: number | null = null

const getGridValue = () => {
  return new Promise(resolve => {
    chrome.storage.local.get(['gridValue'], (data) => resolve(data.gridValue))
  })
}

const applyChanges = async () => {
  if (timeout) clearTimeout(timeout)

  const value = await getGridValue()

  if (!value) return

  document.querySelectorAll('ytd-rich-grid-renderer').forEach(el => {
    if (!(el instanceof HTMLElement)) return

    el.style.setProperty('--ytd-rich-grid-items-per-row', value.toString(), 'important')
  })

  timeout = setTimeout(applyChanges, APPLY_TIMEOUT)
}

chrome.storage.local.onChanged.addListener(applyChanges)