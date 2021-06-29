import React from 'react'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {FiArrowUpRight} from 'react-icons/fi'
import { Button,Card,Row ,Col} from 'react-bootstrap'
import {Doughnut} from 'react-chartjs-2'
import {BsThreeDots} from 'react-icons/bs'
function Row3() {
    const chartData = [25, 45,30];
    const data1 = {
        
        datasets: [
          {
            data: chartData,
            backgroundColor: ["#2e9cfd", "#6642b6",'#fe5260']
          }
        ],
        text: "Open Percent"
      };
      const options1 = {
        responsive: true,
        legend: {
          display: false,
          position: "bottom",
          labels: {
            fontSize: 10,
            fontColor: "white",
            fontFamily: "kanit light"
          }
        }
      };
    return (
        <Row className='raw mt-3'>
            <Col md={8}>
            <Card className="text-white border rounded" style={{background:" #1f2025",marginLeft:"-1rem"}}>
            <Card.Text className="ml-3 mt-3" >
              <b style={{fontSize:"12px"}}>Refrals and Campaign Stats</b>
              <b className="float-right mr-3" style={{color:"#794d50",fontSize:"12px"}}>40 Campaign send in total <br/>
              <b style={{color:"white",fontSize:"12px"}}>4 campaign in last month</b></b>
              <IoPaperPlaneOutline className="float-right mt-2 mr-2" color="#794d50" size={20} style={{"justify-content":"center"}}/>
            </Card.Text>
            
            <Card.Body>
                <Row>
                  <Col>
                    <b className="text-white" style={{fontSize:"12px"}}>User's Reached</b><br/>
                    <small className="pt-3 ml-2" style={{color:"#8c76d5"}}><FiArrowUpRight/>+3.59%</small>
                    <h4 className="text-white pl-1 ml-2" style={{fontSize:"20px"}}>7956</h4>
                  </Col>
                  <div style={{borderLeft:"3px solid #1f2025"}}></div>
                  <Col>
                    <b className="text-white ml-3 " style={{fontSize:"12px"}}>Referals</b><br/>
                    <small className="pt-3 ml-2" style={{color:"#8c76d5"}}><FiArrowUpRight/>+9.01%</small>
                    <h4 className="text-white pl-1 ml-2" style={{fontSize:"20px"}}>0662</h4>
                  </Col>
                  <div style={{borderLeft:"3px solid #1f2025"}}></div>
                  <Col>
                    <b className="text-white ml-3" style={{fontSize:"12px"}}>Shares</b><br/>
                    <small className="pt-3 ml-2" style={{color:"#8c76d5"}}><FiArrowUpRight/>+39.18%</small>
                    <h4 className="text-white pl-1 ml-2" style={{fontSize:"20px"}}>1478</h4>
                  </Col>
                  <div style={{borderLeft:"3px solid #1f2025"}}></div>
                  <Col>
                    <b className="text-white" style={{fontSize:"12px"}}>Applications</b><br/>
                    <small className="pt-3 ml-2" style={{color:"#8c76d5"}}><FiArrowUpRight/>+12.00%</small>
                    <h4 className="text-white pl-1 ml-2" style={{fontSize:"20px"}}>0564</h4>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={6}>
                    <Button  variant="primary mb-2" style={{fontSize:"12px",width:"100%"}}>Start a new Campaign now</Button>
                  </Col>
                  <Col md={6}>
                    <Button className="bg-danger mb-2 "  style={{fontSize:"12px",width:"100%"}}>Pause all running campains </Button>
                  </Col>
                </Row>
            </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card className=" text-white border rounded" style={{background:" #1f2025",width: '16rem'}}>
              <Card.Text className="ml-3 mt-3" >
                <b style={{fontSize:"12px"}}>Open Position By Department</b>
                <BsThreeDots className="float-right mt-2 mr-2"   style={{"justify-content":"center"}}/>
              </Card.Text>
              <Card.Body>
                <Row>
                  <Col md={12} style={{marginTop:"-2rem"}}>
                  <Doughnut className="text-white" aria-setsize={10} data={data1} options={options1} height={500} />
                  </Col>
                </Row>
              </Card.Body>
              </Card>
            </Col>
            
        </Row>
    )
}

export default Row3
