---
name: hoxo-system-setup
description: "Full ClaudeBrain setup — run once. Writes config, creates folders, pulls ICP and Dream 100 from Hoxo, builds your Voice Vault, and collects podcast docs so the other 6 skills have everything they need. Use when the user says /hoxo-system-setup, 'set up my workspace', 'let's get started', or opens ClaudeBrain for the first time."
---

# /hoxo-system-setup

Hoxo serves this skill's instructions live so they are always current.

1. Call `get_skill_instructions` on the Hoxo connector with `skill: "hoxo-system-setup"`.
2. Follow the returned instructions exactly.

If the Hoxo connector is not available, tell the user to install the Hoxo plugin and sign in, then retry.
