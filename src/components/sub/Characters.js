// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styled from "styled-components";

const Characters = () => {
  const swiperSlides = [
    {
      src: "images/pc/4.character/img_character_watermelon.webp",
      alt: "watermelon dino",
    },
    {
      src: "images/pc/4.character/img_character_orange.webp",
      alt: "orange dino",
    },
    {
      src: "images/pc/4.character/img_character_banana.webp",
      alt: "banana dino",
    },
    {
      src: "images/pc/4.character/img_character_blueberry.webp",
      alt: "blueberry dino",
    },
    {
      src: "images/pc/4.character/img_character_coconut.webp",
      alt: "coconut dino",
    },
    {
      src: "images/pc/4.character/img_character_pineapple.webp",
      alt: "pineapple dino",
    },
    {
      src: "images/pc/4.character/img_character_baby.webp",
      alt: "baby dino",
    },
  ];
  return (
    <Wrapper>
      <div className="text-container">
        <h2>CHARACTERS</h2>
        <p>Let's Meet Pure Dinos First!</p>
      </div>
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        speed={1000}
        className="mySwiper"
      >
        {/* (완료) 이거 맵함수로 리팩토링 해 보세요 */}
        {swiperSlides.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v.src} alt={v.alt} />
          </SwiperSlide>
        ))}
        {/* ------------- */}
        {/* pagination을 여기에 추가하니까 bullet들이 클릭이 안된다... */}
        <div className="icon-dice">
          <img
            src="images/pc/4.character/img_character_8.png"
            alt="dice icon"
          />
        </div>
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: url(images/pc/4.character/img_character_bg.webp) no-repeat center;
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
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
    top: calc(50% - 1.5px);
    transform: translateY(-50%);
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper-button-prev {
      left: 20%;
      width: 64px;
      height: 64px;
      background: url(images/pc/5.media/ico_left_arrow.svg);
      transition: all 0.3s;
      &::after {
        display: none;
      }
      &.swiper-button-disabled {
        display: none;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    .swiper-button-next {
      right: 20%;
      width: 64px;
      height: 64px;
      background: url(images/pc/5.media/ico_right_arrow.svg);
      transition: all 0.3s;
      &::after {
        display: none;
      }
      &.swiper-button-disabled {
        display: none;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    .swiper-pagination-bullets {
      display: flex;
      justify-content: start;
      gap: 16px;
      position: absolute;
      width: 752px;
      height: 80px;
      left: 50%;
      bottom: 80px;
      transform: translateX(-50%);
      /* background-color: blue; */
      .swiper-pagination-bullet {
        width: 80px;
        height: 80px;
        margin: 0;
        opacity: 1;
        &:nth-of-type(1) {
          background: url(images/pc/4.character/img_character_hover_1.png)
            no-repeat center;
          background-size: cover;
          &.swiper-pagination-bullet-active {
            background: url(images/pc/4.character/img_character_1.png) no-repeat
              center;
            background-size: cover;
          }
        }
        &:nth-of-type(2) {
          background: url(images/pc/4.character/img_character_hover_2.png)
            no-repeat center;
          background-size: cover;
          &.swiper-pagination-bullet-active {
            background: url(images/pc/4.character/img_character_2.png) no-repeat
              center;
            background-size: cover;
          }
        }
        &:nth-of-type(3) {
          background: url(images/pc/4.character/img_character_hover_3.png)
            no-repeat center;
          background-size: cover;
          &.swiper-pagination-bullet-active {
            background: url(images/pc/4.character/img_character_3.png) no-repeat
              center;
            background-size: cover;
          }
        }
        &:nth-of-type(4) {
          background: url(images/pc/4.character/img_character_hover_4.png)
            no-repeat center;
          background-size: cover;
          &.swiper-pagination-bullet-active {
            background: url(images/pc/4.character/img_character_4.png) no-repeat
              center;
            background-size: cover;
          }
        }
        &:nth-of-type(5) {
          background: url(images/pc/4.character/img_character_hover_5.png)
            no-repeat center;
          background-size: cover;
          &.swiper-pagination-bullet-active {
            background: url(images/pc/4.character/img_character_5.png) no-repeat
              center;
            background-size: cover;
          }
        }
        &:nth-of-type(6) {
          background: url(images/pc/4.character/img_character_hover_6.png)
            no-repeat center;
          background-size: cover;
          &.swiper-pagination-bullet-active {
            background: url(images/pc/4.character/img_character_6.png) no-repeat
              center;
            background-size: cover;
          }
        }
        &:nth-of-type(7) {
          background: url(images/pc/4.character/img_character_hover_7.png)
            no-repeat center;
          background-size: cover;
          &.swiper-pagination-bullet-active {
            background: url(images/pc/4.character/img_character_7.png) no-repeat
              center;
            background-size: cover;
          }
        }
      }
    }
    .icon-dice {
      position: absolute;
      width: 80px;
      height: 80px;
      left: calc(50% + 296px);
      bottom: 80px;
      cursor: pointer;
      z-index: 11;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default Characters;
