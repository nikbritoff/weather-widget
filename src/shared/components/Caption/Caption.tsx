import styled from '@emotion/styled';

type CaptionProps = {
  children: React.ReactNode,
};

const StyledCaption = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  color: var(--colors-textPrimary);
  opacity: 0.9;
  padding: 25px 20px;
  margin: 0;
`;

const Caption = ({ children }: CaptionProps):JSX.Element => {
  return (
    <StyledCaption>{children}</StyledCaption>
  );
};

export default Caption;
