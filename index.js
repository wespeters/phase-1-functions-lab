function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber > 42) {
        return streetNumber - 42;
    }
    else return 42 - streetNumber;
};

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264;
};

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
  }
  else return (destination - start) * 264;
};

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    };
}