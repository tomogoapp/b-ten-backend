import { Field, ObjectType } from "@nestjs/graphql";
import { Guest } from "../entities/guest.entity";

@ObjectType()
export class ResponseGuest {


    @Field(() => Guest)
    guest: Guest;

    @Field(() => String)
    message: string;

    // @Field(() => String)
    // firstName: string;  // Falta definir el tipo `string`

    // @Field(() => String)
    // lastName: string;

    // @Field(() => String)
    // email: string;

    // @Field(() => String)
    // message: string;

    // @Field(() => Date)
    // createdAt: Date;  // Falta definir el tipo `Date`
}