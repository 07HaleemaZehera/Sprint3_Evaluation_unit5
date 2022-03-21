import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { Technology } from "../Components/Section/Technology";
import { Mythology } from "../Components/Section/Mythology";
import { History } from "../Components/Section/History";
// import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";

import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import Forms from "../Components/Forms/Forms";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/Forms" element={<Forms />} />
        <Route exact path="/Mystery" element={<Section />} />
        <Route exact path="/Technology" element={<Technology />} />
        <Route exact path="/Mythology" element={<Mythology />} />
        <Route exact path="/History" element={<History />} />
     
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
