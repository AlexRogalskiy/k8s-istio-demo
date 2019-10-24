import { Controller, Post, Body, Put, Param, Get, Delete } from '@nestjs/common';
import { VillainService } from './villain.service';
import { Villain } from './villain.model';

@Controller('villains')
export class VillainController {

    constructor(private readonly villainservice: VillainService) { }

    @Post()
    async create(@Body() villain: Villain) {
        this.villainservice.create(villain);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() villain: Villain) {
        return this.villainservice.update(id, villain);
    }

    @Get()
    async findAll(): Promise<Villain[]> {
        return this.villainservice.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<Villain> {
        return this.villainservice.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.villainservice.delete(id);
    }
}
