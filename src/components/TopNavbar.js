import React from "react";

import { Menu} from 'antd';


class Topnavmenu extends React.Component {
    render() {
        return (
            <div>
                <Menu className="menu" theme="dark" mode="horizontal" 
                style={{backgroundColor:'transparent'}}
                >
                    
                    <Menu.Item key='commingsoon'>
                        
                            COMMING SOON
                        
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Topnavmenu;