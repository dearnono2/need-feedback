import styled from "styled-components";

const Content = () => {
  return (
    <Wrapper>
      <video autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + "images/pc/1.main/vid_main.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="main-container">
        <div className="main-logo">
          <img src="images/img_logo_big.png" alt="frutti dino logo" />
        </div>
        <button className="youtube-btn"></button>
        <button className="btn-pre-register">
          <span>Pre-Register</span>
        </button>
        <div className="btn-container">
          <div className="link-btn-container">
            <a href="/">
              <img src="images/img_appstore_btn.png" alt="app store link" />
            </a>
            <a href="/">
              <img src="images/img_googleplay_btn.png" alt="google play link" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    object-fit: cover;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 275px;
    /* height: 449px; */
    .main-logo {
      width: 260px;
      height: 205px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .youtube-btn {
      width: 100px;
      height: 100px;
      background: url(images/pc/1.main/img_playbtn.png) no-repeat center;
      background-size: cover;
    }
    .btn-pre-register {
      width: 275px;
      height: 56px;
      padding: 16px 24px;
      background: linear-gradient(
        270deg,
        #ffb800 0%,
        #ffd600 50.52%,
        #ffb800 100%
      );
      border: 2px solid #ffc700;
      border-radius: 8px;
      span {
        font-weight: 900;
        font-size: 24px;
        line-height: 24px;
      }
    }
    .btn-container {
      width: 100%;
      .link-btn-container {
        display: flex;
        justify-content: space-between;
        a {
          display: inline-block;
          width: 135px;
          height: 40px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;

export default Content;