// Code YouTubeDebugger Component Here

import React from 'react';


class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }


  changeBitRate = ()=>{

    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    },
    () => console.log(this.state.settings)
  )
}

  changeResolution = ()=>{

    this.setState({
      settings: {
        ...this.state.settings,
        ...this.state.video,
        resolution: '720p'
      }
    },
    () => console.log(this.state.settings)
  )
}


  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitRate}>Bitrate Button</button>
        <button className="resolution" onClick={this.changeResolution}>Resolution Button</button>
      </div>
    )
  }


}


export default YouTubeDebugger;
