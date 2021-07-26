import React, { Children, Component } from 'react';
import { Menu } from '../../component';
import "./nav.css"

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

    renderPage = () => {
        const {goToPage, loginStatus} = this.props;
        
        if (loginStatus)
        return <Menu isActivePage={this.checkActivePage("logout")} redirect={() => goToPage("logout")}>Logout</Menu>

        return <Menu isActivePage={this.checkActivePage("login")} redirect={() => goToPage("login")}>Login</Menu>
    }
    getUser = () => {
        const {loggedUser, loginStatus} = this.props;
        if (loginStatus)
        return <div className="welcome">{`Welcome ${String(loggedUser.name)}`}</div>

        return <div className="welcome">Welcome</div>
    }

    checkActivePage = activePage => {
        const page = this.props.page
        if (activePage === page) return "active"

        return ""
    }

    render() {
        // console.log("navlogged",this.getLoggedUser)
        const { goToPage, loginStatus, loggedUser } = this.props
        console.log("cekk",loggedUser)
        return (
            <div className="nav">
                {this.renderPage()}
                {/* <Menu isActivePage={this.checkActivePage("login")} redirect={() => goToPage("login")}>Login</Menu> */}
                <Menu isActivePage={this.checkActivePage("register")} redirect={() => goToPage("register")}>Register</Menu>
                <Menu isActivePage={this.checkActivePage("userList")} redirect={loginStatus ? () => goToPage("userList") : () => goToPage("prohibited")}>User List</Menu>
                {this.getUser()}
            </div>
        );
    }
}

export default Nav;