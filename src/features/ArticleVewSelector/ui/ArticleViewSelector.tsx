import {type FC, useCallback} from 'react'
import {ArticleView} from 'entities/Article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import GridIcon from 'shared/assets/icons/tiled-24-24.svg'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Icon} from 'shared/ui/Icon/Icon'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
    className?: string
    selectedView: ArticleView
    onViewSelect: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridIcon
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon
    }
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
    const onClick = useCallback((view: ArticleView) => {
        return () => {
            props.onViewSelect(view)
        }
    }, [props])
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [props.className])}>
            {viewTypes.map(item => (
                <Button theme={ButtonTheme.CLEAR}
                    onClick={onClick(item.view)}
                    key={item.view}
                >
                    <Icon Svg={item.icon}
                        className={classNames('', {[cls.selected]: props.selectedView === item.view}, [])}
                    />
                </Button>
            ))}
        </div>
    )
}
