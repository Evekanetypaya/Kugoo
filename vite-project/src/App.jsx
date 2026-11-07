import { Routes, Route} from 'react-router-dom'
import './App.css'
import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Page_Glav from "./Components/PageGlav/PageGlav.jsx"
import Servis from "./Components/Servis/Servis.jsx"
import Sotrud from "./Components/Sotrud/Sotrud.jsx"
import PageTest from "./Components/Page_Test/PageTest.jsx"
import Catalog from "./Components/Catalog/Catalog.jsx"
import Tovars2 from "./Components/Tovars2/Tovars2.jsx"
import PageStr from "./Components/PageStr/PageStr.jsx"
import PageAbout from "./Components/PageAbout/PageAbout.jsx"
import PageDost from "./Components/PageDost/PageDost.jsx"
import PageAkz from "./Components/PageAkz/PageAkz.jsx"
import PageBlog from "./Components/PageBlog/PageBlog.jsx"
import Blog2 from "./Components/Blog2/Blog2.jsx"
import PageContact from "./Components/PageContact/PageContact.jsx"
import Korzina from "./Components/Korzina/Korzina.jsx"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" index element={<Page_Glav/>} />
        <Route path="/servis" index element={<Servis/>} />
        <Route path="/sotrud" index element={<Sotrud/>} />
        <Route path="/PageTest" index element={<PageTest/>} />
        <Route path="/Catalog" index element={<Catalog/>} />
        <Route path="/Tovars2" index element={<Tovars2/>} />
        <Route path="/PageStr" index element={<PageStr/>} />
        <Route path="/PageAbout" index element={<PageAbout/>} />
        <Route path="/PageDost" index element={<PageDost/>} />
        <Route path="/PageAkz" index element={<PageAkz/>} />
        <Route path="/PageBlog" index element={<PageBlog/>} />
        <Route path="/Blog2/:id" element={<Blog2 />} />
        <Route path="/PageContact" index element={<PageContact/>} />
        <Route path="/Korzina" index element={<Korzina/>} /> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App