import { StyledBtn } from './Button.styled';

export default function Button({
  text,
  type,
  disabled,
  onClick,
  width,
  backgroundColor,
  border,
  textColor,
  filter,
  id,
}) {
  return (
    <>
      <StyledBtn
        type={type}
        width={width}
        disabled={disabled}
        onClick={onClick}
        backgroundColor={backgroundColor}
        border={border}
        textColor={textColor}
        filter={filter}
        id={id}
      >
        {text}
      </StyledBtn>
    </>
  );
}
