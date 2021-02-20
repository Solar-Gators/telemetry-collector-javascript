
let helper = require('./helper')

/**
 * Check to see if BMS data was transmitted and return a boolean
 * 
 * @param {number} address 
 * @param {number[]} data
 * @returns {Boolean}
 */
exports.check = function check(address, data) {
    if(address == helper.TELEMETRY_ADDRESS.BMS && data[7] && data[6]){
        console.log("BMS: ")
        var low = helper.getWord(data[1], data[0])/100
        var high = helper.getWord(data[3], data[2])/100
        var avg = helper.getWord(data[5], data[4])/100
        var pack = helper.getWord(data[7], data[6])/100
        console.log(low)
        console.log(high)
        console.log(avg)
        console.log(pack)
    }
    return helper.addressCheck(
        address == helper.TELEMETRY_ADDRESS.BMS && data[7] && data[6],
        () => {
            helper.sendData("bms", {
                "lowCellVoltage"  : low,
                "highCellVoltage" : high,
                "avgCellVoltage"  : avg,
                "packSumVoltage"  : pack
            })
        })
}
