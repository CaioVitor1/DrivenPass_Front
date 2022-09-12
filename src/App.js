import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext";

//import InitialPage from "./components/InitialPage";
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import Main from "./components/Main";
import CredentialsFunction from "./components/CredentialsPage";
import UnicContent from "./components/UnicContent";
function App() {
      const [page, setPage] = useState("")
      const [itemId, setItemId] = useState("")
      const [user, setUser] = useState({
        token: ""  
    })
      
    
    return (
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, page, setPage}}>
          <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/main" element={<Main />} />
              <Route path="/content" element={<CredentialsFunction />} />
              <Route path="/unic" element={<UnicContent />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    );
  }
  
  export default App;