
let helper = require('./helper')

/**
 * Check to see if IMU data was transmitted and return a boolean
 * 
 * @param {number} address 
 * @param {number[]} data
 * @returns {boolean}
 */
exports.check = function check(address, data) {
    return helper.addressCheck(
        address == TELEMETRY_ADDRESS.IMU,
        () => {
            
            var accel = {
                x: signed16(dataBuffer[1], dataBuffer[0]),
                y: signed16(dataBuffer[3], dataBuffer[2]),
                z: signed16(dataBuffer[5], dataBuffer[4])
            }

            var gyro = {
                x: signed16(dataBuffer[7], dataBuffer[6]),
                y: signed16(dataBuffer[9], dataBuffer[8]),
                z: signed16(dataBuffer[11], dataBuffer[10])
            }
            var linear = {
                x: signed16(dataBuffer[13], dataBuffer[12]),
                y: signed16(dataBuffer[15], dataBuffer[14]),
                z: signed16(dataBuffer[17], dataBuffer[16])
            }
            var temp = signed16(dataBuffer[19], dataBuffer[18])

            // console.log("--------- PACKET START ---------")
            // console.log("accel : ", accel)
            // console.log("gyro : ", gyro)
            // console.log("linear : ", gyro)
            // console.log("temp : ", temp, "C")
            // console.log("--------- PACKET END ---------")
    })
}
