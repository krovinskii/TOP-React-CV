import "./App.css";
import Form from "./InfoForm";
import bookSVG from "./assets/book.svg";
import userSVG from "./assets/user.svg";
import phoneSVG from "./assets/phone-square.svg";
import Display from "./displayCV";
function App() {
  return (
    <div>
      <Form
        sectionTitle="General Info"
        svgType={bookSVG}
        formFields={["Full Name", "Email", "Phone Number", "City / State"]}
        localName="general"
      />
      <Form
        sectionTitle="Contact Info"
        svgType={userSVG}
        formFields={["School Name", "Study", "Start Date", "Graduation Date"]}
        localName="contact"
      />
      <Form
        sectionTitle="Education and Work"
        svgType={phoneSVG}
        formFields={[
          "Company Name",
          "Position",
          "Main Responsibility",
          "Start Date",
          "End Date",
          "Description",
        ]}
        localName="education/work"
      />
      <Display localName="general" />
      <Display localName="contact" />
      <Display localName="education/work" />
    </div>
  );
}

export default App;
