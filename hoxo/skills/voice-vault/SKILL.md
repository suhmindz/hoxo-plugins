---
name: voice-vault
description: "Build or refresh the client's Voice Vault — how they talk and what they know — transcripts-first from their real calls (Fathom) and LinkedIn, never by asking them to describe their own voice. Stored in the Hoxo account (no local files) so every other skill writes in their voice. Use when the user says /voice-vault, 'build my voice vault', 'update my voice', 'refresh my voice vault', or 'learn how I write'."
---

# /voice-vault

Hoxo serves this skill's instructions live so they are always current.

1. Call `get_skill_instructions` on the Hoxo connector with `skill: "voice-vault"`.
2. Follow the returned instructions exactly.

If the Hoxo connector is not available, tell the user to install the Hoxo plugin and sign in, then retry.
