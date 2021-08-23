import { SIGN_IN_OK } from "./types";
import { SIGN_OUT } from "./types";
import { EDIT_USER } from "./types";

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

export const editUser = (newUser) => (
    {
        type:EDIT_USER,
        data:newUser
    }
);
