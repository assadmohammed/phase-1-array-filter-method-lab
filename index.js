// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  }
function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
      return driver.startsWith(letters);
    });
  }
function matchName(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.name === name;
    });
  }
findMatching(drivers, 'Bobby');