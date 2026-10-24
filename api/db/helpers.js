import mongoose from "mongoose"

// export function connectToDb() {
//     return mongoose.connect("mongodb://localhost:27019/recipes")
// }

export function connectToDb() {
    return mongoose.connect("mongodb://127.0.0.1:27017/recipes")
}

export function disconnectToDb() {
    if (mongoose.connection.readyState !== 0) {
        return mongoose.disconnect();
    }
}