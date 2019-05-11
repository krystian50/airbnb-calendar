import { isBetween, isPositive } from "@/helpers/number";

describe("number.js", () => {
  describe("isBetween", () => {
    let range;

    beforeAll(() => {
      range = isBetween(0, 10);
    });

    it("should be falsy for lower number", () => {
      expect(range(-5)).toBeFalsy();
    });

    it("should be falsy for higher number", () => {
      expect(range(14)).toBeFalsy();
    });

    it("should be truthy for number in range", () => {
      expect(range(5)).toBeTruthy();
    });
  });
  describe("isPositive", () => {
    it("should be falsy for non-positive number", () => {
      expect(isPositive(-5)).toBeFalsy();
    });

    it("should be truthy for positive number", () => {
      expect(isPositive(5)).toBeTruthy();
    });

    it("should be truthy for zero number", () => {
      expect(isPositive(0)).toBeTruthy();
    });
  });
});
