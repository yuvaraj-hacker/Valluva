import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";

import ScrollToTop from "./ScrollToTop.jsx";
import Home from "../Components/HomePage/Home.jsx";
import About from "../Components/AboutPage/About.jsx";
import CoursesPage from "../Components/CoursePage/CoursesPage.jsx";
import AdmissionPage from "../Components/Admission/AdmissionPage.jsx";
import UniversityPage from "../Components/UniversityPage/UniversityPage.jsx";
import ContactPage from "../Components/ContactPage/ContactPage.jsx";

export default function Approuter() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route element={<Main />}  >
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/course" element={<CoursesPage />} />
                        <Route path="/admission" element={<AdmissionPage />} />
                        <Route path="/university" element={<UniversityPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Route >
                </Routes>
            </BrowserRouter>
        </>
    )
}



