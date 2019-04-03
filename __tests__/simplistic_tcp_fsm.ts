import { traverseTCPStates } from '../src/simplistic_tcp_fsm'

describe( "traverseTCPStates", () => {
  it( "should work for the examples" , () => {
    expect(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN_ACK","RCV_FIN"])).toBe("CLOSE_WAIT")
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK"])).toBe("ESTABLISHED")    
    expect(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN_ACK","RCV_FIN","APP_CLOSE"])).toBe("LAST_ACK")
    expect(traverseTCPStates(["APP_ACTIVE_OPEN"])).toBe("SYN_SENT")
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK","APP_CLOSE","APP_SEND"])).toBe("ERROR")
  })
})

describe( "traverseTCPStates 2", function(){
  it( "should work for the examples" , function(){
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK","APP_CLOSE"])).toBe("FIN_WAIT_1")   // 0
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK"])).toBe("ESTABLISHED")                // 1
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN"])).toBe("SYN_RCVD")                             // 2
    expect(traverseTCPStates(["APP_PASSIVE_OPEN"])).toBe("LISTEN")                                           // 3
    expect(traverseTCPStates(["APP_ACTIVE_OPEN","APP_CLOSE"])).toBe("CLOSED")                                      //4
    expect(traverseTCPStates(["RCV_SYN","RCV_ACK","APP_CLOSE"])).toBe("ERROR")    
    expect(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN_ACK","RCV_FIN"])).toBe("CLOSE_WAIT")                                  // 8
    expect(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN_ACK","RCV_FIN","APP_CLOSE"])).toBe("LAST_ACK")                      // 9
    expect(traverseTCPStates(["APP_ACTIVE_OPEN"])).toBe("SYN_SENT")                                                          // 10
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","APP_CLOSE"])).toBe("CLOSED")                                                     // 11
    expect(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN_ACK","APP_CLOSE"])).toBe("FIN_WAIT_1")                                      // 12
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK","APP_PASSIVE_OPEN"])).toBe("ERROR")                        // 13 + 14
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK","APP_CLOSE","RCV_SYN"])).toBe("ERROR")                    // 15
    expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK","APP_CLOSE"])).toBe("FIN_WAIT_1")                              // 17


        // expect(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN","APP_CLOSE","RCV_FIN","RCV_ACK"])).toBe("TIME_WAIT")                // 5
        // expect(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN","APP_CLOSE","RCV_FIN","RCV_ACK","APP_TIMEOUT"])).toBe("CLOSED")  // 6
        // expect(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN","APP_CLOSE","RCV_ACK"])).toBe("FIN_WAIT_2")                          // 7
        // expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK","APP_CLOSE","RCV_FIN_ACK","APP_TIMEOUT","APP_ACTIVE_OPEN","RCV_SYN","APP_CLOSE","RCV_FIN","RCV_ACK"])).toBe("TIME_WAIT")
        // expect(traverseTCPStates(["APP_PASSIVE_OPEN","APP_CLOSE","RCV_SYN"])).toBe("ERROR")
        // expect(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK","APP_CLOSE","RCV_FIN"])).toBe("CLOSING")                       // 18
  });
});