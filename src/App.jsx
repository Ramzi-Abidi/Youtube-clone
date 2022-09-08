import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoScreen from "./components/VideoScreen";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <Navbar />
        <Box sx={{ backgroundColor: "#0e0e0e" }}>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/singleVideo/:id" element={<VideoScreen />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:id" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </main>
  );
}

export default App;
