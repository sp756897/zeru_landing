import React from "react";

import { Menu } from 'antd';


class Topnavmenu extends React.Component {
    render() {
        return (
            <div>
                <Menu className="menu" theme="dark" mode="horizontal"
                    style={{ backgroundColor: "transparent", float: "right" }}
                >

                    <Menu.Item className="menuitem1" key='commingsoon' style={{ "borderRadius": "30px", color: "white" }}>

                        COMING SOON

                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Topnavmenu;