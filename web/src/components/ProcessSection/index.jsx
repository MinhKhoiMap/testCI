import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

import { HiArrowSmRight } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

const ProcessSection = ({ label, setResultLink }) => {
  const [optionLink, setOptionLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");

  const optionArr = ["shrtco.de", "9qr.de", "shiny.link"];

  const handleChooseOption = (e) => {
    setOptionLink(e.target.childNodes[0].data);
  };

  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!optionLink) {
      toast.warning("Bạn chưa chọn cấu hình link!");
      setIsLoading(false);
    } else callApi();
  };

  const callApi = async () => {
    const apiRes = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const apiData = await apiRes.json();
    setIsLoading(false);
    // console.log(apiData, optionLink);
    if (apiData.ok) {
      if (optionLink === "shrtco.de") {
        setResultLink(apiData.result["short_link"]);
      } else if (optionLink === "9qr.de") {
        setResultLink(apiData.result["short_link2"]);
      } else if (optionLink === "shiny.link") {
        setResultLink(apiData.result["short_link3"]);
      }
    } else toast.error(apiData.error);
  };

  return (
    <SProcessSection>
      <h1>{label}</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Enter a Link: </label>
        <input
          type="text"
          placeholder="example.com"
          value={url}
          onChange={handleOnChange}
        />
        <Button
          text={
            isLoading ? (
              <Bars height="100%" width="100%" color="#fff" />
            ) : (
              <HiArrowSmRight />
            )
          }
          width="38px"
          height="38px"
        />
      </form>

      <div className="option">
        <p>Short domain: </p>
        {optionArr.map((option, index) => (
          <Button
            text={option}
            key={option}
            bgColor={optionLink === option ? "#1f2037" : "#deddde"}
            colorText={optionLink === option ? "#fff" : "#000"}
            handleOnClick={handleChooseOption}
          />
        ))}
      </div>

      <ToastContainer />
    </SProcessSection>
  );
};

export default ProcessSection;

const SProcessSection = styled.section`
  max-width: 800px;
  margin-top: 50px;
  padding: 26px 40px;
  background-color: #fff;
  border-radius: 6px;

  input {
    margin-left: 5px;
    margin-right: 5px;
    padding: 6px 8px;
    width: 250px;
    font-size: 20px;
    background-color: #deddde;
    border: none;
  }

  form {
    display: flex;
    align-items: center;

    button {
      font-size: 20px;
    }
  }

  .option {
    margin-top: 16px;
    display: flex;
    align-items: center;

    button {
      margin: 0 3px;
    }

    .active {
      background-color: #1f2037;
      color: #fff;
    }
  }
`;
