import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import './styles.css'

import loan from '../assets/loan.jpg'


const css = {
    color: '#191919',
    height: '400px',
    width:'1000px',
    fontSize: '1rem',
    fontFamily: 'Rubik',
    backgroundColor: '#fff',
    border: 0,
    borderRadius: '10px',
    margin: '100px auto',
    display: 'flex',
    alignItems: 'center',
}

class Third_view extends Component {
    render() {
        return (
            <div style={{height:'80vh',margin:'0'}}>

                <Card style={css}>
                    <Row>
                        <Col span={12} className="col1">
                            <h1 style={{ color: 'black', fontSize:30, marginLeft:'50px' }}> Start in seconds </h1>
                            <h4>
                               connect your crypto wallet to start using the app in seconds
                            </h4>
                        </Col>
                        <Col span={12} style={{display:'flex',alignItems:'right'}}>
                            <img src={loan} alt="Logo" style={{ width: 300, height: 300,marginLeft:'200px'}} />

                        </Col>
                    </Row>


                </Card>





            </div>
        )
    }
}

export default Third_view