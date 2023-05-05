import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentDto } from './dto/create-student.dto';
import { In } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findById(id: string): Promise<Student> {
    return await this.studentRepository.findOneBy({ id });
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create({
      id: uuid(),
      ...createStudentDto,
    });
    return await this.studentRepository.save(student);
  }

  async getStudentsByIds(studentIds: string[]) {
    return this.studentRepository.find({
      where: {
        id: In(studentIds),
      },
    });
  }
}
