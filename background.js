chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle_mute") {
    chrome.tabs.query({ url: "https://meet.google.com/*" }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["content.js"],
        });
      }
    });
  }
});