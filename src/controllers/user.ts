import { User } from "../components/user"
import { S3Client } from "../plugins/aws/s3"
import { Config } from "../config"
import { UserModel } from "../models/user"
/**
 * config can be just added by adding params in app.conf file hence
 * it does not have any interface and that's why any is used
 */
let config: any
config = Config.loadConfigurations()

class UserController {
  public create = async (userObject: User.createUser[]) => {
    /**
     * Add data in Database, mongo
     */
    const s3UserBucket: User.s3User[] = userObject.map(user => {
      return {
        username: user.username,
        isActive: user.isActive
      }
    })
    const saveUsers: any = userObject.map(user => {
      return new UserModel(user)
    })

    const savedUsers = await UserModel.insertMany(saveUsers)

    /**
     * Save data to s3, un comment the following code when s3 is enabled
     */
    // const s3Client = new S3Client(
    //   config.s3.ACCESS_KEY_ID,
    //   config.s3.SECRET_ACCESS_KEY
    // )
    // const s3PutRequest = s3Client.createPutPublicJsonRequest(
    //   "mybucket/bucketpath",
    //   "filename.json",
    //   JSON.stringify(s3UserBucket)
    // )
    // const s3Response = await s3Client.put(s3PutRequest)

    /**
     * Return
     */
    return {
      message: savedUsers
    }
  }

  public login = async (loginObject: User.loginUser) => {
    /**
     * Login through user name password if only isActive true
     */
    const user = await UserModel.findOne({
      username: loginObject.username,
      password: loginObject.password,
      isActive: true
    })
    if (user) {
      return {
        message: user
      }
    } else {
      return {
        message: "The username/password is invalid or account is not active"
      }
    }
  }
}

export { UserController }
