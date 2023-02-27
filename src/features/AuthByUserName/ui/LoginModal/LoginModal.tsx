import {type FC, Suspense} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {LoginFormAsync} from '../LoginForm/LoginForm.async'
import {Loader} from 'shared/ui/Loader/Loader'

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
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync/>
            </Suspense>
        </Modal>
    )
}
