import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nopage from './Nopage';
import BlogDetails from './BlogDetails';
import "./App.css"
import About from './About';
import EditBlog from './EditBlog';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1 style={{ color: "blue", backgroundColor: "lightgrey", padding: "20px" }}>
            App Component </h1>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Create" element={<Create />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="/editBlog/:id" element={<EditBlog />}></Route>

            <Route path="*" element={<Nopage />}></Route>
          </Routes>
        </div>
        <br></br>
      </div>
    </Router>
  );
}
export default App