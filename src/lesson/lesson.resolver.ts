import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { AssignStudentsDto } from './dto/assign-students.dto';
import { Lesson } from './lesson.entity';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}
  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.findOneById(id);
  }

  @Query(() => [LessonType])
  lessons() {
    return this.lessonService.findAll();
  }

  @Mutation(() => LessonType)
  createLesson(@Args('createLessonDto') createLessonDto: CreateLessonDto) {
    return this.lessonService.create(createLessonDto);
  }

  @Mutation(() => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsDto') assignStudentsDto: AssignStudentsDto,
  ) {
    const { lessonId, studentIds } = assignStudentsDto;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {}
}
