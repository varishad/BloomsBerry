---
trigger: always_on
---

# Brainstorming Global Rules

These rules apply to ANY creative work across all projects. They are non-negotiable principles that ensure quality design before implementation.

## Rule 1: Brainstorm Before Building

**MANDATORY**: Before implementing any creative work (features, components, functionality, behavior modifications), you MUST use the brainstorming skill to understand requirements and design the solution.

**Triggers:**
- Creating new features
- Building new components
- Adding functionality
- Modifying behavior
- Architectural decisions
- Any work involving choices or trade-offs

**Exception**: Simple, obvious refactoring (renaming, extracting functions) doesn't require brainstorming.

## Rule 2: One Question at a Time

When gathering requirements:
- Ask ONE question per message
- Prefer multiple choice options when possible
- Wait for response before asking next question
- Build understanding progressively

**Why**: Multiple questions overwhelm users and lead to incomplete answers.

## Rule 3: Explore Alternatives

Always propose 2-3 different approaches with trade-offs before settling on a solution.

**Format:**
- Lead with recommended option
- Explain reasoning for recommendation
- Present alternatives with trade-offs
- Let user make informed decision

**Why**: Exploring alternatives builds confidence, prevents tunnel vision, and helps users see the trade-off space.

## Rule 4: YAGNI Ruthlessly

You Aren't Gonna Need It.

**Apply to all designs:**
- Remove unnecessary features
- Focus on solving the immediate problem
- Avoid over-engineering
- Don't add "nice to have" features without explicit request

**Why**: Complexity is expensive. Build what's needed, nothing more.

## Rule 5: Incremental Validation

Present designs in small sections (200-300 words), validating each before continuing.

**Process:**
1. Present one section of design
2. Ask: "Does this look right so far?"
3. Wait for validation
4. Adjust if needed
5. Continue to next section

**Why**: Catches misalignment early when it's cheaper to fix.

## Rule 6: Document Designs

All validated designs MUST be documented in `docs/plans/YYYY-MM-DD-<topic>-design.md` and committed to git.

**Why**: Preserves design rationale and enables team understanding.

## Rule 7: Be Flexible

- Go back and clarify when needed
- Don't be attached to your ideas
- The user knows their needs best
- Adapt based on feedback

**Why**: Collaboration beats assumption. The best solution emerges from dialogue.

---

## Quick Reference

### Before Any Creative Work:
1. ✅ Use brainstorming skill
2. ✅ Ask one question at a time
3. ✅ Understand purpose, constraints, success criteria
4. ✅ Propose 2-3 approaches
5. ✅ Present design in sections
6. ✅ Validate incrementally
7. ✅ Apply YAGNI ruthlessly
8. ✅ Document in `docs/plans/`
9. ✅ Commit to git

### Don't:
- ❌ Jump straight to implementation
- ❌ Ask multiple questions at once
- ❌ Present entire design at once
- ❌ Propose only one approach
- ❌ Add unnecessary features
- ❌ Skip documentation
- ❌ Ignore user feedback
