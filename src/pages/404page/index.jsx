import React from "react";
import { Link } from "react-router-dom";
import "./errorpage.css";

const ErrorPage = () => {
  return (
    <section className="errorpage_404">
      <div className="errorpage_404-bg">
        <div  className="text-center ">
          <h1>404</h1>
        </div>

        <div className="content_box_404">
          <h2>Looks like you're lost</h2>

          <p>the page you are looking for is not avaible!</p>

          <Link to={`/`} className="link_404">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
