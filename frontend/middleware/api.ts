/* eslint-disable @typescript-eslint/no-explicit-any */

import { Context } from '@nuxt/types'
import { AxiosRequestConfig, AxiosStatic } from 'axios'

import { ResponseData } from '@api/index'

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface NuxtAxiosInstance extends AxiosStatic {
  $get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
  $post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  $put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  $delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
}

/* eslint-disable indent */
export const axiosRequest = <Data = undefined, Payload = undefined>(
  method: METHODS,
  path: string,
  config?: AxiosRequestConfig,
) => (axios: NuxtAxiosInstance, payload?: Payload) => {
  const unifiedGet = <T = any>(
    url: string,
    _data?: any,
    config?: AxiosRequestConfig,
  ) => axios.$get<T>(url, config)
  const unifiedDelete = <T = any>(
    url: string,
    _data?: any,
    config?: AxiosRequestConfig,
  ) => axios.$delete<T>(url, config)
  const axiosMethod =
      method === METHODS.GET ? unifiedGet
    : method === METHODS.POST ? axios.$post
    : method === METHODS.PUT ? axios.$put
    : method === METHODS.DELETE ? unifiedDelete
    : null
  if (axiosMethod === null) throw new Error('No Such Method!')
  const axiosConfig = { ...config }

  return new Promise((resolve: (data: Data) => void, reject: (err: string) => void) => {
    axiosMethod<ResponseData<Data>>(path, payload, axiosConfig)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        const error = err.response?.data.error as string
        console.error(error)
        reject(error)
      })
    })
}
/* eslint-enable indent */

export const toQueryString = (object: Record<string, string | number | boolean>) => {
  const str = '?' + Object.keys(object).reduce((a, k) => {
    a.push(k + '=' + encodeURIComponent(object[k] as string | number | boolean))
    return a
  }, [] as string[]).join('&')
  return str
}

export default (ctx: Context) => {
  ctx.$api = axiosRoute =>
    payload => axiosRoute(ctx.$axios, payload)
}
