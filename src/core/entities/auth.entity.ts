export class AuthEntity {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly user: {
    id: string;
    email: string;
    username: string;
    role: string[];
  };

  constructor(props: AuthEntity) {
    this.accessToken = props.accessToken;
    this.refreshToken = props.accessToken;
    this.user = props.user;
  }
}
