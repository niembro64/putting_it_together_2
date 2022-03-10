import React, { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
        };
    }

    birthday = () => {
        // console.log("CLICKED");
        this.setState({
            age: this.state.age + 1,
        });
    };

    render() {
        const { firstName } = this.props;
        const { lastName } = this.props;
        const { hairColor } = this.props;
        return (
            <>
                <div>
                    <h2>
                        {lastName}, {firstName}
                    </h2>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
                <button onClick={this.birthday}>
                    Birthday Button for {firstName}
                </button>
            </>
        );
    }
}

export default Person;
