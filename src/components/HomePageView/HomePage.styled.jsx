const { default: styled } = require('@emotion/styled');

export const Background = styled.div`
@media screen and (min-width: 320px) {
        width: 320px;
        height: 856px;
        background-image: url('../../images/backgroundMobile.svg ');
}

@media screen and (min-width: 768px) {
        width: 768px;
        height: 1024px;
        background-image: url('../../images/backgroundTablet.svg');
}

@media screen and (min-width: 1280px) {
        width: 1280px;
        height: 850px;
        background-image: url('../../images/backgroundHome.svg');
}
 `;
