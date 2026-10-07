import assert from "node:assert";
import { newState } from "../src/state.js";
import { tick } from "../src/sim.js";

const a = newState();
assert.deepStrictEqual(tick(a), tick(a), "tick is deterministic");
assert.strictEqual(a.time, 0, "tick does not mutate input");

let s = newState();
for (let i = 0; i < 200 && !s.over; i++) s = tick(s);
assert.ok(s.over, "colony eventually starves");

console.log("ok");
