import logo from './logo.svg';
import Topbar from './components/Topbar';
import "./App.css"
import Sidebar from './components/Sidebar';
import Home from './Page/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import UserList from './Page/UserList';
import UserProfile from './Page/UserProfile';
import CreateUser from './Page/CreateUser';
import Signin from './Page/Signin';
function App() {
  return (
    <>
   <BrowserRouter>
   <Topbar/>
      <div className='container'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='ordersPage'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<UserList />} />
          <Route path="user/:slug" element={<UserProfile />} />
          <Route path="newUser" element={<CreateUser />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
             

          
        </div>
      </div>
   </BrowserRouter>
     
      
    </>
  );
}

export default App;
