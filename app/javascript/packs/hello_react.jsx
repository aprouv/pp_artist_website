// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

// const Hello = props => (
//   <div>Helloooooooooooooooooooooooooooooooooooooo {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Paintings from "../src/pages/Paintings";
import Painting from "../src/pages/Painting";
import Biography from "../src/pages/Biography";
import Contact from "../src/pages/Contact";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tableaux" element={<Paintings />} />
        <Route path="/tableaux/:id" element={<Painting />} />
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
