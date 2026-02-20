---
name: brainstorming
description: "Explores user intent, requirements and design before implementation. Use when the user mentions creating features, building components, adding functionality, or modifying behavior. Ensures thorough understanding through collaborative dialogue before any creative work begins."
---

# Brainstorming Ideas Into Designs

## When to use this skill

- User mentions creating new features or functionality
- Building new components or modules
- Adding behavior or modifying existing functionality
- Any creative or architectural work that requires design decisions
- Before implementing anything that involves choices or trade-offs

**CRITICAL**: Use this BEFORE any implementation work on creative tasks.

## Overview

Transform ideas into fully formed designs through natural collaborative dialogue. The goal is to understand intent deeply before writing code, avoiding rework and misalignment.

## The Process

### 1. Understanding the Idea

**Gather context first:**
- Review current project state (files, docs, recent commits)
- Understand existing architecture and patterns
- Identify related code or dependencies

**Ask questions one at a time:**
- Only one question per message
- Prefer multiple choice when possible (easier to answer)
- Open-ended questions are fine when needed
- If a topic needs exploration, break into multiple questions

**Focus areas:**
- Purpose: What problem does this solve?
- Constraints: Technical limitations, performance, compatibility
- Success criteria: How do we know it works?
- User experience: How will it be used?

### 2. Exploring Approaches

Once you understand the requirements:

**Propose 2-3 alternatives:**
- Present options conversationally
- Explain trade-offs for each approach
- Lead with your recommended option
- Provide clear reasoning for your recommendation

**Example format:**
> "I see three ways we could approach this:
> 
> **Recommended: [Approach A]** - [reasoning why this is best]
> 
> **Alternative: [Approach B]** - [trade-offs]
> 
> **Alternative: [Approach C]** - [trade-offs]
> 
> What do you think?"

### 3. Presenting the Design

When you believe you understand what you're building:

**Break design into sections (200-300 words each):**
- Architecture overview
- Component structure
- Data flow
- Error handling
- Testing strategy
- Edge cases

**Validate incrementally:**
- Present one section at a time
- Ask after each: "Does this look right so far?"
- Be ready to go back and clarify
- Adjust based on feedback before continuing

**Example:**
> "Here's the architecture overview:
> 
> [200-300 words describing architecture]
> 
> Does this look right so far?"

### 4. After the Design

**Documentation:**
- Write validated design to `docs/plans/YYYY-MM-DD-<topic>-design.md`
- Use clear, concise writing (reference elements-of-style skill if available)
- Include diagrams where helpful
- Commit the design document to git

**Transition to Implementation:**
- Ask: "Ready to set up for implementation?"
- Create isolated workspace (use git-worktrees if available)
- Write detailed implementation plan (use writing-plans skill if available)

## Key Principles

### One Question at a Time
- Don't overwhelm with multiple questions
- Let the user focus on one thing
- Build understanding progressively

### Multiple Choice Preferred
- Easier to answer than open-ended
- Provides clear options
- Speeds up decision-making
- Use when feasible, not mandatory

### YAGNI Ruthlessly
- You Aren't Gonna Need It
- Remove unnecessary features from all designs
- Focus on solving the immediate problem
- Avoid over-engineering

### Explore Alternatives
- Always propose 2-3 approaches before settling
- Helps user see the trade-off space
- Builds confidence in the chosen solution
- Prevents tunnel vision

### Incremental Validation
- Present design in sections
- Validate each section before continuing
- Catch misalignment early
- Cheaper to fix than after implementation

### Be Flexible
- Go back and clarify when needed
- Don't be attached to your ideas
- The user knows their needs best
- Adapt based on feedback

## Common Patterns

**Feature Design:**
1. Understand the user need
2. Explore UI/UX implications
3. Design data model
4. Plan API surface
5. Consider error states
6. Validate incrementally

**Integration Design:**
1. Understand both systems
2. Identify integration points
3. Design data transformation
4. Plan error handling
5. Consider retry/fallback logic
6. Validate incrementally

**Refactoring Design:**
1. Understand current pain points
2. Identify scope and boundaries
3. Design new structure
4. Plan migration strategy
5. Consider backward compatibility
6. Validate incrementally

## Workflow Checklist

When using this skill:

- [ ] Reviewed current project context
- [ ] Asked clarifying questions (one at a time)
- [ ] Understood purpose, constraints, and success criteria
- [ ] Proposed 2-3 alternative approaches
- [ ] Validated user's preferred approach
- [ ] Presented design in 200-300 word sections
- [ ] Validated each section before continuing
- [ ] Applied YAGNI ruthlessly
- [ ] Documented design in `docs/plans/`
- [ ] Committed design document
- [ ] Ready for implementation

## Anti-Patterns to Avoid

❌ **Multiple questions at once** - Overwhelming and hard to answer
❌ **Jumping to implementation** - Misses requirements, creates rework
❌ **Presenting entire design at once** - Hard to validate, easy to miss issues
❌ **Over-engineering** - Violates YAGNI, adds complexity
❌ **Single approach** - Doesn't explore alternatives, limits options
❌ **Ignoring feedback** - Wastes collaborative dialogue
❌ **Skipping documentation** - Loses design rationale

## Success Indicators

You've done this well when:
- User feels heard and understood
- Design aligns with actual needs
- Trade-offs are explicit and accepted
- Implementation path is clear
- Design is documented and committed
- Both you and user feel confident proceeding
