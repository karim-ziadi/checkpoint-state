import React, { Component } from "react";
import "./App.css";
import Profile from "./component/profile";
import MYimage from "./component/hk.jpg";

class App extends Component {
    constructor() {
        super();
        this.state = {
            Show: false,
            fullName: "karim ziadi",
            bio: "Js developper",
        };
        this.Show = () => this.setState({ Show: !this.state.Show });
    }
    render() {
        return (
            <div className="App">
                <button className="btn" onClick={this.Show}>
                    Toggle{" "}
                </button>
                {this.state.Show ? (
                    <Profile
                        fullName={this.state.fullName}
                        bio={this.state.bio}
                    >
                        <img className="image" src={MYimage} alt="" />
                    </Profile>
                ) : null}
            </div>
        );
    }
}

export default App;
