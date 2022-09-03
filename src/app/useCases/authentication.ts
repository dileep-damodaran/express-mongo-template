import {
    ACCESS_TOKEN_EXPIRY_IN_MIN,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY_IN_MIN,
    REFRESH_TOKEN_SECRET,
} from "../../configs/constants";
import { generateToken } from "../services/authentication";

function login(userName: string, password: string) {
    //TODO : Check if user is valid
    const isValidUser = true,
        userId = 1,
        permissionProfile = "sys_admin";

    if (!isValidUser)
        return {
            error: "invalid user_name or password.",
        };

    const refreshToken = generateToken(
            {
                uid: userId,
                permission_profile: permissionProfile,
            },
            REFRESH_TOKEN_SECRET,
            REFRESH_TOKEN_EXPIRY_IN_MIN
        ),
        accessToken = generateToken(
            {
                uid: userId,
                permission_profile: permissionProfile,
            },
            ACCESS_TOKEN_SECRET,
            ACCESS_TOKEN_EXPIRY_IN_MIN
        );

    return { refresh_token: refreshToken, access_token: accessToken };
}

export { login };
