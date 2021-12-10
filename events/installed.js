browser.runtime.onInstalled.addListener((e) => {
  if (e.reason !== "install") return;
  browser.storage.local.set({ focus: true });
});
