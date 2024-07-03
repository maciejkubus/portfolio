import React from "react";
import { CiLinkedin } from "react-icons/ci";
import ContactForm from "./ContactForm";

const ContactUsSection = () => {
  return (
    <div>
      <div className="pt-8 pb-32 w-full grid grid-cols-2 gap-8">
        <div>
          <h3 className="w-full flex gap-8 font-bold text-6xl mt-6 mb-8">
            Odezwij się do nas
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            elementum, felis ac elementum efficitur, sapien tellus eleifend
            enim, quis consequat lorem metus nec tortor. Morbi eu sem in quam
            cursus sodales. Donec commodo felis ac elit porta malesuada. Aenean
            vel dignissim erat, vitae auctor quam.
          </p>
          <div className="pt-8 pb-32 w-full grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <CiLinkedin className="inline h-9 w-9 mr-1" />
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center">
              <CiLinkedin className="inline h-9 w-9 mr-1" />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
