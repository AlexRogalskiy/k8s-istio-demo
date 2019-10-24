import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Threat } from './threat.model';

@Injectable()
export class ThreatService {
    constructor(
        @InjectRepository(Threat)
        private readonly threatRepo: Repository<Threat>,
    ) { }

    public async create(threat: Threat) {
        await this.threatRepo.save(threat);
    }

    public async findAll(): Promise<Threat[]> {
        return this.threatRepo.find();
    }

    public async findById(id: number): Promise<Threat> {
        return this.threatRepo.findOneOrFail({ where: { id } });
    }

    public async update(id: number, threat: Threat) {
        const existing = await this.threatRepo.findOneOrFail({ where: { id } });
        if (existing) {
            await this.threatRepo.save({ ...existing, ...threat });
        }
    }

    public async delete(id: number) {
        const existing = await this.threatRepo.findOneOrFail({ where: { id } });
        if (existing) {
            await this.threatRepo.remove(existing);
        }
    }
}
