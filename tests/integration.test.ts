import { describe, it, expect } from "vitest";
import { Graphmind } from "../src/core.js";

describe("Graphmind integration", () => {
  it("handles concurrent ops", async () => {
    const c = new Graphmind();
    await Promise.all([c.addnode({a:1}), c.addnode({b:2}), c.addnode({c:3})]);
    expect(c.getStats().ops).toBe(3);
  });
  it("returns service name", async () => {
    const c = new Graphmind();
    const r = await c.addnode();
    expect(r.service).toBe("graphmind");
  });
  it("handles 100 ops", async () => {
    const c = new Graphmind();
    for (let i = 0; i < 100; i++) await c.addnode({i});
    expect(c.getStats().ops).toBe(100);
  });
});
