import { AuthEntity } from '@/core/entities';
import type { LoginRequest } from '@/core/schemas/requests';

export interface AuthRepository {
  login(credential: LoginRequest, signal?: AbortSignal): Promise<AuthEntity>;
  saveSession(authData: AuthEntity): void;
}
