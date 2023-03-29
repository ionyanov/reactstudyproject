export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
    node_modules: string
    locales: string
    buildLocales: string
}

export interface BuildParams {
    mode: BuildMode
    port: number
    apiURL: string

}

export interface BuildOption {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    fileMask: string
    apiURL: string
    project: 'storybook' | 'jest' | 'frontend'
}
