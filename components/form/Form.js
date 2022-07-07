import { motion } from "framer-motion";
import { errorShake, successBounce } from "../../utilities/animations";
import { useState } from "react";

// From https://github.com/Mosquid/react-form-wp-cf7
// more info: https://mosquid.medium.com/headless-wordpress-using-contact-form-7-rest-api-with-react-e73ef052af23

// Form refactored for improved semantics, accessibility

export default function Form({ handler, isLoading, isSent, hasError }) {
  const [formState, setFormState] = useState({});

  const handleFieldChange = (field, e) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    handler(e, formState);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        noValidate
        className="container flex flex-col mx-auto max-w-lg p-4"
      >
        <div className="form-group flex flex-col pb-4">
          <label className="pl-4" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            onChange={(e) => handleFieldChange("your-name", e)}
            type="text"
            className="peer border-b-2 rounded-sm border-primaryAccent p-1 bg-offWhite hover:bg-tertiaryAccent dark:hover:text-offBlack focus:bg-tertiaryAccent dark:focus:text-offBlack"
          />
          {hasError ? (
            <p className="invisible peer-invalid:visible text-red-700 font-light">
              Please enter your name.
            </p>
          ) : null}
        </div>

        <div className="form-group flex flex-col pb-4">
          <label className="pl-4" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            required
            onChange={(e) => handleFieldChange("your-email", e)}
            type="email"
            className="peer border-b-2 rounded-sm border-primaryAccent p-1 bg-offWhite hover:bg-tertiaryAccent dark:hover:text-offBlack focus:bg-tertiaryAccent dark:focus:text-offBlack"
          />
          {hasError ? (
            <p className="invisible peer-invalid:visible text-red-700 font-light">
              Please enter a valid email address.
            </p>
          ) : null}
        </div>

        <div className="form-group flex flex-col pb-4">
          <label className="pl-4" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            onChange={(e) => handleFieldChange("your-subject", e)}
            type="text"
            className="peer border-b-2 rounded-sm border-primaryAccent p-1 bg-offWhite hover:bg-tertiaryAccent dark:hover:text-offBlack focus:bg-tertiaryAccent dark:focus:text-offBlack"
          />
          {hasError ? (
            <p className="invisible peer-invalid:visible text-red-700 font-light">
              Please enter an email subject.
            </p>
          ) : null}
        </div>
        <div className="form-group flex flex-col pb-4">
          <label className="pl-4" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            onChange={(e) => handleFieldChange("your-message", e)}
            className="peer border-b-2 rounded-sm border-primaryAccent p-1 bg-offWhite hover:bg-tertiaryAccent dark:hover:text-offBlack focus:bg-tertiaryAccent dark:focus:text-offBlack"
          />
          {hasError ? (
            <p className="invisible peer-invalid:visible text-red-700 font-light">
              Please enter a message.
            </p>
          ) : null}
        </div>
        {/* Form submission error & success messages */}
        {hasError ? (
          <motion.aside
            variants={errorShake}
            animate="animate"
            initial="initial"
            className="bg-red-400 p-2 rounded-lg mb-4 dark:text-offBlack"
          >
            {hasError}
          </motion.aside>
        ) : null}
        {isSent ? (
          <motion.aside
            variants={successBounce}
            animate="animate"
            initial="initial"
            className="bg-yellowBG p-2 rounded-lg mb-4 dark:text-offBlack"
          >
            Thanks for your message. I&apos;ll reach out shortly!
          </motion.aside>
        ) : null}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex self-end"
        >
          <input
            className="cursor-pointer w-16 drop-shadow-2xl py-2 px-3 rounded text-white bg-lightGrey"
            type="submit"
            value="Send"
          />
        </motion.div>
      </form>
    </>
  );
}
