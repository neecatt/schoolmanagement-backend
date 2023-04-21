import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  startDate: string;

  @IsOptional()
  endDate: string;
}
