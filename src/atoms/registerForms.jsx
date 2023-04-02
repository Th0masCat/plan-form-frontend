import { atom } from "recoil";

export const registerFormState = atom({
    key: "registerFormState",
    default: {
        name: "",
        email: "",
        phone: "",
        plan: "",
        addOns: {
            onlineService: false,
            largerStorage: false,
            customizableProfile: false
        }
    }
});

