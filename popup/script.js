const storge = browser.storage.local;

const setup = async () => {
  const { focus } = await storge.get("focus");
  document.querySelector(".focus").checked = focus;

  const { time } = await storge.get("time");
  document.querySelector(".time").checked = time;

  const { search } = await storge.get("search");
  document.querySelector(".search").checked = search;
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
