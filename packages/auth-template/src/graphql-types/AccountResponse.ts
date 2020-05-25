import { ObjectType, Field } from "type-graphql";
import { UserResponse } from "./UserResponse";
import { Account } from "../entity/Account";

@ObjectType()
export class AccountResponse extends UserResponse {
  @Field(() => Account, { nullable: true })
  account?: Account;
}
