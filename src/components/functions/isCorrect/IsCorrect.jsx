function isCorrect(database,username,password,setIsLoggedIn,isLoggedIn){
    for (let i = 0; i < database.length; i++) {
      if(username === database[i].username && password === database[i].password){
        console.log('true')
        setIsLoggedIn(true)
        console.log(isLoggedIn)
        return true
      }
    }
    console.log('false')
    return false
  }
  export default isCorrect