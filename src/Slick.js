import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default function SyncSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <Slick>
      <div className="text-container">
        <h2>MEDIA</h2>
        <p>Watch Growing Frutti Dino!</p>
      </div>

      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        arrows={false}
        fade={true}
      >
        {/* 이거 맵 함수로 리팩토링 해 보세요 1 */}
        <div className="youtube-thumnail">
          <img
            src="images/pc/5.media/img_media_thumbnail_1.webp"
            alt="youtube thumnail"
          />
          <button className="youtube-thumnail-btn"></button>
        </div>
        <div className="youtube-thumnail">
          <img
            src="images/pc/5.media/img_media_thumbnail_2.webp"
            alt="youtube thumnail"
          />
          <button className="youtube-thumnail-btn"></button>
        </div>

        <div className="youtube-thumnail">
          <img
            src="images/pc/5.media/img_media_thumbnail_3.webp"
            alt="youtube thumnail"
          />
          <button className="youtube-thumnail-btn"></button>
        </div>

        <div className="youtube-thumnail">
          <img
            src="images/pc/5.media/img_media_thumbnail_4.webp"
            alt="youtube thumnail"
          />
          <button className="youtube-thumnail-btn"></button>
        </div>
        {/* ----------- */}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {/* 이거 맵 함수로 리팩토링 해 보세요 1 */}
        <div className="preview-item">
          <img
            src="images/pc/5.media/img_media_thumbnail_1.webp"
            alt="preview"
          />
          <span className="preview-title">Launching</span>
        </div>
        <div className="preview-item">
          <img
            src="images/pc/5.media/img_media_thumbnail_2.webp"
            alt="preview"
          />
          <span className="preview-title">Launching</span>
        </div>
        <div className="preview-item">
          <img
            src="images/pc/5.media/img_media_thumbnail_3.webp"
            alt="preview"
          />
          <span className="preview-title">Launching</span>
        </div>
        <div className="preview-item">
          <img
            src="images/pc/5.media/img_media_thumbnail_4.webp"
            alt="preview"
          />
          <span className="preview-title">Launching</span>
        </div>
        {/* ----------- */}
      </Slider>
    </Slick>
  );
}

const Slick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  .text-container {
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
  .slick-slider {
    /* background-color: green; */
    &:nth-of-type(2) {
      width: 520px;
      height: 292px;
      border: 1px solid #ffc700;
      border-radius: 4px;
      overflow: hidden;
      .slick-list {
        width: 100%;
        height: 100%;
        .slick-track {
          height: 100%;
          .slick-slide {
            width: 100%;
            height: 100%;
            div {
              width: 100%;
              height: 100%;
              .youtube-thumnail {
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
                button {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  width: 100px;
                  height: 100px;
                  background: url(images/pc/1.main/img_playbtn.png) no-repeat
                    center;
                  background-size: cover;
                }
                &:before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.7),
                    rgba(0, 0, 0, 0.7)
                  );
                }
              }
            }
          }
        }
      }
    }
    &:nth-of-type(3) {
      width: 100%;
      .slick-list {
        .slick-track {
          display: flex;
          flex-direction: row;
          gap: 8px;
          width: 696px;
          .slick-slide {
            width: 168px;
            height: 88px;
            border: 1px solid #ede9e1;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            &.slick-current {
              border: 1px solid #ffc700;
              .preview-item {
                &::before {
                  background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.7),
                    rgba(0, 0, 0, 0.7)
                  );
                }
                .preview-title {
                  color: #ffc700;
                }
              }
            }
            div {
              width: 100%;
              height: 100%;
              .preview-item {
                position: relative;
                &::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0) 50%,
                    rgba(0, 0, 0, 0.7) 100%
                  );
                }
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
                .preview-title {
                  position: absolute;
                  bottom: 10px;
                  left: 50%;
                  transform: translateX(-50%);
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 18px;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
`;
