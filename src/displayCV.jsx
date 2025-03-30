import { useLocalStorage } from "@uidotdev/usehooks";
import "./styles/displayCV.css";

/**
 * Display component renders different CV sections based on the provided localName
 * @param {string} localName - Key to identify which section to render (general, education, work)
 */
const Display = ({ localName }) => {
  // Retrieve data from localStorage with the specified key
  const [formData] = useLocalStorage(localName, {});

  // Mapping of section types to their respective render functions
  const renderMap = {
    // General information section
    general: (data) => (
      <div className="general-info">
        <h1 className="fullname">{data.fullname}</h1>
        <div className="contact-row">
          <span>{data.email}</span>
          <span className="separator">•</span>
          <span>{data.phonenumber}</span>
          <span className="separator">•</span>
          <span>
            {data.city}, {data.state}
          </span>
        </div>
        <div className="divider"></div>
      </div>
    ),

    // Education section
    education: (data) => (
      <div className="education-info">
        <h2 className="section-title">EDUCATION</h2>
        <div className="entry">
          <div className="entry-header">
            <h3 className="institution">{data.schoolname}</h3>
            <span className="dates">
              {data.startdate} - {data.graduationdate}
            </span>
          </div>
          <p className="degree">{data.study}</p>
        </div>
      </div>
    ),

    // Work experience section
    work: (data) => (
      <div className="work-info">
        <h2 className="section-title">WORK EXPERIENCE</h2>
        <div className="entry">
          <div className="entry-header">
            <h3 className="company">{data.companyname}</h3>
            <span className="dates">
              {data.startdate} - {data.enddate}
            </span>
          </div>
          <p className="position">{data.position}</p>
          <p className="responsibility">{data.mainresponsibility}</p>
        </div>
      </div>
    ),
  };

  // Select the appropriate render function based on localName
  // If localName doesn't match any known section, display an error message
  const renderFunction =
    renderMap[localName] || ((data) => <p>Unknown Section: {localName}</p>);

  return <div className="cv-display-section">{renderFunction(formData)}</div>;
};

export default Display;
