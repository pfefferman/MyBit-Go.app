/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';
import styled, { createGlobalStyle } from 'styled-components';
import WatchIcon from '../images/new-watch.svg';

const GlobalStyle = createGlobalStyle`
  .Watch__tooltip .ant-tooltip-inner{
    background-color: #ffffff;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-family: 'Roboto';
  }
  .Watch__tooltip .ant-tooltip-arrow{
    border-top-color: #ffffff !important;
  }
`;

const StyledWatch = styled.span`
  position: absolute;
  top: 15px;
  right: 16px;
  width: 22px;
  z-index: 1;
  cursor: pointer;

  svg{
    fill: ${props => props.active ? '#1890ff' : '#fff'};
  }

  svg:hover{
    fill: #40a9ff;
  }
`;

const Watch = ({ active, handleClick, assetId }) => (
  <StyledWatch active={active} onClick={() => handleClick(assetId)}>
    <GlobalStyle />
    <Tooltip
      placement="topRight"
      title={active ? 'Remove from watchlist.' : 'Add to watchlist.'}
      overlayClassName="Watch__tooltip"
      arrowPointAtCenter
    >
      <WatchIcon />
    </Tooltip>
  </StyledWatch>
);

Watch.propTypes = {
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  assetId: PropTypes.string.isRequired,
};

export default Watch;
