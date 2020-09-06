import React from 'react';


class SearchBar extends React.Component {


    state = { username: '' ,password : '' };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onAppsubmit(this.state.username,this.state.password);
        console.log(this.state.password , this.state.username)
    };

    render() {
        return (
            <div className="ui segment " style={{ border: '0px' }}>
                <form onSubmit={this.onFormSubmit} >
                    <label htmlFor="username"> Username :  </label>
                    <input id="username" type="text"
                        placeholder="Username"
                        value={this.state.username}
                        height=" 20px" onChange={(e) => this.setState({ username: e.target.value })} required />
                     <br />
                     <label htmlFor="password"> Password :  </label>
                    <input id="password" type="password"
                        placeholder="password"
                        value={this.state.password}
                        required
                        height=" 20px" onChange={(e) => this.setState({ password: e.target.value })} />
                    <br />
                    <button> Log in </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;