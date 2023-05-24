import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/CreateTaskDto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTask() {
    return this.taskService.getAllTask();
  }

  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    return await this.taskService.createTask(body);
  }

  @Get('/:taskId')
  async getTaskById(@Param('taskId') id) {
    return await this.taskService.getTaskById(+id);
  }

  @Delete('/:taskId')
  async deleteTask(@Param('taskId') id) {
    return await this.taskService.deleteTask(+id);
  }

  @Patch('/:taskId')
  async updateTask(@Param('taskId') id, @Body() body: CreateTaskDto) {
    return await this.taskService.updateTask(+id, body);
  }
}
