import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip'
import { BiTrash } from 'react-icons/bi'
import CachedIcon from '@material-ui/icons/Cached'

// TODO
const SearchBar = (props) => {
  const [searchValue, setsearchValue] = useState('')
  const { chipData, setChipData, updatePost } = props
  const [cptTags, setCptTags] = useState(0)

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    )
  }

  const addTag = (event) => {
    if (event.charCode === 13) {
      setChipData([...chipData, { key: cptTags, label: searchValue }])
      setsearchValue('')
      setCptTags(cptTags + 1)
    }
  }
  const deleteAllTags = () => {
    setChipData([])
  }
  return (
    <div className="w-full">
      <div className="flex items-center">
        <input
          value={searchValue}
          onChange={(e) => {
            setsearchValue(e.target.value)
          }}
          type="text"
          onKeyPress={addTag}
          placeholder="Entrez un tag"
          className="p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
        />
        <button className="ml-5">
          <CachedIcon fontSize="large" style={{ color: '#60c39f' }} onClick={updatePost} />
        </button>
      </div>
      <div className="flex w-full m-2">
        {chipData.length > 0 && (
          <button onClick={deleteAllTags}>
            <BiTrash className="mx-2 ourRed text-2xl text-black-400 hover:yellowDark cursor-pointer popUpEffect" />
          </button>
        )}
        {chipData.map((data) => {
          return (
            <Chip
              className="mx-1"
              key={data.key}
              color="primary"
              label={data.label}
              size="small"
              onDelete={handleDelete(data)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SearchBar
