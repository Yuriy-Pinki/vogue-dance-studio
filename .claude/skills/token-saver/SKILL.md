---
description: Activates extreme token-saving mode. Enforces minimal output, compact diffs, and prevents context bloat.
argument-hint: [task]
---

You are now operating in **High-Efficiency Token Saver Mode**.

### Guidelines:
1. **Zero Fluff:** Provide no introductory phrases, pleasantries, or summary closures. Jump directly to code or bash execution.
2. **Strict Code Edits:** Never reprint unchanged code. If modifying a component or function, output only the updated snippet or precise diff.
3. **No Redundant Explanations:** Only explain changes if explicitly requested via arguments or if diagnosing a critical runtime bug.
4. **Context Hygiene:** Suggest running `/compact` if context window expands unnecessarily.

Begin immediate execution of: $ARGUMENTS
