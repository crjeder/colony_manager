# Colony Manager - Design

Draft. Items marked (ASSUME) are defaults I picked; change them freely.

## Fantasy
You are the director of a private research facility. Your test subjects live in a small colony you keep alive, productive, and (mostly) unharmed. You answer to a funder who wants results. Tone: dark comedy - corporate euphemisms, absurd memos, subjects with personalities.

## Core loop (about 30 seconds)
1. Observe: check subject needs and resources.
2. Assign: put subjects on jobs or in rooms.
3. Resolve: time ticks, resources and stats change, events fire.
4. Decide: answer events, run or skip experiments, spend funds on upgrades.
5. Repeat, with rising demands.

## Pillars
Anything that does not serve one of these is cut.
1. **Needs** - subjects have food, health, morale, stress. Neglect has visible consequences.
2. **Experiments** - risk/reward actions that earn funds and results but cost subjects' wellbeing.
3. **Oversight** - the funder sets quotas and sends inspections. Cutting corners works until it does not.

## Win / lose
- Lose: all subjects dead, or funds below zero past a grace period, or a failed inspection.
- Win: reach goal(s) set by funder. No endless mode in v1.
- Each run is short (20-40 min) and restartable.

## Resources
- Food: consumed per subject per tick.
- Funds: earned from experiments and quota payouts, spent on rooms and upgrades.
- Results: a score from experiments, counted toward quotas.

## Subjects
Name, 3 stats (health, morale, stress), 1-2 traits (e.g. Stubborn, Curious) that modify jobs, events, or relationships. Subjects can die. Death matters to morale of the rest.

## Scope
**v1 (vertical slice):** food + funds, 1 room, cages, 1 job, 3 random events, starvation lose condition. Already built: starvation only.
**v1 full:** traits, 3-4 rooms, experiments, data-driven events (about 30), quotas and inspections, save/export.

## Non-goals
Multiplayer, accounts, backend, art pipeline (text/DOM UI only), mobile-first layout, endless mode, localization.

## Open questions
- Is the player ever punished morally by the game, or is it purely systemic? yes, pun in the funders messages.
- Do subjects have names? numbers. names are an upgrade which raises morale
- Real-time ticks or pausable with speed controls? (Pause + speed assumed.)
