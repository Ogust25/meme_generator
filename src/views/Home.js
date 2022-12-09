import React, { useEffect, useState } from 'react'
import { getMemes } from '../services/memeApi'
import { Card } from './../components/Card'

export const Home = () => {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    getMemes().then((res) => {
      setMemes(res)
    })
  }, [])

  return (
    <div className="p-10 bg-blue-600">
      <div className="bg-slate-100 w-full h-full rounded-xl">
        <h1 className="text-3xl font-bold text-yellow-400 text-center pt-5">
          Meme Generator
        </h1>
        <div className="flex justify-evenly items-center flex-wrap p-10 gap-5">
          {memes &&
            memes.length > 0 &&
            memes.map((meme) => {
              return <Card key={meme.id} id={meme.id} name={meme.name} img={meme.url} />
            })}
        </div>
      </div>
    </div>
  )
}
