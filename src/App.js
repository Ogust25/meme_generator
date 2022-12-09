import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { CreateMeme } from './views/CreateMeme';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-meme" element={<CreateMeme />} />
      </Routes>
    </div>
  )
}

export default App
