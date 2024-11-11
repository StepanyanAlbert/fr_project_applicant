import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GetByIdArgs {
  @Field(() => Int)
  id: number;
}
