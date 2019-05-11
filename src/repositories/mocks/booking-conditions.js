export default {
  get: () =>
    Promise.resolve({
      price: 100,
      currency: "zł",
      rating: 4.5,
      numberOfRates: 123,
      availableDates: []
    })
};
