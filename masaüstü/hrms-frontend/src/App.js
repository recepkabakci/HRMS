
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import User from './pages/User';
import ViewUser from './users/ViewUser';
import Profile from './pages/Profile';
import Aboutus from './pages/Aboutus';
import Hire from './pages/Hire';
import Contact from './pages/Contact';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'



library.add(fas)


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/hire" element={<Hire />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
       
      </Router>

    </div>
  );
}

export default App;
