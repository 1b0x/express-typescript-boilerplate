import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, IsString, IsOptional, Length } from "class-validator";

@Entity()
export default class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 150 })
    @IsString()
    nickname: string;

    @Column("varchar", { length: 150, nullable: true })
    @IsString()
    @IsOptional()
    firstname?: string;

    @Column("varchar", { length: 150, nullable: true })
    @IsString()
    @IsOptional()
    lastname?: string;

    @Column("varchar", { length: 200 })
    @IsEmail()
    email: string;

    @IsString()
    @Length(8)
    password: string;
}
