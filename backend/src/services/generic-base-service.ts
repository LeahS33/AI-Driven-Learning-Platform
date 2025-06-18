import { Model, Document } from 'mongoose';

export class BaseService<T extends Document> {
  constructor(protected model: Model<T>) { }

  async create(data: Partial<T>) {
    return this.model.create(data);
  }

  async getById(id: string) {
    const doc = await this.model.findById(id);
    if (!doc) throw new Error('Not found');
    return doc;
  }

  async getAll() {
    return await this.model.find();
  }

  async update(id: string, update: Partial<T>) {
    const doc = await this.model.findByIdAndUpdate(id, update, { new: true });
    if (!doc) throw new Error('Not found');
    return doc;
  }

  async delete(id: string) {
    const doc = await this.model.findByIdAndDelete(id);
    if (!doc) throw new Error('Not found');
    return doc;
  }
}