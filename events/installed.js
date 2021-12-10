chrome.runtime.onInstalled.addListener((e) => {
  if (e.reason !== "install") return;
  chrome.storage.local.set({ focus: true });
});
