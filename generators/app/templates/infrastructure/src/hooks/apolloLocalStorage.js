import { gql } from "@apollo/client";
import { useCallback } from "react";
import { emptyObject } from "utils/constants";
import { defaults } from "apollo/defaultCacheData";
import { useQueryWithErrorHandling } from "./errorHandling";

const getLocalStorageQuery = (key) => gql(`{${key} @client}`);

const safeRead = (data, key) => !data || !data[key] || /^\s*$/.test(data[key]) ? defaults[key] : JSON.parse(data[key]);

const useApolloLocalStorage = (key) => {
    const query = getLocalStorageQuery(key)
    const { data, client } = useQueryWithErrorHandling(query)
    const value = safeRead(data, key)

    const handleSetData = useCallback(newValue => {
        const objValue = typeof newValue === "function" ? newValue(value) : newValue;
        client.writeQuery({
            query,
            data: { [key]: JSON.stringify(objValue || emptyObject) }
        })
    }, [data, client, key]); // eslint-disable-line react-hooks/exhaustive-deps

    return [value, handleSetData];
};

export { useApolloLocalStorage };