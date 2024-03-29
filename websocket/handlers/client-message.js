const logger = (msg) => {
    if(process.env.MODE !== 'dev') return;

    console.log(`========================================`.blue);
    console.log(`Message from ${msg.username} in ${msg.room}`.white);
    console.log(`\n  > ${msg.message}`.bgYellow);
    console.log(`\n${msg.time}`.yellow);
    console.log(`========================================`.blue);
};

const clientMessageHandler = (io, activeRooms, msg) => {
    logger(msg)
    msg.userCount = activeRooms.filter((room) => room.room === msg.room).length;
    io.to(msg.room).emit('server-message', msg);
}

module.exports = clientMessageHandler;
