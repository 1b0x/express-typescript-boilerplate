import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { IsEmail, IsString, IsOptional } from "class-validator";
import { randomBytes, pbkdf2Sync } from "crypto";

@Entity()
export default class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 150, unique: true })
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

    @Column({ type: "varchar", length: 200, unique: true })
    @IsEmail()
    email: string;

    @Column("varchar")
    password: string;

    @Column("varchar")
    salt: string;

    @BeforeInsert()
    async hashPassword() {
        this.salt = randomBytes(16).toString("hex");
        this.password = pbkdf2Sync(
            this.password,
            this.salt,
            1000,
            64,
            `sha256`
        ).toString(`hex`);
    }
}
