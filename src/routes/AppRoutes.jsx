import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Collections from "../pages/Collections";
import Visit from "../pages/Visit";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export default function AppRoutes(){

return(



<Routes>

<Route element={<MainLayout/>}>

<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/collections" element={<Collections/>}/>

<Route path="/visit" element={<Visit/>}/>

<Route path="/gallery" element={<Gallery/>}/>

<Route path="/login" element={<Login/>}/>

</Route>

<Route path="*" element={<NotFound/>}/>

</Routes>



)

}