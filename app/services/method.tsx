import axios from "./axios-utils";

export const getPosts = () => axios.get("/posts");

export const getUsers = () => axios.get("/users");
