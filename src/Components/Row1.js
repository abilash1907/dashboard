import React from 'react'
import {FiArrowUpRight,FiArrowDownRight} from 'react-icons/fi'
import {BsThreeDots} from 'react-icons/bs'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Card,Row,CardDeck} from 'react-bootstrap'

function Row1() {
    return (
        <Row className="raw" >
            <CardDeck>
            <Card className="p-2 text-white border rounded" style={{ width: '15rem',background:" #1f2025" ,height:"7rem"}}>
            <Card.Text style={{fontSize:"12px"}}>Total Applications<BsThreeDots className="float-right  mt-2" style={{marginLeft:"4rem",paddingRight:"-1rem"}}/></Card.Text>
            <h4 >7956</h4>
            <small style={{color:"#8c76d5"}}><FiArrowUpRight/>+3.59%</small>
                <Card.Body>
                <div className="float-right " style={{marginTop:"-5rem",width: 50, height: 50 }}>
                    <CircularProgressbar style={buildStyles({ textColor: "white",pathColor: "#8c76d5",trailColor:"#48494b"})}  value="70" text="+70%" />
                </div>
                </Card.Body>
                
            </Card>
            <Card className="p-2 text-white border rounded bg-primary" style={{ width: '15rem' ,height:"7rem"}}>
            <Card.Text  style={{fontSize:"12px"}}>Shortlisted Candidates<BsThreeDots className="float-right  mt-2" style={{marginLeft:"4rem",paddingRight:"-1rem"}}/></Card.Text>
            <h4>4658</h4>
            <small><FiArrowUpRight/>+06%</small>
                <Card.Body>
                <div className="float-right " style={{marginTop:"-5rem",width: 50, height: 50 }}>
                    <CircularProgressbar style={buildStyles({ textColor: "white",pathColor: "#8c76d5",trailColor:"#48494b"})}  value="70" text="+70%" />
                </div>
                </Card.Body>
                
            </Card>
            <Card className="p-2 text-white border rounded " style={{ width: '15rem',background:" #1f2025" ,height:"7rem"}}>
            <Card.Text  style={{fontSize:"12px"}}>Total Applications<BsThreeDots className="float-right  mt-2" style={{marginLeft:"4rem",paddingRight:"-1rem"}}/></Card.Text>
            <h4>1501</h4>
            <small style={{color:"#4d171a"}}><FiArrowDownRight/>+3.59%</small>
                <Card.Body>
                <div className="float-right " style={{marginTop:"-5rem",width: 50, height: 50 }}>
                    <CircularProgressbar style={{ textColor: "white",background:"#4d171a"}}  value="70" text="+70%" />
                </div>
                </Card.Body>
                
            </Card>
            </CardDeck>
        </Row>
    )
}

export default Row1
