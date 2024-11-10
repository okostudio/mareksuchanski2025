import './App.scss'
import { Route, Routes } from "react-router-dom"
import HomePage from "./js/pages/HomePage"
import WorkPage from "./js/pages/WorkPage"
import WorkDetailPage from "./js/pages/WorkDetailPage"
import Page404 from "./js/pages/Page404"

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/work/" element={<WorkPage />} />
        <Route path="/work/:slug" element={<WorkDetailPage slug={"slug"} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

    </>
  )
}

export default App
