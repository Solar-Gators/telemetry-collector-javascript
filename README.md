# Telemetry Collector

Communications that come back from the vehicle happens using the RFD900x module which reports UART back to us. This repository is the software responsable for decoding the message after it is sent over UART and sending it to the correct endpoint on our [GUI Server](https://github.com/Solar-Gators/Pit-GUI).

## Model

The decoding of transmissions is roughly based on the [OSI Model](https://en.wikipedia.org/wiki/OSI_model). Our implemenation is simplier with three layers utilized, the physical layer, data link layer, and network layer. The first two layers are standard protocols that are listed below.

Physical Layer: [UART Protocol](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter), 

Data Link Layer: [Byte Stuffing](https://www.geeksforgeeks.org/difference-between-byte-stuffing-and-bit-stuffing/)


### Network Layer

The network layer is a custom protocol used for sending telemetry information in a way that is easily verifiable. The first byte of a transmission is the address that corresponds to a telemetry item (ie Battery Cell 1, GPS, Temperature). The second byte is length of the data packet that follows the first two bytes. 


Below is a graphical repsentation of what a transmission looks like.

```

| 8 bit address | 8 bit data length | 1 byte of data | ... n bytes of data |

```

The telemetry addresses have been predefined as needed below.

Telemetry | Address
------------ | -------------
GPS  | 0x00
MPPT | 0x01
BMS  | 0x02
IMU  | 0x03

## Usage

To get started with the project you will need NodeJS and NPM installed. Then install the local dependancies using the npm install command.

```Bash
npm install
```

Then to start run the following command
```Bash
npm start
```
