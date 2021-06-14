import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export const WrapperSearch = styled.div`
  width: 1200px;
  margin: 0px auto;
  position: relative;
  top: -150px;
  padding: 10px;
  border-radius: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const WrapperSearchForm = styled.div`
  width: 1200px;
  margin: 0px auto;
  position: relative;
  top: 0;
  padding: 10px;
  border-radius: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #fff;

  input {
    padding: 14px;
    border-radius: 100px;
    border: none;
  }
`;

export const WrapperForm = styled.form``;

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

export const WrapperNotFound = styled.div`
  text-align: center;
  h1 {
    color: #453fa2;
    font-size: 36px;
  }
`;
