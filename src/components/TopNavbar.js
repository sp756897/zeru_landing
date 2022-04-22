import React from "react";

import { Menu} from 'antd';


class Topnavmenu extends React.Component {
    render() {
        return (
            <div>
                <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['swap']}
                style={{color:'red',backgroundColor:'transparent'}}
                >
                    
                    <Menu.Item key='commingsoon' className="customclass">
                        
                            COMMING SOON
                        
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Topnavmenu;