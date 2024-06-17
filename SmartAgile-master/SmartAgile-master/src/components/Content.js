import robo from '../assets/robo.png'
import React from 'react';

const Content = () => {
  return (
    <section className="d-flex align-items-center"> {/* Adjust classes for layout */}
      <div className="container"> {/* Wrap content in container for responsiveness */}
        <div className="row">  {/* Create row for two columns */}
          <div className="col-md-6 order-md-last"> {/* Image column, order on large screens */}
            <img src={robo} alt="AI-Driven Tool for Optimal Workplace Productivity" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-first"> {/* Text column, order on large screens */}
            <h1 className="display-4 fw-bold mb-4 text-black">Smart Agile</h1>  {/* Text color black */}
            <h2 className="lead text-black">Al-Driven Tool for Optimal Workplace Productivity</h2> {/* Text color black */}
            <p>By analyzing patterns and contexts, it ensures productivity without compromising privacy. This tool optimizes workplace efficiency while respecting individual boundaries.</p><br/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
