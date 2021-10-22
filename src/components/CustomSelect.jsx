import styled from 'styled-components/macro';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    menu: (provided) => ({
      ...provided,
      padding: '8px 0',
      backgroundColor: 'var(--elements-bg-colors)',
      borderRadius: 'var(--radius)',
      boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      padding: '0 18px 0 0',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--colors-text)',
    }),
    dropdownIndicator: () => ({
      color: 'var(--colors-text)',
      display: 'flex',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 0 0 24px',
    }),
    placeholder: (provided) => ({
      ...provided,
      marginLeft: '0',
      marginRight: '0',
      fontSize: '14px',
      color: 'var(--colors-text)',
    }),
    control: (provided) => ({
      ...provided,
      width: '200px',
      cursor: 'pointer',
      height: 58,
      backgroundColor: 'var(--elements-bg-colors)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius)',
      border: 'none',
      fontSize: 'var(--fs-sm)',
      lineHeight: '20px',
      boxShadow: ' 0px 2px 9px rgba(0, 0, 0, 0.0532439)',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      padding: '8px 24px',
      color: 'var(--colors-text)',
      fontSize: 'var(--fs-sm)',
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--elements-bg-colors)',
    }),
  },
})``;
