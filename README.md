# 🚀✊ MYGA: Make YouTube Great Again ✊🚀

[![GitHub last commit](https://img.shields.io/github/last-commit/rsmple/myga)](https://github.com/your-username/myga/commits/main)
[![Available on the Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Available-brightgreen.svg)](https://chromewebstore.google.com/detail/konfhpobhoanpfggllnfhmmopfoklkcl?utm_source=item-share-cb)
[![Chrome Web Store Rating](https://img.shields.io/chrome-web-store/rating/konfhpobhoanpfggllnfhmmopfoklkcl.svg)](https://chrome.google.com/webstore/detail/konfhpobhoanpfggllnfhmmopfoklkcl)
[![GitHub Stars](https://img.shields.io/github/stars/rsmple/myga?style=social)](https://github.com/your-username/myga/stargazers)

Is your YouTube Subscriptions feed feeling a little... *short* on actual videos and a bit too wide? MYGA is here to help you take back control! This Chrome extension declutters your YouTube experience by banishing Shorts from your Subscriptions page and letting YOU decide how many videos fit comfortably in a row.

Less scrolling, more watching. The way it should be!

## 🤔 Why "MYGA"?

Look, we all love YouTube, but sometimes the UI changes aren't everyone's cup of tea. "Shorts" are great for some, but for others, they're just... in the way, especially on the Subscriptions page. And who decided *that many* videos per row was optimal for *your* screen?

MYGA is a project aimed at giving you back some control over your viewing experience. It's about making *your* YouTube great *for you*, again.

## ✨ Features

*   🖼️ **Custom Video Grid:** You're the boss! Decide how many videos you want to see per row. Want a dense grid of 6? Or a more spacious 3? You got it.
*   🚫 **Shorts Be Gone!:** Poof! The "Shorts" button and the entire "Shorts" shelf on your Subscriptions page will vanish. Enjoy a Shorts-free subscription feed.

## 📸 Screenshots (Show 'Em What They're Getting!)

**Before MYGA:**
![Image: Standard YouTube Subscriptions page with Shorts and default video layout](https://lh3.googleusercontent.com/sWRVxDUb8Cye4oi1jY5KhzYC8vsFmEWYr3Ek2bBi89C56H2hIT1yjD6h8AK2JtwQT8v-vqac2UNr8dxyiRuMNvEq5w=s1600-w1600-h1000)
*Shorts taking up prime real estate.*

**After MYGA:**
![Image: YouTube Subscriptions page with Shorts hidden and custom videos per row](https://lh3.googleusercontent.com/sKu0SiMEXk2uzz-n-w099fvg7yxf0NH99vVaN__x44Ryoz0p9LOv8W5juO3kzJYF8SNSa9OznvO2NvSdnHOF2CnHtw=s1600-w1600-h1000)
*Ahhh, much better. More videos, no Shorts!*

## 🚀 Installation

### Method 1: Chrome Web Store (Recommended) ✨

The easiest and recommended way to install MYGA is directly from the Chrome Web Store! This ensures you get automatic updates.

➡️ **[Install MYGA from the Chrome Web Store](https://chromewebstore.google.com/detail/myga/konfhpobhoanpfggllnfhmmopfoklkcl)**

Simply click the link above and then click "Add to Chrome". You're all set to make your YouTube great again!

### Method 2: Manual Installation (For the Tech-Savvy & Eager Beavers)

1.  **Download or Clone:**
    *   Clone the repo: `git clone https://github.com/your-username/myga.git`
    *   OR [Download the ZIP](https://github.com/rsmple/myga/archive/refs/heads/main.zip) and extract it.
2.  **Build the Extension:**
    *   Navigate to the project directory: `cd myga`
    *   Install dependencies: `npm install`
    *   Build the project: `npm run build`
    *   This will create a `dist` folder with the packaged extension.
3.  **Load into Chrome:**
    *   Open Chrome and go to `chrome://extensions`.
    *   Enable "Developer mode" (usually a toggle in the top right).
    *   Click "Load unpacked".
    *   Select the `dist` folder (the one created by `npm run build`).
4.  **Pin It!** (Optional, but Recommended):
    *   Click the puzzle piece icon (Extensions) in your Chrome toolbar.
    *   Find "MYGA" and click the pin icon next to it. This makes accessing options easier.

## 🛠️ How to Use

1.  Once installed, MYGA automatically applies its magic to your YouTube Subscriptions page (`youtube.com/feed/subscriptions`).
2.  **To customize the number of videos per row:**
    *   Click the MYGA icon in your Chrome toolbar.
    *   This will open the extension's options page.
    *   Changes should apply automatically, but you might need to refresh your YouTube Subscriptions page.

## 💻 Tech Stack

*   **Vite**
*   **TypeScript**
*   **Tailwind CSS**
*   **eco-vue-js**


## 🚨 Important Note

YouTube frequently updates its layout and codebase. This extension directly manipulates the YouTube DOM (the webpage structure), which means **future YouTube updates *can and likely will* break its functionality at some point.**

We'll do our best to keep MYGA updated, but please be aware that it might occasionally need a fix after a major YouTube UI overhaul. If you notice it's broken, feel free to open an issue!

---

Enjoy your newly *greatened* YouTube experience!
If you like it, consider starring the repo! ⭐