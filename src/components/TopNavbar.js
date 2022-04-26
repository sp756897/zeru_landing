import React from "react";
import { Menu } from 'antd';


class Topnavmenu extends React.Component {
    render() {
        return (
            <div>
                <Menu className="menu" theme="dark" mode="horizontal"
                    style={{ backgroundColor: "transparent", float: "right" }}
                >
                    <Menu.Item className="menuitem1" key='commingsoon' style={{ "borderRadius": "24px", color: "white" }}>
                        COMING SOON
                    </Menu.Item>
                </Menu>
                <div className="logo" style={{ position: 'fixed' }}>
                    <h2 style={{ fontFamily: "Rubik", fontSize: "21px", fontWeight: "bold" }}>
                        <i></i> Z E R U
                    </h2>
                </div>
            </div>
        );
    }
}

export default Topnavmenu;