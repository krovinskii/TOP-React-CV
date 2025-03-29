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
        formFields={["Full Name", "Email", "Phone Number", "City", "State"]}
        localName="general"
      />
      <Form
        sectionTitle="Education"
        svgType={userSVG}
        formFields={["School Name", "Study", "Start Date", "Graduation Date"]}
        localName="education"
      />
      <Form
        sectionTitle="Work"
        svgType={phoneSVG}
        formFields={[
          "Company Name",
          "Position",
          "Main Responsibility",
          "Start Date",
          "End Date",
          "Description",
        ]}
        localName="work"
      />
      <Display localName="general" />
      <Display localName="education" />
      <Display localName="work" />
    </div>
  );
}

export default App;
