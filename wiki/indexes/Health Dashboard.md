---
title: Health Dashboard
tags: []
created: 2026-06-12
updated: 2026-06-12
---

# Health Dashboard

## Orphaned Concepts (no backlinks)

```dataview
TABLE file.inlinks as "Backlinks"
FROM "wiki/concepts"
WHERE length(file.inlinks) = 0
SORT file.name ASC
```

## Sources Missing Tags

```dataview
TABLE authors, date
FROM "wiki/sources"
WHERE length(tags) = 0
SORT file.name ASC
```

## Concepts Missing Tags

```dataview
TABLE file.name
FROM "wiki/concepts"
WHERE length(tags) = 0
SORT file.name ASC
```
