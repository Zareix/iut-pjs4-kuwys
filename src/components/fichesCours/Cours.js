import React from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'

class Cours extends React.Component {
  render() {
    let postId = this.props.match.params.postId
    console.log(postId)
    let post

    
    API.get('/post/'+postId)
      .then((res) => {
          console.log(res.data)
        post = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(post)
    return(
    <Gui>
      
    </Gui>
    )
}
}

export default Cours
