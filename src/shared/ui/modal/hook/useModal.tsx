import { useState } from "react";
import { Modal } from "../ui/Modal";

interface UseModalArgs {
  children?: React.ReactNode;
  eventClose?: () => any;
  eventOpen?: () => any;
}

export const useModal = ({ children, eventClose, eventOpen }: UseModalArgs) => {
  const [isOpen, setIsOpen] = useState(false);

  const onModal = () => {
    if (isOpen && eventClose) eventClose();
    else if (isOpen && eventOpen) eventOpen();
    setIsOpen(!isOpen);
  };

  return {
    modal: (
      <Modal isOpen={isOpen} onClose={onModal}>
        {children}
      </Modal>
    ),
    onModal,
  };
};
