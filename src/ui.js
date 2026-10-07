const app = document.getElementById("app");

export function render(s) {
  app.innerHTML = `
    <h1>Colony Manager</h1>
    <p>Day ${s.time} | Food ${s.resources.food} | Funds ${s.resources.funds}</p>
    <ul>${s.subjects.map((p) => `<li>${p.name}: HP ${p.health}</li>`).join("")}</ul>
    ${s.over ? "<p><b>Colony lost.</b></p>" : ""}
    <button id="reset">New game</button>`;
}
