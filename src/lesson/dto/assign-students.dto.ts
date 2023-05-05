import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsDto {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  lessonId: string;

  @IsNotEmpty()
  @IsUUID('4', { each: true })
  @Field(() => [ID])
  studentIds: string[];
}
