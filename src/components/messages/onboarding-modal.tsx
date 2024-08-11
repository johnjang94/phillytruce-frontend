import { Dispatch, SetStateAction, useEffect } from "react";

const OnboardingModal = ({
  step,
  onNext,
  setOnboardingStep,
}: {
  step: number;
  onNext: React.Dispatch<React.SetStateAction<number>>;
  setOnboardingStep: Dispatch<SetStateAction<number>>;
}) => {
  const tutorialContent = [
    "This is the chat interface for Report #3333:Would you like a tutorial on how to navigate this page:Yes",
    "Above the dotted line:Everything above this dotted line represents the conversation between the reporter and Philly Truce bot.:Next",
    "Below the dotted line:Everything below the line represents the conversation that YOU may have with the reporter.:Next",
    "Accessing the Report:By clicking this icon, you will be brought to the Report associated with this Message.:Finish Tutorial",
  ];

  const updateThemeColor = (color: string) => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    } else {
      const newMetaThemeColor = document.createElement("meta");
      newMetaThemeColor.name = "theme-color";
      newMetaThemeColor.content = color;
      document.head.appendChild(newMetaThemeColor);
    }
  };

  useEffect(() => {
    updateThemeColor("#122c57");

    // Restore original theme color when component unmounts
    return () => {
      updateThemeColor("#1c4587");
    };
  }, []);

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    onNext((prevStep) => prevStep + 1);
  };

  const [title, text, buttonName] = tutorialContent[step].split(":");

  return (
    <>
      {/* Modal */}
      <div
        id="modal"
        className={`w-4/5 z-30 fixed top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[28px] ${
          step === 0
            ? "modal-top"
            : step === 1
            ? "modal-bottom"
            : "modal-top-right"
        }`}
      >
        <div
          id="modal-title-text-wrapper"
          className="mx-6 mt-6 flex flex-col gap-4"
        >
          <div id="modal-title" className="text-xl font-medium leading-8">
            {title}
          </div>
          <div
            id="modal-text"
            className="text-slate-700 text-sm font-normal leading-5 tracking-[0.1px];"
          >
            {text}
          </div>
        </div>
        <div id="modal-button-wrapper" className="p-2 flex justify-end">
          {step === 0 && (
            <button
              id="modal-button"
              className="text-slate-700 text-center text-sm font-medium leading-5 tracking-[0.1px] px-3 py-[10px]"
              onClick={() => {
                setOnboardingStep(4);
              }}
            >
              No
            </button>
          )}
          <button
            id="modal-button"
            className="text-[#1C4587] text-sm font-extrabold leading-5 tracking-[0.1px] px-3 py-[10px]"
            onClick={handleNext}
          >
            {buttonName}
          </button>
        </div>
      </div>
      {/* Main Overlay */}
      <div
        id="overlay"
        className={`fixed w-screen h-screen z-10 ${
          step < 3 && "bg-black inset-0 opacity-35"
        }`}
      />
      {/* Document Overlay */}
      {/* <div
        id="document-icon-spotlight"
        className={`fixed w-14 h-14 z-20 top-2 right-3 transition-shadow duration-1000          ${
          step === 3
            ? "shadow-[0_0_0_9999px_rgba(0,0,0,0.35)] transition-none"
            : ""
        }`}
      /> */}
    </>
  );
};

export default OnboardingModal;
