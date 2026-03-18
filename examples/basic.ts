// Basic usage example for graphmind
import { Graphmind } from "../src/core.js";

async function main() {
  const instance = new Graphmind({ verbose: true });

  console.log("=== graphmind Example ===\n");

  // Run primary operation
  const result = await instance.addnode({ input: "example data", mode: "demo" });
  console.log("Result:", JSON.stringify(result, null, 2));

  // Run multiple operations
  const ops = ["addnode", "addedge", "query];
  for (const op of ops) {
    const r = await (instance as any)[op]({ source: "example" });
    console.log(`${op}:`, r.ok ? "✓" : "✗");
  }

  // Check stats
  console.log("\nStats:", JSON.stringify(instance.getStats(), null, 2));
}

main().catch(console.error);
