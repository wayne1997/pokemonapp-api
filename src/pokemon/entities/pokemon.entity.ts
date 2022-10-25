import { Type } from 'src/type/entities/type.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';

@Entity()
export class Pokemon {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 20,
        unique: true,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 500,
        unique: true,
        nullable: false,
    })
    description: string;

    @Column({
        type: 'float',
        default: 0.0,
        nullable: true
    })
    size: number;

    @Column({
        type: 'float',
        default: 0.0,
        nullable: true,
    })
    weigth: number;

    @Column({
        type: 'text',
        nullable: true,
    })
    image: string;

    @ManyToMany( () => Type, {cascade: true} )
    @JoinTable()
    types: Type[]

    @OneToOne( () => Pokemon, {onDelete: 'CASCADE'} )
    @JoinColumn()
    evolution: Pokemon;
}
