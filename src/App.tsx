import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBook from "./components/SearchBook";
import BookShelf from "./components/BookShelf";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<SearchBook />}></Route>
          <Route path={"/mybookshelf"} element={<BookShelf />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
