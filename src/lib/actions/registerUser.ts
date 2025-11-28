import axiosInstance from "@/lib/axios";

interface RegisterPayload {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  c_password: string;
}

export async function registerUser(payload: RegisterPayload) {
  try {
    const response = await axiosInstance.post("/api/auth/signup/", payload);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response?.data || { message: "Something went wrong" };
  }
}
