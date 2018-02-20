import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'

import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyCF-ug7YkD7GfypNYwcPXJ78AtepsrCOiY'	


class App extends Component {
	
	//setup state
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		}

		//initialize function
		this.videoSearch('surfboards')
	}

	//search
	videoSearch(term){
		//initialize video data
		YTSearch({key: API_KEY, term:term}, (videos) => {
			this.setState({
				videos:videos,
				selectedVideo:videos[0]	
			});
		});
	}

	//render the components
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

		return(
			<div>
				<br />
				<SearchBar onSearchTermChange={videoSearch} />
				<br />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
			</div>
		)
	}
}



ReactDOM.render(<App />, document.querySelector('.container'))





