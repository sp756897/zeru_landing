import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import './scroll.css'

import zerulabs from '../assets/zeru.jpeg'




class Third_view extends Component {
    render() {
        return (
            <div className='zerulabs' style={{height:'70vh',margin:'0',alignItems:'center'}}>

                    <Row style={{ width: '100%', height: '100%', padding: "3rem" ,margin:'0 auto' }}>
                        <Col span={14} >
                            <h1> Introducing Zeru Labs</h1>
                            <h5>    
                                Development environment for developers, Comming soon.
                            </h5>
                        </Col>
                        <Col span={10} style={{display:'flex',justifyContent:'center'}}>
                            <img src={zerulabs} alt="Logo" style={{ width: 300, height: 300,borderRadius:'50%'}} />

                        </Col>
                    </Row>

            </div>
        )
    }
}

export default Third_view