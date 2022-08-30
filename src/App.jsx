import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Analytics from "./components/Analytics";
import Connections from "./components/Connections";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Mapping from "./components/Mapping";
import Myproducts from "./components/Myproducts";
import ReelStore from "./components/ReelStore";
import UploadReels from "./components/UploadReels";



function App() {
  return (
    <Router>
    <Routes >
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/error" element={<Error />} />
      <Route exact path="/mapping" element={<Mapping />} />
      <Route exact path="/myproducts" element={<Myproducts />} />
      <Route exact path="/reelstore" element={<ReelStore />} />
      <Route exact path="/connections" element={<Connections />} />
      <Route exact path="/analytics" element={<Analytics />} />
      <Route exact path="/uploadreels" element={<UploadReels />} />
    </Routes>
  </Router>
  )
}

export default App;




