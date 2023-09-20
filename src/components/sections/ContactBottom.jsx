import React, { useState } from "react";
import ContactSection from "./ContactSection";

function ContactBottom() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <div>
      {modalOpen && (
        <div className="mini-contact">
          <ContactSection />
        </div>
      )}
      <div onClick={openModal} className="bottom-icon">
        <img src="/img/direct.gif" alt="contact" width="70" />
      </div>
    </div>
  );
}

export default ContactBottom;
