// Pure: returns a new state, never touches DOM or storage.
export function tick(state) {
  if (state.over) return state;
  const s = structuredClone(state);
  s.time += 1;
  s.resources.food -= s.subjects.length;
  const starving = s.resources.food < 0;
  if (starving) s.resources.food = 0;
  for (const p of s.subjects) {
    if (starving) p.health = Math.max(0, p.health - 5);
  }
  s.subjects = s.subjects.filter((p) => p.health > 0);
  s.over = s.subjects.length === 0;
  return s;
}
