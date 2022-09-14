import styled from "@emotion/styled";
import ImageEyeClose from '../../shared/assets/images/icons/eye-close.svg';
import ImageEyeOpen from '../../shared/assets/images/icons/eye-open.svg';

export const StyledContainer = styled.div`
  height: 24px;
  display: flex;
`;

export const StyledButton = styled.button`
width: 24px;
height: 24px;
border-radius: 50%;
border-style: none;
margin-right: 5px;
background-color: ${props => props.theme.isDark ? props.theme.accent : props.theme.textSecondary};
display: flex;
justify-content: center;
align-items: center;
background-position: center;
background-repeat: no-repeat;
cursor: pointer;

background-image: url(${props => props.theme.isDark ? ImageEyeClose : ImageEyeOpen});
background-size: 16px ${props => props.theme.isDark ? '8px' : '12px'};
`;