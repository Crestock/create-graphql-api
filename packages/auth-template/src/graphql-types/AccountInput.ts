import { InputType, Field } from "type-graphql";
import { AuthInput } from "./AuthInput";
import { accountType } from "../custom-types/UserAccount.enum";

@InputType()
export class AccountInput extends AuthInput {
  @Field()
  businessName: string;
  @Field(() => accountType)
  role: accountType;
}
