import styled from '@emotion/styled';

type ToggleProps = {
  name: string;
  isActive: boolean;
  changeAction: () => void;
};

const StyledInput = styled.input`
  &+ label {
    background-color: ${props => props.theme.textSecondary};
  }

  &:checked + label {
    background-color: ${props => props.theme.accent};
  }

  &:checked + label::before {
    left: auto;
    right: 4px;
  }
`;

const StyledLabel = styled.label`
    display: block;
    position: relative;
    width: 44px;
    height: 24px;
    border-radius: 50px;
    cursor: pointer;

    &::before {
      position: absolute;
      top: 4px;
      left: 4px;
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      background-color: ${props => props.theme.caption};
      border-radius: 50%;
    }
  `;

const Toggle = ({ name, isActive, changeAction }: ToggleProps): JSX.Element => {
  return (
    <>
      <StyledInput
        className='visuallyHidden'
        type='checkbox'
        name={name}
        id={name}
        checked={isActive}
        onChange={changeAction}
      ></StyledInput>
      <StyledLabel htmlFor={name}></StyledLabel>
    </>
  );
};

export default Toggle;