import { Entity, Column } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";
import { accountType } from "../custom-types/UserAccount.enum";
@ObjectType()
@Entity()
export class Account extends User {
  @Field()
  businessName: string;

  @Field(() => accountType)
  @Column()
  role: accountType;
}
