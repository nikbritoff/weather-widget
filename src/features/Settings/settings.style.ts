import styled from '@emotion/styled';

export const StyledLabel = styled.label`
padding: 0 20px;
cursor: pointer;
user-select: none;
font-weight: 700;
font-size: 18px;
line-height: 20px;
color: ${props => props.theme.textPrimary};
opacity: 0.7;
`;

export const Container = styled.div`
  display: flex;
`;