// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (wealthydrivers) {
    return wealthydrivers.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (whatsMyName) {
    return whatsMyName.revenue > revenue;
    return whatsMyName.name;

  });
}

