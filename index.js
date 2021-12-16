// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(arg){
    return arg.slice(0,2)
}

const returnLastTwoDrivers = function returnLastTwoDrivers(arg){
    return arg.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function createFareMultiplier(arr){
    return (arr) => arr * arr;
}

const fareDoubler = (arr) => {
    return arr * 2;
}

const fareTripler = (arr) => {
    return arr * 3;
}

const selectDifferentDrivers = function (arr , func){
    if(func === returnFirstTwoDrivers ){
        return returnFirstTwoDrivers(arr);
    }else {
        return returnLastTwoDrivers(arr);
    }
}

