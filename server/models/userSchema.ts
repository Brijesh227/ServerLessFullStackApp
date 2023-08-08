import mongoose, { Schema, InferSchemaType } from 'mongoose';

const schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
});

type User = InferSchemaType<typeof schema>;

const UserModel = mongoose.model<User>('User', schema);
export default UserModel;