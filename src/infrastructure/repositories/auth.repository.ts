import type { AuthRepository } from '@/core/repositories';
import type { LoginRequest } from '@/core/schemas/requests';
import { AuthEntity } from '@/core/entities';
import api from '@/infrastructure/sources/api/api';
import type { APIResponse, LoginResponseDTO } from '@/infrastructure/dto';
import { AuthMapper } from '@/infrastructure/mappers';
import { handleApiError } from '@/infrastructure/utils/errors';
import { BrowserStorage, STORAGE_KEYS } from '@/infrastructure/sources/storage';

export class ApiAuthRepository implements AuthRepository {
  async login(
    credentials: LoginRequest,
    signal?: AbortSignal
  ): Promise<AuthEntity> {
    try {
      const response = await api.post<APIResponse<LoginResponseDTO>>(
        '/auth/login',
        credentials,
        { signal }
      );
      const dto = response.data.data as LoginResponseDTO | undefined;
      if (!dto) throw new Error('login response is undefined');
      return AuthMapper.toEntity(dto);
    } catch (error) {
      handleApiError(error);
    }
  }
  saveSession(authData: AuthEntity): void {
    BrowserStorage.set<string>(STORAGE_KEYS.ACCESS_TOKEN, authData.accessToken);
    BrowserStorage.set<string>(
      STORAGE_KEYS.REFRESH_TOKEN,
      authData.refreshToken
    );
  }
}
