import type { Auth } from '../models/auth';
import type { LoginRequest } from '../schemas/requests/auth';

export interface AuthRepository {
  login(credentials: LoginRequest, signal?: AbortSignal): Promise<Auth>;
  logout(): Promise<void>;
  saveSession(auth: Auth): void;
  getSession(): Auth | null;
  clearSession(): void;
}
