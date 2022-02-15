import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Component from "./components";

ReactDOM.render(
  <Router>
    <Component.Navigation />
    <Routes>
      <Route path="/" element={<Component.Home />} />
      <Route path="/about" element={<Component.About />} />
      <Route path="/contact" element={<Component.Contact />} />
      <Route path="/blog" element={<Component.Blog />}>
        <Route path="" element={<Component.Posts />} />
        <Route path='/blog/test' element={<Component.Post />} />
        <Route path='/blog/test1' element={<Component.Post1 />} />
        <Route path='/blog/test1' element={<Component.Post1 />} />
        <Route path='/blog/test1' element={<Component.Post1 />} />
        <Route path='/blog/test1' element={<Component.Post1 />} />
 

         {/* Routes articles blog */}
          <Route path="/blog/Clonernews" element={<Component.Clonernews />}/>
          {/* <Route path="/blog/Modublo" element={<Modublo />}/>
          <Route path="/blog/MyDiet" element={<MyDiet />}/>
          <Route path="/blog/ProjetForum" element={<ProjetForum />}/>
          <Route path="/blog/ServeurApache" element={<ServeurApache />}/>
          <Route path="/blog/EwsAngola" element={<EwsAngola />}/>
          <Route path="/blog/Ecommerce" element={<Ecommerce />}/>
          <Route path="/blog/Librairie" element={<Librairie />}/>
          <Route path="/blog/Synchrinet" element={<Synchrinet />}/>
          <Route path="/blog/ModubloPerso" element={<ModubloPerso />}/>
          <Route path="/blog/BlogReactSass" element={<BlogReactSass />}/>
          <Route path="/blog/GroupieTracker" element={<GroupieTracker />}/> */}
          {/* Fin route articles */}
          
      </Route>
    </Routes>
    <Component.Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
