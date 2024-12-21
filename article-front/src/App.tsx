import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { HomePage } from './pages/HomePage'
import { ArticleInfoPage } from "./pages/ArticleInfoPage"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/:id" element={<ArticleInfoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
