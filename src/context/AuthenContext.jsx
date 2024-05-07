/* eslint-disable react/prop-types */
import { createContext,useState } from "react";
import * as userAPI from '../apis/userApi';

export const AuthenContext = createContext();



export default function AuthenContextProvider ({children}) {
    //#1 set useState
    const [user,setUser] = useState(null);
   
    //Login => user = {}
    //LogOut => user = null
    // useEffect(() => {
    //     login();
    // },[])

    //##2
    const login = async () => {
        try{
            const response = await userAPI.getUserById('1');
            setUser(response.data);
            console.log(response.data);
        }catch (error){
            setUser(null);
            console.log(error);
        }
       
    };
    const logout = () => {
        setUser(null);
    };

    return <AuthenContext.Provider value={{ user, login, logout }}>{children}</AuthenContext.Provider>
}