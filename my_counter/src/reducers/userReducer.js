
const userReducer = (usersState = {}, action) => {
  switch (action.type) {
      case "AUTH":
        return usersState =  {...action.data}
      default:
        return usersState
	}; 
}

export default userReducer;