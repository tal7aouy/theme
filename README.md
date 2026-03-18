# Theme

Get the **Theme** into your Visual Studio Code.

## Installation

1. Open the **Extensions** sidebar in Visual Studio Code.
2. Search for `Theme`.
3. Click **Install**.
4. Click **Reload** to reload your editor.
5. Select **Manage Cog** (bottom left) → **Color Theme** → `Theme`.

🌟🌟🌟🌟🌟 **Rate five stars 😃**

---

## Tweaks & Theming

You can customize colors using the `workbench.colorCustomizations` setting in your `settings.json`:

```json
"workbench.colorCustomizations": {
  "tab.activeBackground": "#282c34",
  "activityBar.background": "#282c34",
  "sideBar.background": "#282c34"
}
```

Or use `editor.tokenColorCustomizations` to tweak syntax colors:

```json
"editor.tokenColorCustomizations": {
  "[Theme]": {
    "textMateRules": [
      {
        "scope": ["source.python"],
        "settings": {
          "foreground": "#e06c75"
        }
      }
    ]
  }
}
```

---

## Italic Code

You can enable italic styling for certain code elements in `settings.json`:

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": [
        "comment",
        "storage.modifier",
        "storage.type.php",
        "keyword.other.new.php",
        "entity.other.attribute-name",
        "fenced_code.block.language.markdown",
        "keyword",
        "storage.type",
        "keyword.control",
        "constant.language",
        "entity.name.method"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": ["entity.name.type.class"],
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": ["entity.name.section.markdown"],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "invalid",
        "keyword.operator",
        "constant.numeric.css",
        "keyword.other.unit.px.css",
        "constant.numeric.decimal.js",
        "constant.numeric.json",
        "comment.block",
        "entity.other.attribute-name.class.css"
      ],
      "settings": {
        "fontStyle": ""
      }
    }
  ]
}
```


## Suggested Editor Settings

```json
"editor.fontSize": 16,
"editor.lineHeight": 22,
"editor.fontFamily": "Operator Mono Lig"
```
