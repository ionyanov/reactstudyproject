import {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateShema} from "../config/StateShema";

interface StoreProviderProps {
    children: ReactNode,
    initialState?: StateShema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {

    const store = createReduxStore(props.initialState)

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};