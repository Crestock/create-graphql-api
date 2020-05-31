import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { SupportedUnitSystems } from "../custom-types/SupportedUnitSystems.enum";

@ObjectType()
@Entity()
export class Estimate extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  estimateID: number;

  @Column()
  @Field()
  quoteName: String;

  @Column()
  @Field(() => SupportedUnitSystems)
  unitSystem: SupportedUnitSystems;

  @Column()
  @Field()
  quantity: number;

  @Column()
  @Field()
  length: number;

  @Column()
  @Field()
  width: number;

  @Column({ nullable: true })
  @Field()
  thickness: number;

  @Column({ nullable: true })
  @Field()
  volume: number;

  @Column({ nullable: true })
  @Field()
  mass: number;

  @Column({ nullable: true })
  @Field()
  density: number;

  @Column({ nullable: true })
  @Field()
  priceUnitMass: number;

  @Column({ nullable: true })
  @Field()
  rawMaterialCost: number;
}
