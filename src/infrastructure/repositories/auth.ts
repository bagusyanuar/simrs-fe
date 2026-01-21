import type { AuthRepository } from '@/core/interfaces/auth';
import { Auth } from '@/core/models/auth';
import type { LoginRequest } from '@/core/schemas/requests/auth';
import api from '@/infrastructure/sources/api/api';
import type { APIResponse, LoginResponseDTO } from '@/infrastructure/dto';

export class ApiAuthRepository implements AuthRepository {
  async login(credentials: LoginRequest, signal?: AbortSignal): Promise<Auth> {
    const { data } = await api.post<APIResponse<LoginResponseDTO>>(
      '/auth/login',
      { credentials, signal }
    );
    return new Auth({
      accessToken: data.data?.access_token,
      refreshToken: data.data?.refresh_token,
      user: {
        email: data.data?.user.email,
        id: data.data?.user.id,
        role: data.data?.user.role,
        username: data.data?.user.username,
      },
    });
  }
  logout(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  saveSession(auth: Auth): void {
    console.log(auth);
    throw new Error('Method not implemented.');
  }
  getSession(): Auth | null {
    throw new Error('Method not implemented.');
  }
  clearSession(): void {
    throw new Error('Method not implemented.');
  }
}
