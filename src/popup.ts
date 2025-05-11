import {Settings} from './types'
// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css'

const input = document.getElementById('video_count') as HTMLInputElement

input.addEventListener('change', () => {
  const value = parseInt(input.value)
  if (!isNaN(value) && value > 0) {
    chrome.storage.local.set<Settings>({video_count: value})
  }
})

const checkbox = document.getElementById('hide_shorts') as HTMLInputElement

checkbox.addEventListener('change', () => {
  chrome.storage.local.set<Settings>({hide_shorts: checkbox.checked})
})

const resetForm = () => {
  chrome.storage.local.get<Settings>(['video_count', 'hide_shorts'], (data) => {
    input.value = data.video_count ? data.video_count.toString() : ''
    checkbox.checked = data.hide_shorts ?? false
  })
}

resetForm()

const buttonReset = document.getElementById('button_reset') as HTMLButtonElement

buttonReset.addEventListener('click', () => {
  chrome.storage.local.remove<Settings>(['video_count', 'hide_shorts'])

  resetForm()
})