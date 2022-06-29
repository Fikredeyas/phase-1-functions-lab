function distanceFromHqInBlocks(point){

return Math.abs (point- 42)
}

function distanceFromHqInFeet(point){
    return (264) * distanceFromHqInBlocks(point)
}

function distanceTravelledInFeet(start, finish){
    return Math.abs(start-finish)*264
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    let fare;
    if(distanceInFeet < 400){
        fare = 0
        return fare;
    }
    else if(distanceInFeet >= 400 && distanceInFeet <= 2000) {
        fare = (distanceInFeet-400) * 0.02;
        return fare;

    }
    else if(distanceInFeet > 2000 && distanceInFeet < 2500) {
        fare = 25
        return fare;
    }
    else if(distanceInFeet > 2500){
    fare = "cannot travel that far";
    return fare;
    }
}