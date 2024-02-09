import axios, { AxiosInstance } from "axios";
import { endpoint } from "./utils";

const instance: AxiosInstance = axios.create({
    baseURL: endpoint,
});

export default instance;

