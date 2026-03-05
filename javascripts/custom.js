document.addEventListener("DOMContentLoaded", function () {

    /* ── 1. Reading Progress Bar ── */
    const progressBar = document.createElement("div");
    progressBar.id = "reading-progress";
    document.body.prepend(progressBar);

    window.addEventListener("scroll", function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollHeight > 0) {
            progressBar.style.width = (scrollTop / scrollHeight) * 100 + "%";
        }
    });

    /* ── 2. Mobile TOC card — blog post pages only ──
       The blog plugin (blog_dir: .) suppresses the secondary sidebar
       on mobile. On article pages only, we build a clean TOC card from
       the actual heading anchors and insert it after the H1.
       Guards: desktop, blog index, archive, and category pages skip.  */

    // Desktop handles TOC natively in the secondary sidebar — skip
    if (window.innerWidth >= 960) return;

    // Skip non-article pages: index (/), archive, categories
    const path = window.location.pathname;
    const isArticlePage = path.match(/\/\d{4}\/\d{2}\/\d{2}\//);
    if (!isArticlePage) return;

    const articleInner = document.querySelector(".md-content__inner");
    if (!articleInner) return;

    // Collect H2 and H3 heading anchors in the article
    const headings = articleInner.querySelectorAll("h2[id], h3[id]");
    if (headings.length === 0) return;

    // Build a clean, standalone TOC card — no Material nav toggles
    const card = document.createElement("div");
    card.className = "mobile-toc-card";

    const title = document.createElement("p");
    title.className = "mobile-toc-card__title";
    title.textContent = "جدول المحتويات";
    card.appendChild(title);

    const list = document.createElement("ul");
    list.className = "mobile-toc-card__list";

    headings.forEach(function (h) {
        const item = document.createElement("li");
        // Indent H3 items slightly for visual hierarchy (RTL: padding-right)
        if (h.tagName === "H3") item.style.paddingRight = "1rem";

        const link = document.createElement("a");
        link.href = "#" + h.id;
        // Strip the pilcrow (¶) MkDocs appends to heading text
        link.textContent = h.textContent.replace(/\s*¶\s*$/, "").trim();

        item.appendChild(link);
        list.appendChild(item);
    });

    card.appendChild(list);

    // Insert right after the H1
    const h1 = articleInner.querySelector("h1");
    if (h1 && h1.nextSibling) {
        articleInner.insertBefore(card, h1.nextSibling);
    } else {
        articleInner.prepend(card);
    }

});
