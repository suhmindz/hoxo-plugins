---
name: hoxo-system-setup
description: "Full ClaudeBrain setup — run once. Writes config, creates folders, pulls ICP and Dream 100 from Hoxo, builds your Voice Vault, and collects podcast docs so the other 6 skills have everything they need. Use when the user says /hoxo-system-setup, 'set up my workspace', 'let's get started', or opens ClaudeBrain for the first time."
---

# /hoxo-system-setup

Run this once with the ClaudeBrain folder selected in CoWork. Takes about 10 minutes.

---

## Step 1: Config

Check if `config.md` exists and has `client_name`.

If missing, ask:

> Welcome — let's set up your Hoxo workspace. What's your full name? (e.g. "Kevin Jarvis")

Write `config.md`:
```
# Hoxo Config
client_name: [Full Name]
```

The Hoxo connector is already wired by the plugin — there's no URL to enter.

---

## Step 2: Create folders

Create any missing folders: `voice-samples/`, `transcripts/`, `learning/`

No `icp/` or `dream-100/` folders — your ICP and Dream 100 live in Hoxo and are pulled live through the connector whenever a skill needs them, so they're always current.

Write podcast stubs if missing:
- `PODCAST-FLYER.md` → `# Podcast Flyer — paste your show one-pager here`
- `PODCAST-GUEST-PROFILE.md` → `# Podcast Guest Profile — paste your ideal guest description here`

---

## Step 3: Check the Hoxo connector

Call `get_icp` to confirm the connector is live. **Don't save it** — your ICP and Dream 100 stay in Hoxo and skills pull them live on demand (always current, nothing to keep in sync locally).

If the call fails:
> "Couldn't reach Hoxo — make sure the Hoxo plugin is installed and you've signed in to the connector, then try again."

If it succeeds:
> "Connector's live — I can see your ICP. ✓"

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
