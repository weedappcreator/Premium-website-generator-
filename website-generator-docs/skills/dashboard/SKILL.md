# Skill: Dashboard

## Purpose
Generate admin/analytics dashboards with dense data layouts.

## Structure

```
/
├── Sidebar Navigation
├── Top Bar (search, notifications, user menu)
├── KPI Cards (4-6 key metrics)
├── Charts (line, bar, pie, area)
├── Data Tables (sortable, filterable, paginated)
└── Activity Feed / Recent Events
```

## Layout Principles

- **Sidebar**: Left rail, collapsible, icon + label
- **Top bar**: Search, notifications, user avatar
- **KPI cards**: 4-6 at top, sparkline or trend indicator
- **Charts**: 2-column grid on desktop, stack on mobile
- **Tables**: Dense, no row striping, inline actions
- **Spacing**: Tight — information density over whitespace

## Design Direction

Use **Tech Utility** direction from `integrations/design-directions/DIRECTIONS.md`:
- Data-dense, monospace-friendly
- Tabular numerics everywhere
- Inline status pills (success / warn / danger)
- Dense tables with hairline borders

## Chart Types

| Data | Chart | Purpose |
|---|---|---|
| Trend over time | Line / Area | Show growth, decline |
| Comparison | Bar | Compare categories |
| Proportion | Pie / Donut | Show parts of whole |
| Distribution | Histogram | Show frequency |
| Correlation | Scatter | Show relationships |
| Status | Gauge | Show against target |

## Table Design

- Sticky header
- Sortable columns (click header)
- Filter/search above table
- Pagination or infinite scroll
- Row actions (edit, delete, view) on hover
- Status badges with color coding
- Truncate long text with tooltip

## Anti-Patterns
- Don't use hero images or marketing copy
- Don't use oversized headlines
- Don't use decorative animations
- Don't use card grids for data — use tables
- Don't hide data behind clicks — show it inline

## Technical Requirements
- Chart library: Recharts, Chart.js, or D3
- Table library: TanStack Table or AG Grid
- Responsive (sidebar collapses to hamburger)
- Dark mode (dashboards are often used in low light)
- Real-time updates if applicable (WebSocket, SSE)
