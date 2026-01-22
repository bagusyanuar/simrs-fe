import type { Auth } from '@/core/models';
import type { LoginRequest } from '@/core/schemas/requests';

export interface AuthRepository {
  login(credentials: LoginRequest, signal?: AbortSignal): Promise<Auth>;
  logout(): Promise<void>;
  saveSession(auth: Auth): void;
  getSession(): Auth | null;
  clearSession(): void;
}
