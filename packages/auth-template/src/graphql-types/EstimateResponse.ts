import { ObjectType, Field } from "type-graphql";
import { FieldError } from "./FieldError";
import { Estimate } from "../entity/Estimate";

@ObjectType()
export class EstimateResponse {
  @Field(() => Estimate, { nullable: true })
  estimate?: Estimate;

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}
