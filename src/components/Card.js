import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setMemeId, setMemeUrl, setMemeName } from '../redux/meme'

export const Card = ({ id, name, img }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function writeDatas() {
    dispatch(setMemeId(id))
    dispatch(setMemeName(name))
    dispatch(setMemeUrl(img))

    navigate('/create-meme')
  }

  return (
    <div
      key={id}
      className="w-60 cursor-pointer"
      onClick={() => {
        writeDatas()
      }}
    >
      <p className="text-center font-bold">{name}</p>
      <img src={img} alt={name} />
    </div>
  )
}
