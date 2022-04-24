import React, { Component } from 'react'
import { Card } from 'antd';

export class TextComponent extends Component {
  render() {
    return (
      <div>
        <div className="site-card-border-less-wrapper" >
          <Card id="textcomp" bordered={false} style={{ background: "", width: "100%" }}>
            <h1 id="landingheader" style={{ fontFamily: "Rubik", color: "white" }}>
              The World's First <br></br>Zero Collateral<br></br> Crypto Loans
            </h1>
            <p style={{ fontSize: "21px", color: "#ffffffba", lineHeight: "2rem" }}>Free up your capital by getting a zero Collateral loan from our protocol. The future of defi is here.
              <span style={{ color: "gold" }}> Join the Revolution</span> </p>
          </Card>
        </div>
      </div>
    )
  }
}

export default TextComponent