import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 15px;

  .switch-input {
    display: none;
  }

  .switch-label {
    display: block;
    width: 48px;
    height: 24px;
    text-indent: -150%;
    clip: rect(0 0 0 0);
    color: transparent;
    user-select: none;
  }

  .switch-label::before,
  .switch-label::after {
    content: '';
    display: block;
    position: absolute;
    cursor: pointer;
  }

  .switch-label::before {
    width: 100%;
    height: 24px;
    background-color: #dedede;
    border-radius: 9999em;
    -webkit-transition: background-color 0.25s ease;
    transition: background-color 0.25s ease;
  }

  .switch-label::after {
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    transition: left 0.25s ease;
  }

  .switch-input:checked + .switch-label::before {
    background-color: #1070ca;
  }

  .switch-input:checked + .switch-label::after {
    left: 24px;
  }
`;

export const Label = styled.label`
  margin-left: 15px;
  cursor: pointer;
`;