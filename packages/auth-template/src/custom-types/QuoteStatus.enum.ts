import { registerEnumType } from "type-graphql";

export enum QuoteStatus {
  CREATED,
  IN_PROGRESS,
  COMPLETED,
}

registerEnumType(QuoteStatus, {
  name: "QuoteStatus",
  description:
    "Describes the progress of the associated quote through the order process",
});
