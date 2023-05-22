import styled, { css } from 'styled-components'

export const Article = styled.article`
  & > ul {
    border-radius: 4px;
    background-color: #fff;
    padding: 8px;
    border: 1px solid #9747ff;
    margin-right: 60px;
  }

  & > ul > li {
    cursor: pointer;
    padding: 4px;
  }

  & > ul > li:hover {
    border-radius: 4px;
    background-color: skyblue;
    color: #fff;
  }

  & > ul > li:last-child {
    margin-bottom: 0;
  }

  @keyframes slide-fade-in-dropdown-animation {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }
  
  &.slide-fade-in-dropdown {
    overflow: hidden;
  }

  &.slide-fade-in-dropdown > ul {
    animation: slide-fade-in-dropdown-animation 0.4s ease;
  }

  @keyframes slide-fade-out-dropdown-animation {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-100%);
    }
  }

  &.slide-fade-out-dropdown {
    overflow: hidden;
  }

  &.slide-fade-out-dropdown > ul {
    animation: slide-fade-out-dropdown-animation 0.4s ease;
    animation-fill-mode: forwards;
  }
`
