const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        let person = people[i];
        let oldestAge;
        if (oldest.yearOfDeath) {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        } else {
            oldestAge = currentYear - oldest.yearOfBirth;
        }
        let currentAge;
        if (person.yearOfDeath) {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            currentAge = currentYear - person.yearOfBirth;
        }
        if (currentAge > oldestAge) {
            oldest = person;
        }
    }
    return oldest;
}
// Do not edit below this line
module.exports = findTheOldest;
