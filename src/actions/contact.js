import { STORE_CONTACT } from "./types";

export const storeContactList = (contactList) => (
    {
        type:STORE_CONTACT,
        data:contactList
    }
);