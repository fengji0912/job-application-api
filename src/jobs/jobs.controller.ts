// src/job/job.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('api/jobs')  // 设置路由路径为 /api/jobs
export class JobController {
  @Get()
  getJobs() {
    return [
      { id: '1', title: 'Software Engineer', company: 'Company A', location: 'New York' },
      { id: '2', title: 'Data Scientist', company: 'Company B', location: 'San Francisco' },
      { id: '3', title: 'Product Manager', company: 'Company C', location: 'Los Angeles' }
    ];
  }
}
