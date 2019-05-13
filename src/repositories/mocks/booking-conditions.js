export default {
  get: () =>
    Promise.resolve({
      price: 100,
      currency: "zł",
      rating: 4.5,
      numberOfRates: 123,
      availableDates: [
        new Date(2019, 4, 1),
        new Date(2019, 4, 2),
        new Date(2019, 4, 3),
        new Date(2019, 4, 4),
        new Date(2019, 4, 5),
        new Date(2019, 4, 6),
        new Date(2019, 5, 3),
        new Date(2019, 5, 4),
        new Date(2019, 5, 5),
        new Date(2019, 5, 6)
      ]
    })
};
