import React,{useState,useEffect} from 'react'

// TODO
const SearchBar = ({tags,addfilter}) => {
  const [searchValue, setsearchValue] = useState('')
  const [exist, setExist] = useState(false)
  
  useEffect(() => {
    if (tags.includes(searchValue)) setExist(true)
    else setExist (false)
  }, [tags,searchValue])

  
  return <div className="mb-3 pt-0">
        <input value={searchValue} onChange={(e) => {
                setsearchValue(e.target.value)
              }} type="text" placeholder="Placeholder" style={{color : exist ? "green" : "red"}} className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
      </div>
}

export default SearchBar


