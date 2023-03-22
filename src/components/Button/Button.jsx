import { StyledBtn } from './Button.styled';

export default function Button({
  text,
  type,
  disabled,
  onClick,
  width,

}){

  return (
    <>
      <StyledBtn
        type={type}
        width={width}
        disabled={disabled}
        onClick={onClick}
      >{text}</StyledBtn>
    </>
  );
}
