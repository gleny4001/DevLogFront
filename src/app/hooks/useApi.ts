import axios from "axios";
import {
    useQuery,
    useMutation,
    UseQueryOptions,
    UseMutationOptions,
} from "@tanstack/react-query";

import { auth } from "../firebase/firebase";
import { getIdToken } from "firebase/auth";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
    withCredentials: true,
});

api.interceptors.request.use(
    async (config) => {
        const user = auth.currentUser;
        if (user) {
            const token = await getIdToken(user);
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// GET request hook
export const useApiQuery = <T = unknown>(
    key: string[],
    url: string,
    options?: UseQueryOptions<T>
) => {
    return useQuery<T>({
        queryKey: key,
        queryFn: async () => {
            const { data } = await api.get(url);
            return data;
        },
        ...options,
    });
};

// POST / PUT / DELETE request hook
export const useApiMutation = <T = unknown, D = unknown>(
    method: "post" | "put" | "delete",
    url: string,
    options?: UseMutationOptions<T, unknown, D>
) => {
    return useMutation<T, unknown, D>({
        mutationFn: async (payload: D) => {
            const { data } = await api.request<T>({
                method,
                url,
                data: payload,
            });
            return data;
        },
        ...options,
    });
};
