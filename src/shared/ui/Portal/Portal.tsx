import {FC, ReactNode} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    return createPortal(props.children, props.element || document.body);
};