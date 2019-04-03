import React from "react";
import ReactDOM from "react-dom";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', email: '', phone: '', password: ''};

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }

    onSubmit(event) {
        alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    onLoginChange(event) {
        this.setState({login: event.target.value});
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
    }

    onPhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div id="title">Sign Up</div>
                <div className="block"><label className="field">
                    Login<input type="text" className="input-field" name="login" value={this.state.login}
                                onChange={this.onLoginChange} required/>
                </label></div>
                <div className="block"><label className="field">
                    Email<input type="email" className="input-field" name="email" value={this.state.email}
                                onChange={this.onEmailChange} required/>
                </label></div>
                <div className="block"><label className="field">
                    Phone<input type="tel" className="input-field" name="tel" value={this.state.phone}
                                onChange={this.onPhoneChange} required/>
                </label></div>
                <div className="block"><label className="field">
                    Password<input type="password" className="input-field" name="pass" value={this.state.password}
                                   onChange={this.onPasswordChange} required/>
                </label></div>
                <div id="enter">
                    <button type="submit">Login
                    </button>
                </div>
            </form>
        )
    }
}

ReactDOM.render(
    <Signup/>
    , document.getElementById('root'));

export default Signup