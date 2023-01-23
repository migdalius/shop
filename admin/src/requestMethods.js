import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE4NjIwY2YwYzc4YzRhMGNmN2ZmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Mzg2NTM3NywiZXhwIjoxNjc0MTI0NTc3fQ.mSYuAfYRtnrJEZsnS6_PWRSjR61KSuaShrgTNb2wAkk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
