import React from "react";

function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "90vh",
        textAlign: "center",
      }}
    >
      <br />
      <h2>About</h2>
      <br />
      <a href="https://github.com/joyjwlee" target="_blank">
        <img
          height="36"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          border="0"
          alt="Check out my GitHub"
        />
      </a>
      <br />
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h4>Who Built This Website?</h4>
        <div style={{ fontSize: "20px" }}>
          This site is created by Jaewon Lee. An ambitious, assidiuous, and
          aspiring student.
        </div>
        <br />
        <h4>How to connect?</h4>
        <div style={{ fontSize: "20px" }}>
          You can reach me via linkedIn{" "}
          <a
            href="https://www.linkedin.com/in/jaewon-lee-180a17178/"
            target="_blank"
          >
            here
          </a>
          .
        </div>
        <br />
        <h4>Is Source Code Available?</h4>
        <div style={{ fontSize: "20px" }}>
          Yes! You can find it{" "}
          <a href="https://github.com/joyjwlee/covid-19-stats" target="_blank">
            here
          </a>
          .
        </div>
        <br />
        <h4>Special thank you to:</h4>
        <div style={{ fontSize: "20px" }}>
          <dl>
            <li>Mr. Holm for one amazing year of computer science.</li>
            <li>
              Hong Ly for the amazing guidance. His GitHub can be found{" "}
              <a href="https://github.com/lyhd" target="_blank">
                here
              </a>
              .
            </li>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default About;
