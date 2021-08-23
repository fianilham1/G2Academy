import { SIGN_IN_OK } from "./types";
import { SIGN_OUT } from "./types";

export const signIn = (user) => (
    {
        type:SIGN_IN_OK,
        data:user
    }
);

export const signOut = () => (
    {
        type:SIGN_OUT,
    }
);
