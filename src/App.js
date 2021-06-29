import React from "react";
import './App.css'
import MainPage from "./Components/MainPage";
import SideBar from './Components/SideBar';
import { Row} from 'react-bootstrap'
function App() {
  return (
    <Row className="border rounded">
        <SideBar/>
        <div style={{borderLeft:"3px solid white",height:"100%"}}></div>
        <MainPage/>
    
    </Row>
  );
}

export default App;
