import { Formik } from "formik";
import appData from "@data/app.json";
import Link from "next/link";
import { toast } from "react-toastify";

const Contact1 = ({ popup = false }) => {
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
        data.append("phone", values.phone);
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
          class="contact"
        >
          <div class="contact-header"></div>
          <div class="contact-body">
            {/* <div class="contact-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
            </div> */}

            <div class="contact-body-item">
              <div class="app-form">
                {/* name */}
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
                  <em
                    style={{ marginLeft: "20px", textTransform: "lowercase" }}
                  >
                    {errors.name && touched.name && errors.name}
                  </em>
                </div>
                {/* email */}
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
                  <em
                    style={{ marginLeft: "20px", textTransform: "lowercase" }}
                  >
                    {errors.email && touched.email && errors.email}
                  </em>
                </div>
                {/* contact form */}
                <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                  <input
                    className="mil-link"
                    type="text"
                    name="phone"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <label className="mil-link">Phone Number</label>
                  <span></span>
                  <em
                    style={{ marginLeft: "20px", textTransform: "lowercase" }}
                  >
                    {errors.phone && touched.phone && errors.phone}
                  </em>
                </div>
                {/* message area */}
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
                  <em
                    style={{ marginLeft: "20px", textTransform: "lowercase" }}
                  >
                    {errors.message && touched.message && errors.message}
                  </em>
                </div>

                <div class="app-form-group buttons">
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
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Contact1;
