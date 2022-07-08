import Cover from "../components/Cover";
import Cf7FormWrapper from "../components/form/Cf7FormWrapper";
import Form from "../components/form/Form";

const Contact = () => {
  return (
    <div id="main-content">
      <Cover
        title={"Let's Connect!"}
        description={"I'd love to talk about your next project."}
      />

      <Cf7FormWrapper siteUrl="https://staging6.ljferrand.com" formId="339">
        <Form />
      </Cf7FormWrapper>
    </div>
  );
};
export default Contact;
