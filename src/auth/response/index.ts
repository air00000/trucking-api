export class AuthUserResponse {
  constructor(
    readonly first_name: string,
    readonly username: string,
    readonly password: string,
    readonly email: string,
    readonly phone: string,
  ) {}
}
