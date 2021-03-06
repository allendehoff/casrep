// import React from "react"
// import { Card, Row, Col, Button, } from "react-bootstrap"
import "./style.css"

import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import HomeButtonBases from "../components/HomeButtonBase/HomeButtonBase"




// import ambulance from "../assets/images/ambulance.jpg"
// import hospital from "../assets/images/hospital.jpg"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1
    },
    header: {
        padding: "2rem 0 4rem 0",
        textAlign:"center",
        // borderBottom:"5px solid #FFD400",
        marginBottom: "3rem"
    },
    subheader: {
        textAlign:"center",
        paddingBottom:"3rem"
    }
}))

function Home() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
        <Container>
            <Grid container>
                <Grid item xs={12} className={classes.header}>
                    <Typography variant="h2"
                    className="heading"
                    //  style={{ color: "#FFD400" }}
                     >Welcome to INREP</Typography>
                    <Typography variant="h4"
                    className="subheading"
                    // style={{ color: "#B7D5D4" }}
                    >A tool to help EMS providers quickly and reliably send reports to hospitals.
                    {/* reliably send reports to Hospitals without worrying about radio signal or cell service */}
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.subheader}>
                    <Typography variant="h5" 
                    className="subSubheading"
                    // style={{color:"white"}}
                    >To begin, select what type of user you are:</Typography>
                </Grid>
                <Grid item xs={12}>
                    <HomeButtonBases style={{width:"80%"}} />
                </Grid>
            </Grid>
        </Container>
        </div>

        // <div className="container" >
        /* <div
            style={{ disply: "flex", textAlign: "center", padding: "1rem 0 2rem 0", borderBottom: "5px solid #FFD400", marginBottom: "3rem" }}
        // className="jumbotron" 
        >
            <h1 style={{ color: "#FFD400" }}>Welcome to INREP</h1>
            <h4 style={{ color: "#B7D5D4" }}>A tool to help EMS providers reliably send reports to Hospitals without worrying about radio signal or cell service</h4>
        </div>
        <div>
            <Row style={{ display: "flex", justifyContent: "center", color: "white", paddingBottom:"3rem"}}>
                <h2>To begin, select what type of user you are:</h2>
            </Row>
            <Row>
                <Col style={{ display: "flex", justifyContent: "space-around" }}>
                    <a
                        style={{ textAlign: "center", height: "300px", width: "100%", backgroundImage: `url(${ambulance})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                        href="/ems"><span style={{ backgroundColor:"rgb(119, 135, 139, 0.7)",color: "#FFD400", fontSize: "3rem" }}>EMS PROVIDER</span></a>
                    {/* {/* <Button href="/ems">EMS Provider</Button>  
                </Col>
                <Col style={{ display: "flex", justifyContent: "space-around" }}>
                    <a
                        style={{  textAlign: "center", height: "300px", width: "100%", backgroundImage: `url(${hospital})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                        href="/hospital"><span style={{ backgroundColor:"rgb(119, 135, 139, 0.7)",color: "#FFD400", fontSize: "3rem" }}>HOSPITAL</span></a>
                    {/* // {/* <Button href="/hospital">Hosipial</Button>  *
                </Col>
            </Row>
        </div> */

        // </div >
    )
}

export default Home

{/* <Card >
                <Card.Header><h2>To begin, select what type of user you are:</h2></Card.Header>
                <Card.Body >
                    <Card.Link
                        className="btn btn-dark"
                        href="/ems"
                    >
                        <h4>EMS Provider</h4>
                    </Card.Link>
                    <Card.Link
                        className="btn btn-dark"
                        href="/hospital"
                    >
                        <h4>Hospital</h4>
                    </Card.Link>
                    {/* <a
                        className="btn btn-dark"
                        href="/ems"
                    ><h4>EMS Provider</h4></a>
                    <a
                        className="btn btn-dark"
                        href="/hospital"
                    ><h4>Hospital</h4>
                    </a> 
                </Card.Body>
            </Card> */}