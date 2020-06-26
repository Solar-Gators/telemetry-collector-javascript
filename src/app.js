var network = require('./network')
const SerialPort = require('serialport')
const config = require('config')

var port = new SerialPort(config.get('Serial.serialPort'), { baudRate: config.get('Serial.baudRate') })

port.on('data',function(data){
    for (var index = 0; index < data.length; index++)
    {
        network.read(data[index])
    }
});
port.on('error', function(data)
{
    console.log('Error: ' + data)
});
