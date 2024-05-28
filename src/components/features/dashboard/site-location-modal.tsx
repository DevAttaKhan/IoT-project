import { BarChart, Modal } from "@/components/common";
import { useState } from "react";
import logo from "@/assets/images/logo.small.png";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

enum Steps {
  MAIN,
  DETAILS,
}

const Main = () => {
  return (
    <div className="rounded-xl h-96 overflow-hidden">
      <iframe
        className="h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.833527236202!2d-74.04344433236008!3d40.72410247051899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2574d36236e47%3A0x6070ad6200c1c817!2s213%205th%20St%20APT%201%2C%20Jersey%20City%2C%20NJ%2007302%2C%20USA!5e0!3m2!1sen!2s!4v1716908091216!5m2!1sen!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const Details = () => {
  return (
    <div className="flex flex-wrap justify-between gap-9 lg:gap-0">
      <BarChart label="Vibration Sensor Stats" />
      <BarChart label="Smart Lock Stats" color="#B09EFF" />
      <div className="lg:w-[215px] w-full h-[300px]  rounded-xl shadow overflow-hidden">
        <iframe
          className="h-full w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.833527236202!2d-74.04344433236008!3d40.72410247051899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2574d36236e47%3A0x6070ad6200c1c817!2s213%205th%20St%20APT%201%2C%20Jersey%20City%2C%20NJ%2007302%2C%20USA!5e0!3m2!1sen!2s!4v1716908091216!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export const SiteLocationModal = ({ isOpen, setIsOpen }: Props) => {
  const [step, setStep] = useState<Steps>(Steps.MAIN);

  const CompMap = {
    [Steps.MAIN]: () => <Main />,
    [Steps.DETAILS]: () => <Details />,
  };

  const Comp = CompMap[step] as () => JSX.Element;

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      widthClass="max-w-[1000px]"
    >
      <div>
        <div className="flex gap-2 items-center font-bold mb-12">
          <img src={logo} alt="logo" />
          <span className="uppercase  ">OctoTech</span>
        </div>
        <div className=" sm:flex justify-between items-center mb-5">
          <h3 className="text-2xl font-bold sm:mb-0 mb-2">
            Site <span className="text-red-500">Disconnected</span>
          </h3>
          {step === Steps.MAIN ? (
            <button
              onClick={() => setStep(Steps.DETAILS)}
              className="primary-button"
            >
              View Details
            </button>
          ) : (
            <button
              onClick={() => setStep(Steps.MAIN)}
              className="primary-button"
            >
              Go back
            </button>
          )}
        </div>
        <div className="mb-5">
          <p>Last Updated at:</p>
          <p> April 27, 2024 | 05:47 PM</p>
        </div>
        <div className="  lg:flex flex-wrap mb-12 lg:gap-0 gap-3">
          <div className="flex-1 border-b py-2 lg:py-0 lg:border-b-0 border-gray-300 lg:border-r">
            <p className="mb-2">Site ID</p>
            <p>NX SCT</p>
          </div>
          <div className="flex-1 border-b py-2 lg:py-0 lg:border-b-0 border-gray-300 lg:border-r lg:px-12">
            <p className="mb-2">Location</p>
            <p>4190701033</p>
          </div>
          <div className="flex-1 border-b py-2 lg:py-0 lg:border-b-0 border-gray-300 lg:border-r lg:px-12">
            <p className="mb-2">MSISDN</p>
            <p>34667064500</p>
          </div>
          <div className="flex-1 border-b py-2 lg:py-0 lg:border-b-0 border-gray-300 lg:border-r lg:px-12">
            <p className="mb-2">Vibration Sensor</p>
            <div className="flex items-center w-max gap-1 rounded-full border border-gray-300 px-2">
              <span className="w-4 h-4 bg-red-600 rounded-full"></span>
              <span className="uppercase font-bold">Activated</span>
            </div>
          </div>
          <div className="flex-1 border-b py-2 lg:py-0 lg:border-b-0  lg:px-12   ">
            <p className="mb-2">Smart Lock</p>
            <div className="flex items-center justify-center w-max gap-3 rounded-full border border-gray-300 px-2">
              <span className="uppercase font-bold">open</span>
              <span className="w-4 h-4 bg-green-600 rounded-full"></span>
            </div>
          </div>
        </div>

        <Comp />
      </div>
    </Modal>
  );
};
