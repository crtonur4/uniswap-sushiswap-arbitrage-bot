/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArbitragePathWhereUniqueInput } from "./ArbitragePathWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ArbitragePathUpdateInput } from "./ArbitragePathUpdateInput";

@ArgsType()
class UpdateArbitragePathArgs {
  @ApiProperty({
    required: true,
    type: () => ArbitragePathWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ArbitragePathWhereUniqueInput)
  @Field(() => ArbitragePathWhereUniqueInput, { nullable: false })
  where!: ArbitragePathWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ArbitragePathUpdateInput,
  })
  @ValidateNested()
  @Type(() => ArbitragePathUpdateInput)
  @Field(() => ArbitragePathUpdateInput, { nullable: false })
  data!: ArbitragePathUpdateInput;
}

export { UpdateArbitragePathArgs as UpdateArbitragePathArgs };
