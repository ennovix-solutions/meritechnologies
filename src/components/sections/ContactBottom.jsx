import React, { useState } from "react";
import ContactSection from "./ContactSection";
import Contact1 from "./Contact1";

function ContactBottom() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <div>
      {modalOpen && (
        <div className="mini-contact">
          {/* <ContactSection /> */}
          <Contact1 popup={true} />
        </div>
      )}
      <div onClick={openModal} className="bottom-icon">
        <img src="/img/direct.gif" alt="contact" width="70" />
      </div>
    </div>
  );
}

export default ContactBottom;
