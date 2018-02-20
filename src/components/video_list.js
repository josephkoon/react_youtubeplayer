import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {

	//map each video to a video list item
	const videoItems = props.videos.map((video) => {
		return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
	})

	//pass the video items 
	return (
		<ul className='col-md-4 list-group'>
			{videoItems}
		</ul>
	)
	
}

export default VideoList