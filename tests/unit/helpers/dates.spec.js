import * as datesHelper from "@/helpers/dates";

describe("dates.js", () => {
  describe("generateMonthMatrix", () => {
    it("should generate 5x7 matrix", () => {
      const year = 2019;
      const month = 4;

      expect(datesHelper.generateMonthMatrix(year, month).length).toBe(5);
      datesHelper
        .generateMonthMatrix(year, month)
        .forEach(row => expect(row.length).toBe(7));
    });
    it("should generate proper number of empty rows at the beginning", () => {
      const year = 2019;
      const month = 4;

      expect(
        datesHelper.generateMonthMatrix(year, month)[0].slice(0, 3)
      ).toEqual(new Array(3));
      expect(
        datesHelper.generateMonthMatrix(year, month)[0].slice(0, 4)
      ).not.toEqual(new Array(4));
    });
    it("should generate proper number of empty rows at the end", () => {
      const year = 2019;
      const month = 4;

      expect(
        datesHelper.generateMonthMatrix(year, month)[4].slice(6, 7)
      ).toEqual(new Array(1));
      expect(
        datesHelper.generateMonthMatrix(year, month)[4].slice(5, 7)
      ).not.toEqual(new Array(2));
    });
  });
  describe("getWeekdays", () => {
    it("should get proper full week names", () => {
      datesHelper.getFirstDayOfWeekName = jest.fn().mockReturnValue("sunday");
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

      expect(datesHelper.getWeekdays({ full: true })).toEqual(days);
    });
    it("should get proper short week names", () => {
      datesHelper.getFirstDayOfWeekName = jest.fn().mockReturnValue("sunday");
      const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

      expect(datesHelper.getWeekdays()).toEqual(days);
    });
  });
});
