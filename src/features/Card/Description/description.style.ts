import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  min-height: 93px;
  background-color: var(--colors-bg);
  padding: 16px 20px 17px 16px;
`;

export const StyledDate = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: var(--colors-textPrimary);
  opacity: 0.7;
  margin: 0;
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
`;

export const StyledDescriptionText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: var(--colors-textSecondary);
  opacity: 0.4;
  margin: 0;
  margin-top: 6px;

  & span:first-of-type {
    text-transform: capitalize;
  }
`;

export const StyledIconContainer = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
`;

export const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;