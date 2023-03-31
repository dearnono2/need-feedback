import { useLayoutEffect, useRef, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import * as Anime from "../../Anime";
// gsap
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, Draggable);

const GameIntroduction = () => {
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

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     // use scoped selectors
  //     gsap.from(
  //       ".light",
  //       {
  //         scale: 0.8,
  //         repeat: -1,
  //         repeatDelay: 1,
  //         yoyo: true,
  //         reversed: true,
  //       },
  //       {
  //         scale: 1.1,
  //         repeat: -1,
  //         repeatDelay: 1,
  //         reversed: true,
  //         yoyo: true,
  //       }
  //     );
  //   });
  //   return () => ctx.revert();
  // }, []);

  const component = useRef();
  const slider = useRef();

  const goToSlide = (e) => {};

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });

      // let icons = gsap.utils.toArray(".character-icon");
      // gsap.to(panels, {
      //   xPercent: -100 * (panels.length - 1),
      // });
    }, component);
    return () => ctx.revert();
  });

  return (
    <Wrapper>
      <div className="wrapper-container" ref={component}>
        <div className="slider-container" ref={slider}>
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
              <div className="img-character-icon-container">
                <div className="character-icon ico00">
                  <img
                    src="images/pc/3.game-introduction/ico_line1.svg"
                    alt="icon line"
                  />
                  <img
                    src="images/pc/3.game-introduction/img_1_hover.png"
                    alt="character icon"
                  />
                  <img
                    src="images/pc/3.game-introduction/img_1.png"
                    alt="character hover icon"
                  />
                </div>
                <div className="character-icon ico01">
                  <img
                    src="images/pc/3.game-introduction/ico_line2.svg"
                    alt="icon line"
                  />
                  <img
                    src="images/pc/3.game-introduction/img_2_hover.png"
                    alt="character icon"
                  />
                  <img
                    src="images/pc/3.game-introduction/img_2.png"
                    alt="character hover icon"
                  />
                </div>
                <div className="character-icon ico02">
                  <img
                    src="images/pc/3.game-introduction/ico_line3.svg"
                    alt="icon line"
                  />
                  <img
                    src="images/pc/3.game-introduction/img_3_hover.png"
                    alt="character icon"
                  />
                  <img
                    src="images/pc/3.game-introduction/img_3.png"
                    alt="character hover icon"
                  />
                </div>
                <div className="character-icon ico03">
                  <img
                    src="images/pc/3.game-introduction/ico_line4.svg"
                    alt="icon line"
                  />
                  <img
                    src="images/pc/3.game-introduction/img_4_hover.png"
                    alt="character icon"
                  />
                  <img
                    src="images/pc/3.game-introduction/img_4.png"
                    alt="character hover icon"
                  />
                </div>
              </div>
            </div>
          </div>
          {chapterSections.map((v, i) => (
            <div className={`panel sec${i + 1} draggable`} key={i}>
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
                <div className="pagination-container">
                  <div className="pagination-line">
                    <div className="icon-wrapper">
                      <div className="icon">
                        <img
                          src="images/pc/3.game-introduction/ico_timeline_icon_1.svg"
                          alt="pagination icon1"
                        />
                      </div>
                      <div className="icon">
                        <img
                          src="images/pc/3.game-introduction/ico_timeline_icon_2.svg"
                          alt="pagination icon2"
                        />
                      </div>
                      <div className="icon">
                        <img
                          src="images/pc/3.game-introduction/ico_timeline_icon_3.svg"
                          alt="pagination icon3"
                        />
                      </div>
                      <div className="icon">
                        <img
                          src="images/pc/3.game-introduction/ico_timeline_icon_4.svg"
                          alt="pagination icon4"
                        />
                      </div>
                      <div className="icon">
                        <img
                          src="images/pc/3.game-introduction/ico_timeline_icon_5.svg"
                          alt="pagination icon5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pagination-text">
                    {/* 여기서 또 반복문을 만드는 방법이 있나? map 안에 map? */}
                    <p>The Arrival of Frutti Amber</p>
                    <p>Essence and Evolution</p>
                    <p>Fruits and Dinos</p>
                    <p>The Beginning of New Era</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  min-width: 1200px;

  /* overflow-x: hidden; */
  .wrapper-container {
    overflow: hidden;
    .slider-container {
      display: flex;
      width: 500%;
      height: 100vh;
      .panel {
        position: relative;
        width: 100%;
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
          background: url(images/pc/3.game-introduction/img_introduction_1.webp)
            no-repeat center;
          background-size: cover;
        }
        &.sec2 {
          background: url(images/pc/3.game-introduction/img_introduction_2.webp)
            no-repeat center;
          background-size: cover;
        }
        &.sec3 {
          background: url(images/pc/3.game-introduction/img_introduction_3.webp)
            no-repeat center;
          background-size: cover;
        }
        &.sec4 {
          background: url(images/pc/3.game-introduction/img_introduction_4.webp)
            no-repeat center;
          background-size: cover;
        }
        /* main만 제외 */
        &:not(:first-of-type) {
          .intro-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            position: absolute;
            width: 100%;
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
                  background: url(images/pc/1.main/img_playbtn.png) no-repeat
                    center;
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
            .pagination-container {
              position: relative;
              width: 100%;
              height: 81px;
              &::after {
                display: block;
                position: absolute;
                top: 21px;
                content: "";
                width: 100%;
                height: 1px;
                background-color: #4e4b44;
              }
              .pagination-line {
                position: absolute;
                top: 21px;
                left: 50%;
                transform: translateX(-50%);
                width: 800px;
                height: 1px;
                background-color: #ffc700;
                z-index: 2;
                .icon-wrapper {
                  display: flex;
                  position: absolute;
                  top: -12px;
                  left: -6px;
                  gap: 176px;
                  .icon {
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    img {
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
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
            }
          }
        }
      }
    }
  }
`;

export default GameIntroduction;

// 참고 gsap link: https://greensock.com/forums/topic/35340-horizontal-scroll-gsap-scrolltrigger-react-dude/
