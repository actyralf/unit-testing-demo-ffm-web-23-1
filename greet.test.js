import { greet } from "./greet.js";

test("returns 'Guten Morgen Herr Lehrer' if called greet('Paul')", () => {
  const result = greet("Paul");
  expect(result).toBe("Guten Morgen Herr Lehrer");
});

test("returns 'Hallo liebe:r Student:in' if called greet('Alina')", () => {
  const result = greet("Alina");
  expect(result).toBe("Hallo liebe:r Student:in");
});
