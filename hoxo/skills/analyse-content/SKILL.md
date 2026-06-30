---
name: analyse-content
description: "Content pattern analysis across 3 modes: own posts (what's working, what to lean into), a specific creator (reverse-engineer their formula), or all tracked creators (sector intelligence). Saves report to learning/. Use when the user says /analyse-content, 'analyse my content', 'what's working', 'analyse creator', 'content patterns', 'sector content', or wants to understand performance or creator strategy."
---

# /analyse-content

Read `config.md` first to get `client_name`. If missing, continue without it.

Analyse content performance and patterns. Ask which mode.

> 3 options:
> 1. **My content** — what's working in your own posts, patterns to lean into
> 2. **One creator** — reverse-engineer a specific creator's formula
> 3. **All creators** — aggregate sector intelligence (what's dominating the feed this week)
>
> Which one?

---

## Mode 1: My content

**MCP calls:**
- `get_post_performance` with `days=90`

Analyse and report:
- **Hook patterns**: what opening styles correlate with high engagement (question, stat, story, contrarian)
- **Format patterns**: list vs narrative vs single-insight; which gets more comments vs likes
- **Topic clusters**: which ICP-relevant topics land best
- **Cadence signal**: does posting frequency affect reach?
- **3 things to do more of** (concrete, specific)
- **1 thing to stop doing**

Save to `learning/{date}-my-content.md`.

---

## Mode 2: One creator

Ask: "Which creator? LinkedIn URL or name."

**MCP call:** `get_creator_intel` with `days=30`, then filter to that profile. Or call `search_network` if name is provided.

Analyse and report:
- What hook formats they use most
- What topics get engagement vs what gets ignored
- Posting rhythm
- Their "signature move" — the one thing that makes their content distinctly theirs
- **3 angles {client_name} could adapt** (adapted = not copied — grounded in their ICP/voice)

Save to `learning/{date}-creator-{name}.md`.

---

## Mode 3: All tracked creators

**MCP call:** `get_creator_intel` with `days=14, limit=50`

Sector-level synthesis:
- **Dominant themes this fortnight** — what topics are flooding the feed
- **Formats winning right now** — what structures are getting traction
- **White space** — what's underserved, what {client_name} could own
- **5 angles for this week** — based purely on gaps, not what everyone else is already saying

Save to `learning/{date}-sector-intel.md`.

Tell the user the save path and the single most actionable insight from the report.
