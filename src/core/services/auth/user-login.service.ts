import type { AuthRepository } from '@/core/interfaces';
import type { Auth } from '@/core/models';
import type { LoginRequest } from '@/core/schemas/requests';

export class UserLoginService {
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
