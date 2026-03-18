import { describe, it, expect } from "vitest";
import { KnowledgeGraph } from "../src/core.js";
describe("KnowledgeGraph", () => {
  it("init", () => { expect(new KnowledgeGraph().getStats().ops).toBe(0); });
  it("op", async () => { const c = new KnowledgeGraph(); await c.addnode(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new KnowledgeGraph(); await c.addnode(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
