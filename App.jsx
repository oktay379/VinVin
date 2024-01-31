import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Product from "./pages/Product"

function App() {
  return (
    <>
     <div>
          <Header/>

          <Routes>
            <Route index path="/" element={<Product/>}/>
          </Routes>
          
     </div>
    </>
  )
}

export default App
