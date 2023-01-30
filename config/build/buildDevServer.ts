import {Configuration as DevServerConfigurations} from "webpack-dev-server";
import {BuildOption} from "./types/config";

export function BuildDevServer(option: BuildOption):DevServerConfigurations {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true,
    }
}