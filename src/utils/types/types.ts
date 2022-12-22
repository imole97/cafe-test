import type { NextPage } from "next";

import React, {
    HTMLAttributes,
    ReactElement,
    ReactNode,
    SVGAttributes,
    
} from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
    color?: string;
}

export type WithChildren<T = {}> = T & { children: React.ReactNode };

export interface TBlog  {
    id: string;
    title: string;
    image: string;
    content: string
}
export interface Paths {
    id: string | number;
    text: string;
    path: string;
    dynamicPath: string;
}

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

export interface MenuProps {
    defaultPaths: Paths[],
    isLoggedIn: boolean
}

export interface WithClassname
    extends Pick<HTMLAttributes<HTMLElement>, "className"> { }

export type ClassName = string | undefined;