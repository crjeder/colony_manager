import { newState } from "./state.js";
import { tick } from "./sim.js";
import { load, save } from "./save.js";
import { render } from "./ui.js";

let state = load();

setInterval(() => {
  state = tick(state);
  save(state);
  render(state);
}, 1000);

document.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    state = newState();
    save(state);
    render(state);
  }
});

render(state);
