import type { AuthRepository } from '@/core/repositories';
import type { LoginRequest } from '@/core/schemas/requests';
import { AuthEntity } from '@/core/entities';

export class UserLoginUseCase {
  private readonly repo: AuthRepository;
  constructor(repo: AuthRepository) {
    this.repo = repo;
  }

  async execute(credentials: LoginRequest): Promise<AuthEntity> {
    const authData = await this.repo.login(credentials);
    this.repo.saveSession(authData);
    return authData;
  }
}
