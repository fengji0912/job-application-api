import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobDocument } from '../jobs/schemas/job.schema';

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  async create(jobData: Partial<Job>): Promise<Job> {
    const createdJob = new this.jobModel(jobData);
    return createdJob.save();
  }

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }

  async findById(id: string): Promise<Job | null> {
    return this.jobModel.findById(id).exec();
  }

  async update(id: string, updateData: Partial<Job>): Promise<Job | null> {
    return this.jobModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async delete(id: string): Promise<Job | null> {
    return this.jobModel.findByIdAndDelete(id).exec();
  }
}
