import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  { DataProvider } from './Data/DataContext';
import NewIdea from './Components/NewIdea/NewIdea';
import UserPage from "./Components/User/UserPage"
import DragAndDrop from './Components/DragAndDrop/DragAndDrop';
import DetailedView from './Components/DetailedView/DetailedView';
import EditProfile from './Components/EditProfile/EditProfile';
import Authentication from './Components/Authentication/Authentication';
import Sidebar from './Nav/Nav';
import Profile from './Components/Profile/Profile';
import  Dashboard  from './Components/Dasboard/Dashboard';
import Userprofile from './Components/Userprofile/Userprofile';
import ApproverPage from './Components/Userprofile/ApproverPage';
import Admin from './Components/Admin/Admin';



function App() {

  return (
    <div className="App">    
      <DataProvider>
        <Sidebar/>
      <Routes>
        <Route path='/' element={<DragAndDrop/>}/>
        {/* <Route path='/user' element={<UserPg/>} />
        <Route path='/admin' element={<Admin/>} /> */}
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/mail' element={<NewIdea/>}/>
        <Route path='/login' element={<Authentication/>}/>
        <Route path='/idea-detailes/:id' element={<DetailedView/>}/>
        <Route path="/profile-edit" element={<EditProfile/>}/>
        <Route path='/users' element={<Admin/>}/>
        <Route path='/approve' element={<ApproverPage/>}/>
        <Route path='/userprofile' element={<Userprofile/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        {/* <Route path='/MessageBox' element={<MessageBox text={"success"}/>}/> */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/userprofile/:id' element={<Userprofile/>}/>

        
      </Routes>
      
      </DataProvider>
    </div>
  );
}

export default App;
