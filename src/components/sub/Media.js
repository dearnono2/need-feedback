import styled from "styled-components";
import SyncSlider from "../../Slick";

const Media = () => {
  return (
    <Wrapper>
      <div className="inner">
        {/* <div className="text-container">
          <h2>MEDIA</h2>
          <p>Watch Growing Frutti Dino!</p>
        </div> */}
        <SyncSlider />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: url(images/pc/5.media/img_media_main.webp) no-repeat center;
  background-size: cover;
  .inner {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 696px;
    height: 496px;
    .text-container {
      color: #2c2923;
      text-align: center;
      h2 {
        font-weight: 800;
        font-size: 56px;
        line-height: 56px;
      }
      p {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
`;

export default Media;
