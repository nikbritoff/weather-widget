import styled from '@emotion/styled/macro';

export const StyledInput = styled.input``;

export const StyledLabel = styled.label`
  display: flex;
  padding: 0 20px;
  cursor: pointer;
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => props.theme.textPrimary};
  opacity: 0.7;

  ${StyledInput} {
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    clip: rect(0 0 0 0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
