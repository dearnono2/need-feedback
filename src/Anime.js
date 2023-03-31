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

// PreRegistration 섹션 popup 애니메이션
// eggshell dino
export const swaying = keyframes`
  0% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(-5deg);
  }
`;

export const heart = keyframes`
  0% {
    transform: translate(2%, 4%) rotate(-20deg);
    opacity: 1;
  }
  25% {
    transform: translate(2%, 2%) rotate(-25deg);
    opacity: 1;
  }
  50% {
    transform: translate(2%, 0%) rotate(-20deg);
    opacity: 1;
  }
  75% {
    transform: translate(2%, -2%) rotate(-15deg);
    opacity: 1;
  }
  100% {
    transform: translate(2%, -4%) rotate(-10deg);
    opacity: 0;
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
