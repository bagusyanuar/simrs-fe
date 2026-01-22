import { Auth } from '@/core/models';
import type { LoginResponseDTO } from '@/infrastructure/dto';

export class AuthMapper {
  static toEntity(dto: LoginResponseDTO): Auth {
    return new Auth({
      accessToken: dto.access_token,
      refreshToken: dto.access_token,
      user: dto.user,
    });
  }
}
