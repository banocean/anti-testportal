document.querySelector(".question_essence").childNodes.forEach((e) => {
    if (e.tagName === "P") {
        const searchParams = new URLSearchParams();
        searchParams.append("q", e.textContent);
        e.setAttribute(
            "onclick",
            `window.open('https://www.google.com/search?${searchParams.toString()}')`
        );
        e.style["text-decoration-line"] = "underline";
        e.style["cursor"] = "pointer";
        e.style["font-size"] = "1.3rem";
    }
});
