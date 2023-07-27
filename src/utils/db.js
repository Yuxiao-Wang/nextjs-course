import mongoose from "mongoose"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)

        mongoose.connection.on('connected', function () {
            console.log('成功连接')
        })
        mongoose.connection.on('error', function () {
            console.log('连接错误')
        })
        mongoose.connection.on('disconnected', function () {
            console.log('断开连接')
        })
    } catch (error) {
        throw new Error("Connection failed")
    }
}

export default connect;