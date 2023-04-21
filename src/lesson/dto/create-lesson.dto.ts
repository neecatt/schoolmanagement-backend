import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

@InputType()
export class CreateLessonDto {
  @IsNotEmpty()
  @MinLength(1)
  @Field()
  name: string;

  @Field()
  @IsOptional()
  startDate: string;

  @Field()
  @IsOptional()
  endDate: string;
}
