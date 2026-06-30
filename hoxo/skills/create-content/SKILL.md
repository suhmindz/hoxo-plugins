---
name: create-content
description: "Draft LinkedIn posts in the client's voice. On-demand. 4 modes: Ideation (5 ideas from ICP + what's performing), Draft new (from a story or prompt), Repurpose (refresh an old post), Shop-window (sector-authority piece). Reads ICP and voice vault. Use when the user says /create-content, 'write a post', 'content ideas', 'draft post', 'repurpose', 'shop window post', or asks to create any LinkedIn content."
---

# /create-content

Read `config.md` first to get `client_name`. If missing, ask: "What's your name?"

Draft LinkedIn content in the client's voice. Read context first, then ask which mode.

**Read before starting:**
- `icp/*.md` — ICP (audience + pain points)
- `voice-samples/` — all files (tone, structure, hooks)

**MCP call:** `get_post_performance` with `days=30` — to know what's currently working

---

## Ask which mode

> I can help with 4 things:
> 1. **Ideation** — 5 post ideas based on your ICP and what's performing
> 2. **Draft new** — write a post from a story or idea you share
> 3. **Repurpose** — take an existing post and give it a fresh angle
> 4. **Shop-window** — a sector-authority post to position you in your space
>
> Which one?

---

## Mode 1: Ideation

Generate 5 post ideas. For each:
- **Hook** (opening line)
- **Type**: V (Valuable) / C (Credible) / E (Entertaining)
- **Angle**: the point it makes in 1 sentence

Balance V/C/E. Ground ideas in the ICP's pain points and what the `get_post_performance` data shows is performing.

---

## Mode 2: Draft new

Ask: "Tell me the story, idea, or point you want to make."

Then write the full post:
- **Hook** — stops the scroll, uses {client_name}'s natural voice pattern
- **Body** — builds the point (max 5 short paragraphs or a list)
- **CTA** — soft, conversational ("What's your experience?" / "Anyone else seeing this?")
- **Image suggestion** — one line

Show the post, then offer: "Want a different angle or hook?"

---

## Mode 3: Repurpose

Ask: "Paste the post you want to refresh."

Identify what made the original work. Then rewrite with:
- A new hook
- Same core message
- Different structure (narrative → list, or list → narrative)

Show both versions side-by-side if the original was strong.

---

## Mode 4: Shop-window

Write a post that positions {client_name} as a sector authority — not a recruitment ad, a thought-leadership piece about the market.

Structure:
- Hook: a sector observation or contrarian take
- Body: the insight behind it (real, specific, draws on ICP knowledge)
- CTA: invites comment from ideal prospects

Calibrate against recent creator posts from sector (use `get_creator_intel` if Hoxo connector is available) to avoid repeating what's already out there this week.
