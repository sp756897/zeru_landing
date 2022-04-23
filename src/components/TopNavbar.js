import React from "react";

import { Menu } from 'antd';


class Topnavmenu extends React.Component {
    render() {
        return (
            <div>
                <Menu className="menu" theme="dark" mode="horizontal"
                    style={{ backgroundColor: "transparent", float: "right" }}
                >

                    <Menu.Item key='commingsoon'>

                        COMING SOON

                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Topnavmenu;