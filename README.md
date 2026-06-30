# Hoxo plugin marketplace

One-install distribution of the Hoxo BD engine for Claude (Cowork / Desktop / Code).
Bundles the **Hoxo connector** + all **7 skills** as slash commands — no zip uploads,
no hidden `.cloud` folder.

## Install (client)

1. In Claude → **Customize → Plugins → Add marketplace → Add from a repository**
2. Paste this repo's GitHub URL
3. Install the **Hoxo** plugin → approve the Hoxo connector (OAuth) when prompted
4. Type `/` → `hoxo-system-setup`, `monday-report`, `daily-engagement`, `create-content`,
   `analyse-content`, `podcast-guest`, `bd-outreach`

## Layout

```
.claude-plugin/marketplace.json   # marketplace manifest (1 plugin: hoxo)
hoxo/
├── .claude-plugin/plugin.json    # plugin manifest
├── .mcp.json                     # Hoxo remote connector (HTTP + OAuth auto-discovered)
└── skills/<7 skills>/SKILL.md     # synced from hoxo-boardroom-skill-pack
```

## Maintaining

Skills are canonical in `hoxo-boardroom-skill-pack`. After editing them, re-sync and
bump `hoxo/.claude-plugin/plugin.json` `version`:

```
node scripts/sync-skills.mjs
```

The connector URL lives in `hoxo/.mcp.json` (prod, multi-tenant — OAuth identifies the
client, so one URL serves everyone).
