// Code your solution in this file!


function distanceFromHqInBlocks(block){
    const headquarters = 42
    return Math.abs(headquarters - block)
}




function distanceFromHqInFeet(block){
    const feets = distanceFromHqInBlocks(block) * 264
    return feets
    
}

function distanceTravelledInFeet(start, end){
    const walk = Math.abs(end - start) * 264
    return walk
}

function calculatesFarePrice(startBlock, destinationBlock){
    
    const distance = distanceTravelledInFeet(startBlock, destinationBlock)
    
    if(distance >= 2500){
        return "cannot travel that far"}
    else if(distance > 2000){
        return 25 
    }
    else if (distance >= 400){
        return (distance - 400) * 0.02
    }
    else {
        return 0
    }
}
