import styled, { keyframes } from "styled-components";
import * as Anime from "../../Anime";
// animation libraries
import { gsap } from "gsap";
import Lottie from "lottie-react";
import Gifts from "../../lottie/birthday-gifts.json";

import { useLayoutEffect, useRef, useMemo } from "react";

const PreRegistration = () => {
  const presentDino = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      // gsap.to(".img-flying-dino", {
      //   y: -20,
      //   repeat: -1,
      //   repeatDelay: 0.8,
      //   yoyo: true,
      // });
      gsap.to(presentDino.current, {
        rotate: -10,
        repeat: -1,
        repeatDelay: 0.3,
        yoyo: true,
      });
      // gsap.to(presentDino.current, {
      //   x: 20,
      //   repeat: -1,
      // });
    });
    return () => ctx.revert();
  }, []);

  const precautionsList = useMemo(
    () => [
      { li: "Precautions" },
      { li: "A confirmation email will be sent." },
      { li: "Please check the mail to complete the pre-registration." },
      { li: "Please check your spam mailbox if you cannot find the mail." },
      { li: "Pre-registration rewards will be given 1 time per account." },
      { li: "Rewards will be sent to in-game mailbox." },
      { li: "%사전예약 혜택 내용% reward" },
    ],
    []
  );
  return (
    <Wrapper>
      <div className="bg-pattern"></div>
      <div className="inner">
        <div className="gifts">
          <Lottie animationData={Gifts} isClickToPauseDisabled />
        </div>

        <div className="img-container">
          <div className="img-present">
            <img
              src="images/pc/2.pre-register/img_present.webp"
              alt="present"
            />
          </div>
          <div ref={presentDino} className="img-present-dino">
            <img
              src="images/pc/2.pre-register/img_present-dino_no_bg.webp"
              alt="present dino"
            />
          </div>
          <div className="img-flying-dino">
            <img
              src="images/pc/2.pre-register/img_dragonfruit_dino.webp"
              alt="flyng dino"
            />
          </div>
        </div>
        <div className="text-container">
          <h2>FRUTTI DINO PRE-REGISTRATION</h2>
          <p>Pre-Register and Get %사전예약 혜택 내용%</p>
        </div>
        <div className="register-container">
          <div className="register-text-container">
            <h3>Get ready for the world of baby Dinos!</h3>
            <p>Pre-Register now and get %사전예약 혜택 내용%</p>
          </div>
          {/* form section */}
          <form action="">
            <div className="email-box">
              <input type="email" />
              <span className="email-reset-btn"></span>
            </div>
            <div className="checkbox-container">
              <div className="checkbox first">
                <input type="checkbox" id="checker1" />
                <label htmlFor="checker1">
                  <span></span>
                  <p>I have read and agreed to the Privacy Policy.</p>
                </label>
                <a
                  href="https://www.monoverse.io/stories-terms-privacy.htm"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src="images/ico_arrow_right.svg" alt="privacy policy" />
                </a>
              </div>
              <div className="checkbox second">
                <input type="checkbox" id="checker2" />
                <label htmlFor="checker2">
                  <span></span>
                  <p>
                    Receive notifications of events and announcements through
                    email.
                  </p>
                </label>
              </div>
            </div>
          </form>
          <button>
            <span>Pre-Register</span>
          </button>
          <ul className="precautions">
            {/* <li>Precautions</li>
            <li>A confirmation email will be sent.</li>
            <li>Please check the mail to complete the pre-registration.</li>
            <li>Please check your spam mailbox if you cannot find the mail.</li>
            <li>Pre-registration rewards will be given 1 time per account.</li>
            <li>Rewards will be sent to in-game mailbox.</li>
            <li>%사전예약 혜택 내용% reward</li> */}
            {precautionsList.map((v, i) => (
              <li key={i}>{v.li}</li>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(images/pc/2.pre-register/img_pre-register_bg.webp) no-repeat
    center;
  background-size: cover;
  .bg-pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(images/pc/2.pre-register/ico_bg_pattern.svg) center;
    background-size: 2000px;
    opacity: 0.04;
  }
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1366px;
    max-height: 768px;
    /* background-color: green; */
    .gifts {
      position: absolute;
      top: 76px;
      left: 80px;
      width: 200px;
      height: 200px;
    }
    .img-container {
      > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &.img-present-dino {
          width: 78px;
          height: 103px;
          left: 310px;
          top: 530px;
        }
      }

      .img-flying-dino {
        animation: ${Anime.flying} 5s linear infinite;
      }
    }
    .text-container {
      position: absolute;
      width: 100%;
      top: 160px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      h2 {
        color: #ffc700;
        font-weight: 800;
        font-size: 56px;
        line-height: 56px;
      }
      p {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #fff;
      }
    }
    .register-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      position: absolute;
      right: 170px;
      bottom: 10px;
      width: 437px;
      height: 402px;
      .register-text-container {
        h3 {
          font-weight: 800;
          font-size: 24px;
          line-height: 28px;
          color: #fff;
          margin-bottom: 4px;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #ede9e1;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        input {
          display: block;
        }
        .email-box {
          > input {
            width: 400px;
            height: 44px;
            padding: 8px 16px;
            border: 1px solid #ffc700;
            border-radius: 8px;
          }
          .email-reset-btn {
          }
        }
        .checkbox-container {
          .checkbox {
            display: flex;
            align-items: center;
            input[type="checkbox"] {
              display: none;
            }
            input[type="checkbox"] + label span {
              display: inline-block;
              width: 24px;
              height: 24px;
              background: url(../images/pc/2.pre-register/img_checkbox_before.png)
                center no-repeat;
              background-size: cover;
              margin-right: 6px;
              cursor: pointer;
            }
            input[type="checkbox"]:checked + label span {
              background: url(../images/pc/2.pre-register/img_checkbox_after.png)
                center no-repeat;
              background-size: cover;
            }
            label {
              display: flex;
              align-items: center;

              font-weight: 400;
              font-size: 14px;
              line-height: 18px;
              color: #ede9e1;
              span {
                display: inline-block;
              }
              p {
                display: inline-block;
              }
            }
            &.first {
              margin-bottom: 4px;
              a {
                width: 16px;
                height: 16px;
                margin-left: 8px;
              }
            }
          }
        }
      }
      button {
        width: 400px;
        height: 56px;
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
          color: #2c2923;
        }
      }
      .precautions {
        li {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #cbc7bf;
          list-style: disc;
          &:first-child {
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 4px;
            list-style: none;
          }
          &:not(li:first-child) {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

export default PreRegistration;
