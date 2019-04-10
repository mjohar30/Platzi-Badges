import React, { Component } from 'react';

class BadgeForm extends Component {
    
    handleChange = e => {
        console.log({
            name: e.target.name,
            value: e.target.value
        })
    }

    handleClick = e => {
        console.log("OPRIMIDO :D")
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("submit")
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange={this.handleChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        />
                    </div>
                    {/* El submit viene por defecto, no es necesario ponerlo */}
                    {/* Si el type es button, no hará nada */}
                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;