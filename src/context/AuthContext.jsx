import React, { createContext, useContext, useEffect, useState } from 'react'
import {account} from '../appwrite/appwriteConfig'
import { ID } from 'appwrite';
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        checkuserstatus();
    },[])


    const loginuser = async (userdata) => {
        setLoading(true);

        try {
            let session = await account.createEmailPasswordSession(userdata.email,userdata.password);
            if(session){
                let accountdetails = await account.get();
                setUser(accountdetails)
                navigate('/')
            }
            else{
                console.log("session creation failed!!")
            }
            
            
        } catch (error) {
            console.log(error);
            alert("Invalid credentials!!")
        }
        setLoading(false)
    }

    const logoutuser = async () => {
        await account.deleteSession('current')
        setUser(null);
        navigate('/loggedout');
    }

    const registeruser = async (userdata) => {
        setLoading(true);
        try {
            let registerr = await account.create(ID.unique(),userdata.email,userdata.password,userdata.name)
            if(registerr){
                await loginuser(userdata);
                navigate('/')
            } 
            else{
                console.log("register failed!");
                
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false)

    }

    const checkuserstatus = async () => {
        try {
            let currentsession = await account.get();
            setUser(currentsession)
        } catch (error) {
            console.log(error);
            
        }
        setLoading(false)
    }


    const data = {
        user,loginuser,logoutuser,checkuserstatus,registeruser
    }

    return (
        <AuthContext.Provider value={data}>
            {loading ? 
            <div className="h-screen w-full flex items-center justify-center bg-white">
        <div className="w-20 h-20 border-4 border-coral-red border-t-transparent rounded-full animate-spin"></div>
      </div> : children }
        </AuthContext.Provider>
    )
}

//custom hook
export const useAuth = () => useContext(AuthContext);

export default AuthContext