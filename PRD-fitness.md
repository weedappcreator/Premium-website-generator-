# PRD: IronMind — Free All-in-One Fitness App

## 1. Executive Summary

**Product:** IronMind — a 100% free, web-based, all-in-one fitness tracker
**Tagline:** "Your entire fitness life. Free forever."
**Stack:** Next.js 16 + Tailwind v4 + SQLite (Prisma) — runs in this repo as `/fitness`
**Market:** Fitness app market = $14B growing at 24.5% YoY. 540M+ users globally.

## 2. Market Analysis

### Competitive Landscape

| Feature | Hevy | JEFIT | Strong | FitNotes | NTC | **IronMind** |
|---------|------|-------|--------|----------|-----|-------------|
| **Price** | Freemium | Freemium w/ads | 3-routine limit | Free (Android) | Free | **100% Free** |
| **Exercise Library** | ~300 | 1,400+ | Medium | Small | Small | **1,324** |
| **Workout Logging** | Unlimited | Unlimited | 3 routines | Unlimited | Guided only | **Unlimited** |
| **Routines Builder** | Yes | Yes | Limited | No | No | **Yes** |
| **Progress Charts** | Basic | Premium | Basic | Basic | No | **Advanced** |
| **Nutrition** | No | No | No | No | No | **Yes** |
| **Body Stats** | No | Premium | No | No | No | **Yes** |
| **Platform** | iOS/Android | iOS/Android | iOS/Android | Android | iOS/Android | **Web (any device)** |
| **Ads** | No | Yes | No | No | No | **No** |

### Key Market Gaps (from 30,000+ user review analysis)

1. **No truly free all-in-one** — Every app either has paywalls, ads, or missing features
2. **Web-based void** — All major trackers are mobile-only; no web/desktop option exists
3. **Workout + nutrition split** — No app combines strength tracking and meal logging well
4. **Equipment-aware workouts** — Apps assume full gym or separate "home" mode; no smart adaptation
5. **Offline-first** — 18% of negative reviews cite connectivity issues

### Why "Free" Wins

- 31% of negative reviews mention pricing
- 60% of gym members cancel due to cost
- Users willing to pay $3-5/mo but tired of $15-30/mo subscriptions
- No app offers all features completely free

## 3. Buyer Persona

### Primary: "Alex the Intermediate Lifter"

| Attribute | Detail |
|-----------|--------|
| **Age** | 24-34 |
| **Gender** | 55% male, 45% female |
| **Experience** | 1-4 years lifting |
| **Equipment** | Gym membership + some home gear |
| **Goal** | Progressive overload, strength/muscle gain |
| **Current setup** | Uses 2-3 apps (tracker + nutrition + notes) |
| **Frustration** | Paywalls, data fragmentation, no web access |
| **Tech profile** | Uses laptop for work, phone for gym, wants both |
| **Income** | $45-85k — values fitness but price-sensitive |

**Quote:** *"I just want one app that tracks my lifts, my food, and my progress — without asking me to upgrade every week."*

### Secondary: "Sarah the Beginner"

| Attribute | Detail |
|-----------|--------|
| **Age** | 22-30 |
| **Experience** | <1 year working out |
| **Goal** | Build consistency, learn proper form |
| **Equipment** | Mostly bodyweight/dumbbells at home |
| **Frustration** | Overwhelmed by complex apps, can't afford coaching |
| **Need** | Guided routines, exercise demos (GIFs), simple tracking |

## 4. Problem Statement

> Existing fitness apps are fragmented, expensive, or platform-locked. Users must juggle multiple apps (workout tracker + nutrition logger + progress tracker), pay multiple subscriptions ($15-30/mo each), and can only access their data from a phone. There is no completely free, all-in-one, web-based fitness app with a modern UX that works on any device.

## 5. Product Vision

**IronMind** is the single source of truth for your fitness life:
- Log workouts with sets/reps/weight
- Browse 1,324 exercises with GIF demonstrations
- Build custom routines
- Track progress with charts and body measurements
- Log meals and nutrition
- All 100% free, no ads, no premium tier

## 6. Features by Phase

### Phase 1: Exercise Library (MVP)
- Browse 1,324 exercises with GIFs
- Filter by body part, equipment, target muscle
- Search by name
- Exercise detail page with instructions

### Phase 2: Workout Tracker
- Start a workout, add exercises
- Log sets: reps, weight, RPE, warmup/dropset/failure markers
- Auto-calculated volume
- Workout history
- Rest timer

### Phase 3: Custom Workout Builder
- Create named routines
- Add exercises with set/reps targets
- One-tap start routine as workout
- Share routines (copy link)

### Phase 4: Progress Tracking
- Per-exercise weight/reps/volume charts (line chart)
- Body measurement tracking (weight, BF%, measurements)
- Personal record detection
- Dashboard summary (weekly volume, streak, PRs)

### Phase 5: Meal / Nutrition Logging
- Search food database (Open Food Facts API — free)
- Log meals by type (breakfast, lunch, dinner, snack)
- Daily calorie/macro summary
- Basic nutrition charts

### Phase 6: Polish & Extras
- PWA (offline support)
- Export data (CSV/JSON)
- Dark mode
- Optional demo data for new users
- AI workout suggestions (stretch goal)

## 7. Success Metrics

| Metric | Target (3 months) |
|--------|-------------------|
| Exercises browsed | 50k+ |
| Workouts logged | 5k+ |
| Routines created | 500+ |
| Returning users | >30% |
| Avg session time | >8 min |

## 8. Technical Architecture

- **Route:** `/fitness` subdirectory in existing Next.js app
- **Database:** SQLite via Prisma (existing setup)
- **Auth:** Local demo user + optional email/password (existing User model)
- **Exercise data:** 1,324 exercises from hasaneyldrm/exercises-dataset (MIT + Gym Visual)
- **Nutrition data:** Open Food Facts API (free, open source)
- **Charts:** Recharts (lightweight, React-native)
- **State:** Next.js server components + minimal client state
- **Deployment:** Vercel (already configured)

## 9. Key Differentiators

1. **Actually free** — Not freemium. Not "free with ads." Free forever.
2. **Web first** — Use from any device. No app store required.
3. **All-in-one** — Workouts + nutrition + progress in one place.
4. **Modern UX** — Clean, fast, mobile-responsive design.
5. **1,324 exercises with GIFs** — Largest free exercise library.
6. **Open data** — Export your data anytime.

## 10. Build Order

```
Phase 1: Exercise Library (browse + filter + search + detail)
  → Phase 2: Workout Tracker (log sets + history + rest timer)
    → Phase 3: Routine Builder (create + one-tap start)
      → Phase 4: Progress Tracking (charts + body stats + PRs)
        → Phase 5: Nutrition Logging (food search + meals + macros)
          → Phase 6: Polish (PWA + export + dark mode)
```