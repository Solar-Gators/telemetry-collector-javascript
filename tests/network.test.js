let { handleTransmission } = require('../src/network')
let { TELEMETRY_ADDRESS } = require('../src/lib/helper')
var ServerMock = require("mock-http-server")

var { expect } = require('chai')

describe('Network Layer', function () {
    // Run an HTTP server on localhost:9000
    var server = new ServerMock({ host: "localhost", port: 8080 })
 
    beforeEach(function(done) {
        server.start(done)
    })
 
    afterEach(function(done) {
        server.stop(done)
    })

    describe('Send BMS packSumVoltage data', function () { 
        it('should POST /api/bms', (done) => {
            server.on({
                method: '*',
                path: '/api/bms',
                reply: {
                    status:  200,
                    headers: { "content-type": "application/json" },
                    body: function(req) {
    
                        try {
                            expect(req.method).to.equal('POST')
                            expect()
                        }
                        catch(error) {
                            done(error)
                            return JSON.stringify({ action: "read" })
                        }
                        done()
                        return JSON.stringify({ action: "read" })
                    }
                }
            })

            handleTransmission([1, TELEMETRY_ADDRESS.BMS, 8, 0, 0, 0, 0, 0, 0, 15, 80])
        })
    })
})
