import { useState } from "react";

import styled from "styled-components";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <ModalContainer></ModalContainer>;
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
