export const AppConsts = {
  appApiUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  appClientUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
  appIsProduction: process.env.NODE_ENV === 'production',
  appIsDevelopment: process.env.NODE_ENV !== 'production',
  appShowLogger:
    process.env.NODE_ENV !== 'production'
      ? true
      : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true',
  appEnviroment: process.env.NODE_ENV,
}

export const AuthConst = {
  accessTokenName: '_vh.at',
  refreshTokenName: '_vh.rt',
  tokenSecret: 'YOUR_SECRET',
  encrptedAuthTokenName: 'enc_auth_token',
}
