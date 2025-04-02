import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType()
export class ResponseFormGuest {

    @Field(() => String)
    @IsOptional()
    message: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    formId?: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    guestId?: string;

    @Field(() => Int, { nullable: true })
    @IsOptional()
    score?: number;

}