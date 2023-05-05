import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';

import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}
  @Mutation(() => StudentType)
  createStudent(@Args('createStudentDto') createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Query(() => [StudentType])
  students() {
    return this.studentService.findAll();
  }

  @Query(() => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.findById(id);
  }
}
