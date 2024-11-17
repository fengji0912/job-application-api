// src/app.module.ts
import { Module } from '@nestjs/common';
import { JobModule } from './jobs/jobs.module';  // 导入 JobModule

@Module({
  imports: [JobModule],  // 在主模块中注册 JobModule
})
export class AppModule {}
