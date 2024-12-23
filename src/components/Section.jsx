/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Section = ({ title, color, content }) => {
    return (
      <div className="content-section" style={{ backgroundColor: color }}>
        <div className="content-wrapper max-w-4xl mx-auto w-full">
          <h1>{title}</h1>
          <div className="content-body">
            {content}
          </div>
        </div>
      </div>
    );
  };
  
  export default Section;