import {type FC} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {LoginForm} from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    return (
        <Modal isOpen={props.isOpen}
            onClose={props.onClose}
            lazy
        >
            <LoginForm/>
        </Modal>
    )
}
