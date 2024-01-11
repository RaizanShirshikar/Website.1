import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="Row">
          <div className="Cols1">
            <img
              className="logo"
              src="https://png.pngtree.com/template/20200227/ourmid/pngtree-real-estate-logo-design-template-image_353484.jpg"
              alt="logo"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              vel quam eaque provident ea sit atque nesciunt voluptates,
              repellat iusto.
            </p>
          </div>
          <div id="col2" className="Cols">
            <h3>Office</h3>
            <h6>kharghar </h6>
            <h6>sector 34 ,Taloja</h6>
            <h6>navi mumbai, 410208</h6>
            <h6 className="email">youremail@gmail.com</h6>
            <h5>+91 55652 88552</h5>
          </div>
          <div id="col2" className="Cols">
            <div className="links">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="Cols" id="col3">
            <h3>Newsletter</h3>
            <form className="form">
              <i class="far fa-envelope"></i>
              <input className="input" type="email" placeholder="Email"  />
              <button className="button" type="submit">
                <i class="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="social-1">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright © 2024. All rights reserved.</p>
      </footer>
    </>
  );
};
