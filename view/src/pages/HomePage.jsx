import React from "react";
import { FiTruck } from "react-icons/fi";
const HomePage = () => {
  return (
    <main>
      <article>
        <section className="section hero" id="home">
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle has-before">
                Wellcome to Our Website
              </p>

              <h1 className="h1 hero-title">
                to every
                <i> DIRECTION</i> for you we deliver.
              </h1>

              <p className="hero-text">
              Optimize your logistics with precision and efficiency using FullTruck. Our platform is designed to provide seamless solutions for managing your supply chain needs. Stay on track with real-time updates and make data-driven decisions to streamline your operations. At FullTruck, we prioritize flexibility, ensuring that your resources are balanced and efficiently utilized. Let us handle the complexities, so you can focus on growing your business.
              </p>

              <div className="btn-group">
                <a href="#" className="btn btn-primary">
                  Support More
                </a>

                <button className="flex-btn">
                  <div className="btn-icon">
                    <FiTruck />
                  </div>

                  <span className="span">How it works</span>
                </button>
              </div>
            </div>

            <figure
              className="hero-banner has-before img-holder"
              style={{ "--width": 650, "--height": 650 }}
            >
              <img
                src="/hero-banner.jpg"
                width="650"
                height="650"
                alt="hero banner"
                className="img-cover"
              />
            </figure>
          </div>
        </section>
      </article>
    </main>
  );
};

export default HomePage;
