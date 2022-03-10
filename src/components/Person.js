import React, { Component } from "react";

class Person extends Component {
    constructor(props, firstName) {
        super(props);
        this.state = {};
    }

    render() {
        const { firstName } = this.props;
        const { lastName } = this.props;
        const { age } = this.props;
        const { hairColor } = this.props;
        return (
            <>
                <div>
                    <h2>
                        {lastName}, {firstName}
                    </h2>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
            </>
        );
    }
}

export default Person;
