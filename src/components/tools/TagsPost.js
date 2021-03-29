import React from 'react'
// TODO
const TagsPost = (props) => {
  const { tags } = props

  return (
    <div className="flex p-2">
      {tags.map((t) => {
        return (
          <p
            key={t}
            className="ourYellowBg m-2 px-2 py-0 rounded-xl text-white font-semibold"
          >
            {t}
          </p>
        )
      })}
    </div>
  )
}

export default TagsPost
