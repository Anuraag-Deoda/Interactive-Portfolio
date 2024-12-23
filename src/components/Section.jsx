// src/components/Section.jsx
const Section = ({ title, color, content }) => {
    return (
      <div className="content-section" style={{ backgroundColor: color }}>
        <div>
          <h1>{title}</h1>
          {content}
        </div>
      </div>
    );
  };
  
  export default Section;