import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: max-content;
  background: #fff;

  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  header {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 100px 10px 50px;

    .logo {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      cursor: pointer;

      .principal {
        font-size: 40px;
        font-weight: bold;
        color: #414141;
      }

      .secund {
        color: #414141;
        text-align: center;
      }
    }
  }

  nav ul {
    /* height: 45px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background-color: #414141;
    margin: 10px 30px;

    li {
      list-style: none;

      a {
        text-decoration: none;
        height: 45px;
        display: flex;
        align-items: center;
        margin: 0 20px;
        color: #ccc;
        font-size: 20px;
        border-top: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
        transition: border 0.3s;

        &:hover {
          border-top: 3px solid #c57e14;
          border-bottom: 3px solid #c57e14;
        }
      }
    }
  }

  @media (max-width: 900px) {
    & {
      flex-direction: row;
      border-bottom: 5px solid #414141;
    }

    nav {
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: #414141;
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.9s;
    }

    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
      background: transparent;
      border: 0;

      cursor: pointer;
    }
    .menu-section {
      align-self: center;
    }

    /* fullscreen */
    .menu-section.on {
      position: absolute;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      background-color: #414141;
      opacity: 95%;

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;

      nav {
        display: block;
        margin: 0;

        ul {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0;

          a {
            display: block;
            margin: 0 30px;
            transition-duration: 0.5s;
            font-size: 30px;
            display: block;
            margin-bottom: 10px;
            border-top: 0;
            width: 100%;
            margin-left: 0;
          }
        }
      }

      .menu-toggle {
        position: absolute;
        right: 17px;
        top: 30px;

        .one {
          transform: rotate(45deg) translate(7px, 7px);
          background-color: #ccc;
        }
        .two {
          opacity: 0;
        }
        .three {
          transform: rotate(-45deg) translate(8px, -9px);
          background-color: #ccc;
        }
      }
    }
  }

  @media (max-width: 768px) {
    header span {
      display: none;
    }
  }

  @media (max-width: 500px) {
    & {
      margin-bottom: 10px;

      header {
        margin: 10px 50px 10px 25px;
        .logo .principal {
          font-size: 20px;
        }
        .logo .secund {
          font-size: 12px;
        }
      }
    }
  }
`;
