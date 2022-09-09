import styled from '@emotion/styled';

type DefaultTextProps = {
  children: React.ReactNode,
};

const StyledText = styled.p`
text-decoration: none;
text-align: center;
display: block;
padding: 10px 20px;
cursor: pointer;

font-weight: 700;
font-size: 18px;
line-height: 20px;
color: ${props => props.theme.textPrimary};
opacity: 0.7;
`;

const DefaultText = ({ children }: DefaultTextProps): JSX.Element => {
  return (
    <StyledText>{children}</StyledText>
  );
};

export default DefaultText;
