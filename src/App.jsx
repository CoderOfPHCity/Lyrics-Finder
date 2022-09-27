import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Lyric from './Components/Lyric';
import { ContextP } from './Components/Context';






function App() {

  // const handleDragEnd =(result) => {
  //   if(!result.destination) 
  //   return;

  //   const item = Array.from(track_list);
  //   const [removed] = item.splice(result.source.index, 1);
  //   item.splice(result.destination.index,0,removed);
  
  //   track_list(item);

  // }
 
  
  

  return (
   
    <ContextP>
    <Router>
          {/* <nav>
            <Link to="/">Home</Link>
          </nav>  */}
          <Navbar />

        
             <div className="container">
                      <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/lyric/track/:id" element={<Lyric />} />
                      </Routes>

                </div>
        
        
    </Router>
    </ContextP>

  );
}
export default App;
