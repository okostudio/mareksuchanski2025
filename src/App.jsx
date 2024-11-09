import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import WorkPage from "./pages/WorkPage"
import WorkDetailPage from "./pages/WorkDetailPage"
import Page404 from "./pages/Page404"

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
