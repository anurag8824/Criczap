import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './pages/Layout';
import CricketTeams from './pages/CricketTeams';
import CricketPlayers from './pages/CricketPlayers';
import CricketNews from './pages/CricketNews';
import CricketVideos from './pages/CricketVideos';
import LatestPolls from './pages/LatestPolls';
import CricketSeries from './pages/CricketSeries';
import SeriesView from './pages/SeriesView';
import CricketPlayerDetail from './pages/CricketPlayerDetail';
import MatchDetailView from './pages/MatchDetailView';
import CricketSchedule from './pages/CricketSchedule';
import CricketTeamDetail from './pages/CricketTeamDetail';
import CricketRanking from './pages/CricketRanking';
import PrivacyPolicy from './pages/Privacy';
import Termofuse from './pages/Termofuse';




function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cricket-teams" element={<CricketTeams />} />
          <Route path="cricket-players" element={<CricketPlayers />} />
          <Route path="cricket-player-detail/:id/:xyc" element={<CricketPlayerDetail />} />
          <Route path="cricket-news" element={<CricketNews />} />
          <Route path="cricket-videos" element={<CricketVideos />} />
          <Route path="polls" element={<LatestPolls />} />


          <Route path="cricket-schedule" element={<CricketSchedule />} />


          <Route path="cricket-series" element={<CricketSeries />} />
          {/* Cricket Series Routes  */}
          <Route path="cricket-series/:id/:s/overview" element={<SeriesView />} />
          <Route path="cricket-series/:id/:idg/fixtures" element={<SeriesView />} />
          <Route path="cricket-series/:id/:t/news" element={<SeriesView />} />
          <Route path="cricket-series/:id/:sd/videos" element={<SeriesView />} />
          <Route path="cricket-series/:id/:sdf/points" element={<SeriesView />} />
          <Route path="cricket-series/:id/:sdf/stats" element={<SeriesView />} />
          <Route path="cricket-series/:id/:sdf/venues" element={<SeriesView />} />


          <Route path='cricket-team-detail/:id/home' element={<CricketTeamDetail />} />
          <Route path='cricket-team-detail/:id/recent' element={<CricketTeamDetail />} />
          <Route path='cricket-team-detail/:id/upcoming' element={<CricketTeamDetail />} />
          <Route path='cricket-team-detail/:id/news' element={<CricketTeamDetail />} />
          <Route path='cricket-team-detail/:id/videos' element={<CricketTeamDetail />} />
          <Route path='cricket-team-detail/:id/players' element={<CricketTeamDetail />} />
          <Route path='cricket-team-detail/:id/series' element={<CricketTeamDetail />} />
          <Route path='privacy' element={<PrivacyPolicy />} />
          <Route path='tos' element={<Termofuse />} />











          <Route path="match-detail/:id/:xyz/commentary" element={<MatchDetailView />} />
          <Route path="match-detail/:id/:xyz/scorecard" element={<MatchDetailView />} />

          <Route path="match-detail/:id/:xyz/info" element={<MatchDetailView />} />

          <Route path="match-detail/:id/:xyz/squad" element={<MatchDetailView />} />
          <Route path="match-detail/:id/:xyz/highlights" element={<MatchDetailView />} />


          <Route path="cricket-rankings" element={<CricketRanking />} />






















          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>

      </Routes>
    </BrowserRouter >


  );
}

export default App;