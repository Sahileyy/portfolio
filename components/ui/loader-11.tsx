"use client";

import React from "react";
import styled from "styled-components";

interface LoaderProps {
  className?: string;
  size?: number | string;
}

const Loader: React.FC<LoaderProps> = ({ className, size }) => {
  return (
    <StyledWrapper className={className} $size={size}>
      <div className="sharingon">
        <div className="ring">
          <div className="to" />
          <div className="to" />
          <div className="to" />
          <div className="circle" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $size?: number | string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) =>
    typeof $size === "number" ? `${$size}px` : $size || "16px"};

  .sharingon {
    position: relative;
    width: 6em;
    height: 6em;
    background-color: #e50914;
    border: 6px solid #000000;
    animation: rot 1s ease-in-out infinite;
    box-sizing: border-box;
  }

  .ring {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    width: 3.5em;
    height: 3.5em;
    border: 4px solid rgba(110, 13, 13, 0.6);
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }

  .sharingon,
  .ring,
  .to,
  .circle {
    border-radius: 50%;
  }

  .to,
  .circle {
    position: absolute;
    content: "";
    width: 0.9em;
    height: 0.9em;
    background-color: #000000;
  }

  .to:nth-child(1) {
    top: -0.5em;
    left: 50%;
    transform: translate(-40%);
  }

  .to::before {
    content: "";
    position: absolute;
    top: -0.5em;
    right: -0.2em;
    width: 1.1em;
    height: 0.9em;
    box-sizing: border-box;
    border-left: 16px solid #000000;
    border-radius: 100% 0 0;
  }

  .to:nth-child(2) {
    bottom: 0.5em;
    left: -0.35em;
    transform: rotate(-120deg);
  }

  .to:nth-child(3) {
    bottom: 0.5em;
    right: -0.35em;
    transform: rotate(120deg);
  }

  .circle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.8);
    width: 1em;
    height: 1em;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;

