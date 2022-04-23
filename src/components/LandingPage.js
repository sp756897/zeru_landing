import React, { Component } from 'react'
import { Row, Col } from 'antd';
import TextComponent from './TextComponent';
import AnimationComponent from './AnimationComponent';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Row style={{ width: '100%', height: '100%' }}>
                    <Col span={14} offset={0} style={{ width: '100%', height: '100%' }}>
                        <TextComponent />
                    </Col>
                    <Col span={10} offset={0} style={{ background: 'blue', width: '100%', height: '100%' }}>
                        <AnimationComponent />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LandingPage