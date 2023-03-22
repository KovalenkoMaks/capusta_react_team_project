import { createPortal } from 'react-dom';
import {
  ModalContainer,
  ModalTitle,
  ButtonContainer,
  CloseButton,
  Overlay,
} from './ConfirmModal.styled';
import {ReactComponent as CloseIcon} from 'images/closeIcon.svg'
import Button from 'components/Button/Button';

const modalElement = document.querySelector("#modal");
export default function ConfirmModal({
  onClick,
  text,
  handleConfirm,
  handleCancel,
}){
return createPortal(
  <Overlay>
        
          <ModalContainer>
           
              <ModalTitle>{text}</ModalTitle>
              <ButtonContainer>
                <Button
                  text="Yes"
                  type="button"
                  width= "125px"
                  onClick={handleConfirm}
                />
                <Button
                  text="No"
                  type="button"
                  width= "125px"
                  onClick={handleCancel}
                />
              </ButtonContainer>
          
            <CloseButton type="button" onClick={onClick}>
              <CloseIcon/>
            </CloseButton>
          </ModalContainer>
        
      </Overlay>
      ,modalElement);
    }
