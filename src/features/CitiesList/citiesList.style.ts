import styled from '@emotion/styled';

export const StyledSelect = styled.select`
  margin-top: 20px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.textPrimary};
  opacity: 0.7;
  padding: 10px 30px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.shadow};
  box-shadow: 0px 8px 16px ${props => props.theme.shadow};
  background-color: ${props => props.theme.bg};

  & option {
    font-size: 15px;
    line-height: 20px;
  }
  `;
  
  export const StyledOption = styled.option`
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.bg};
`;
