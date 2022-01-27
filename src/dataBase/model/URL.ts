import { prop, getModelForClass } from '@typegoose/typegoose';

export class URL {
    @prop({ required: true})
    hash: string

    @prop({ required: true})
    originURL: string

    @prop({ required: true})
    shortURL: string
}

const doc = getModelForClass(URL)
export const URLModel = new doc()