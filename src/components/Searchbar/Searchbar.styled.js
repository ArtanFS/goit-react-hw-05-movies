import styled from 'styled-components';

export const SearchbarWrap = styled.div`
  display: flex;
  align-items: center;
  min-height: 36px;
  padding: 15px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 200px;
  height: 28px;
  font: inherit;
  font-size: 20px;
  border: 2px solid #3f51b5;
  border-radius: 4px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  left: 180px;
  width: 30px;
  height: 30px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border: 0;
  color: #444;
  background-color: #4052b576;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #4052b5eb;
    color: #111;
  }
`;
