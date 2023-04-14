import apiClient from "./api-client"

export interface User {
    name: string;
    id: number;
    email: string
}

class UserService {
    async getAllUsers() {
        const controller = new AbortController()
        const request = await apiClient.get<User[]>('/users', { signal: controller.signal })
        return { request, cancel: () => controller.abort() }
    }
}
export default new UserService