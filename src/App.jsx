import "./App.css";
import Form from "./InfoForm";
import bookSVG from "./assets/book.svg";
import userSVG from "./assets/user.svg";
import phoneSVG from "./assets/phone-square.svg";

function App() {
  return (
    <div>
      <Form
        sectionTitle="General Info"
        svgType={bookSVG}
        formFields={["Full Name", "Email", "Phone Number", "City / State"]}
      />
      <Form
        sectionTitle="Contact Info"
        svgType={userSVG}
        formFields={["School Name", "Study", "Start Date", "Graduation Date"]}
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
      />
    </div>
  );
}

export default App;
