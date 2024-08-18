import React from "react";
import "./Body.css";
import pic from '../../Assets/d2.jpg'
import {Link} from 'react-scroll';

const Body = () => {
  return (
    <div className="container">
      <section id="intro">
       <div className="introContent"> <h2 className="hello">Hello,</h2>
        <h1 className="deepikagupta">I'm <span className="deepika">DEEPIKA</span></h1>
        <h3 className="webname">a FRONT-END WEB DEVELOPER</h3>
        <p className="para">
          Welcome to my web developer portfolio I'm Deepika ,<br/>
           a skilled andcreative web developer with a passion<br/>
            of creating beautiful,responsive
          and user-friendly websites.
        </p>
        <Link> <button className="btn">Hire Me</button></Link>
        </div>
        <img src={pic} alt="pic" id="pic"/>
      </section>
    </div>
  );
};

export default Body;
