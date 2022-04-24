import React, { Component } from 'react'
import "./card_hover_style.css";
import { Row, Card, Col } from "antd";

class Second_View extends Component {
    render() {
        return (
            <div>
                <Row style={{ width: "stretch", height: '100%', padding: "3rem", display: "flex", justifyContent: "space-around" }}>
                    <Col>
                        <div className='container'>
                            <Card id="card2" bordered={false} style={{ width: "100%", textAlign: "center" }}>
                                <h3>Vision</h3>
                                <p class="small">Bringing the 11 trillion dollars credit industry to Defi. By bringing the undercollaterised loans into mainstream</p>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className='container'>
                            <Card id="card2" bordered={false} style={{ width: "100%", textAlign: "center" }}>
                                <h3>Zero</h3>
                                <p class="small">Eventually freeing up an influx of capital for both the protocol and users to enjoy increased yield by giving out zero-collateral loans</p>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className='container'>
                            <Card id="card2" bordered={false} style={{ width: "100%", textAlign: "center" }}>
                                <h3>Team</h3>
                                <p class="small">Our amazing set of enthusiastic developers have built robust algorithms to make the whole process secure and automatic</p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}



export default Second_View
