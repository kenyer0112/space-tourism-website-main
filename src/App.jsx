import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./Home";
import Destination from "./destination/Destination";
import Crew from "./crew/Crew";
import Technology from "./technology/Technology";
import Commander from "./crew/Commander";
import Launch from "./technology/Launch";
import BlogDestination from "./destination/BlogDestination";
import Moon from "./destination/Moon";
import BlogCrew from "./crew/BlogCrew.jsx";
import BlogTechnology from "./technology/BlogTechnology.jsx";

function App() {
  return (
    <main className="h-dvh w-full  font-sans text-[1.1rem] relative">
      <Nav />
      <Routes>
        
        <Route path="/" element={<Home />} />
        {/*DESTINATION***** */}
        <Route path="/destination/*" element={<Destination />}>
          <Route index element={<Moon />} />
          <Route path=":name" element={<BlogDestination />} />
        </Route>

        {/*CREW***** */}
        <Route path="/crew/*" element={<Crew />}>
          <Route index element={<Commander />} />
          <Route path=":name" element={<BlogCrew />} />
        </Route>

        {/*TECHNOLOGY***** */}
        <Route path="/technology/*" element={<Technology />}>
          <Route index element={<Launch />} />
          <Route path=":name" element={<BlogTechnology />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
