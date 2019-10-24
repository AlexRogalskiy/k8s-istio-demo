import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Villain } from './villain.model';

@Injectable()
export class VillainService {
    constructor(
        @InjectRepository(Villain)
        private readonly villainRepo: Repository<Villain>,
    ) { }

    public async create(villain: Villain) {
        await this.villainRepo.save(villain);
    }

    public async findAll(): Promise<Villain[]> {
        return this.villainRepo.find();
    }

    public async findById(id: number): Promise<Villain> {
        return this.villainRepo.findOneOrFail({ where: { id } });
    }

    public async update(id: number, villain: Villain) {
        const existing = await this.villainRepo.findOneOrFail({ where: { id } });
        if (existing) {
            await this.villainRepo.save({ ...existing, ...villain });
        }
    }

    public async delete(id: number) {
        const existing = await this.villainRepo.findOneOrFail({ where: { id } });
        if (existing) {
            await this.villainRepo.remove(existing);
        }
    }
}
