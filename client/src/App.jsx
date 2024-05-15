import { BrowserRouter,Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { Adminusers } from "./pages/Adminusers";
import { Admincontacts } from "./pages/Admincontacts";
import { Admin } from "./pages/Admin";
import { Adminupdate } from "./pages/Adminupdate";
import { User } from "./pages/User";
import { Preferences } from "./pages/Preferences";

const App=()=>{
  return <>
  <BrowserRouter>
  <Navbar/>

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
      
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/logout" element={<Logout/>}/>
       <Route path="*" element={<Error/>}/>
       
       <Route path="/admin" element={<Admin/>}>
       <Route path="course" element={<Contact/>}/>
       <Route path="faculty" element={<Service/>}/>
       <Route path="users" element={<Adminusers/>}/>
       <Route path="contact" element={<Admincontacts/>}/>
       <Route path="update" element={<Adminupdate/>}/>
           

       </Route>
       <Route path="/user" element={<User/>}>
       <Route path="prefer" element={<Preferences/>}/>
       
       </Route>

       

     </Routes>
     <Footer/>
  </BrowserRouter>
  </>
};
export default App;