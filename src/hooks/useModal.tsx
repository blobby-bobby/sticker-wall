import { useState } from "react"
import { ModalOptions } from "@/shared/types";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<ModalOptions | null>(null);

  const openModal = (options: ModalOptions) => {
    setIsOpen(true);
    setModalOptions(options);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalOptions(null);
  };

  return { isOpen, modalOptions, openModal, closeModal };
}

export default useModal