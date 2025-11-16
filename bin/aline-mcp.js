#!/usr/bin/env node

import { spawn, execSync } from "child_process";
import { platform } from "os";

const isWindows = platform() === "win32";

function checkUvxInstalled() {
  try {
    execSync(isWindows ? "where uvx" : "which uvx", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function installUv() {
  console.error("Installing uv (Python package manager)...");
  try {
    if (isWindows) {
      execSync("powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"", {
        stdio: "inherit",
      });
    } else {
      execSync("curl -LsSf https://astral.sh/uv/install.sh | sh", {
        stdio: "inherit",
        shell: true,
      });
    }
    // Add to PATH for current session
    const homeDir = process.env.HOME || process.env.USERPROFILE;
    if (!isWindows) {
      process.env.PATH = `${homeDir}/.local/bin:${process.env.PATH}`;
    }
    return true;
  } catch (err) {
    console.error("Failed to install uv:", err.message);
    return false;
  }
}

async function main() {
  console.error("[aline-ai npm wrapper] Starting...");

  // Check if uvx is available, install if not
  if (!checkUvxInstalled()) {
    console.error("uvx not found. Attempting automatic installation...");
    if (!installUv()) {
      console.error("\nPlease install uv manually:");
      console.error("  curl -LsSf https://astral.sh/uv/install.sh | sh");
      process.exit(1);
    }
    console.error("uv installed successfully!\n");
  }

  // Run aline-mcp via uvx
  const uvxCommand = isWindows ? "uvx.cmd" : "uvx";
  // Use --refresh to ensure latest version is downloaded
  const args = ["--refresh", "--from", "aline-ai", "aline-mcp", ...process.argv.slice(2)];

  console.error(`[aline-ai npm wrapper] Running: ${uvxCommand} ${args.join(" ")}`);

  const child = spawn(uvxCommand, args, {
    stdio: "inherit",
    shell: isWindows,
    env: process.env,
  });

  child.on("error", (err) => {
    if (err.code === "ENOENT") {
      console.error("Error: uvx still not found after installation.");
      console.error("Please restart your terminal and try again.");
      process.exit(1);
    }
    console.error("Error spawning uvx:", err.message);
    process.exit(1);
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

main();
