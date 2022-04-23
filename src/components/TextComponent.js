import React, { Component } from 'react'
import { Card } from 'antd';

export class TextComponent extends Component {
  render() {
    return (
      <div>
        <div className="site-card-border-less-wrapper" >
          <Card id="textcomp" bordered={false} style={{ background: "", width: "100%" }}>
            <h1 id="landingheader" style={{ fontFamily: "Rubik", color: "white" }}>
              World's First Zero Collateral Crypto Loans
            </h1>
            <p style={{ fontSize: "24px", color: "white" }}>Free up your capital by getting a zero Collateral loan from our protocol. The future of defi is here, Join the Revolution</p>
          </Card>
        </div>
      </div>
    )
  }
}

export default TextComponent