import './content.css'
import {Settings} from './types'

const APPLY_TIMEOUT = 1000

let timeout: number | null = null

const getSettingsValue = <Key extends keyof Settings>(key: Key) => {
  return new Promise<Settings[Key] | null>(resolve => {
    chrome.storage.local.get<Settings>([key], (data) => resolve(data[key] ?? null))
  })
}

const applyVideoCount = async () => {
  const value = await getSettingsValue('video_count')

  if (!value) return

  document.querySelectorAll('ytd-rich-grid-renderer').forEach(el => {
    if (!(el instanceof HTMLElement)) return

    el.style.setProperty('--ytd-rich-grid-items-per-row', value.toString(), 'important')
  })
}

const CLASS_NAME = 'myga-hide-shorts-----'

const getShowShorts = async () => {
  const value = await getSettingsValue('hide_shorts')

  if (value) document.body.classList.add(CLASS_NAME)
  else document.body.classList.remove(CLASS_NAME)
}

const applyChanges = async () => {
  if (timeout) clearTimeout(timeout)

  await getShowShorts()
  await applyVideoCount()

  timeout = setTimeout(applyChanges, APPLY_TIMEOUT)
}

chrome.storage.local.onChanged.addListener(applyChanges)

applyChanges()