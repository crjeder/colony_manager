# Colony Manager - Design

Draft. Items marked (ASSUME) are defaults I picked; change them freely.

## Story

You are the colony manager of a private breeding and research facility. Your test subjects live in a small colony you keep alive, productive, and (mostly) unharmed. You answer to a funder who wants specific results by specific dates. Tone: dark comedy - corporate euphemisms, absurd memos, subjects with personalities.

## Characters

- Colony Manager (player)
- Funder (sets goals, provides funds, sends e-mails)
- Animal Keeper (upgrade, takes care of a **needs** of animals in **one** room)
- Mad Scientist (screws up everything)
- Lazy Co-Worker (makes player's tasks slower)
- Bureaucrat (demands silly paperwork)

## Core loop (about 30 seconds)

1. Observe: check subject needs, resources, and the funder goal deadline.
2. Assign: put subjects on jobs or in rooms; pick breeding pairs.
3. Resolve: time ticks, resources and stats change, offspring are born, events fire.
4. Decide: answer events, run or skip experiments, spend funds on upgrades.
5. Repeat, with rising demands.

## Pillars

Anything that does not serve one of these is cut.

1. **Needs** - basic: subjects have food, water
             - extended: health, morale, stress. Neglect has visible consequences.
2. **Experiments** - risk/reward actions that earn funds and results but cost subjects' wellbeing.
3. **Oversight** - the funder sets goals with deadlines and sends welfare inspections. The welfare ruleset grows with each level. Cutting corners works until it does not.
4. **Breeding** - subjects carry genes; offspring inherit by Mendelian rules; funder goals demand specific genotypes or phenotypes in specific numbers at specific times.

## Species and progression

- Start: fruit flies (Drosophila). Short generation time, cheap, large cohorts, teaches Mendel with few loci.
- Ladder: flies -> mice -> rats -> rabbits or zebrafish -> ultimately (not in v1) white collar workers and the funder is an LLM testing it's abilities on the workers. breeding is (partitially :-) replaced by hiring) . Each tier has longer generation time, higher cost, smaller litters, individually named subjects, stricter welfare rules, and bigger payouts.
- New species unlock by level (clearing the funder goal chain earns trust). Funds buy upgrades inside a level: cage capacity, breeding speed, rooms, co-workers.
- Each run is a ladder of 4-6 levels, about 5-8 minutes each.

## Breeding and genetics

- Each species has male and female individuals and an optimal proportion m/f for reproduction.
- Each subject has 2-4 loci, two alleles each. Alleles are dominant or recessive. Phenotype is derived from genotype.
- Offspring get one random allele from each parent per locus (Mendel). The player sees a Punnett preview for a chosen pairing; reading it is the core skill.
- (ASSUME) Phenotypes map to gameplay: eye colour (goal marker), hardiness (health), docility (stress), fertility (litter size). Recessive defect alleles cause inbreeding risk, so narrow gene pools are punished.
- Flies are tracked as cohorts: a count per genotype, no names, offspring drawn by expected ratios with sampling noise. Higher species are individuals with explicit genotypes and names.
- The player picks breeding pairs or cohorts; no auto-breeding.
- v1: 2 traits, 1 locus each, complete dominance. Later: incomplete dominance, linked loci, mutation events.

## Funder goals

- A goal is {deliverable, count, deadline}. Deliverable types: any subjects, subjects with a phenotype, true-breeding line of a genotype.
- Example ladder: L1 "100 flies by day 20". L2 "40 white-eyed flies by day 25". L3 "30 docile mice by day 30".
- Hit the goal: payout and trust. Miss it: funds and trust penalty; missing too many ends the run.

## Welfare rules

- The ruleset is cumulative; each inspection checks every active rule.
- Ramp:
-- food and water
-- cleanness of cage
-- max density per cage
-- enrichment and a stress: high stress can lead to unwanted behavior -> event
-- male rivalry: punished by fight injuries if lasts to long -> event
-- cull limits and a cap on defect-carrying litters.
-- ethics-review paperwork costs time and funds.
- Core tension: deadline pressure pushes toward overcrowding and inbreeding; welfare rules punish exactly that.
- Moral consequence is systemic (inspections, trust, morale), or narrated judgment by funder.

## Win / lose

- Lose: all subjects dead, or funds below zero past a grace period, or a failed welfare inspection, or too many missed funder goals.
- Win: clear the final level's funder goal. No endless mode in v1.
- Each run is short (20-40 min) and restartable.

## Resources

- Food & Water: consumed per subject per tick.
- Funds: earned from subjects delivered to experiments and goal payouts, spent on rooms and upgrades.
- Results: a score from experiments, feeding goal progress where relevant.
- Genetic stock: the lines and strains you currently hold.
- Capacity: cage and room space, limits cohort and population size.

## Subjects

- Flies (cohorts): count per genotype, shared stats, no names.
- Higher species (individuals): name, 3 stats (health, morale, stress), genotype and phenotype, 1-2 traits (e.g. Stubborn, Curious) that modify jobs, events, or relationships. Subjects can die. Death matters to morale of the rest.

## Events

- Mad Scientist
-- takes a breeding couple away
-- botches experiment -> needs the same amount of animals quickly
- Lazy Co-Worker
-- turns up and blocks the way to a rack
- Bureaucrat
-- demands experiment proposal
-- list of animals
- Animal Keeper
-- calls in sick
-- mixes up males and females
-- forget to feed
- Environment
-- diseases
-- some Welfare rules have direct effects

## Upgrades

- cages
- racks
- rooms
- "edward river" catalog -> enables buying subjects
- internal market -> sell subjects
- animal keeper -> care for basic needs per rack
- animal db -> list view of animals
- freezer -> can store embryos, ovule, sperm

## Levels

### 0. Intro

- Application accepted
- Job as animal keeper

### 1. Fruit Flies

- need 100 by end of week. if not reached by end of week decreasing returns (100 go away at end of week or when 102 are reached. rest is carried over)
- need 100 more in 3 days (not doable. buy them from vendor catalog. first buy a vendor catalog. vendor name "edward river")
- need 500 in two weeks (buy more cages, potentially more flies to top up males or females for optimal proportion)
- promotion to colony manager, funder presents sash for "job well done"

### 2. Mice

- need 10 albinos within 12 weeks

## Scope

**v1 (vertical slice):** flies only, food + funds, 1 room, no breeding trait, 1 funder goal with deadline, no welfare rules, 1 random event, starvation lose condition.
**v1 full:** 2-3 species, about 6 levels, 4-6 traits, 3-4 rooms, experiments, data-driven events (about 30), funder goals and inspections, save/export.

## Non-goals

Multiplayer, accounts, backend, art pipeline (text/DOM UI only), mobile-first layout, endless mode, localization, full real-genetics fidelity (linkage maps, polygenic traits).

## Open questions

- Is the player ever punished morally by the game, or is it purely systemic? (Systemic and in punny e-mails form other characters)
- Do subjects have visible names/portraits, or are they numbers? (Cohorts numbered, individuals named, but naming is a upgrade which is good for morale.)
- Real-time ticks or pausable with speed controls? (Pause + speed.)
- Can the player cull subjects, and is it penalised? (yes, penalties start with 0 and raise by species. selling is an other option. there will be an internal marketplace from level 2 on as buyable upgrade.)
- Are species unlocked by level only, or can they also be bought early? (no)
- How is a failed goal handled: retry the level, or lose trust and move on? (loose trust and move on)
