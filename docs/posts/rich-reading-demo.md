---
date: 2026-03-05
draft: false
categories:
  - Features
  - Demo
---

# Rich Reading Experience Demo

This post demonstrates every advanced reading feature enabled for this Digital Garden. Think of it as a living style guide — an Obsidian-style vault brought to life.

<!-- more -->

## Admonitions — Callout Blocks

Admonitions let you highlight important information without disrupting the reading flow.

!!! tip "Pro Tip"
Use admonitions to pull out key insights from your Obsidian notes. They render beautifully in both light and dark mode.

!!! note "Background Context"
This blog is built with **MkDocs Material** and styled to replicate the calm, focused aesthetic of an Obsidian vault.

!!! warning "Important Caveat"
Always verify information from external sources. This garden is a personal knowledge base, not a definitive reference.

??? example "Collapsible Details Block (click to expand)"
This is a **collapsible** admonition powered by `pymdownx.details`.
It's ideal for hiding verbose content, code references, or footnotes that would otherwise clutter the page.

---

## Highlighted Text

Use `==double equals==` to highlight key terms inline, just like Obsidian's ==highlight== marker.

Examples of highlighted text in context:

- The most important concept here is ==separation of concerns==.
- The algorithm runs in ==O(n log n)== time complexity.
- Always remember: ==readability counts== more than cleverness.

---

## Content Tabs

Tabs let you organize related content side by side without nesting or long scrolls.

=== "JavaScript"
    ```javascript title="fetch-data.js"
    async function fetchData(endpoint) {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    }
    ```

=== "Python"
    ```python title="fetch_data.py"
    import httpx

    async def fetch_data(endpoint: str) -> dict:
        async with httpx.AsyncClient() as client:
            response = await client.get(endpoint)
            response.raise_for_status()
            return response.json()
    ```

=== "Go"
    ```go title="fetch_data.go"
    func fetchData(endpoint string) (map[string]interface{}, error) {
        resp, err := http.Get(endpoint)
        if err != nil {
            return nil, err
        }
        defer resp.Body.Close()
        var result map[string]interface{}
        json.NewDecoder(resp.Body).Decode(&result)
        return result, nil
    }
    ```

---

## Code Blocks with Titles & Copy Button

Every code block has a **copy button** in the top-right corner. Code blocks also support custom titles to mimic Obsidian's file-linked code views.

```yaml title="mkdocs.yml — Theme Features"
theme:
  features:
    - content.code.copy # Adds copy button to every code block
    - content.code.annotate # Enables (1) annotation syntax
    - content.tabs.link # Syncs tab selection across the page
```

---

## Code Annotations

Click the **(1)** marker below to reveal an inline explanation, just like IDE tooltips.

```python title="digital_garden.py"
import pathlib

class DigitalGarden: # (1)!
    def __init__(self, vault_path: str):
        self.vault = pathlib.Path(vault_path) # (2)!
        self.notes: list[str] = []

    def harvest(self) -> list[str]:
        """Collect all markdown notes from the vault."""
        return [
            str(p) for p in self.vault.rglob("*.md") # (3)!
        ]
```

1. **`DigitalGarden`** — The main class representing your entire knowledge vault. Instantiate once and reuse across your processing pipeline.
2. **`pathlib.Path`** — Always prefer `pathlib` over `os.path` for cross-platform file system operations. It's cleaner and more Pythonic.
3. **`rglob("*.md")`** — Recursively searches all subdirectories for Markdown files. This mirrors exactly how Obsidian scans your vault on startup.

---

> "The goal of a digital garden is not to publish finished thoughts, but to cultivate growing ones." — Anonymous
