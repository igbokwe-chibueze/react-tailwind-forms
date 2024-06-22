import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FormsPage, HeadingsPage, JumbotronPage, LandingPage } from "./pages";

export default function App() {
  return (

    <main className="font-baseFont">
      <Router>
        <Navbar/>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/forms' element={<FormsPage/>} />
          <Route path='/headings' element={<HeadingsPage/>} />
          <Route path='/jumbotron' element={<JumbotronPage/>} />
        </Routes>
      </Router>
    </main>
  )
}