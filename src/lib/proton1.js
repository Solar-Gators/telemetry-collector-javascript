let helper = require("./helper");

/**
 * Check to see if Proton1 (MPPT) data was transmitted and return a boolean
 *
 * @param {number} address
 * @param {number[]} data
 * @returns {Boolean}
 */
exports.check = function check(address, data) {
  return helper.addressCheck(address == helper.TELEMETRY_ADDRESS.MPPT, () => {
    let preArrayVoltage = (input[1] << 8) | input[0];
    let preArrayCurrent = (input[3] << 8) | input[2];
    let preBatteryVoltage = (input[5] << 8) | input[4];
    let preMpptTemperature = (input[7] << 8) | input[6];

    helper.sendData("proton1", {
      arrayVoltage: preArrayVoltage / 100,
      arrayCurrent: preArrayCurrent / 100,
      batteryVoltage: preBatteryVoltage / 100,
      mpptTemperature: preMpptTemperature / 100,
    });
  });
};
