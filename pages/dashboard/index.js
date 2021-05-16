import React from 'react';
import { auth } from '../../common/firebase';
import UserInfo from './userInfo';

class Dashboard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }


    render() {
        return(
            <div>
                <UserInfo />
            </div>
        )
    }

}

export default Dashboard;