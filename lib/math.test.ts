import { describe, expect, it } from "vitest";
import { sum, subtract } from "./math";

describe("Math functions", () => {
    it("adds two numbers", () => {
        expect(sum(2, 3)).toBe(5);
    });

    it("subtracts two numbers", () => {
        expect(subtract(5, 2)).toBe(3);
    });
});