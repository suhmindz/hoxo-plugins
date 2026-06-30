---
name: bd-outreach
description: "Write a researched DM or voice note script using the 20:10:5 framework (20 min research, 10 min craft, 5 min send). Two modes: Named person (researched DM + voice note script + 3-touch follow-up) or Auto-warm (top 5 warm leads from today's engagement, each with a drafted message). Use when the user says /bd-outreach, 'write a DM', 'outreach', 'message someone', 'warm leads outreach', 'draft a message', or wants to reach out to someone on LinkedIn."
---

# /bd-outreach

Write personalised outreach using the 20:10:5 framework.

**20:10:5** — 20 minutes research. 10 minutes craft. 5 minutes send.
The DM should feel like it took 5 minutes to write but 20 minutes to think.

Read `config.md` first to get `client_name`. If missing, ask: "What's your name?"

**Read before starting:**
- `get_icp` (Hoxo connector) — framing for the message, pulled live
- `voice-samples/` — tone and structure

---

## Ask which mode

> Two options:
> 1. **Named person** — share a name, LinkedIn URL, or just say who they are
> 2. **Auto-warm** — I'll pull today's top warm leads and draft a message for each
>
> Which one?

---

## Mode 1: Named person

**MCP call:** `search_network` with the person's name — to find their LinkedIn data + any engagement signals

Gather what's known:
- Title, company, sector
- Any recent activity or engagement with {client_name}'s content
- Company-level context (what they're likely navigating)

Write the DM:

> [Opening — reference something real and specific about them or their company. Not flattery. A real observation.]
>
> [Bridge — 1 sentence that connects that observation to {client_name}'s world, without pitching. Make it feel natural.]
>
> [Soft ask — 1 question that opens a conversation, not a meeting request. "Are you finding X?" / "Have you seen this in your market too?"]

Then offer a **voice note script version** — same 3 beats, written to be spoken naturally (contractions, pauses, {client_name}'s rhythm from voice-samples/).

Then offer a **3-touch follow-up sequence** — if no reply in 5 days, 10 days, 15 days. Each follow-up adds new value (a post, a stat, an observation) rather than just chasing.

---

## Mode 2: Auto-warm

**MCP call:** `get_warm_leads` with `days=1, limit=10`

Pull top 5 ICP matches. For each, write the DM using the same 3-beat structure above.

Output as a numbered list: Name, company, message. Client reviews and sends the ones they like.

> **Note:** These messages are drafts — review before sending. The goal is 3–5 sends per day, not 10 copy-pasted blasts.
