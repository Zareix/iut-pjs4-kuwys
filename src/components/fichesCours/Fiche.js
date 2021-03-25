import React,{useState} from 'react'
import Gui from '../gui/Gui'
import API from '../../util/api'
import Pdf from '../Pdf'


const Fiche = (props) => {
    const [post, setPost] = useState()
    let postId = props.match.params.postId

    API.get('/post/'+postId)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      });

    return(
    <Gui>
      <p className="md:mt-2 md:mb-2 text-3xl font-bold ourYellow">FICHE</p>
      <div class="flex flex-wrap -mx-2 overflow-hidden xl:-mx-4">

      <div class="my-2 px-2 w-full rounded-md bg-purple-400 overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
      <div className="m-2">{post && 
            <Pdf
            titre={post.title}
            pdfUrl={
              !post.documents[0]
                ? 'https://firebasestorage.googleapis.com/v0/b/pjs4-iut-ts.appspot.com/o/fiches%2Fdefault.pdf?alt=media'
                : post.documents[0]
            }
            type="canvas"
            firstPage={false}
            width={500}
            />
            }</div>
      </div>
      <div class="w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2 bg-purple-200 rounded-md">
    fds
      </div>
      </div>
    </Gui>
    )
}

export default Fiche
