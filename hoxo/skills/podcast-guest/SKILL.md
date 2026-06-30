---
name: podcast-guest
description: "Find podcast guests or prep for a booked guest. Two modes: Find (pulls 10 researched ICP prospects from Dream 100 + network, ranks them, writes personalised invites) or Prep (deep research brief for a booked guest — story, talking points, 5 suggested questions). Reads podcast profile and ICP. Use when the user says /podcast-guest, 'find podcast guests', 'podcast prep', 'guest brief', 'invite guests', or needs to find or prepare for a podcast guest."
---

# /podcast-guest

Read `config.md` first to get `client_name`. If missing, ask: "What's your name?"

**Read before starting:**
- `get_icp` (Hoxo connector) — ICP (to filter guest quality), pulled live
- `PODCAST-FLYER.md` — show name, format, audience, themes
- `PODCAST-GUEST-PROFILE.md` — ideal guest type, past guests, what makes a great fit

If either podcast file is missing or just a stub: "Your podcast docs aren't set up yet — run /hoxo-system-setup and complete the podcast step first, or paste your show flyer and ideal-guest profile here now and I'll save them."

**MCP calls:**
- `get_dream100` — Dream 100 contacts (primary guest pool)
- `get_warm_leads` with `days=7, limit=30` — anyone who engaged this week (warm signals for invites)

---

## Ask which mode

> Two options:
> 1. **Find guests** — I'll pull 10 researched ICP prospects from your Dream 100 and network, rank them for your show, and write a personalised invite for each
> 2. **Prep for a booked guest** — give me their name and LinkedIn URL and I'll build a deep research brief
>
> Which one?

---

## Mode 1: Find guests

Pull from `get_dream100` and `get_warm_leads`. Score each against the podcast profile: are they an ICP decision-maker, do they have a story worth telling, will they draw the right audience?

For each of the top 10:

**[Name] — [Title], [Company]**
- **Why they're right for the show:** 1–2 sentences tied to show themes from the podcast profile
- **What they'd talk about:** 1 specific angle based on their background
- **Warm signal:** [Dream 100 / engaged this week / 1st connection]
- **LinkedIn:** [URL]
- **Invite message (in {client_name}'s voice):**

> [3 sentences max. Open with something specific about them. Connect to the show naturally. Soft ask — "would you be open to it?" not "I'd love to have you on".]

---

## Mode 2: Prep for a booked guest

Ask: "Share their name and LinkedIn URL."

Build a prep brief:
- **Their story in 3 sentences** — background, current focus, what they're building
- **Recent LinkedIn content** — 3 posts that signal their current thinking
- **Key talking points they'll have strong opinions on** (based on their background + ICP lens)
- **5 suggested questions** — sharp, not generic. Each one designed to pull out a real insight.
- **The one question that will make the episode** — the uncomfortable or unexpected one
- **How to open the episode** — a 2-sentence framing that contextualises who they are for {client_name}'s audience
