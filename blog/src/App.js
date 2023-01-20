import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import BlogEntryListPage from "./pages/BlogEntryList.js";
import Navigation from "./components/Navigation";
import BlogEntry from "./pages/BlogEntry";
import CreateBlogEntryPage from "./pages/CreateBlogEntry";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<BlogEntryListPage />} />
          <Route path="/blogEntries/view/:id" element={<BlogEntry />} />
          <Route path="/create" element={<CreateBlogEntryPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
