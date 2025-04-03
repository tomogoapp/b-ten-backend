import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsArray, IsObject, IsOptional, IsString } from "class-validator";
import { Form } from "src/forms/entities/form.entity";
import { Guest } from "src/guest/entities/guest.entity";
import { FormGuest } from "../entities/form-guest.entity";

@ObjectType()
export class ResponseFormsList {

    @Field(() => FormGuest, { nullable: true })
    @IsOptional()
    formGuest?: FormGuest;

    @Field(() => [Form])
    @IsArray()
    forms: Form[];

    @Field(() => Guest) // ← Aquí corregimos para indicar que es un solo objeto
    @IsObject()
    guest: Guest;
    

    @Field(() => String)
    @IsString()
    message: string;

}