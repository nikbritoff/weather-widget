import { StyledInput, StyledLabel } from './toggle.style';

type ToggleProps = {
  name: string;
  isActive: boolean;
  changeAction: () => void;
};

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
      />
      <StyledLabel htmlFor={name}></StyledLabel>
    </>
  );
};

export default Toggle;