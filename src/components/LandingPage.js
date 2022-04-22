import React, { Component } from 'react'

import { Row, Col } from 'antd';
import TextComponent from './TextComponent';
import AnimationComponent from './AnimationComponent';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className='content'>

                   
                    <Row style={{background:'white',width:'100%',height:'100%'}}>
                        <Col span={12} offset={0} style={{background:'red',width:'100%',height:'100%'}}>
                            <TextComponent/>
                        </Col>
                        <Col span={12} offset={0} style={{background:'blue',width:'100%',height:'100%'}}>
                            <AnimationComponent/>
                        </Col>
                    </Row>
                   

                </div>
            </div>
        )
    }
}

export default LandingPage