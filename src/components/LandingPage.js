import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import TextComponent from './TextComponent';
import AnimationComponent from './AnimationComponent';
import { Card } from 'antd';
import Second_View from './Second_view';
import Third_view from './Third_view';
import './scroll.css';

import rocket from '../assets/rocket.png'

const cardcss = {
    width: "800px",
    height: '400px',
    textAlign: "center",
    margin: '100px auto',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    borderRadius: '30px'
}

export class LandingPage extends Component {
    render() {
        return (

            <div className='bodydiv'>
                <section className='first_segment' style={{ paddingTop: "1.8rem", backgroundColor: "transparent" }}>
                    <Row style={{ width: '100%', height: '100%', padding: "3rem" }}>
                        <Col span={14} offset={0} style={{ width: '100%', height: '100%' }}>
                            <TextComponent />
                        </Col>
                        <Col span={10} offset={0} style={{ width: '100%', height: '100%' }}>
                            <AnimationComponent />
                        </Col>
                    </Row>
                </section>

                <section style={{ background: 'transparent', height: '90.3vh', alignItems: 'center' }}>
                    <div className='joinus'>
                        <Row style={{ width: '100%', height: '100%', padding: "3rem" }}>
                    
                            <Col span={10} offset={0} style={{ width: '100%', height: '100%' }}>
                                <img src={rocket} alt="Rocket to the moon" style={{ width: 400, height: 400, marginTop:0}} />
                            </Col>
                            <Col span={14} offset={0} style={{ width: '100%', height: '100%' }}>
                                <h1>
                                    Join the Revolution
                                </h1>
                                <h5>
                                    Your big oppurtunity to join the future of Defi is here!!! Join the Revolution and be a part of this community to go to moon at last!!!
                                </h5>
                                <Button id='ant_button' type='primary'>
                                    Discord
                                </Button>
                            </Col>
                        </Row>
                    </div>

                </section>

                <section className='second_view' style={{ "backgroundColor": "transparent" }}>
                    <Second_View />
                </section>
                <section className='third_view'>
                    <Third_view />
                </section>
                <p style={{ color: 'white', textAlign: 'center', fontFamily: 'rubik' }}>
                    Zeru ©2022
                </p>
            </div>
        )
    }
}

export default LandingPage