import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 50px 0;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 300px;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ececec;
    position: relative;
    line-height: 30px;
    margin-right: 20px;

    > div {
      border: none;
      width: 280px;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
      border-radius: 5px;
      background: #ccc;
      min-height: 200px;
    }

    span {
      position: absolute;
      top: 20px;
      left: 20px;
      background: #00414c;
      padding: 3px 10px;
      color: #fff;
      border-radius: 5px;

      + span {
        position: absolute;
        top: 20px;
        left: 190px;
        background: #cb4d64;
        padding: 3px 10px;
        color: #fff;
        border-radius: 5px;
      }
    }

    strong {
      position: absolute;
      top: 180px;
      left: 20px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
    }

    small {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }
  }

  a {
    color: #222;
    text-decoration: none;
  }
`;

export const WrapperAttributes = styled.section`
  margin: 10px 0;

  ul {
    display: flex;
    align-items: center;

    list-style: none;
    li {
      padding-right: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      b {
        font-size: 12px;
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
