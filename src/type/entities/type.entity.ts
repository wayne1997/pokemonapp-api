import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Type {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 1000,
        nullable: true,
    })
    description: string;
}
