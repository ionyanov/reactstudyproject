import {type FC, Suspense} from 'react'
import {Loader} from 'shared/ui/Loader/Loader'
import {Modal} from 'shared/ui/Modal/Modal'
import {LoginFormAsync} from '../LoginForm/LoginForm.async'

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
                <LoginFormAsync onSuccess={props.onClose}/>
            </Suspense>
        </Modal>
    )
}
