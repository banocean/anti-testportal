const storge = chrome.storage.local;

const setup = async () => {
  storge.get(
    "focus",
    ({ focus }) => document.querySelector(".focus").checked = focus,
  );
  storge.get(
    "time",
    ({ time }) => document.querySelector(".time").checked = time,
  );
  storge.get(
    "search",
    ({ search }) => document.querySelector(".search").checked = search,
  );
  storge.get(
    "searchEngine",
    ({ searchEngine }) =>
      document.querySelector("#search-engine").value = searchEngine,
  );
};

setup();

document.querySelector(".focus").onclick = () => {
  const focus = document.querySelector(".focus").checked;
  storge.set({ focus });
};

document.querySelector(".time").onclick = () => {
  const time = document.querySelector(".time").checked;
  storge.set({ time });
};

document.querySelector(".search").onclick = () => {
  const search = document.querySelector(".search").checked;
  storge.set({ search });
};

document.querySelector("#search-engine").onchange = () => {
  const searchEngine = document.querySelector("#search-engine").value;
  storge.set({ searchEngine });
};
