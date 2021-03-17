import * as S from './select.style'

interface OptionProps {
  value: string
  label: string
}

export interface SelectProps {
  name: string
  id: string
  selectRef?: any
  options: OptionProps[]
}

const Select = ({ name, selectRef, options, ...rest }: SelectProps) => (
  <S.Select name={name} ref={selectRef} {...rest}>
    {options.map(({ value, label }, i) => (
      <option key={i} value={value}>
        {label}
      </option>
    ))}
  </S.Select>
)

export default Select
