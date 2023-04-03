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
        {/* (완료) 이 버튼이 무슨 버튼인가에 대한 텍스트가 없으면 안돼요 1.aria-label 속성 사용하기 2. 텍스트 써 놓고 css로 text-indent:-9999px 처리 */}
        <button className="youtube-btn" aria-label="youtube link">
          youtube button
        </button>
        {/* ------- */}
        <button className="btn-pre-register">
          <span>Pre-Register</span>
        </button>
        <div className="btn-container">
          <div className="link-btn-container">
            {/* (완료) a 태그 또한 마찬가지입니다. */}
            <a href="/" aria-label="apple store button">
              <img src="images/img_appstore_btn.png" alt="app store" />
            </a>
            <a href="/" aria-label="google play button">
              <img src="images/img_googleplay_btn.png" alt="google play" />
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
      text-indent: -9999px;
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
