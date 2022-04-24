import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import './styles.css'

import loan from '../assets/loan.jpg'


const css = {
    color: '#191919',
    height: '400px',
    fontSize: '1rem',
    fontFamily: 'Rubik',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    border: 0,
    borderRadius: '10px',
}

class Third_view extends Component {
    render() {
        return (
            <div >

                <Card style={css}>
                    <Row>
                        <Col span={12} className="col1">
                            <h1 style={{ color: 'black', fontSize:30, marginLeft:'50px' }}> Why Zero Collateral Loans on ZERU? </h1>
                            <ul>
                                <li>
                                    Anyone in the world can take Loans
                                </li>
                                <li>
                                    Take Loans without Collateral when you reach zero collateral
                                </li>
                                <li>
                                    Freeing the locked up collateral to facilitate borrower.
                                </li>
                            </ul>
                        </Col>
                        <Col span={12} style={{display:'flex',alignItems:'right'}}>
                            <img src={loan} alt="Logo" style={{ width: 300, height: 300,margin:'0 auto'}} />

                        </Col>
                    </Row>


                </Card>





            </div>
        )
    }
}

export default Third_view