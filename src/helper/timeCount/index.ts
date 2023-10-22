const currentDate = new Date().getTime();

const yearsSinceDate = (year: number, month: number, day: number) => {
  const startDate = new Date(year, month, day).getTime();

  const timeBeingDeveloper = currentDate - startDate;

  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = timeBeingDeveloper / millisecondsPerYear;

  return Math.floor(years);
};

export default yearsSinceDate;
