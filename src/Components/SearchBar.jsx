import React from 'react';

class SearchBar extends React.Component
{
    state={
        term:""
    };
    handleChange(event) {
        const data = event.target.value;
        this.setState({term:data});
    }
    handleSubmit(event)  {
        event.preventDefault();
        this.props.onSearch(this.state.term);
    }
    render()
    {
        return (
            <div className="nav-bar">
                <a href="/">Picsa</a>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <input 
                type="search" 
                name="text" 
                placeholder="Search Here" 
                value={this.state.term}
                onChange={this.handleChange.bind(this)}
                />
                <button className="search-btn">Search</button>
                </form>
            </div>
        )
    }
}
export default SearchBar;