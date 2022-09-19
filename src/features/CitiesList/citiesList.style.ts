import styled from '@emotion/styled';

export const StyledSelect = styled.select`
  margin-top: 20px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: var(--colors-textPrimary);
  opacity: 0.7;
  padding: 10px 30px;
  border-radius: 16px;
  border: 1px solid var(--colors-shadow);
  box-shadow: 0px 8px 16px var(--colors-sgadow);
  background-color: var(--colors-bg);

  & option {
    font-size: 15px;
    line-height: 20px;
  }
  `;
  
  export const StyledOption = styled.option`
    color: var(--colors-textPrimary);
    background-color: var(--colors-bg);
`;
