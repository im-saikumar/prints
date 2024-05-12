import React from "react";
import { Button, SecondaryButton } from "../ui/Button";

interface AlertModalProps {
  onOkay: () => void;
  onCancel: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ onOkay, onCancel }) => {
  return (
    <>
      <div className="backdrop-blur-2xl bg-white/60 h-full w-full z-10 fixed top-0 flex justify-center items-center">
        <div className="shadow-lg h-auto w-auto bg-white rounded p-5 z-20">
          <header className="mb-4 text-lg font-bold">
            <div>Are you sure ?</div>
          </header>
          <section className="flex gap-2">
            <Button onClick={onOkay}>Okay</Button>
            <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
          </section>
        </div>
      </div>
    </>
  );
};

export default AlertModal;
