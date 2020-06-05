import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import $ from "jquery";

function Footer() {
  $(function () {
    $(".smoothScroll").click(function () {
      if (
        window.location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        window.location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  return (
    <nav>
      <a class="smoothScroll" href="#top" id="bottom">
        ⬆️
      </a>

      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "30px" }}></div>
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "50px",
          }}
          to="/about"
        >
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Footer;
