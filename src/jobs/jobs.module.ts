// src/job/job.module.ts
import { Module } from '@nestjs/common';
import { JobController } from './jobs.controller';

@Module({
  controllers: [JobController],  // 将 JobController 添加到模块中
})
export class JobModule {}
