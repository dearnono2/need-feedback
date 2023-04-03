import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div className="snb">
        <a href="https://www.fruttidino.com/" target="_blank" rel="noreferrer">
          <img src="images/img_snb_logo.svg" alt="snb logo" />
        </a>
      </div>
      <div className="inner">
        <h1>
          <Link to={"/"}>
            <img src="images/img_logo_big.png" alt="" />
          </Link>
        </h1>
        <nav className="nav">
          <ul className="gnb">
            {/* 이거 맵함수로 리팩토링 해 보세요 1 */}
            <li>
              <NavLink
                to="/preregistration"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Pre-Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gameintroduction"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Game Introduction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gameintroductionCopy"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Game Introduction2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/characters"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/media"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Media
              </NavLink>
            </li>
            {/* ---------- */}
          </ul>
          <ul className="util">
            {/* 이거 맵함수로 리팩토링 해 보세요 2 */}
            <li>
              <a
                href="https://www.facebook.com/FruttiDino"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/ico_facebook.svg" alt="facebook icon" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/invite/Vvhr9TCeHq"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/ico_discord.svg" alt="facebook icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@FruttiDinoOfficial"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/ico_youtube.svg" alt="facebook icon" />
              </a>
            </li>
            {/* ---------- */}
          </ul>
          <span className="menu-bar"></span>
        </nav>
      </div>
    </Wrapper>
  );
};

// styling

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 128px;
  min-width: 1200px;
  background-color: "blue";
  z-index: 10;
  .snb {
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    background: rgba(0, 0, 0, 0.7);
    a {
      width: 82px;
      height: 14px;
      margin-left: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .inner {
    display: flex;
    align-items: center;
    padding: 32px 40px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    h1 {
      width: 80px;
      height: 64px;
      margin-right: 44px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .gnb {
        display: flex;
        gap: 44px;
        li {
          font-weight: 800;
          font-size: 24px;
          line-height: 28px;
          color: #fff;
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          a:hover {
            color: #ffe99a;
          }
          a.active {
            color: #ffc700;
          }
        }
      }
      .util {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 278px;
        li {
          width: 36px;
          height: 36px;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
      .menu-bar {
        display: none;
      }
    }
  }
`;

export default Header;
