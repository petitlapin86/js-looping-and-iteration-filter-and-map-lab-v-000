// Code your solution here:
function driversWithRevenueOver (speeddemons, revenue) {
  return speeddemons.filter(function (driver) {
    return driver.revenue > revenue;
  });
}
