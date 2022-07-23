import { useState } from "react";
import styled from "styled-components";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ProcessSection from "./components/ProcessSection";
import ResultSection from "./components/ResultSection";

function App() {
  const [resultLink, setResultLink] = useState(null);
  return (
    <SApp>
      <h1 className="main__label">
        The
        <span className="color-wrap-text">privacy-friendly</span>
        URL Shortener
      </h1>
      <ProcessSection label="Link Shortener" setResultLink={setResultLink} />
      {resultLink && <ResultSection resultLink={resultLink} />}
    </SApp>
  );
}

export default App;

const SApp = styled.div`
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main__label {
    color: #fff;
  }

  .color-wrap-text {
    padding: 10px;
    margin: 0 6px;
    border-radius: 6px;
    background-image: linear-gradient(to right, #f3904f, #3b4371);
  }
`;
