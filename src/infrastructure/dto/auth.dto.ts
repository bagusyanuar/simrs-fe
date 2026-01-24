export interface LoginResponseDTO {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
    username: string;
    role: string[];
  };
}

export interface RefreshTokenDTO {
  access_token: string;
}
