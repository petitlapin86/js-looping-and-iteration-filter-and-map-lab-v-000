// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (wealthydrivers) {
    return wealthydrivers.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (whatsMyName) {
      return whatsMyName.name;
    });
}
