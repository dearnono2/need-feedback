import styled from "styled-components";

import * as Anime from "../../Anime";

const EggDino = ({ onClose }) => {
  return (
    <Wrapper>
      <div className="egg-dino-container">
        <div className="eggshell">
          <img
            src="images/pc/2.pre-register/img_popup_eggshell.webp"
            alt="eggshell"
          />
        </div>
        <div className="egg-dino">
          <img
            src="images/pc/2.pre-register/img_popup_dino.webp"
            alt="egg dino"
          />
        </div>
        <div className="heart">
          <img
            src="images/pc/2.pre-register/img_popup_heart.webp"
            alt="heart animation"
          />
        </div>
        <span className="close-btn" onClick={onClose}></span>
        <p>You have successfully pre-registered!</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .egg-dino-container {
    position: absolute;
    max-width: 1366px;
    max-height: 688px;
    width: 100%;
    height: 100%;
    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      &.eggshell {
      }
      &.egg-dino {
        animation: ${Anime.swaying} 2s linear infinite;
      }
      &.heart {
        animation: ${Anime.heart} 2s linear infinite;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .close-btn {
      position: absolute;
      top: 144px;
      left: 877px;
      width: 40px;
      height: 40px;
      background: url(images/ico_close_btn.svg) no-repeat center;
      background-size: cover;
      cursor: pointer;
    }
    p {
      position: absolute;
      left: 50%;
      bottom: 110px;
      transform: translateX(-50%);
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      color: #ffffff;
    }
  }
`;

export default EggDino;
