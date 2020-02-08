export namespace User {
  export interface createUser {
    username: string
    password: string
    firstName: string
    lastName: string
    mobile: number
    isActive: boolean
  }

  export interface loginUser {
    username: string
    password: string
  }

  export interface s3User {
    username: string
    isActive: boolean
  }
}
