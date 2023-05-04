import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router-dom'
import {Page} from '@/widgets/Page'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Text} from '@/shared/ui/Text/Text'
import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
    className?: string
}

export const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
    const {t} = useTranslation()
    const {id} = useParams<{id: string}>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [props.className])}>
            <Text title={isEdit ? t('Редактировать') : t('Создать')}/>
        </Page>
    )
}
