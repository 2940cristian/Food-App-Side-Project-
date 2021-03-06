import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../Register/Register.css";
import axios from "axios";


class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
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

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if(this.state.username < 1 || this.state.password < 1) {
            alert("Please fill in the username an password");
            return;
        }

        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:5000/register", newUser)
        .then(success => {
            alert("New User Created");
        }).catch(err => {
            console.log(err);
            alert("Error creating user")
        })
    }



    render() {
        return(
            <div className="body">
                <div className="container">
                    <div className="register--header">
                        <h2>Fill out the form below</h2>
                    </div>

                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleInputChange}  type="text" name="username" placeholder="Username:"/>
                            <input onChange={this.handleInputChange}  type={this.state.type} name="password" placeholder="Password:"/>

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