import {
  Post,
  Route,
  Body,
  SuccessResponse,
  Controller as Router,
  Response
} from "tsoa"
import { User } from "../components/user"
import { UserController } from "../controllers/user"
import { ErrorResponse } from "../components/response"

@Route("users")
export class UsersRouter extends Router {
  /**
   * @param id Unique user id which is an uuid
   * @minLength id 24
   * @maxLength id 30
   */

  @SuccessResponse("200", "Created")
  @Response<ErrorResponse>(400, "Attribute Missing from user body")
  @Response<ErrorResponse>(404, "Not Found")
  @Response<ErrorResponse>("Unexpected error")
  @Post("/create")
  public async createNewUser(@Body() userObject: User.createUser[]) {
    return new UserController().create(userObject)
  }

  /**
   * @param username
   * @param password
   */
  @SuccessResponse("200", "Created")
  @Response<ErrorResponse>(400, "Attribute Missing from user body")
  @Response<ErrorResponse>(404, "Not Found")
  @Response<ErrorResponse>("Unexpected error")
  @Post("/login")
  public async loginUser(@Body() loginObject: User.loginUser) {
    return new UserController().login(loginObject)
  }
}
