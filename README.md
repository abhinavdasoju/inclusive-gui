# Accessibility Chrome Extension

A Chrome extension that redesigns the UI of web apps to be more accessible and user-friendly for people with learning disabilities. The extension overlays a simplified, high-clarity interface on top of existing web apps — starting with Gmail — featuring large action buttons for the most important actions and keyboard shortcuts as an alternative to mouse navigation.

## Goals

- Reduce cognitive load by surfacing only the most essential actions
- Provide large, clearly labeled action items for key workflows
- Support keyboard shortcuts throughout so users can navigate without a mouse
- Expand to other Google Workspace (GSuite) products after the Gmail implementation

## Tech Stack

- **Chrome Extension** — Manifest V3
- **Languages** — HTML, CSS, JavaScript (content scripts + popup)
- **Design** — Figma

## Project Structure

```
├── manifest.json        # Chrome extension configuration (Manifest V3)
├── content.js           # Content script injected into Gmail; parses email data and renders the overlay
├── overlay.css          # Styles for the injected overlay UI
├── hi.html              # Extension popup shown when the toolbar icon is clicked
├── popup.js             # Logic for the popup
└── hi_extension.png     # Extension toolbar icon
```

## How It Works

1. When you open Gmail, `content.js` is injected into the page.
2. It reads the inbox and extracts data from the first unread email (sender name, sender email, subject, timestamp, and message preview).
3. A fixed overlay panel is injected into the top-right corner of the page, displaying that email data in a clean, readable format.
4. The popup (`hi.html`) is accessible by clicking the extension icon in the Chrome toolbar.

## Getting Started

### Prerequisites

- Google Chrome (or any Chromium-based browser)

### Installation

1. Clone this repository:
   ```bash
   git clone <repo-url>
   ```
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the cloned project folder.
5. Open Gmail — the overlay should appear automatically.

## Roadmap

- [ ] Gmail: overlay with top email details (in progress)
- [ ] Gmail: large action buttons (Reply, Archive, Delete)
- [ ] Gmail: keyboard shortcut support
- [ ] Figma design pass for the overlay UI
- [ ] Expand to Google Calendar
- [ ] Expand to Google Docs
- [ ] Expand to additional GSuite products
