import { StylesConfig } from 'react-select/dist/declarations/src/styles';

export const styles: StylesConfig={
  control: (provided) => ({
    ...provided,
    width: '243px',
    borderRadius: '16px',
    backgroundColor: 'var(--colors-bg)',
    boxShadow: '0px 8px 16px var(--colors-shadow)',
    marginTop: '20px',          
    opacity: '0.7',
    padding: '5px 10px',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '20px',
    color: 'var(--colors-textPrimary)',
  }),
  input: (provided) => ({
    ...provided,
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '20px',
    color: 'var(--colors-textPrimary)',
  }),
  menuList: (provided) => ({
    ...provided,
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '20px',
    color: 'var(--colors-caption)',
    backgroundColor: 'var(--colors-textSecondary)',
  }),
  option: (styles, {isSelected}) => ({
    backgroundColor: isSelected 
      ? 'var(--colors-accent)'
      : 'var(--colors-textPrimary)',
    cursor: 'pointer',
    ':active': {
      backgroundColor: 'var(--colors-textPrimary)',
    }
  })
};
