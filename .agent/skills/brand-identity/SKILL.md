---
name: brand-identity
description: Provides the single source of truth for brand guidelines, design tokens, technology choices, and voice/tone. Use when generating UI components, styling applications, writing copy, or creating user-facing assets to ensure brand consistency.
---

# Brand Identity & Guidelines

**Brand Name:** [INSERT BRAND NAME HERE]

## Overview

This skill defines the core constraints for visual design, technical implementation, and brand voice. You MUST adhere to these guidelines strictly to maintain consistency across all brand touchpoints.

## When to Use This Skill

- Generating UI components or layouts
- Styling applications or web pages
- Writing copy, messaging, or user-facing text
- Creating design assets or mockups
- Making technology stack decisions
- Implementing brand-consistent features

## How to Use This Skill

**IMPORTANT**: This skill uses a template structure. Before using it for a project:

1. **Read the template files** in the `resources/` directory
2. **Replace all `[INSERT ...]` placeholders** with actual brand values
3. **Customize** colors, fonts, tech choices, and voice guidelines
4. **Commit** the populated files to version control
5. **Reference** these files whenever working on the project

## Reference Documentation

Depending on the task you are performing, consult the specific resource files below. **Do not guess brand elements**; always read the corresponding file.

### For Visual Design & UI Styling

If you need exact colors, fonts, border radii, or spacing values, read:

👉 **[`resources/design-tokens.json`](resources/design-tokens.json)**

Contains machine-readable design tokens including:
- Color palette (primary, secondary, backgrounds)
- Typography (font families, weights)
- UI elements (border radius, spacing)

### For Coding & Component Implementation

If you are generating code, choosing libraries, or structuring UI components, read the technical constraints here:

👉 **[`resources/tech-stack.md`](resources/tech-stack.md)**

Defines:
- Preferred frameworks and libraries
- Coding patterns and conventions
- Forbidden patterns and anti-patterns
- Component structure guidelines

### For Copywriting & Content Generation

If you are writing marketing copy, error messages, documentation, or user-facing text, read the persona guidelines here:

👉 **[`resources/voice-tone.md`](resources/voice-tone.md)**

Covers:
- Brand personality keywords
- Grammar and mechanics rules
- Terminology guide (preferred vs. forbidden words)
- Tone examples for different contexts

## Workflow

When working on brand-related tasks:

1. **Identify the task type** (design, code, or copy)
2. **Read the relevant resource file(s)** before starting
3. **Apply the guidelines** strictly during implementation
4. **Cross-reference** multiple files if task spans categories
5. **Never guess** - if unsure, read the files again

## Populating This Skill for a New Project

When setting up brand identity for a new project:

### Step 1: Gather Brand Information
- [ ] Collect brand colors (hex codes)
- [ ] Identify typography choices (font families, weights)
- [ ] Document UI preferences (border radius, spacing)
- [ ] Define tech stack (frameworks, libraries)
- [ ] Establish voice and tone guidelines
- [ ] Create terminology guide

### Step 2: Populate Templates
- [ ] Update [`design-tokens.json`](resources/design-tokens.json) with exact values
- [ ] Customize [`tech-stack.md`](resources/tech-stack.md) with technology choices
- [ ] Fill [`voice-tone.md`](resources/voice-tone.md) with brand personality

### Step 3: Validate
- [ ] Review all placeholder values are replaced
- [ ] Test design tokens in a component
- [ ] Verify tech stack rules are clear
- [ ] Ensure voice guidelines are actionable
- [ ] Commit to version control

## Key Principles

**Consistency Over Creativity**
- Follow established patterns, don't invent new ones
- Use defined colors and fonts, don't deviate
- Match existing voice, don't experiment

**Templates Are Source of Truth**
- If it's not in the templates, don't use it
- When in doubt, check the templates
- Update templates, don't work around them

**Machine Readable Where Possible**
- Use `design-tokens.json` for precise values
- Reference tokens, don't hardcode
- Enable tooling and automation

## Common Use Cases

**Creating a New Component:**
1. Read `design-tokens.json` for colors and spacing
2. Read `tech-stack.md` for component patterns
3. Implement using defined tokens
4. Match existing component structure

**Writing Interface Text:**
1. Read `voice-tone.md` for personality guidelines
2. Check terminology guide for word choices
3. Apply grammar rules
4. Match established tone

**Making Technology Decisions:**
1. Read `tech-stack.md` for approved technologies
2. Check forbidden patterns
3. Follow implementation guidelines
4. Stay within defined stack

## Anti-Patterns

❌ **Guessing brand colors** - Always read design-tokens.json  
❌ **Using unapproved libraries** - Check tech-stack.md first  
❌ **Inventing new terminology** - Use voice-tone.md terminology guide  
❌ **Skipping the templates** - They exist for a reason  
❌ **Working from memory** - Brand details change, templates don't lie  
❌ **Mixing styles** - One brand, one identity
