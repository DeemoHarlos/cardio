import * as UserApi from '@api/user'
import { axiosRequest, METHODS } from '@/middleware/api'

export const getMe = () =>
  axiosRequest<UserApi.GetMe.Response>(METHODS.GET, '/user/me')

export const getUser = (userId: string) =>
  axiosRequest<UserApi.GetUser.Response>(METHODS.GET, '/user/' + userId)

export const login = () =>
  axiosRequest<UserApi.Login.Response, UserApi.Login.Request>(METHODS.POST, '/login')

export const loginGoogle = () =>
  axiosRequest(METHODS.POST, '/login/google')

export const logout = () =>
  axiosRequest(METHODS.POST, '/logout')
