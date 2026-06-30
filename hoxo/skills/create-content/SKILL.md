---
name: create-content
description: "Draft LinkedIn posts in the client's voice. On-demand. 4 modes: Ideation (5 ideas from ICP + what's performing), Draft new (from a story or prompt), Repurpose (refresh an old post), Shop-window (sector-authority piece). Reads ICP and voice vault. Use when the user says /create-content, 'write a post', 'content ideas', 'draft post', 'repurpose', 'shop window post', or asks to create any LinkedIn content."
---

# /create-content

Hoxo serves this skill's instructions live so they are always current.

1. Call `get_skill_instructions` on the Hoxo connector with `skill: "create-content"`.
2. Follow the returned instructions exactly.

If the Hoxo connector is not available, tell the user to install the Hoxo plugin and sign in, then retry.
