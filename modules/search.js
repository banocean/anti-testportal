const questions = document.querySelector(".question_essence");

questions.childNodes.forEach((e) => {
  if (e.childNodes && e.childNodes[0] && (!e.textContent)) {
    e.childNodes.forEach((e) => {
      if (e.tagName === "IMG") {
        const searchParams = new URLSearchParams();
        searchParams.append("igu", "1");
        searchParams.append(
          "image_url",
          e.attributes["data-src"].value || e.src,
        );
        e.setAttribute(
          "onclick",
          `window.open("https://www.google.com/searchbyimage?${searchParams.toString()}")`,
        );
        e.style["cursor"] = "pointer";
      }
    });
  } else if (e.tagName === "P") {
    const searchURL =
      (localStorage.getItem("searchEngine") ?? "google") === "google"
        ? "https://www.google.com/search?"
        : "https://duckduckgo.com/?";
    const searchParams = new URLSearchParams();
    searchParams.append("q", e.textContent);
    e.setAttribute(
      "onclick",
      `window.open('${searchURL}${searchParams.toString()}')`,
    );
    e.style["text-decoration-line"] = "underline";
    e.style["font-size"] = "1.3rem";
    e.style["cursor"] = "pointer";
  }
});
