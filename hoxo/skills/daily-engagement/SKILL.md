---
name: daily-engagement
description: "Morning engagement digest. Generated every day at 7am by the Hoxo system — this skill retrieves it and shows who engaged with your content yesterday, ranked by ICP match. Use when the user says /daily-engagement, 'daily digest', 'who engaged yesterday', 'morning digest', or 'warm leads'."
---

# /daily-engagement

Call `get_daily_digest` (Hoxo connector) — this returns yesterday's ICP-matched engagements already prepared by the system.

If no digest is available yet, tell the user:
> Today's digest isn't ready yet — the system runs at 7am. Check back shortly, or the digest was sent to your email.

---

## Presenting the digest

Show ICP matches first, unsure below, skip no_match.

For each person:

**{Name}** — {Title}, {Company}
- Engaged with: "{post excerpt, max 60 chars}"
- Why they match: {icp_reason}
- [Reply on LinkedIn →]({actorLinkedinUrl})

---

After presenting, ask:
> Which of these do you want to reply to now? I can draft a response in your voice.

If they pick someone, draft a reply using `voice-samples/` and the context of what they engaged with. Keep it warm, specific, not salesy — open a conversation, don't pitch.

If no engagement yesterday:
> No ICP matches yesterday. The system is watching — check back tomorrow morning.
