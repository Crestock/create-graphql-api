import { Arg, Mutation, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";
import { AccountInput } from "../graphql-types/AccountInput";
import { AccountResponse } from "../graphql-types/AccountResponse";
import { AuthResolver } from "./AuthResolver";
import { Account } from "../entity/Account";
//create AccountResponse

@Resolver()
export class AccountResolver extends AuthResolver {
  @Mutation(() => AccountResponse)
  async registerAccount(
    @Arg("input")
    { businessName, role, email, password }: AccountInput
  ): Promise<AccountResponse> {
    const existingAccount = await Account.findOne({ email });
    //const existingBusinessName = await Account.findOne({ businessName });
    const hashedPassword = await bcrypt.hash(password, 12);

    if (existingAccount) {
      return {
        errors: [
          {
            path: "email",
            message: "already in use",
          },
        ],
      };
    }

    const account = await Account.create({
      email,
      password: hashedPassword,
      businessName,
      role,
    }).save();

    return { account };
  }
}
