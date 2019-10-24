import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Threat {
    @PrimaryGeneratedColumn() public readonly id: number;
    @Column({ nullable: false }) public readonly name: string;
    @Column({ nullable: false }) public readonly saying: string;
}
