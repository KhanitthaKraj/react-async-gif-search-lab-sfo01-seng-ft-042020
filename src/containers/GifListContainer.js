import React, {Component} from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifUrls: [],
        searchValue: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchValue}&api_key=U8O8iWVkVZQ0WSWnnlOkgYWFjHYjXqSh&rating=g`)
          .then((response) => response.json())
          .then((gifData) => this.setState({ gifUrls: gifData.data }))    
    }

    handleChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} searchValue={this.state.searchValue} />
                <GifList gifUrls={this.state.gifUrls} />
            </div>
        )
    }
}