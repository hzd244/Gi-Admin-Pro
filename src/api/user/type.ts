export interface UserInfo {
  name: string
  avatar: string
  email: string
  phone: string
  registrationDate: string
  accountId: string
  role: string
}

export interface LoginRes {
  data: {
    token: string
    userInfo: UserInfo
  }
}

export interface LoginParams {
  username: string
  password: string
}
