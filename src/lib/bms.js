
let helper = require('./helper')

/**
 * Check to see if BMS data was transmitted and return a boolean
 * 
 * @param {number} address 
 * @param {number[]} data
 * @returns {Boolean}
 */
exports.check = function check(address, data) {
    if(address == helper.TELEMETRY_ADDRESS.BMS){
        console.log(helper.getWord(data[1], data[0])/100)
        console.log(helper.getWord(data[3], data[2])/100)
        console.log(helper.getWord(data[5], data[4])/100)
        console.log(helper.getWord(data[7], data[6])/100)
    }
    return helper.addressCheck(
        address == helper.TELEMETRY_ADDRESS.BMS && data[7] && data[6],
        () => {
            helper.sendData("bms", {
                "LowCellVoltage"  : helper.getWord(data[1], data[0])/100,
                "highCellVoltage" : helper.getWord(data[3], data[2])/100,
                "avgCellVoltage"  : helper.getWord(data[5], data[4])/100,
                "packSumVoltage"  : helper.getWord(data[7], data[6])/100
            })
        })
}
