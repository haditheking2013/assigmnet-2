import React from "react";
import "./style.css";
import MedicalTreatmentList from "./MedicalTreatmentList";

export default function App() {

  const geluData = '[{"treatmentId": 5, "treatmentCourseId": 104, "type": "physiotherapy", "category": "change", "name": "Hadi", "startDate": "20-06-1995"}]';


  //add more data copying the above
  //the filter is applied on Category (CHANGE), swap this for something more sensible. Something related to types of treatment. Surgery, antiobitoics etc. . 
  
  return (
    <div>

<img src="https://upload.wikimedia.org/wikipedia/en/e/ed/NHS_England_logo.svg"/>
      <MedicalTreatmentList jsonProp={geluData}/> 

    </div>
  );
}

export default App;
