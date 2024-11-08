import React, { useContext, useEffect,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
const App = () => { 
    const [user,setUser] = useState(null);// user admin hai ya employee

    const [loggedInUserData,setLoggedInUserData] = useState(null);//logged in user ka data 

    const [userData,SetUserData] = useContext(AuthContext); // context say data lao check karnay kay liyae user or password 



      useEffect (() => {
      
         const loggedInUser = localStorage.getItem("loggedInUser")

            if(loggedInUser){
            const  userData =JSON.parse(loggedInUser);
            setUser(userData.role);
            setLoggedInUserData(userData.data);
           }
        
      },[]) ; 
     
    //check karayga email password match hora ya nahi data say loccal storage mai hai jo

    const handleLogin = (email,password) => {
       
      if(email == 'admin@me.com' && password =='123'){
       setUser('admin');
       localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }

      else if(userData ){
         const employee =userData.find( (e) =>{email ==e.email && password == e.password }) 
         if(employee){
           setUser('employee') 
           setLoggedInUserData(employee)
           localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}));
        }
      }

      else {
        alert("Invalid Credentials");
      }
    }
      

   
   

  return (
    <>
   
    {!user ? <Login handleLogin ={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard changeuser ={setUser} /> : (user =='employee' ? <EmployeeDashboard changeUser ={setUser} data={loggedInUserData} /> : null)}
   
    </>
  )
}

export default App 