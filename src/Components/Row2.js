import React, { useState } from 'react'
import { useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap'
import { Card,Row,Col,Nav,Button,Table} from 'react-bootstrap'
//import Chart from './Chart/Chart';
//import ApexCharts from 'apexcharts'
import { Line } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
function Row2() {
    const [completed, setCompleted] = useState(0);
    useEffect(() => {
     setCompleted(50);
    }, []);
    const chart ={
      data: {
        datasets: [
            {
              fill: {
                target: 'origin',
                above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                below: 'rgb(0, 0, 255)'    // And blue below the origin
              }
            }
        ]
    }
    }
   const styles={
     progressbar:{
      "height": "10px",
      "width":"100%",
      "overflow": "hidden",
      "background-color":"#dd6775",
      "border-radius": "4px",
      "-webkit-box-shadow": "inset 0 1px 2px rgba(0,0,0,.1)",
      "box-shadow": "inset 0 1px 2px rgba(0,0,0,.1)"
     }
   };
    
    return (
        <Row className="raw mt-3">
            <Col md={8}>
            <Card className="text-white border rounded" style={{background:" #1f2025",marginLeft:"-1rem"}}>
                <Card.Header>
                    <Nav style={{fontSize:"12px"}}>
                        <Card.Text>Application received</Card.Text>
                        <Nav.Item className="ml-5" >
                        This Year
                        This Week
                        Today
                        </Nav.Item>
                        
                    </Nav>
                </Card.Header>
                <Card.Body>
                  <Line data={chart.data}></Line>
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card className=" text-white border rounded" style={{background:" #1f2025",width: '100%' }}>
            <Card.Text  className="mt-3 ml-3 " style={{fontSize:"12px"}}><b>Total Applications</b></Card.Text>
            <Card.Body>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={6} sm={6}>
                    <div style={{color:"#8c9aa7",fontSize:"12px"}}>Application</div>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div><ProgressBar now={30} style={styles.progressbar} /></div>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div className="col" style={{color:"#fd5757",fontSize:"12px"}}>Application</div>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div className="col"><ProgressBar now={30} style={styles.progressbar} /></div>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div className="col" style={{color:"#d6b9e3",fontSize:"12px"}}>Application</div>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div className="col"><ProgressBar now={30} style={styles.progressbar} /></div> 
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div className="col" style={{color:"#6343b2",fontSize:"12px"}}>Application</div>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div className="col"><ProgressBar now={30} style={styles.progressbar} /></div>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div className="col" style={{color:"#8c9aa7",fontSize:"12px"}}>Application</div>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <div className="col"><ProgressBar now={30} style={styles.progressbar} /></div> 
                        
                    </Grid>
                  </Grid>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}

export default Row2
