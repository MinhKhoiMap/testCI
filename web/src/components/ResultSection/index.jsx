import React from "react";
import styled from "styled-components";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaTelegram,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";

const ResultSection = ({ resultLink="/" }) => {

    console.log(resultLink, "ở result link");
  return (
    <SResultSection>
      <h1>Link generated!</h1>
      <a href={`${resultLink}`} target="_blank">{resultLink}</a>
      <footer>
        <FaFacebookSquare color="#314986" fontSize="40px" />
        <FaTwitterSquare color="#3B9AE2" fontSize="40px" />
        <ImMail color="#656665" fontSize="40px" />
        <FaWhatsappSquare color="#00C061" fontSize="40px" />
        <FaTelegram color="#3C93D4" fontSize="40px" />
      </footer>
    </SResultSection>
  );
};

export default ResultSection;

const SResultSection = styled.section`
  width: fit-content;
  max-width: 800px;
  margin-top: 26px;
  padding: 26px 40px;
  background-color: #fff;
  border-radius: 6px;
  text-align: center;

  a {
    margin-top: 20px;
    color: #00ca6d;
    font-weight: 600;
    font-size: 30px;
    display: block;
  }

  footer {
    margin-top: 20px;
    svg {
        cursor: pointer;
        margin: 0 4px;
    }
  }
`;
