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
                  textColor="#fff"
                  type="button"
                  width= "125px"
                  backgroundColor="#FF751D"
                  border="none"
                  onClick={handleConfirm}
                />
                <Button
                  text="No"
                  textColor="#52555F"
                  type="button"
                  width= "125px"
                  backgroundColor="#fff"
                  border="2px solid #F6F7FC"
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
