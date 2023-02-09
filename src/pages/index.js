import loadable from "@loadable/component";

export const Root = loadable(() => import("./Root"));
export const SignupPage = loadable(() => import("./SignupPage"));
export const SigninPage = loadable(() => import("./SigninPage"));
export const TodoPage = loadable(() => import("./TodoPage"));
