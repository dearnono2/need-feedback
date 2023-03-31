import { keyframes } from "styled-components";

// PreRegistration 섹션 애니메이션
export const flying = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(4deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

// GameIntroduction 섹션 애니메이션
export const movingCloud = keyframes`
  0% {
    transform: translate(-50%, 0px);
  }

  25% {
    transform: translate(-50%, -5px);
  }

  50% {
    transform: translate(-50%, 0px);
  }

  75% {
    transform: translate(-50%, 5px);
  }

  100% {
    transform: translate(-50%, 0);
  }
`;

export const rotateLight = keyframes`
  0% {
    transform: scale(0);
  }

  25% {
    transform: scale(1.2);
  }

  50% {
    transform: scale(0);
  }

  75% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0);
  }
`;
