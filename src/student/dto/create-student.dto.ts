import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateStudentDto {
  @IsNotEmpty()
  @MinLength(4)
  @Field()
  firstName: string;

  @IsNotEmpty()
  @MinLength(4)
  @Field()
  lastName: string;
}
