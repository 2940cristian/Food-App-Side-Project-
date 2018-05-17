import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../Register/Register.css"
class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            type: "password"
        }
    }

    showPassword() {
        if(this.state.type === "password") {
            this.setState({
                type: "text"
            })
        } else {
            this.setState({
                type: "password"
            })
        }
    }



    render() {
        return(
            <div className="body">
                <div className="container">
                    <div className="register--header">
                        <h2>Fill out the form below</h2>
                    </div>

                    <div className="form">
                        <form>
                            <input  type="text" name="email" placeholder="Email:"/>
                            <input  type={this.state.type} name="password" placeholder="Password:"/>

                            <div className="register--checkbox">
                                <input onClick={() => {
                                    this.showPassword()
                                }} type="checkbox"/>
                                <p>Show password</p>
                            </div>
                            
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register