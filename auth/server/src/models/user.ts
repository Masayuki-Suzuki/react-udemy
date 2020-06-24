import bcrypt from 'bcrypt-nodejs'
import * as mongoose from 'mongoose'
import { Model } from 'mongoose'

const Schema = mongoose.Schema

// Define interface
export interface IUserDocument extends mongoose.Document {
    email: string
    password: string
    comparePassword(candidatePassword: string, fn: (err: Error, isMatch: boolean) => void): void
}

export interface IUserModel extends Model<IUserDocument> {
    comparePassword(candidatePassword: string, fn: (err: Error, isMatch: boolean) => void): void
}

// Define Model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
})

// On save Hook, encrypt password
// Before saving a model. run this function
// Must use conventional function syntax instead of arrow syntax.
userSchema.pre<IUserDocument>('save', function (next) {
    // Get access to the user model
    const user = this

    // Generate a sal
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }

        // hash(encrypt) our password using the salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err)
            }

            // overwrite plain text password with encrypted password
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function (candidatePassword, fn) {
    console.log(candidatePassword, this.password)
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return fn(err)
        }
        fn(null, isMatch)
    })
}

// Create the Model class
const ModelClass = mongoose.model<IUserDocument, IUserModel>('user', userSchema)

// Export the Model
export default ModelClass
