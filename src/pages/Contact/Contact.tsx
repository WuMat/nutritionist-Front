import React from "react";
import "./contact.scss";
interface IProps {
  name: string;
  title: string;
  description: string;
}
const initState = {
  name: "",
  title: "",
  description: ""
};
const Contact = () => {
  const [form, setForm] = React.useState<IProps>(initState);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = () => {
    console.log("object");
    setForm(initState);
  };
  return (
    <div className="contact">
      <div className="contact__title">Kontakt</div>
      <br />
      <div>Aby skontaktować się z nami, użyj poniższego formularza</div>
      <br />
      <br />
      <div className="contact_formularz">
        <div className="input__placeholder">
          <input
            type="text"
            name="name"
            required={true}
            value={form.name}
            onChange={handleChange}
          />
          <span>Imię i nazwisko</span>
        </div>
        <div className="input__placeholder">
          <input
            type="text"
            name="title"
            required={true}
            value={form.title}
            onChange={handleChange}
          />
          <span>Temat Wiadomości</span>
        </div>
        <div className="input__placeholder">
          <textarea
            name="description"
            value={form.description}
            required={true}
            onChange={handleChange}
          />
          <span>Treść Wiadomości</span>
        </div>
      </div>
      <div className="contact__Button">
        <button onClick={handleClick}>Wyślij</button>
      </div>
    </div>
  );
};

export default Contact;
