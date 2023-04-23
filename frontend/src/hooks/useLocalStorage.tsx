import { useState } from "react";
import CryptoJS from "crypto-js";

export const useLocalStorage = (keyName: string, defaultValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);

            if (value) {
                return decryptData(value);
            } else {
                window.localStorage.setItem(keyName, encryptData(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });



    const setValue = (newValue: any) => {
        try {
            window.localStorage.setItem(keyName, encryptData(newValue));
        } catch (err) {
        }
        setStoredValue(newValue);
    };

    return [storedValue, setValue];
};

export function GetLocalStorageData(keyName: string) {
    try {
        const value = window.localStorage.getItem(keyName);
        if (value) {
            return decryptData(value);
        } else {
            return null;
        }
    } catch (err) {
        return null;
    }
}
export const encryptData = (value: any) => {
    return CryptoJS.AES.encrypt(
        JSON.stringify(value),
        process.env.REACT_APP_SECRECT_DATA as string
    ).toString()
};

export const decryptData = (value: any) => {
    const bytes = CryptoJS.AES.decrypt(value, process.env.REACT_APP_SECRECT_DATA as string);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};


