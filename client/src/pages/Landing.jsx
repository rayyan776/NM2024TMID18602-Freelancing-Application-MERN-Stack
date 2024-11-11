import React, { useEffect } from "react";
import "../styles/landing.css";
import { PiStudent } from "react-icons/pi";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("usertype") === "freelancer") {
      navigate("/freelancer");
    } else if (localStorage.getItem("usertype") === "client") {
      navigate("/client");
    } else if (localStorage.getItem("usertype") === "admin") {
      navigate("/admin");
    }
  });           

  const navItems = [
    { label: "Home", href: "/", isActive: true },
    { label: "Find work" ,  href:"/register" },
    { label: "Find Freelancers" , href: "/register" },
    { label: "Log In", href: "/Authenticate" },
  ];

  return (
    
    <main class="mainSection">
  <section class="contentWrapper">
    <img 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3689c4cd72e9c11002a81c4a564c9556497169138f2dda257c98186105fee598?placeholderIfAbsent=true&apiKey=3c5ef9ce32e644578e9a06c4845a8d8e" 
      alt="" 
      class="backgroundImage" 
      loading="lazy"
    />
    <div class="innerContent">
    <header className="container">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b0f4e4dc1e6f665c41ba5370f9c10ae60f8bab95301ddbe439c01514dbda111?placeholderIfAbsent=true&apiKey=3c5ef9ce32e644578e9a06c4845a8d8e" 
        className="logo"
        alt="Company logo"
      />
      <div className="divider" />
      <nav className="navWrapper">
        <ul className="navList">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className={`navItem ${item.isActive ? 'activeNavItem' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>

      <div class="twoColumnLayout">
        <div class="leftColumn">
          <div class="textContent">
            <div class="textWrapper">
              <h1 class="mainHeading">
                <strong>Are you looking for Freelancers or </strong>
                <strong>Freelancing Jobs?</strong>
              </h1>
              <p class="subHeading">
              <i><b>Find Top Freelancers, Fast.</b></i><br/>
              Spacelance connects you with exceptional talent in an instant, empowering you to build great teams effortlessly.
              And for freelancers, the world of exciting job opportunities is just a click away.
              </p>
            </div>
            <div class="ctaSection">
              <button class="hireButton">Hire A Freelancer </button>
              <button class="hireButton">Find A Job </button>
              
            </div>
          </div>
        </div>
        <div class="rightColumn">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e3fae09b351e5d982ad9705be0552a2c0382f9aaffe5f39f289a1f27cf7f2bf?placeholderIfAbsent=true&apiKey=3c5ef9ce32e644578e9a06c4845a8d8e" 
            alt="Freelancer working on a laptop" 
            class="heroImage" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</main>






        



        




          
        
  );
};

export default Landing;
