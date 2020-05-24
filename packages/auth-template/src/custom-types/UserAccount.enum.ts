import { registerEnumType } from "type-graphql";

export enum accountType {
  Supplier,
  Buyer,
}

registerEnumType(accountType, {
  name: "accountType",
  description: "account types available at signup",
});
