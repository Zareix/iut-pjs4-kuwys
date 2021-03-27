import React,{useState,useEffect} from 'react'
import API from '../../util/api'
// TODO
const TagsPost = (props) => {
  const {tags} = props
    
  
  
  return <div className="flex p-2">
      {
      tags.map(t => {
        //{console.log("PostTags",tags)}
          return <p key={t} className="ourYellowBg m-2 px-2 py-0 rounded-xl text-white font-semibold">{t}</p>
      })}
      </div>
}

export default TagsPost


