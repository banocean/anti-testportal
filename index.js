const storge = chrome.storage.local;

storge.get("focus", ({ focus }) => {
  if (!focus) {
    if (
      !(document.location.href.includes("/exam/LoadTestStart.html") ||
        document.location.href.endsWith(".testportal.pl/"))
    ) {
      return;
    }

    const startBox = document.querySelector(".button_box");
    const button = document.querySelector(".mdc-button");

    if (!startBox || !button) return;

    const statusInformation = document.createElement("span");
    statusInformation.textContent = "Wyłączony antitestportal";

    statusInformation.style = `
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: gray;
    `;

    startBox.appendChild(statusInformation);
    button.style.backgroundColor = "rgba(198,0,0,0.81)";

    return;
  }

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("modules/focus.js");
  document.head.appendChild(script);
});

storge.get("search", ({ search }) => {
  if (!search) return;

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("modules/search.js");
  document.head.appendChild(script);
});

storge.get("time", ({ time }) => {
  if (!time) return;

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("modules/timer.js");
  document.head.appendChild(script);
});

storge.get(
  "searchEngine",
  ({ searchEngine }) =>
    localStorage.setItem("searchEngine", searchEngine || "google"),
);
