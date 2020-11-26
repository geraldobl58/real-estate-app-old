import styled from 'styled-components';

export const WrapperPropertySingle = styled.section``;

export const WrapperPropertySingleGallery = styled.div`
  ul {
    display: flex;
    align-items: center;
    li {
      img {
        max-width: 100%;
      }
    }
  }
`;

export const WrapperPropertySingleContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  min-height: 500px;
  padding: 50px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  small {
    display: block;
    margin-bottom: 20px;
  }
`;

export const WrapperPropertySingleContentDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
