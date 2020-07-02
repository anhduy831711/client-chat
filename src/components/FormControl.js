import React, { Component } from "react";

class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [this.props.name]: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.validate = this.props.validate.bind(this);
    }

    componentDidMount(){
        this.getInfo()
    }


    handleChange(event) {
        //this.validate();
        this.setState({
            [this.props.name]: event.currentTarget.value
        })
    }

    render() {
        const { name, className, placeholder, type } = this.props;
        return (
            <input value={this.state[name]} name={name} className={className} placeholder={placeholder} onChange={this.handleChange} type={type} />
        )
    }
}

export default FormControl;