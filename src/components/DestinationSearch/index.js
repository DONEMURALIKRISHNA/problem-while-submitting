import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super()
    const {destinationsList} = props
    const {name, imgUrl} = destinationsList
    this.state = {searchInput: '', initialDestinationsList: destinationsList}
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, initialDestinationsList} = this.state
    const searchResults = initialDestinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onSearch}
            className="input-box"
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
          />
        </div>
        <ul className="card-items-container">
          {searchResults.map(eachResult => (
            <DestinationItem
              destinationDetails={eachResult}
              key={eachResult.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
