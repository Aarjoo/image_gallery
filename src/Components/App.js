import React from 'react';
import SearchBar from './SearchBar';
import Pagination from '../Components/Pagination';

class App extends React.Component{
  state =
  {
    query:"random"
  }
  
  onSearchSubmit(term)
  {
    this.setState({query:term});
  }
  render()
  {
    return (
      <div>
        <SearchBar onSearch={this.onSearchSubmit.bind(this)}/>
        <Pagination
          query={this.state.query}
        />
      </div>
    );
  }  
}

export default App;
