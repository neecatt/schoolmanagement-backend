import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  async create(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      ...createLessonDto,
    });
    return await this.lessonRepository.save(lesson);
  }

  async findOneById(id: string): Promise<Lesson> {
    return await this.lessonRepository.findOneBy({ id });
  }

  async findAll(): Promise<Lesson[]> {
    return await this.lessonRepository.find();
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.findOneById(lessonId);
    lesson.students = [...lesson.students, ...studentIds];
    return await this.lessonRepository.save(lesson);
  }
}
