import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Villain } from './villain.model';
import axios from 'axios';
import { THREAT_SERVICE } from '../config';

@Injectable()
export class VillainService {
    private THREATS = [
        'Hurricanes every day',
        'Servers are falling down from the cloud',
        'Pisa tower is about to collapse.',
        'Copying code directly from stackoverflow',
        'World of programmers',
        'Machines learning human-learning',
        'Dell Technician cleans up virus',
        'No complaints about Javascript',
        'Hear Machine learning jokes all day',
        'Develop 100 microservices with single person team',
        'Understand Cosmosdb pricing'];

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

    public async doEvil() {
        const response = await axios.post(`${THREAT_SERVICE}/threats`, {
            name: this.THREATS[Math.floor(Math.random() * (this.THREATS.length - 1))],
            powersRequired: Math.floor(Math.random() * 11)
        });
        return response.data;
    }
}
