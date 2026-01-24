import { AuthEntity } from '@/core/entities';
import type { LoginResponseDTO } from '@/infrastructure/dto';

export class AuthMapper {
  static toEntity(dto: LoginResponseDTO): AuthEntity {
    return new AuthEntity({
      accessToken: dto.access_token,
      refreshToken: dto.access_token,
      user: dto.user,
    });
  }
}
