import { Client, Account, ID } from "appwrite";

const endpoint = import.meta.env.VITE_API_ENDPOINT;
const PROJECT_ID = import.meta.env.VITE_API_PROJECT_ID


const client = new Client()
    .setEndpoint(endpoint)                // Your API Endpoint
    .setProject(PROJECT_ID);                 // Your project ID

export const account = new Account(client);

export default client