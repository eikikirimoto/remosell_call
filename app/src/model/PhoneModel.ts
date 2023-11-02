import { LocationQuery } from 'vue-router'

export interface UAOptions {
  host: string,
  key: string,
  username: string,
  password: string,
  register: boolean,
  udp: boolean,
  ualog: boolean,
  siplog: boolean
}
export const UAOptionsOf = (query: LocationQuery): UAOptions => {
  return {
    host: query['host'] || '',
    key: query['key'] || '',
    username: query['username'] || '',
    password: query['password'] || '',
    register: query['register'] === '1',
    udp: query['udp'] === '1',
    ualog: query['ualog'] === '1',
    siplog: query['siplog'] === '1',
  } as UAOptions
}
export const isAllUAOptionsSet = (query: LocationQuery): boolean => {
  return true && (
       query['host'] !== undefined
    && query['key'] !== undefined
    && query['username'] !== undefined
    && query['password'] !== undefined
    && query['register'] !== undefined
    && query['udp'] !== undefined
    && query['ualog'] !== undefined
    && query['siplog'] !== undefined
  )
}
