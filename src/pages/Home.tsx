import { Form } from "../components/Form/Form";
import '../styles/Form.css'

export const Home = () => {
  return (
    <div>
      <div className="title-section">
        <div style={{ position: "relative" }}>
          <h1> Rate our services </h1>
          <span>⇨ Your opinion matters to us</span>
        </div>
      </div>
      <div className="content">
        <section className="form-section">
          <Form />
        </section>
      </div>
    </div>
  );
};