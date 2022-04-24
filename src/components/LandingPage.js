import React, { Component } from 'react'
import { Row, Col } from 'antd';
import TextComponent from './TextComponent';
import AnimationComponent from './AnimationComponent';
import { Card } from 'antd';
import Second_View from './Second_view';
import Third_view from './Third_view';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Row style={{ width: '100%', height: '100%', padding: "3rem" }}>
                    <Col span={14} offset={0} style={{ width: '100%', height: '100%' }}>
                        <TextComponent />
                    </Col>
                    <Col span={10} offset={0} style={{ width: '100%', height: '100%' }}>
                        <AnimationComponent />
                    </Col>
                </Row>
                <Row style={{ width: '100%', height: '100%', padding: "3rem" }}>
                    <Card id="textcomp" bordered={false} style={{ width: "100%", textAlign: "center" }}>
                        <h3 id="secondary_header" style={{ fontFamily: "Rubik", color: "gold", fontSize: "30px" }}>
                            Join the Revolution
                        </h3>
                        <p style={{ fontSize: "24px", color: "#ffffffba", paddingRight: "3rem", paddingLeft: "3rem" }}>
                            Your big oppurtunity to join the future of Defi is here!!! Join the Revolution and be a part of this community to go to moon at last!!!
                        </p>
                    </Card>
                </Row>
                <div className='second_view'>
                    <Second_View />
                </div>
                <div className='third_view'>
                    <Third_view />
                </div>
            </div>
        )
    }
}

export default LandingPage