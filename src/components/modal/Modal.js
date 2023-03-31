import styled from "styled-components";

import EggDinoModal from "./EggDinoModal";

export const Modal = () => {
  return (
    <ModalContainer>
      <EggDinoModal></EggDinoModal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;
