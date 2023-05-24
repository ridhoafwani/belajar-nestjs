import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTask() {
    const result = await this.prisma.tasks.findMany();
    return {
      data: result,
    };
  }

  async createTask(payload: CreateTaskDto) {
    const result = await this.prisma.tasks.create({
      data: payload,
    });

    return {
      message: 'task created successfully',
      data: result,
    };
  }

  async getTaskById(id: number) {
    const result = await this.prisma.tasks.findFirst({
      where: {
        id: +id,
      },
    });

    return {
      data: result,
    };
  }

  async deleteTask(id: number) {
    await this.prisma.tasks.delete({
      where: {
        id: id,
      },
    });

    return {
      message: 'task deleted successfully',
    };
  }

  async updateTask(id: number, payload: CreateTaskDto) {
    const result = await this.prisma.tasks.update({
      where: {
        id: id,
      },

      data: payload,
    });

    return {
      message: 'task updated successfully',
      data: result,
    };
  }
}
