import { Link } from "react-router-dom"
import {ReactComponent as Arrow} from '../../images/arrowGoBack.svg'
import { NavMobileCont } from "components/ExpensesPage/ExpensesPage.styled"

export const NavMobile = () => {
    return (
        <NavMobileCont>
            <Link to=''><Arrow/>Create transaction</Link>
        </NavMobileCont>
    )
}