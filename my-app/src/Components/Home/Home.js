import React, {Component} from "react";
import axios from "axios"

class Home extends Component{
    constructor() {
        super();

        this.state = {
            status: null
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        const header = {
            "Authorization": `${header}`
        }
        axios.get("http://localhost:5000/restricted", { headers: { Authorization: token } })
        .then(response => {
            console.log(response)
            this.setState({
                status: response.data.Message
            })
        }).catch(err => {
            console.log(err)
            alert("you shall not pass lol");

        })
    }

    handleSignOut() {
        localStorage.removeItem("token");
        window.location.reload()
    }


    render() {
        return(
            <div>
                {this.state.status === null ? (
                    <div><h1>Restricted</h1></div>
                ) : (
                    <div><h1>{this.state.status}</h1></div>
                )}
                
                <button onClick={this.handleSignOut}>Sign out</button>
            </div>
        )
    }
}

export default Home