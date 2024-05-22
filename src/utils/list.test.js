import { describe, it, expect } from "vitest";
import { splitTodosIntoDays } from "./list";

describe("splitTodosIntoDays", () => {
  it("should split todos into days for mo, ti, on, to, fr, lö, sö", () => {
    const todos = [
      { day: "mo" },
      { day: "ti" },
      { day: "on" },
      { day: "to" },
      { day: "fr" },
      { day: "lö" },
      { day: "sö" },
    ];

    const expectedOutput = [
      [{ day: "mo" }],
      [{ day: "ti" }],
      [{ day: "on" }],
      [{ day: "to" }],
      [{ day: "fr" }],
      [{ day: "lö" }],
      [{ day: "sö" }],
    ];

    expect(splitTodosIntoDays(todos)).toEqual(expectedOutput);
  });

  it("should handle multiple tasks on the same day", () => {
    const todos = [
      { day: "mo" },
      { day: "mo" },
      { day: "mo" },
      { day: "ti" },
      { day: "on" },
      { day: "to" },
      { day: "fr" },
      { day: "lö" },
      { day: "sö" },
      { day: "sö" },
    ];

    const expectedOutput = [
      [{ day: "mo" }, { day: "mo" }, { day: "mo" }],
      [{ day: "ti" }],
      [{ day: "on" }],
      [{ day: "to" }],
      [{ day: "fr" }],
      [{ day: "lö" }],
      [{ day: "sö" }, { day: "sö" }],
    ];
    expect(splitTodosIntoDays(todos)).toEqual(expectedOutput);
  });

  it("should return empty arrays for days with no todos", () => {
    const todos = [{ day: "mo" }, { day: "ti" }];
    const expectedOutput = [
      [{ day: "mo" }],
      [{ day: "ti" }],
      [],
      [],
      [],
      [],
      [],
    ];
    expect(splitTodosIntoDays(todos)).toEqual(expectedOutput);
  });

});
