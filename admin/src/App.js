import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import CricketNews from './pages/CricketNews';
import CricketVideos from './pages/CricketVideos';
import LatestPolls from './pages/LatestPolls';
import Dashboard from './pages/Dashboard';
import TextEditor from './pages/TextEditor';




function App() {

  return (
    // <MyProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-post" element={<TextEditor />} />


            
            <Route path="cricket-news" element={<CricketNews />} />
            <Route path="cricket-videos" element={<CricketVideos />} />
            <Route path="polls" element={<LatestPolls />} />

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    // </MyProvider>

  );
}

export default App;