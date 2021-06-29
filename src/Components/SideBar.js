import React from 'react'
import {AiFillHome,AiFillFolder} from 'react-icons/ai';
import {BiBriefcaseAlt2,BiCalendarCheck} from 'react-icons/bi';
import {MdAssessment,MdPeopleOutline} from 'react-icons/md';
import {IoChatboxSharp} from 'react-icons/io5';
import {FaSignOutAlt} from 'react-icons/fa';
import { BsGear} from 'react-icons/bs';
import {HiMenuAlt2} from 'react-icons/hi';
import { Row,Col} from 'react-bootstrap'
//import {ReactSmartScroller} from 'react-smart-scroller';
function SideBar() {
    
    return (
        <Col md={2} xs={1} style={{position:"fixed",zIndex:"1"}}>
            
                <div className="col-md-12 ml-2 p-2 mt-3 ml-3"> 
                    <HiMenuAlt2  style={{color:"white",transform: "rotate(-15deg)"}}/>
                </div>
                
                <div className="col-md-12 ml-3 p-2 mt-3"> 
                    <AiFillHome  style={{color:"#6495ED"}}/>
                </div>
                <div className="col-md-12  ml-3 p-2">
                    <MdAssessment style={{color:"white"}} />
                </div>
                <div className="col-md-12  ml-3 p-2 ">
                    <BiBriefcaseAlt2 style={{color:"white"}}/>
                </div>
                <div className="col-md-12  ml-3 p-2">
                    <AiFillFolder style={{color:"white"}}/>
                </div>
                <div className="col-md-12  ml-3  p-2">
                    <BiCalendarCheck style={{color:"white"}}/>
                </div>
                <div className="col-md-12  ml-3  p-2"> 
                    <MdPeopleOutline style={{color:"white"}}/>
                </div>
                <div className="col-md-12  ml-3  p-2">
                    <IoChatboxSharp style={{color:"white"}}/> 
                </div >
                <div className="col-md-12  ml-3  p-2 "> 
                    <FaSignOutAlt style={{color:"white"}}/> 
                </div>
                
                <div className="col-md-12 ml-2 mb-5" style={{marginTop:"14rem"}}> 
                    < BsGear style={{color:"white"}}/> 
                </div>
                <div style={{"border-Left":"6px solid white",height:"100%"}}></div>
        </Col>
    )
}

export default SideBar