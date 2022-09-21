import styled from '@emotion/styled';

export const StyledInput = styled.input<{hidden?: boolean}>`
${props => props.hidden
  ? `position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  clip: rect(0 0 0 0);`
  : ''
}
& + label {
  background-color: var(--colors-textSecondary);
}

&:checked + label {
  background-color: var(--colors-accent);
}

&:checked + label::before {
  left: auto;
  right: 4px;
}
`;

export const StyledLabel = styled.label`
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
      background-color: var(--colors-caption);
      border-radius: 50%;
    }
  `;