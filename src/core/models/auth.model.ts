export class Auth {
  readonly accessToken?: string;
  readonly refreshToken?: string;
  readonly user?: {
    id?: string;
    email?: string;
    username?: string;
    role?: string[];
  };

  constructor(props: Auth) {
    this.accessToken = props.accessToken;
    this.refreshToken = props.refreshToken;
    this.user = props.user;
  }
}
