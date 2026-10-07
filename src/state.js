export const VERSION = 1;

export function newState() {
  return {
    version: VERSION,
    time: 0,
    resources: { food: 100, funds: 100 },
    subjects: [
      { id: 1, name: "Subject 1", health: 100, morale: 100, stress: 0 },
      { id: 2, name: "Subject 2", health: 100, morale: 100, stress: 0 },
      { id: 3, name: "Subject 3", health: 100, morale: 100, stress: 0 },
    ],
    over: false,
  };
}
