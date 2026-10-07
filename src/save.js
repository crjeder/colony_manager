import { VERSION, newState } from "./state.js";

const KEY = "colony-manager-save";

// Add one case per version bump.
function migrate(s) {
  return s;
}

export function save(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
}

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return newState();
    const s = migrate(JSON.parse(raw));
    return s.version === VERSION ? s : newState();
  } catch {
    return newState();
  }
}
