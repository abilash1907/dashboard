import React from 'react'
import Header from './Header'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import {IoMdContact} from 'react-icons/io'
import {IoCallOutline} from 'react-icons/io5'
import {FaBell,FaArrowCircleRight} from 'react-icons/fa';
import {FcButtingIn} from 'react-icons/fc';
import {BiChevronDown,BiEnvelope} from 'react-icons/bi';
import {Card,Nav,Button} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from './image/image.png'
function MainPage() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    const classes = useStyles();
    return (
        <div className="col-md-10 col-11" >
            <div className="raw float-right" style={{marginRight:"-15rem"}}>
            <div className="col-md-12" style={{display:'flex',color:"white"}}>
                <FaBell className="mt-3 ml-3"  style={{color:"white"}}/>
                <p className="mt-2 ml-5 pt-1"><b>John Bayer</b></p>
                <FcButtingIn className="mt-1 ml-3 " size={45}/>
                <BiChevronDown className="mt-4 ml-3" />
            </div>
            </div>
            <Header/>
            <div className="raw" style={{marginLeft:"5rem",display:"flex"}}>
                <div className="col-md-9">
                    <Row1/>
                    <Row2 />
                    <Row3 />
                </div>
                <div className="col-md-3 ml-5">
                <Card style={{background:" #1f2025",width: '100%' }}>
                <FaArrowCircleRight />
                <Card.Header>
                    <img src={image} alt="" />
                </Card.Header>
                <Card.Body className="border-top rounded" style={{background:"#222328",color:"white"}}>
                    <Grid container spacing={3}>
                    <Grid item md={6} xs={6} sm={6}>
                         <p style={{fontSize:"10px"}}><IoMdContact size={20}/>Rosie Metts<br/><small className='ml-4 '>applied for</small></p>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <BiEnvelope/> <IoCallOutline className="ml-4"/>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                         <p style={{fontSize:"10px"}}><IoMdContact size={20}/>Rosie Metts<br/><small className='ml-4 '>applied for</small></p>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <BiEnvelope/> <IoCallOutline className="ml-4"/>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                         <p style={{fontSize:"10px"}}><IoMdContact size={20}/>Rosie Metts<br/><small className='ml-4 '>applied for</small></p>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <BiEnvelope/> <IoCallOutline className="ml-4"/>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                         <p style={{fontSize:"10px"}}><IoMdContact size={20}/>Rosie Metts<br/><small className='ml-4 '>applied for</small></p>
                        
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                    <BiEnvelope/> <IoCallOutline className="ml-4"/>
                        
                    </Grid>
                    </Grid>
                </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default MainPage
