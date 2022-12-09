import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getMemeId, getMemeUrl, getMemeName } from './../redux/meme'
import { getCreatedMeme } from '../services/memeApi'

export const CreateMeme = () => {
  const [txt1, setTxt1] = useState([])
  const [txt2, setTxt2] = useState([])
  const [memeUrl, setUrl] = useState(useSelector(getMemeUrl))

  const memeId = useSelector(getMemeId)
  const memeName = useSelector(getMemeName)

  function handleMemeCreation() {
    getCreatedMeme(memeId, txt1, txt2).then((res) => {
      setUrl(res)
    })
  }

  return (
    <div className="p-10 bg-blue-600">
      <div className="bg-slate-100 w-full h-full rounded-xl">
        <p className="text-3xl font-bold text-slate-800 text-center pt-5">
          {memeName}
        </p>
        <img src={memeUrl} alt={memeName} />
        <input
          type="text"
          onChange={(e) => {
            setTxt1(e.target.value)
          }}
          className="border"
          placeholder="txt1"
        />
        <input
          type="text"
          onChange={(e) => {
            setTxt2(e.target.value)
          }}
          className="border"
          placeholder="txt2"
        />
        <button
          onClick={() => {
            handleMemeCreation()
          }}
          className="border"
        >
          Ok
        </button>
      </div>
    </div>
  )
}
