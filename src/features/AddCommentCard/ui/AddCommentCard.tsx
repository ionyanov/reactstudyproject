import {type FC, useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AddCommentCard.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input/Input'
import {useSelector} from 'react-redux'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {addArticleCommentAction, addArticleCommentReducer} from '../model/slice/addCommentCardSlice'
import {getAddCommentCardText} from '../model/selectors/addCommentCardSelector'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface AddArticleCommentProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducerList = {
    addArticleComment: addArticleCommentReducer
}

const AddCommentCard: FC<AddArticleCommentProps> = (props) => {
    const {t} = useTranslation()
    const text = useSelector(getAddCommentCardText)
    // const error = useSelector(getAddCommentCardError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addArticleCommentAction.setText(value))
    }, [dispatch])

    const onSendComment = useCallback(() => {
        props.onSendComment(text || '')
        onCommentTextChange('')
    }, [props, onCommentTextChange, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentCard, {}, [props.className])}>
                <Input
                    placeholdersize={'fit-content'}
                    className={cls.input}
                    value={text}
                    placeholder={t('Введеите текст комментария') || ''}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendComment}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default AddCommentCard
