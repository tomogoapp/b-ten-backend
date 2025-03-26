import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ResponseFormGuest {

    @Field(() => String)
    message: string;

    @Field(() => String)
    formId: string;

    @Field(() => String)
    guestId: string;

    @Field(() => Int)
    score: number;

}