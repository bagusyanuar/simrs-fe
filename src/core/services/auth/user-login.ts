import type { AuthRepository } from '@/core/interfaces/auth';
import type { Auth } from '@/core/models/auth';
import type { LoginRequest } from '@/core/schemas/requests/auth';

export class UserLogin {
  private readonly repo: AuthRepository;
  constructor(repo: AuthRepository) {
    this.repo = repo;
  }

  async execute(credentials: LoginRequest): Promise<Auth> {
    const authData = await this.repo.login(credentials);
    this.repo.saveSession(authData);
    return authData;
  }
}
