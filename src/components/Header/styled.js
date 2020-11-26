import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  section {
    padding: 10px 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #222;
        font-size: 16px;
        font-weight: 800;
        padding: 0 20px;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
`;
