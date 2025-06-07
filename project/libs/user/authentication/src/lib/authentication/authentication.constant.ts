export const AuthenticationUserStatus = {
    UserExist: 'User with this email exists',
    IncorrectPassword: 'Incorrect user password',
    UserNotFound: 'User not found',
    UserLogged: 'User successfully logged',
    LoginError: 'Password or login is wrong',
    UserCreated: 'User successfully created',
    PasswordChanged: 'Password successfully changed',
} as const;
