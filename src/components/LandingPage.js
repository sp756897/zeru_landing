import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import TextComponent from './TextComponent';
import AnimationComponent from './AnimationComponent';
import { Card } from 'antd';
import Second_View from './Second_view';
import Third_view from './Third_view';
import './scroll.css';

const cardcss = {
    width: "800px",
    height: '400px',
    textAlign: "center",
    margin: '100px auto',
    display: 'flex',
    alignItems: 'center',

}

export class LandingPage extends Component {
    render() {
        return (
            <div className='bodydiv'>
                <section className='first_segment' style={{ paddingTop: "1.8rem" }}>
                    <Row style={{ width: '100%', height: '100%', padding: "3rem" }}>
                        <Col span={14} offset={0} style={{ width: '100%', height: '100%' }}>
                            <TextComponent />
                        </Col>
                        <Col span={10} offset={0} style={{ width: '100%', height: '100%' }}>
                            <AnimationComponent />
                        </Col>
                    </Row>
                </section>

                <section style={{ background: '#3b3b4f', height: '100vh', alignItems: 'center' }}>
                    <div>
                        <Row >
                            <Card id="textcomp" bordered={false} style={cardcss}>
                                <h3 id="secondary_header" style={{ fontFamily: "Rubik", color: "gold", fontSize: "30px", paddingBottom: "15px" }}>
                                    Join the Revolution
                                </h3>
                                <p style={{ fontSize: "18px", color: "#ffffffba", paddingRight: "10rem", paddingLeft: "10rem" }}>
                                    Your big oppurtunity to join the future of Defi is here!!!<br></br> Join the Revolution and be a part of this community to go to moon at last!!!
                                </p>
                                <div style={{ "padding": "1rem" }}>
                                    <Button id='ant_button' type='primary'>
                                        Discord
                                    </Button>
                                </div>
                            </Card>
                        </Row>
                    </div>

                </section>



                <section className='second_view' style={{ "backgroundColor": "#191919" }}>
                    <Second_View />
                </section>
                <section className='third_view'>
                    <Third_view />
                </section>
                <p style={{ color: 'black', textAlign: 'center' }}>
                    Zeru ©2022
                </p>
            </div>
        )
    }
}

export default LandingPage