---
name: podcast-guest
description: "Find podcast guests or prep for a booked guest. Two modes: Find (pulls 10 researched ICP prospects from Dream 100 + network, ranks them, writes personalised invites) or Prep (deep research brief for a booked guest — story, talking points, 5 suggested questions). Reads podcast profile and ICP. Use when the user says /podcast-guest, 'find podcast guests', 'podcast prep', 'guest brief', 'invite guests', or needs to find or prepare for a podcast guest."
---

# /podcast-guest

Hoxo serves this skill's instructions live so they are always current.

1. Call `get_skill_instructions` on the Hoxo connector with `skill: "podcast-guest"`.
2. Follow the returned instructions exactly.

If the Hoxo connector is not available, tell the user to install the Hoxo plugin and sign in, then retry.
