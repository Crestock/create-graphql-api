import { InputType, Field } from "type-graphql";
import { SupportedUnitSystems } from "../custom-types/SupportedUnitSystems.enum";

@InputType()
export class EstimateInput {
  @Field()
  quoteName: String;

  @Field(() => SupportedUnitSystems)
  unitSystem: SupportedUnitSystems;

  @Field()
  quantity: number;

  @Field()
  length: number;

  @Field()
  width: number;

  @Field()
  thickness: number;
}
