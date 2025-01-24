import { Routes, Route } from "react-router-dom"

import Watermark from "./components/atoms/Watermark"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <Watermark
    content={`surangkhanang.jit`}
    rotate={20}
    width={360}
    height={30}
    gapX={300}
    gapY={300}
    fontSize={20}
    fontColor="rgb(112 112 112 / 15%)"
  >
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
    </Watermark>
  )
}

export default App