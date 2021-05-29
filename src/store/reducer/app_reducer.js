const INITIAL_STATE = {
  SELL: {},
  GET_SELL: [],
  SET_KEY:"",
  SETCONDITION:true

}
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SETSELLDATA":
      return ({
        ...state,
        SELL: action.data
      })

    case "GETBLOGDATA":
      return ({
        ...state,
        GET_SELL: action.data
      })
    case "SETCURRENTKEY":
      return ({
        ...state,
        SET_KEY: action.data
      })
      case "SETCONDITION":
      return ({
        ...state,
        SETCONDITION: action.data
      })
  }
  return state;
}