import { Container, Label, InputElement } from './Input.style'

function Input({ type, placeholder, name, value, id, content, onChange}) {
  return (
    <Container type={type}>
      <Label htmlFor={id}>
        <span>{content}</span>
      </Label>
      <InputElement
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        id={id}
      />
    </Container>
  )
}

export default Input
