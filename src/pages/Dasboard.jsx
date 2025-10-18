import { useNavigate } from "react-router-dom";
import {app} from "../Firebase";
import { getAuth,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";


function Dasboard(){
    const navigate = useNavigate();
    const auth = getAuth(app);
    const logOut =()=>{
        signOut(auth).then(res=>{
            console.log(res);
        console.log("logged out")
        navigate("/login");
        })
        .catch(err=>{
            console.log(err);
        })

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log("login",user)
            }else{console.log("didn't logged in")}
        })
        return ()=> unsubscribe();
    },[])
    return(
        <>
        <h1 style={{color:"#ffffff"}}>Dashboard</h1>
        <button onClick={logOut} style={{backgroundColor:"#353535c5",color:"#d0d0d0ff"}}>LogOut</button>
        </>
    )
}

export default Dasboard;