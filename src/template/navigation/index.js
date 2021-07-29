import React, { Component } from 'react';
import { Menu } from '../../component';
import "./nav.css"
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser : {
                name: '',
                username: '',
                password:''
              }
        }
    }

    componentDidMount() {
        const { loggedUser } = this.props;
        this.setState({loggedUser:loggedUser})
      }

    showPageAfterLogin = () => {
        const {goToPage, loginStatus} = this.props;
        
        if (loginStatus)
        return <>
        <Menu isActivePage={this.checkActivePage("logout")} redirect={() => goToPage("logout")}>Logout</Menu>
        <Menu isActivePage={this.checkActivePage("form")} redirect={() => goToPage("form")}>Register</Menu>
        </>

        return <>
        <Menu isActivePage={this.checkActivePage("login")} redirect={() => goToPage("login")}>Login</Menu>
        </>        
    }
    getUser = () => {
        const {loggedUser, loginStatus} = this.props;
        if (loginStatus)
        return <div className="welcome">{`Welcome ${String(loggedUser.name)}`}<div>{`Role: ${String(loggedUser.role)}`}</div></div>

        return <div className="welcome">Welcome</div>
    }

    checkActivePage = activePage => {
        const { page } = this.props
        if (activePage === page) return "active"
       
        return ""
    }

    render() {
        // console.log("navlogged",this.getLoggedUser)
        const { goToPage, loginStatus, loggedUser } = this.props
        console.log("cekk",loggedUser)
        return (
            <>
            <div className="nav">
                {this.showPageAfterLogin()} 
                <Menu isActivePage={this.checkActivePage("userList")} redirect={loginStatus ? () => goToPage("userList") : () =>  Swal.fire({
                    icon: 'error',
                    title: 'Please Sign In First',
                    text: 'Please try again!',
                    showConfirmButton: false,
                    timer: 1500
                })
                }>User List</Menu>
            </div>
            {this.getUser()}
            </>
            
        );
    }
}

export default Nav;