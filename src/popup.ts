import {Settings} from './types'

const input = document.getElementById('video_count') as HTMLInputElement

chrome.storage.local.get<Settings>(['video_count'], (data) => {
  if (data.video_count) input.value = data.video_count.toString()
})

input.addEventListener('change', () => {
  const value = parseInt(input.value)
  if (!isNaN(value) && value > 0) {
    chrome.storage.local.set<Settings>({video_count: value})
  }
})

const checkbox = document.getElementById('hide_shorts') as HTMLInputElement

chrome.storage.local.get<Settings>(['hide_shorts'], (data) => {
  checkbox.checked = data.hide_shorts ?? false
})

checkbox.addEventListener('change', () => {
  chrome.storage.local.set<Settings>({hide_shorts: checkbox.checked})
})