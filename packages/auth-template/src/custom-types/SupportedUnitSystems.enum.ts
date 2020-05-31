import { registerEnumType } from "type-graphql";

export enum SupportedUnitSystems {
  mm,
  cm,
  m,
}
registerEnumType(SupportedUnitSystems, {
  name: "SupportedUnitSystems",
  description:
    "Allows selection of known supported unit systems. Useful ensuring correct conversions and logic is executed when generating Estimates and Quotes. This will later on, allow seemless cross-compatibility between users with differing unit systems",
});
