import React, { Component } from 'react';

class Header extends Component {
   render() {

   if(this.props.data){
      var name = this.props.data.name;
      var occupation1= this.props.data.occupation1;
      var occupation2= this.props.data.occupation2;
      var occupation3= this.props.data.occupation3;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
   }

   return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
               <li><a className="smoothscroll" href="#about">À propos</a></li>
               <li><a className="smoothscroll" href="#resume">Cursus & skills</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Je suis {name}.</h1>
               <h3><span>{description}</span>, Je <span>{occupation1}</span>, <span>{occupation2}</span> et <span>{occupation3}</span> vos applications web responsives, ainsi que vos API's et applications web progressives.</h3>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      );
   }
}

export default Header;
