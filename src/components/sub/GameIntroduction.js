import React, { useRef, useMemo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import * as Anime from "../../Anime";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from "styled-components";

// gsap
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import { gsap } from "gsap";

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";

gsap.registerPlugin(ScrollTrigger, Draggable);

export default function GameIntroduction() {
  const ref = useRef();
  const swiperRef = useRef(null);

  const moveToNext = (num) => {
    ref.current.style.transform = "translateX(-100vw)";
    swiperRef.current.swiper.slideTo(num);
  };

  const moveToPrev = () => {
    ref.current.style.transform = "translateX(0vw)";
  };

  // (확인) useMemo는 웬만하면 지양하세요. 불필요한 메모리 저장을 유도합니다
  const chapterSections = useMemo(
    () => [
      {
        cpTxt: "The Arrival of Frutti Amber",
        introTitle: "Atusia, blessed with Amber Tree!",
        introTxt:
          "This is premordial planet 'Atusia' The god of life spread Frutti Ambers all around the world and they started to grow up as Amber Trees!",
      },
      {
        cpTxt: "Essence and Evolution",
        introTitle: "Amber Essence, evolved Dino!",
        introTxt:
          "Amber Essence from Amber Tree! Dinos in Atusia started to go through evolution with this essence!",
      },
      {
        cpTxt: "Fruits and Dinos",
        introTitle: "Dinos evolved with the help of fruit!",
        introTxt:
          "Various fruits with essence of 'Atusia' planet Dinos evolved in various ways depending on the fruits they like the most.",
      },
      {
        cpTxt: "The Beginning of New Era",
        introTitle: "Frutti Dinos finally completes evolution!",
        introTxt:
          "Various looks of Dinos as various fruits! They went through the final stage of evolution before they started to explore Atusia and new worlds.",
      },
    ],
    []
  );

  // 이런 의미없는 빈 배열을 만들 때는 array 함수를 사용하는것이 좋다! 116줄 참고
  // const characterIcons = [
  //   {
  //     idx: 0,
  //   },
  //   {
  //     idx: 1,
  //   },
  //   {
  //     idx: 2,
  //   },
  //   {
  //     idx: 3,
  //   },
  // ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Wrapper>
      <div className="wrapper-container">
        <div className="slider-container" ref={ref}>
          <div className="panel main sec0">
            <div className="inner">
              <div className="text-container">
                <h2>FRUTTI DINO STORIES</h2>
                <p>Watch Dinos Grow!</p>
              </div>
              <div className="img-bg-container">
                <div className="img-bg cloud">
                  <img
                    src="images/pc/3.game-introduction/img_introduction_main_cloud.webp"
                    alt=""
                  />
                </div>
                <div className="img-bg light">
                  <img
                    src="images/pc/3.game-introduction/img_introduction_main_light.webp"
                    alt=""
                  />
                </div>
              </div>
              {/* (완료) 이거 맵함수 사용해서 리팩토링 해 볼래요?*/}
              <div className="img-character-icon-container">
                {Array.from({ length: 4 }).map((v, i) => (
                  <div
                    className={`character-icon ico0${i}`}
                    onClick={() => moveToNext(i)}
                    key={i}
                  >
                    <img
                      src={`images/pc/3.game-introduction/ico_line${i + 1}.svg`}
                      alt="icon line"
                    />
                    <img
                      src={`images/pc/3.game-introduction/img_${
                        i + 1
                      }_hover.png`}
                      alt="character icon"
                    />
                    <img
                      src={`images/pc/3.game-introduction/img_${i + 1}.png`}
                      alt="character hover icon"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="panel sec1">
            <Swiper
              // spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 6500,
                disableOnInteraction: false,
                stopOnLastSlide: true,
              }}
              pagination={{
                clickable: true,
                el: ".my-pagination",
              }}
              mousewheel={true}
              speed={1500}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation, Mousewheel]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
              ref={swiperRef}
            >
              {chapterSections.map((v, i) => (
                <SwiperSlide key={i}>
                  <div className="intro-container">
                    <div className="text-container">
                      <div className="text-left">
                        <button></button>
                        <h3>CHAPTER 0{i + 1}</h3>
                        <p>{v.cpTxt}</p>
                      </div>
                      <div className="text-right">
                        <p>{v.introTitle}</p>
                        <p>{v.introTxt}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="pagination-container">
                <div className="pagination-line"></div>
                <div className="my-pagination">
                  <div className="swiper-pagination-bullet"></div>
                  <div className="swiper-pagination-bullet"></div>
                  <div className="swiper-pagination-bullet"></div>
                  <div className="swiper-pagination-bullet"></div>
                </div>
                <div className="pagination-text">
                  <p>The Arrival of Frutti Amber</p>
                  <p>Essence and Evolution</p>
                  <p>Fruits and Dinos</p>
                  <p>The Beginning of New Era</p>
                </div>
                <div className="prev-section-arrow" onClick={moveToPrev}>
                  <div className="img">
                    <img
                      src="images/pc/5.media/ico_left_arrow.svg"
                      alt="move to prev section"
                    />
                  </div>
                  <span>Back</span>
                </div>
              </div>
              {/* autoplay-progress */}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  min-width: 1200px;
  /* overflow-x: hidden; */

  .wrapper-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .slider-container {
      display: flex;
      width: 200%;
      height: 100%;
      transition: ease-in 1s;
      .panel {
        position: relative;
        width: calc(100% / 2);
        height: 100%;
        &.main.sec0 {
          .inner {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            max-width: 1366px;
            max-height: 768px;
            background: url(images/pc/3.game-introduction/img_pc_introduction_main_book.webp)
              no-repeat center;
            background-size: cover;
            .text-container {
              position: absolute;
              top: 240px;
              left: 50%;
              transform: translateX(-50%);
              text-align: center;
              color: #2c2923;
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
            .img-bg-container {
              position: absolute;
              width: 100%;
              height: 100%;
              .img-bg {
                position: absolute;
                &.cloud {
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 100%;
                  height: 100%;
                  animation: ${Anime.movingCloud} 5s linear infinite;
                }
                &.light {
                  left: calc(50% - 56px);
                  bottom: 176px;
                  width: 116px;
                  height: 116px;
                  animation: ${Anime.rotateLight} 10s linear infinite;
                  opacity: 0.8;
                }
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
            .img-character-icon-container {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              .character-icon {
                position: absolute;
                width: 110px;
                height: 110px;
                cursor: pointer;
                &:hover {
                  img:nth-of-type(3) {
                    opacity: 0;
                  }
                }
                img {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: all 0.5s;
                  &:nth-of-type(1) {
                    pointer-events: none;
                  }
                }
                &.ico00 {
                  left: 291px;
                  bottom: 245px;
                  img:nth-of-type(1) {
                    width: 159px;
                    height: 52px;
                    bottom: -34px;
                    left: 76px;
                  }
                }
                &.ico01 {
                  top: 305px;
                  left: 435px;
                  img:nth-of-type(1) {
                    width: 156px;
                    height: 143px;
                    bottom: -126px;
                    left: 82px;
                  }
                }
                &.ico02 {
                  top: 305px;
                  left: 856px;
                  img:nth-of-type(1) {
                    width: 113px;
                    height: 161px;
                    top: 74px;
                    right: 66px;
                  }
                }
                &.ico03 {
                  left: 1028px;
                  bottom: 225px;
                  img:nth-of-type(1) {
                    width: 130px;
                    height: 153px;
                    top: 84px;
                    right: 56px;
                  }
                }
              }
            }
          }
        }
        &.sec1 {
          .swiper {
            position: relative;
            width: 100%;
            height: 100%;
            .swiper-wrapper {
              .swiper-slide {
                width: 100%;
                height: 100%;
                /* 회색 선 */
                &::after {
                  display: block;
                  position: absolute;
                  bottom: 123px;
                  content: "";
                  width: 100%;
                  height: 1px;
                  background-color: #4e4b44;
                  z-index: 1;
                }
                &:nth-of-type(1) {
                  background: url(images/pc/3.game-introduction/img_introduction_1.webp)
                    no-repeat center;
                  background-size: cover;
                }
                &:nth-of-type(2) {
                  background: url(images/pc/3.game-introduction/img_introduction_2.webp)
                    no-repeat center;
                  background-size: cover;
                }
                &:nth-of-type(3) {
                  background: url(images/pc/3.game-introduction/img_introduction_3.webp)
                    no-repeat center;
                  background-size: cover;
                }
                &:nth-of-type(4) {
                  background: url(images/pc/3.game-introduction/img_introduction_4.webp)
                    no-repeat center;
                  background-size: cover;
                }
                .intro-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 40px;
                  position: absolute;
                  width: 100%;
                  height: 409px;
                  bottom: 0;
                  padding: 64px 0;
                  .text-container {
                    display: flex;
                    color: #ffffff;
                    gap: 48px;
                    width: 800px;
                    height: 162px;
                    .text-left {
                      display: flex;
                      flex-direction: column;
                      align-items: flex-end;
                      /* flex: 1; */
                      width: 350px;
                      text-align: end;
                      gap: 4px;
                      button {
                        width: 64px;
                        height: 64px;
                        background: url(images/pc/1.main/img_playbtn.png)
                          no-repeat center;
                        background-size: cover;
                        margin-bottom: 4px;
                      }
                      h3 {
                        font-weight: 800;
                        font-size: 56px;
                        line-height: 56px;
                      }
                      p {
                        font-weight: 600;
                        font-size: 24px;
                        line-height: 28px;
                      }
                    }
                    .text-right {
                      display: flex;
                      flex-direction: column;
                      /* flex: 1; */
                      width: 402px;
                      gap: 4px;
                      justify-content: flex-end;
                      p {
                        &:nth-of-type(1) {
                          font-weight: 600;
                          font-size: 24px;
                          line-height: 28px;
                        }
                        &:nth-of-type(2) {
                          font-weight: 400;
                          font-size: 16px;
                          line-height: 20px;
                          color: #ada9a1;
                        }
                      }
                    }
                  }
                }
              }
            }
            .pagination-container {
              position: absolute;
              left: 50%;
              bottom: 0;
              transform: translateX(-50%);
              width: 824px;
              height: 81px;
              margin-bottom: 64px;
              /* background-color: red; */
              z-index: 12;

              .pagination-line {
                position: absolute;
                top: 21px;
                left: 50%;
                transform: translateX(-50%);
                width: 786px;
                height: 1px;
                background-color: #ffc700;
                z-index: 1;
                &::after {
                  display: block;
                  position: absolute;
                  content: "";
                  top: -14px;
                  right: -10px;
                  width: 24px;
                  height: 24px;
                  background: url(images/pc/3.game-introduction/ico_timeline_icon_5.svg);
                  background-size: cover;
                }
              }
              .my-pagination {
                display: flex;
                gap: 150px;
                position: absolute;
                width: 650px;
                height: 42px;
                left: 0;
                bottom: 40px;
                z-index: 2;

                .swiper-pagination-bullet {
                  width: 42px;
                  height: 42px;
                  background-size: 24px;
                  background-repeat: no-repeat;
                  background-position: center;
                  opacity: 1;
                  background-color: inherit;
                  transition: all 0.5s;
                  &.swiper-pagination-bullet-active {
                    width: 42px;
                    height: 42px;
                    background-size: cover;
                  }
                  &:nth-of-type(1) {
                    background-image: url(images/pc/3.game-introduction/ico_timeline_icon_1.svg);
                    /* background-size: cover; */
                    &.swiper-pagination-bullet-active {
                      background-image: url(images/pc/3.game-introduction/img_1_default.png);
                      /* background-size: cover; */
                    }
                  }
                  &:nth-of-type(2) {
                    background-image: url(images/pc/3.game-introduction/ico_timeline_icon_2.svg);
                    /* background-size: cover; */
                    &.swiper-pagination-bullet-active {
                      background-image: url(images/pc/3.game-introduction/img_2_default.png);
                      /* background-size: cover; */
                    }
                  }
                  &:nth-of-type(3) {
                    background-image: url(images/pc/3.game-introduction/ico_timeline_icon_3.svg);
                    /* background-size: cover; */
                    &.swiper-pagination-bullet-active {
                      background-image: url(images/pc/3.game-introduction/img_3_default.png);
                      /* background-size: cover; */
                    }
                  }
                  &:nth-of-type(4) {
                    background-image: url(images/pc/3.game-introduction/ico_timeline_icon_4.svg);
                    /* background-size: cover; */
                    &.swiper-pagination-bullet-active {
                      background-image: url(images/pc/3.game-introduction/img_4_default.png);
                      /* background-size: cover; */
                    }
                  }
                }
              }
              .pagination-text {
                display: flex;
                gap: 96px;
                position: absolute;
                top: 49px;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                p {
                  width: 112px;
                  height: 36px;
                  color: #ada9a1;
                }
              }
              .prev-section-arrow {
                display: flex;
                align-items: center;
                position: absolute;
                top: -80px;
                left: -200px;
                cursor: pointer;
                .img {
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
                span {
                  color: #fff;
                }
              }
            }
            .autoplay-progress {
              position: absolute;
              right: 16px;
              bottom: 16px;
              z-index: 10;
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              color: var(--swiper-theme-color);

              svg {
                --progress: 0;
                position: absolute;
                left: 0;
                top: 0px;
                z-index: 10;
                width: 100%;
                height: 100%;
                stroke-width: 4px;
                stroke: var(--swiper-theme-color);
                fill: none;
                stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
                stroke-dasharray: 125.6;
                transform: rotate(-90deg);
              }
            }
          }
        }
      }
    }
  }
`;
