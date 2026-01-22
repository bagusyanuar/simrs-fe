import type { AuthRepository } from '@/core/interfaces';
import { Auth } from '@/core/models';
import type { LoginRequest } from '@/core/schemas/requests';
import api from '@/infrastructure/sources/api/api';
import type { APIResponse, LoginResponseDTO } from '@/infrastructure/dto';
import { handleApiError } from '@/infrastructure/utils/error-handler';
import { AuthMapper } from '@/infrastructure/mappers';

export class ApiAuthRepository implements AuthRepository {
  async login(credentials: LoginRequest, signal?: AbortSignal): Promise<Auth> {
    try {
      const { data } = await api.post<APIResponse<LoginResponseDTO>>(
        '/auth/login',
        credentials,
        { signal }
      );
      const dto = data.data;
      if (!dto) {
        throw new Error("Data login tidak ditemukan dalam response API");
      }
      return AuthMapper.toEntity(dto);
    } catch (error) {
      handleApiError(error);
    }
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
