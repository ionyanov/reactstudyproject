import {type FC, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'

interface CodeProps {
    className?: string
    text: string
}

export const Code: FC<CodeProps> = (props) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(props.text)
    }, [props])

    return (
        <pre className={classNames(cls.Code, {}, [props.className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={cls.copyImg}/>
            </Button>
            <code>
                {props.text}
            </code>
        </pre>
    )
}
