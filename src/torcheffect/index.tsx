import React from "react";
import styled from "styled-components";
import torch from "../images/torch.png";

const Container = styled.div`
  height: 85vh;
  width: 65vw;
  background-color: #f7beaa;
`;

const StyledImage = styled.svg`
  margin-top: 500px;
  margin-left: -200px;
`;
const Flash = styled.svg`
  margin-bottom: 130px;
  margin-left: -70px;
  z-index: -10;
`;
const Torch = styled.img`
  height: 200px;
  margin-left: -100px;
`;

const TorchEffect = () => {
  return (
    <Container>
      <Torch src={torch} />

      <StyledImage
        width="200px"
        height="200px"
        viewBox="0 0 200 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Artboard" transform="translate(-4.000000, -504.000000)">
            <g id="Group" transform="translate(4.000000, 183.000000)">
              <g id="onlyTorch" transform="translate(0.000000, 321.000000)">
                <circle
                  id="Oval"
                  stroke="#E48E66"
                  strokeWidth="2"
                  fill="#64326C"
                  cx="72"
                  cy="128"
                  r="7"
                ></circle>
                <animateTransform
                  href="#Oval"
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-14 14"
                  dur="0.2s"
                  begin="click"
                  fill="freeze"
                  id="oval-anim"
                />
              </g>
            </g>
          </g>
        </g>
      </StyledImage>

      <Flash
        width="398px"
        height="357px"
        viewBox="0 0 398 357"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="14.3407062%"
            y1="91.8655926%"
            x2="78.6099155%"
            y2="4.02716247%"
            id="linearGradient-1"
          >
            <stop stopColor="#FDFDFD" offset="0%"></stop>
            <stop stopColor="#F5F5F5" offset="6.05797521%"></stop>
            <stop stopColor="#EFF4BA" offset="12.1914891%"></stop>
            <stop stopColor="#EDEEA2" offset="20.1987714%"></stop>
            <stop stopColor="#F4EFA7" offset="25.1660205%"></stop>
            <stop stopColor="#F4EE89" offset="28.9732836%"></stop>
            <stop stopColor="#F3E47F" offset="36.1384574%"></stop>
            <stop stopColor="#F2BE5B" offset="62.363352%"></stop>
            <stop stopColor="#FEC7AF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          fillOpacity="0.35"
        >
          <g
            id="Artboard"
            transform="translate(-131.000000, -222.000000)"
            fill="url(#linearGradient-1)"
          >
            <g id="Group" transform="translate(4.000000, 183.000000)">
              <path
                d="M157.616638,375.672133 L246.51779,57.705393 C355.010704,36.2035464 424.993624,35.19846 456.46655,54.6901338 C487.939477,74.1818076 510.290105,132.370499 523.518435,229.256209 L246.51779,426.003611 L157.616638,375.672133 Z"
                id="Path-2"
                transform="translate(340.567536, 233.395920) rotate(15.000000) translate(-340.567536, -233.395920) "
              ></path>
            </g>
          </g>
        </g>
        <animate
          href="#Oval"
          attributeName="x"
          from="50"
          to="425"
          dur="5s"
          begin="oval-anim.begin + 1s"
          fill="freeze"
          id="rect-anim"
        />
      </Flash>

      {/* <Flash width="398px" height="357px" viewBox="0 0 398 357" version="1.1">
        <defs>
          <linearGradient
            x1="14.3407062%"
            y1="91.8655926%"
            x2="78.6099155%"
            y2="4.02716247%"
            id="linearGradient-1"
          >
            <stop stopColor="#FBFBFB" offset="0%"></stop>
            <stop stopColor="#F5F5F5" offset="6.05797521%"></stop>
            <stop stopColor="#F0F0F0" offset="12.1914891%"></stop>
            <stop stopColor="#FFFFFF" offset="20.1987714%"></stop>
            <stop stopColor="#F8F6D3" offset="25.1660205%"></stop>
            <stop stopColor="#F4EE89" offset="28.9732836%"></stop>
            <stop stopColor="#F2BE5B" offset="62.363352%"></stop>
            <stop stopColor="#FB5B19" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          fillOpacity="0.35"
        >
          <g
            id="Artboard"
            transform="translate(-131.000000, -222.000000)"
            fill="url(#linearGradient-1)"
          >
            <g id="Group" transform="translate(4.000000, 183.000000)">
              <path
                d="M157.616638,375.672133 L246.51779,57.705393 C355.010704,36.2035464 424.993624,35.19846 456.46655,54.6901338 C487.939477,74.1818076 510.290105,132.370499 523.518435,229.256209 L246.51779,426.003611 L157.616638,375.672133 Z"
                id="Path-2"
                transform="translate(340.567536, 233.395920) rotate(15.000000) translate(-340.567536, -233.395920) "
              ></path>
            </g>
          </g>
        </g>
      </Flash>
      <StyledImage viewBox="0 0 370 370" version="1.1">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Group-2"
            transform="translate(185.000000, 185.000000) scale(-1, 1) translate(-185.000000, -185.000000) "
          >
            <g
              id="torch"
              transform="translate(185.000000, 185.000000) scale(-1, 1) translate(-185.000000, -185.000000) "
            >
              <path
                d="M188.89,49.22 L188.6,48.93 L228.2,9.34 C230.073844,7.4625907 232.617462,6.40757289 235.27,6.40757289 C237.922538,6.40757289 240.466156,7.4625907 242.34,9.34 L360.1,127.1 C361.977409,128.973844 363.032427,131.517462 363.032427,134.17 C363.032427,136.822538 361.977409,139.366156 360.1,141.24 L320.51,180.84 L188.89,49.22 Z"
                id="Path"
                fill="#E48E66"
              ></path>
              <polygon
                id="Path"
                fill="#F8EC7D"
                points="320.51 180.84 320.63 181.17 223.86 215.96 193.32 246.5 123.5 176.68 154.04 146.14 188.89 49.22"
              ></polygon>
              <path
                d="M193.32,246.5 L119.96,319.86 L50.14,250.04 L123.5,176.68 L193.32,246.5 Z M147.24,237.75 C147.234667,231.687167 143.580099,226.223685 137.97847,223.90426 C132.376842,221.584836 125.929736,222.865594 121.64,227.15 L100.43,248.36 C96.5306512,252.126117 94.966811,257.703168 96.3395427,262.94761 C97.7122743,268.192051 101.807949,272.287726 107.05239,273.660457 C112.296832,275.033189 117.873883,273.469349 121.64,269.57 L142.85,248.36 C145.667027,245.548502 147.246987,241.729964 147.24,237.75 Z"
                id="Shape"
                fill="#E48E66"
                fillRule="nonzero"
              ></path>
              <path
                d="M142.85,227.15 C148.705729,233.007498 148.705729,242.502502 142.85,248.36 L121.64,269.57 C115.754317,275.254583 106.398728,275.173286 100.612721,269.387279 C94.8267144,263.601272 94.7454169,254.245683 100.43,248.36 L121.64,227.15 C124.451874,224.335973 128.266887,222.754888 132.245,222.754888 C136.223113,222.754888 140.038126,224.335973 142.85,227.15 Z"
                id="Path"
                fill="#6FE3FF"
              ></path>
              <path
                d="M119.96,319.86 L82.55,357.27 C74.7370292,365.079887 62.0729708,365.079887 54.26,357.27 L12.73,315.74 C4.92011254,307.927029 4.92011254,295.262971 12.73,287.45 L50.14,250.04 L119.96,319.86 Z"
                id="Path"
                fill="#F8EC7D"
              ></path>
              <g id="Group" fill="#63316D" fillRule="nonzero">
                <path
                  d="M8.488,319.982 L50.018,361.512 C60.1819435,371.644906 76.6280565,371.644906 86.792,361.512 L227.153,221.152 L322.736,186.788 L323.057,186.668 C324.610339,186.085219 325.851885,184.883512 326.485,183.35 L364.337,145.488 C367.341378,142.488706 369.029647,138.417738 369.029647,134.1725 C369.029647,129.927262 367.341378,125.856294 364.337,122.857 L246.582,5.1 C243.588597,2.08733406 239.51394,0.398052823 235.267,0.409 L235.255,0.409 C231.012849,0.399008164 226.943323,2.08804126 223.955,5.099 L184.355,44.689 C183.229825,45.8143651 182.597809,47.3406281 182.598,48.932 L182.598,48.974 L148.845,142.849 L8.485,283.21 C-1.64684613,293.374085 -1.64550445,309.819568 8.488,319.982 Z M123.5,185.164 L184.836,246.5 L119.959,311.375 L58.625,250.041 L123.5,185.164 Z M232.448,13.576 C233.192829,12.8258214 234.206865,12.4048668 235.264,12.407 C236.326993,12.4049655 237.346673,12.8280321 238.096,13.582 L355.855,131.342 C356.607343,132.090804 357.030304,133.108526 357.030304,134.17 C357.030304,135.231474 356.607343,136.249196 355.855,136.998 L320.508,172.354 L197.086,48.931 L232.448,13.576 Z M158.282,150.382 C158.907594,149.757194 159.387369,149.001848 159.687,148.17 L191.336,60.15 L309.851,178.665 L221.83,210.313 C220.998152,210.612631 220.242806,211.092406 219.618,211.718 L193.318,238.018 L131.984,176.68 L158.282,150.382 Z M16.974,291.692 L50.141,258.525 L111.475,319.86 L78.31,353.024 C72.8347883,358.480816 63.9772117,358.480816 58.502,353.024 L16.973,311.5 C11.5148127,306.025194 11.5152599,297.166255 16.974,291.692 Z"
                  id="Shape"
                ></path>
                <path
                  d="M96.188,273.813 C104.392831,282.000549 117.677169,282.000549 125.882,273.813 L147.092,252.604 C152.468748,247.313225 154.594763,239.545141 152.661579,232.253741 C150.728395,224.962341 145.033047,219.267951 137.741321,217.335995 C130.449595,215.404038 122.68187,217.531361 117.392,222.909 L96.183,244.119 C87.9843128,252.319611 87.9843128,265.613389 96.183,273.814 L96.188,273.813 Z M104.672,252.603 L125.882,231.393 C129.416956,228.006385 135.010522,228.066317 138.472102,231.527898 C141.933683,234.989478 141.993615,240.583044 138.607,244.118 L117.397,265.328 C113.867377,268.752839 108.242141,268.710132 104.764926,265.232097 C101.28771,261.754061 101.246329,256.128815 104.672,252.6 L104.672,252.603 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
            <circle
              id="Oval"
              stroke="#979797"
              strokeWidth="4"
              fill="#63316D"
              cx="237.5"
              cy="237.5"
              r="12.5"
            ></circle>

            <animateTransform
              href="#Oval"
              attributeName="transform"
              type="translate"
              from="0 0"
              to="20 20"
              dur="0.2s"
              begin="click"
              fill="freeze"
            />
          </g>
        </g>
      </StyledImage> */}
    </Container>
  );
};

export default TorchEffect;
