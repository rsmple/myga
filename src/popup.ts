const input = document.getElementById('gridInput') as HTMLInputElement

chrome.storage.local.get(['gridValue'], (data) => {
  if (data.gridValue) input.value = data.gridValue.toString()
})

input.addEventListener('change', () => {
  const value = parseInt(input.value)
  if (!isNaN(value) && value > 0) {
    chrome.storage.local.set({gridValue: value})
  }
})