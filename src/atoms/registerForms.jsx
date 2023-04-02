import { atom } from "recoil";

export const registerFormState = atom({
    key: "registerFormState",
    default: {
        name: "",
        email: "",
        phone: "",
        plan_name: "",
        plan_duration_is_monthly: true,
        online_service: false,
        larger_storage: false,
        customizable_profile: false
    }
});

