const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "kafka-app",
    brokers: ['http://192.168.249.6:9092']
})


exports.adnan = () => {
    console.log("adnan");
}