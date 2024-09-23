import { useState } from "react";

function MyForm() {
    const [formData, setFormData] = useState({
      vorname: "",
      nachname: "",
      email: "",
    });
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
      <div>
        <input
          type="text"
          name="vorname"
          value={formData.vorname}
          onChange={handleChange}
          placeholder="Vorname"
        />
        <input
          type="text"
          name="nachname"
          value={formData.nachname}
          onChange={handleChange}
          placeholder="Nachname"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-Mail"
        />
        <p>Vorname: {formData.vorname}</p>
        <p>Nachname: {formData.nachname}</p>
        <p>E-Mail: {formData.email}</p>
      </div>
    );
  }
  
  export default MyForm;