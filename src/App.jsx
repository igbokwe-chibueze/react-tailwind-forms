import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ComponentsPage, FormsPage, LandingPage, TopographyPage } from "./pages";

export default function App() {
  return (

    <main className="font-baseFont bg-gray-100 dark:bg-gray-900">
      <Router>
        <Navbar/>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/forms' element={<FormsPage/>} />
          <Route path='/topography' element={<TopographyPage/>} />
          <Route path='/components' element={<ComponentsPage/>} />
        </Routes>
      </Router>
    </main>
  )
}