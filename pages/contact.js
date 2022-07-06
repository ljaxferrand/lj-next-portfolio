import Cf7FormWrapper from "../components/form/Cf7FormWrapper";
import Form from "../components/form/Form";

const Contact = () => {
  return (
    <div id="main-content">
      <h1>Contact Me</h1>

      <Cf7FormWrapper siteUrl="https://staging6.ljferrand.com" formId="339">
        <Form />
      </Cf7FormWrapper>
    </div>
  );
};
export default Contact;
