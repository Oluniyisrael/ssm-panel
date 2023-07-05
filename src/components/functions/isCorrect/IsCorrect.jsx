function isCorrect(database,username,password,setIsLoggedIn,isLoggedIn){
    for (let i = 0; i < database.length; i++) {
      if(username === database[i].username && password === database[i].password){
        return true
      }
    }
    return false
  }
  export default isCorrect