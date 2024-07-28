import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class User extends Document {
    @Prop({
        type:String,
        required: true
    })
    username: string

    @Prop({
        type: String
    })
    fullname: string

    @Prop({
        type: String,
        unique: true,
        required: true
    })
    email: string

    @Prop({
        type: String,
        required: true
    })
    password: string

    @Prop({
        type: String
    })
    imageUrl: string

}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.methods.toJSON = function (){
    const obj = this.toObject()
    delete obj.password
    return obj
}

