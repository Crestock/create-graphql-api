import { Arg, Mutation, Resolver } from "type-graphql";

import { EstimateInput } from "../graphql-types/EstimateInput";
import { EstimateResponse } from "../graphql-types/EstimateResponse";
import { Estimate } from "../entity/Estimate";
//create AccountResponse

@Resolver()
export class EstimateResolver {
  @Mutation(() => EstimateResponse)
  async requestEstimate(
    @Arg("input")
    { quoteName, quantity, unitSystem, length, width, thickness }: EstimateInput
  ): Promise<EstimateResponse> {
    const estimate = await Estimate.create({
      quoteName,
      quantity,
      unitSystem,
      length,
      width,
      thickness,
    }).save();

    return { estimate };
  }
}
