import { Controller, Post, Body, Put, Param, Get, Delete } from '@nestjs/common';
import { ThreatService } from './threat.service';
import { Threat } from './threat.model';

@Controller('threats')
export class ThreatController {

    constructor(private readonly threatservice: ThreatService) { }

    @Post()
    async create(@Body() threat: Threat) {
        this.threatservice.create(threat);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() threat: Threat) {
        return this.threatservice.update(id, threat);
    }

    @Get()
    async findAll(): Promise<Threat[]> {
        return this.threatservice.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<Threat> {
        return this.threatservice.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.threatservice.delete(id);
    }
}
