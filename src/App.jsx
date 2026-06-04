import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import HtmlPage from "./pages/NotePage/NotePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path="/book/:BookId/:NoteId" element={
              <HtmlPage 
                title="Lịch sử phát triển của JavaScript"
                htmlContent="<p>Nội dung bài viết...</p>"
                initialTags={['Frontend']} 
                bookTags={['Frontend', 'Backend', 'Database', 'Node.js']} 
              />
              }/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;