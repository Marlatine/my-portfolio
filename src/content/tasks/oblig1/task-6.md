---
title: "Task 6 - Shopping list"
description: "Create a shopping list with an item name, a quantity and an add button."
solution: "/tasks/oblig1/solutions/task-6"
---

# Oppgave 6 — Shopping list

## Task

Create a form where the user can add items to a shopping list. Each entry should have:

- An item name (text input)
- A quantity (number input)
- An Add button

When the button is clicked, the item should appear in a ul list on the page. Below the list, show the total number of items (sum of all quantities).

If the same item is added again, increase its quantity instead of adding a duplicate.

## Requirements

- Model the list as a typed array in TypeScript
- Re-render the list from the array each time it changes (don't just append HTML)

## Stretch goals

- Add a remove button per item
- Allow editing the quantity inline
