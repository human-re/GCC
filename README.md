# aline MCP Server

**Shared AI memory; everyone knows everything in teams**

aline maintains a persistent memory layer for you and your team. Your context keeps across sessions, models, and teammates.
When you push to a shared workspace (e.g., GitHub), Aline attaches the relevant context so others can pick up your work seamlessly.
All memory stays local until you choose to share it, with full privacy protection.

---

## What Aline Does

**Before aline:**
- Context disappears every session  
- You repeat background to the agent again and again  
- Teammates redo work, repeat mistakes, and meeting a lot to stay aligned
- Manually ask the agent to summarize progress

**After aline:** 
-	Automatically remembers everything across sessions and models
-	Shared AI memory for seamless team collaboration
-	Automatically summarizes progress and retrieve context when it matters

---

## Installation

### Claude Code

```bash
claude mcp add --scope user --transport stdio aline -- npx -y aline-ai@latest
```

### Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "aline": {
      "command": "npx",
      "args": ["-y", "aline-ai@latest"]
    }
  }
}
```

### VS Code (`settings.json`)

```json
{
  "mcp": {
    "servers": {
      "aline": {
        "command": "npx",
        "args": ["-y", "aline-ai@latest"]
      }
    }
  }
}
```

### Windsurf (`~/.codeium/windsurf/mcp_config.json`)

```json
{
  "mcpServers": {
    "aline": {
      "command": "npx",
      "args": ["-y", "aline-ai@latest"]
    }
  }
}
```

### Zed

```json
{
  "context_servers": {
    "aline": {
      "command": {
        "path": "npx",
        "args": ["-y", "aline-ai@latest"]
      }
    }
  }
}
```

### Other MCP Clients

```json
{
  "command": "npx",
  "args": ["-y", "aline-ai@latest"]
}
```


## How It Works

Once installed, Aline runs in the background. It saves your AI conversations, updates summaries, and keeps memory across sessions, models, and apps.
It recalls context automatically, and you can force it by adding “use aline” to your prompt.

When you share your workspace (e.g., push to GitHub), aline includes the relevant memory so teammates can continue seamlessly.

Each project has its own memory, and it doesn’t carry over across projects.

## Example Use Case

Anna receives a support ticket:  
> “On macOS, the screen recorder shows only a black window.”

She asks her agent.  
aline instantly retrieves Bob’s conversation from last week:

> “Bob tested last week, macOS blocks protected windows; use ScreenCaptureKit.”


## License

MIT — see [LICENSE](LICENSE)

---