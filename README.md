# Aline MCP Server (One-click deployment of "Agentic Git")


Aline auto-commits your progress while you vibe-code and turns it into a persistent memory layer. Agents can read and search this memory, keeping context consistent across sessions, models, and teammates.
When you push to GitHub, the memory is shared—so others can see the history and continue your work seamlessly.

---

## ❌ Without aline

❌ Context disappears every session 

❌ You repeat background to the agent again and again 

❌ Teammates redo work, repeat mistakes, and meeting a lot to stay aligned

❌ Manually ask the agent to summarize progress

## ✅ With aline

✅ Automatically remembers everything across sessions and models

✅ Shared AI memory on github

✅ Automatically summarizes and commit progress

---

## One-Command Installation

### MCP on Claude Code (fully automatic)

```bash
claude mcp add --scope user --transport stdio aline -- npx -y aline-ai@latest
```
To verify installation:
```bash
claude mcp list
```
If you see:
```bash
aline: npx -y aline-ai@latest  — ✓ Connected
```
then the installation was successful.

### Python (semi-automatic)

```bash
pip install aline-ai
```

Initialize in your project:
```bash
aline init
```

Commit your progress:
```bash
aline commit
```

Push via Git as usual:
```bash
git push
```

## How It Works 

Once installed as MCP, Aline runs quietly in the background and automatically records everything.

It recalls context when needed, or you can force it by adding “use aline” to your prompt.

When you share your workspace (e.g., push to GitHub), aline includes the recorded memory so the others can continue with full context.

Each project has its own memory, and it doesn’t carry over across projects.

## Example Use Case

Anna receives a support ticket:  
> “On macOS, the screen recorder shows only a black window.”

She asks her agent (e.g., Claude Code): did anyone investigate this on macOS?  
aline instantly retrieves Bob’s conversation from last week:

> “Bob tested last week, macOS blocks protected windows; use ScreenCaptureKit.”


## License

MIT — see [LICENSE](LICENSE)

---

## Cite
```
@article{wu2025git,
  title={Git context controller: Manage the context of llm-based agents like git},
  author={Wu, Junde},
  journal={arXiv preprint arXiv:2508.00031},
  year={2025}
}
```

