import { createContext, useContext , useState,useEffect} from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState( localStorage.getItem("token"));
    const [services,setServices]=useState([]);
//  const [user, setUser] = useState("");

  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  // function to check the user Authentication or not
//   const userAuthentication = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/user", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();

//         // our main goal is to get the user data 👇
//         console.log("user data",data.userData);
//         setUser(data.userData);
//       } else {
//         console.error("Error fetching user data");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// // //  getting user data in contact form {autofill}

const getservices=async()=>{
try {
  const response= await fetch(`${window.location.origin}/api/service`,{
    method:"GET",    });
  if(response.ok){
    const data = await response.json();
    console.log(data.msg);
   setServices(data.msg);
  }
} catch (error) {
  console.log(`service frontend error ${error}`);
}
};
 useEffect(() => {
   getservices();
 }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn,storeTokenInLS,LogoutUser,services}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};