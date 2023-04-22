import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsUUID, MinLength } from 'class-validator';

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

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
