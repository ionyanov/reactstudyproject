declare module '*.scss' {
    type IClassNames = Record<string, string>;

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';

declare const _IS_DEV_: boolean;
declare const _API_URL_: string;
declare const _PROJECT_: 'storybook' | 'jest' | 'frontend';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
