import bookingConditionsMock from "./mocks/booking-conditions";

const repositories = {
  // true repositories ...
};

const mockRepositories = {
  bookingConditions: bookingConditionsMock
};

const isMock = true;

export default {
  get: name => (isMock ? mockRepositories[name] : repositories[name])
};
