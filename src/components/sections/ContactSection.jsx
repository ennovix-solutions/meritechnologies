import { Formik } from "formik";
import appData from "@data/app.json";
import Link from "next/link";
import { toast } from "react-toastify";

const ContactSection = () => {
  const Content = appData.contacts.contact;
  const msgStatus = {
    error: "There was a problem submitting your form",
    success: "Thanks for your submission!",
  };

  function makeToast(msg, type = "error") {
    toast(msg, { type: type });
  }

  return (
    <Formik
      initialValues={{ email: "", name: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const form = document.getElementById("contactForm");
        const status = document.getElementById("contactFormStatus");
        const data = new FormData();

        data.append("name", values.name);
        data.append("email", values.email);
        data.append("message", values.message);

        fetch(form.action, {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              status.innerHTML = msgStatus.success;
              makeToast(msgStatus.success, "success");
              form.reset();
            } else {
              response.json().then((data) => {
                if (Object.hasOwn(data, "errors")) {
                  status.innerHTML = data["errors"]
                    .map((error) => error["message"])
                    .join(", ");
                } else {
                  status.innerHTML = "Oops! " + msgStatus.error;
                }
              });
            }
          })
          .catch((error) => {
            status.innerHTML = msgStatus.error;
            makeToast(msgStatus.error);
          });

        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          id="contactForm"
          action={appData.settings.formspreeURL}
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* email field */}
              <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                <input
                  className="mil-link"
                  type="text"
                  name="name"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <label className="mil-link">Name</label>
                <span></span>
                <em>{errors.name && touched.name && errors.name}</em>
              </div>
            </div>
            <div className="col-lg-6">
              {/* email field */}
              <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                <input
                  className="mil-link"
                  type="email"
                  name="email"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label className="mil-link">Email*</label>
                <span></span>
                <em>{errors.email && touched.email && errors.email}</em>
              </div>
            </div>
            <div className="col-lg-12">
              {/* email field */}
              <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                <textarea
                  name="message"
                  className="mil-link"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                <label className="mil-link">Message</label>
                <span></span>
                <em>{errors.message && touched.message && errors.message}</em>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="mil-text-sm mil-mb-30">
                {/* *We promise not to disclose your personal information to third
                parties. */}
              </p>
            </div>
            <div className="col-lg-6">
              <button
                type="submit"
                className="mil-float-right mil-button mil-button-lg mil-scale-down-trigger mil-dark-trigger mil-mb-30"
                disabled={isSubmitting}
              >
                <span>send</span>
              </button>
            </div>
            <div className="form-status" id="contactFormStatus" />
          </div>
        </form>
      )}
    </Formik>
  );
};
export default ContactSection;
