import { Button } from 'react-bootstrap';
import React from 'react'
import {FaPlus} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi'
function Header() {
    return (
        <div className="raw">
            <div  className=" col-md-12 col-6 p-2 mt-3" style={{marginLeft:"5rem"}} >
                <h3 style={{color:"white"}}>Dashboard</h3>
                <p><b style={{color:"white"}}>Monday,</b><b className="ml-2" style={{color:"#0000FF"}}>02 july 2020</b></p>
            </div>
            <div className="col-md-6 col-6 float-right"style={{marginTop:"-5rem",marginRight:"-15rem"}}>
                <div className="row float-right">
                    <Button className="mr-2" style={{width:'7rem',"justify-content":"center"}}><FaPlus className="mr-4"/><b style={{marginTop:"-1px"}}>Add</b></Button>
                    <FiSearch className='mt-3 ml-3 pt-1' size={23} style={{marginRight:"1rem", color:"#55565b"}}/>
                    <input className="mt-3 ml-1 text-white" type="search"  placeholder="Search for Application here" style={{ color:"white",width:"15rem",border:"none",outline:"none",background:"#1f2025"}} />
                </div>    
            </div>
        </div>
    )
}

export default Header
