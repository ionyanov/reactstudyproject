export type BuildMode = 'development' | 'production'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
    node_modules: string
}

export interface BuildParams {
    mode: BuildMode
    port: number
}

export interface BuildOption {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    fileMask: string
}
