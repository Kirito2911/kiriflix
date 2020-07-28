import styled from 'styled-components';

const Button = styled.a`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    &:hover,
    &:focus {
    color: #141414;
    background: #00aec2;
    border: 1px solid #e6e6e6;
  }
`;
export default Button;