
const stateMachine = (state:string, cmd:string, mode:string = "ACTIVE") => {
  interface response {
    newState: string
  }

  let res:response = { "newState": "" }
  switch(state){
    case 'CLOSED':
      switch(cmd){
        case 'APP_ACTIVE_OPEN': 
          res["newState"] = 'SYN_SENT'
          break
        case 'APP_PASSIVE_OPEN': 
          res["newState"] = 'LISTEN'
          break
      }
      break
    case 'LISTEN':
      switch(cmd){
        case 'RCV_SYN':
          res["newState"] = 'SYN_RCVD'
          break
        case "APP_SEND":
          res["newState"] = 'SYN_SENT'
          break
        case "APP_CLOSE":
          res["newState"] = 'CLOSED'
          break
        default: 
          res["newState"] = 'ERROR'
      }  
      break
    case 'SYN_SENT':
      switch(cmd){
        case 'RCV_SYN_ACK':
          res["newState"] = 'ESTABLISHED'
          break
        case 'RCV_SYN':
          res["newState"] = 'SYN_RCVD'
          break
        case "APP_CLOSE":
          res["newState"] = 'CLOSED'
          break
        default: 
          res["newState"] = 'ERROR'
      }
      break
    case 'SYN_RCVD':
      switch(cmd){
        case 'RCV_ACK':
          res["newState"] = 'ESTABLISHED'
          break
        case "APP_CLOSE":
          res["newState"] = 'FIN_WAIT_1'
          break
        default: 
          res["newState"] = 'ERROR'
      }
      break 
    case 'ESTABLISHED':
      switch(cmd){
        case 'RCV_FIN':
          res["newState"] = 'CLOSE_WAIT'
          break 
        case "APP_CLOSE":
          res["newState"] = 'FIN_WAIT_1'
          break
        default: 
          res["newState"] = 'ERROR'
      }
      break
    case 'FIN_WAIT_1':
      switch(cmd){
        case 'RCV_FIN':
          res["newState"] = 'CLOSING'
          break 
        case 'RCV_FIN_ACK':
          res["newState"] = 'TIME_WAIT'
          break 
        case 'RCV_ACK':
          res["newState"] = 'FIN_WAIT_2'
          break 
        default: 
          res["newState"] = 'ERROR'
      }
      break
    case 'FIN_WAIT_2':
      switch(cmd){
        case 'RCV_FIN':
          res["newState"] = 'TIME_WAIT'
          break 
        default: 
          res["newState"] = 'ERROR'
      }
      break
    case 'CLOSING':
      switch(cmd){
        case 'RCV_ACK':
          res["newState"] = 'TIME_WAIT'
          break 
        default: 
          res["newState"] = 'ERROR'
      }
      break
    case 'CLOSE_WAIT':
      switch(cmd){
        case 'APP_CLOSE':
          res["newState"] = 'LAST_ACK'
          break
        }
      break
    case 'LAST_ACK':
      switch(cmd){
        case 'RCV_ACK':
          res["newState"] = 'CLOSED'
          break 
        default: 
          res["newState"] = 'ERROR'
      }
      break
    case 'APP_TIMEOUT':
      res["newState"] = 'CLOSED'
      break
    case 'TIME_WAIT':
  
      setTimeout(() => {
        res["newState"] = 'CLOSED'
      }, 2000)
      break
    default: 
      res["newState"] = 'ERROR'
  }
  return res
}

export const traverseTCPStates = (eventList:string[]) => {
  let state = "CLOSED"
  let mode = eventList[0].includes("ACTIVE") ? "ACTIVE" : "PASSIVE"
  let cmd, res
  
  for( cmd of eventList ){
    res = stateMachine(state, cmd, mode)
    state = res.newState
  }

    if(state === "CLOSING" || state === "TIME_WAIT"){
      setTimeout(() => {
        state = 'CLOSED'
      }, 3000)
    }
  
  return state
}