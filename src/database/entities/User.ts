import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", { length: 150 })
    nickname: string;

    @Column("varchar", { length: 150 })
    firstname: string;

    @Column("varchar", { length: 150 })
    lastname: string;

    @Column("varchar", { length: 200 })
    email: string;
}
