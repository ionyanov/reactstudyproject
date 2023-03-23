export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

export enum ArticleType {
    IT = 'IT',
    SCINCE = 'SCINCE',
    ECONOMIC = 'ECONOMIC'
}

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    paragraphs: string[]
    title?: string
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}

export type ArticleBloc = ArticleBlockText | ArticleBlockCode | ArticleBlockImage

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBloc[]
}
