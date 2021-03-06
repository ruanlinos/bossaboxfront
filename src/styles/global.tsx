import { createGlobalStyle } from 'styled-components';
import media from './media';
import 'antd/es/modal/style/css';
import 'antd/es/checkbox/style/css';
import 'antd/es/select/style/css';
import 'antd/es/tag/style/css';
import 'antd/es/pagination/style/css';
import 'antd/es/notification/style/css';

export default createGlobalStyle`

html {
      font-size: 62.5%; /*10px*/ 
      box-sizing: border-box;
      line-height: 1.15;
      @media ${media.largest} {
          font-size: 60%;
      }
      @media ${media.large} {
          font-size: 57.5%;
      }
      @media ${media.small} {
          font-size: 55%;
      }
    }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Source Sans Pro', sans-serif !important;
    color: #170C3A;
    width: 100%;
    /* height: 100vh; */
    
  }
  body, input, textarea, label {
    font-size: 1.6rem;
    box-sizing: inherit;
    font-family: 'Source Sans Pro', sans-serif !important;
    color: #170C3A;
  }
  button {
    border: 0;
    background-color: none;
    color: white;
  }
  a, button {
    font-family: 'Source Sans Pro', sans-serif !important;
    outline: none;
    cursor: pointer;
  }
   /* Font Sizes */
  h1 {
    font-size: 4.2rem;
    line-height: 5rem;
    font-weight: bold;
    color: #170C3A;
  }
  h3 {
    font-size: 3rem;
    line-height: 3.6rem;
    font-weight: bold;
    color: #170C3A;
  }
  p {
    font-size: 2rem;
    line-height: 2.6rem;
    color: #170C3A;
  }
  small {
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: #B1ADB9;
  }
  
  #root {
    max-width: 102rem;
    margin: 0 auto;
  }
  .ant-modal-footer {
    border-top: none;
  }
  .ant-notification-notice-with-icon {
    font-family: 'Source Sans Pro', sans-serif !important;
    span {
      svg {
        fill: #ffff
      }
    }
  }
  .ant-notification-notice-message {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-weight: bold;
    color: #ffffff
  }
`;
