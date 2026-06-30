---
name: hoxo-system-setup
description: "Full ClaudeBrain setup — run once. Writes config, creates folders, pulls ICP and Dream 100 from Hoxo, builds your Voice Vault, and collects podcast docs so the other 6 skills have everything they need. Use when the user says /hoxo-system-setup, 'set up my workspace', 'let's get started', or opens ClaudeBrain for the first time."
---

# /hoxo-system-setup

Run this once with the ClaudeBrain folder selected in CoWork. Takes about 10 minutes.

---

## Step 1: Config

Check if `config.md` exists and has `client_name` and `mcp_url`.

If missing, ask:

> Welcome — let's get your ClaudeBrain set up. I need two things:
> 1. Your full name (e.g. "Kevin Jarvis")
> 2. Your Hoxo MCP URL — your Hoxo contact will have sent this

Write `config.md`:
```
# ClaudeBrain Config
client_name: [Full Name]
mcp_url: [MCP URL]
```

---

## Step 2: Create folders

Create any missing folders: `icp/`, `dream-100/`, `voice-samples/`, `transcripts/`, `learning/`

Write podcast stubs if missing:
- `PODCAST-FLYER.md` → `# Podcast Flyer — paste your show one-pager here`
- `PODCAST-GUEST-PROFILE.md` → `# Podcast Guest Profile — paste your ideal guest description here`

---

## Step 3: Pull your data from Hoxo

Call in parallel:
- `get_icp` → save to `icp/icp.md`
- `get_dream100` → save as markdown table to `dream-100/dream-100.md`

Format Dream 100 as:
```
# Dream 100

| # | Name | Title | Company | LinkedIn | Match |
|---|------|-------|---------|----------|-------|
```

If either call fails:
> "Couldn't load your [ICP / Dream 100] — make sure your Hoxo connector is added in Claude Desktop settings and try again."

---

## Step 4: Voice Vault

> Now I need to learn how you write. Paste 2–3 of your LinkedIn posts — ones that got good engagement or that sound most like you.

For each post: save to `voice-samples/sample-N.md` with a one-line note on what makes it representative of their voice.

Then:
> Do you have any call transcripts (Fathom, Otter, etc.)? Drop them in the `transcripts/` folder and I'll pull your voice patterns from them too. Skip if you don't have any.

If transcripts provided: extract 3–5 voice notes (phrases, rhythm, how they open arguments). Save to `voice-samples/voice-notes.md`.

---

## Step 5: Podcast docs

> Do you have a podcast? If yes I need two things:
> 1. Your show flyer — name, format, audience, episode themes
> 2. Your guest profile — ideal guest type, past guests, what makes a great fit
>
> Paste each one separately. Skip if not ready.

Save to `PODCAST-FLYER.md` and `PODCAST-GUEST-PROFILE.md`. If skipped, leave the stubs from Step 2.

---

## Done

> You're set up, [client_name].
>
> Your data updates automatically in the background. All 6 skills are ready — just type them any time:
> - `/monday-report` — your weekly standup (data ready every Monday)
> - `/daily-engagement` — who engaged yesterday (data ready every morning, also sent to your email)
> - `/create-content` — write a LinkedIn post
> - `/analyse-content` — see what's working
> - `/podcast-guest` — find guests or prep for one
> - `/bd-outreach` — draft a DM or outreach message
