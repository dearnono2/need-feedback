import styled from "styled-components";

// import EggDinoModal from "./EggDinoModal";

export const Modal = ({ open, children }) => {
  // 기존 코드
  // if (!open) return null;
  // return <ModalContainer>{children}</ModalContainer>;

  // 팀장님 코드
  if (open) return <ModalContainer>{children}</ModalContainer>;
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;
