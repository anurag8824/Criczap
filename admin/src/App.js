import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import TextEditor from './pages/TextEditor';
import Newspost from './pages/Newspost';
import Videos from './pages/Videos';
import AddVideo from './pages/AddVideo';
import Polls from './pages/Polls';




function App() {

  return (
    // <MyProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-post" element={<TextEditor />} />
            <Route path="news" element={<Newspost />} />
            <Route path="videos" element={<Videos />} />
            <Route path="add-video" element={<AddVideo />} />
            <Route path="polls" element={<Polls />} />





            


            
          

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    // </MyProvider>

  );
}

export default App;