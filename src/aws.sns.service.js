const parsers = require("./parsers");
const AWS = require("aws-sdk");

module.exports = class snsService{
    constructor({accessKeyId, secretAccessKey, region}){
        if (!accessKeyId || !secretAccessKey || !region) throw "Didn't provide access key or region!";
        this.creds = {accessKeyId, secretAccessKey, region};
        this.sns = new AWS.SNS(this.creds);
    }

    static from(params, settings){
        return new snsService({
            accessKeyId: parsers.string(params.accessKeyId || settings.accessKeyId)/* Change to correct parser */,
            accessKeySecret: parsers.string(params.accessKeySecret || settings.accessKeySecret)/* Change to correct parser */,
            region: parsers.string(params.region || settings.region)/* Change to correct parser */
        });
    }
    
    async createTopic({name, displayName, type, contentBasedDeduplication, kmsMasterKeyId, accessPolicyJson, deliveryRetryPolicyJson, 
                        statusLoggingProtocols, successSampleRate, successFeedbackRoleArn, failureFeedbackRoleArn}){
        if (!name) throw "Must provide a name for the topic!";
        if (statusLoggingProtocols.includes("None")) statusLoggingProtocols = [];
        if (statusLoggingProtocols && !successSampleRate){
            throw "Must provide Success Sample Rate when enabling Status Logging."
        }
        const params = {
            Name: name,
            Attributes: {
                DisplayName: displayName,
                FifoTopic: type === "FIFO",
                Policy: accessPolicyJson,
                DeliveryPolicy: deliveryRetryPolicyJson,
                KmsMasterKeyId: kmsMasterKeyId,
                ContentBasedDeduplication: contentBasedDeduplication
            }
        }
        if (statusLoggingProtocols.length){
            const paramNames = statusLoggingProtocols.map(protocol => 
                protocol === "AWS Lambda" ? "Lambda" : 
                protocol === "Amazon SQS" ? "SQS" : 
                protocol === "HTTP/S" ? "HTTP" : 
                protocol === "Amazon Kinesis Data Firehose" ? "Firehose" : 
                             "Application");
            paramNames.forEach(paramName =>{
                params.Attributes[paramName + "SuccessFeedbackRoleArn"] = successFeedbackRoleArn;
                params.Attributes[paramName + "SuccessFeedbackSampleRate"] = successSampleRate;
                params.Attributes[paramName + "FailureFeedbackRoleArn"] = failureFeedbackRoleArn;
            });
        }
        return this.sns.createTopic(removeUndefinedAndEmpty(params)).promise();
    }
    
    async subscribe({topic, protocol, endpoint}){
        if (!topic || !protocol || !endpoint) {
            throw "Didn't provide one of the required parameters."
        }
        return this.sns.subscribe({
            TopicArn: topic,
            Protocol: protocol,
            Endpoint: endpoint,
            ReturnSubscriptionArn: true
        }).promise();
    }
    
    async confirmSubscription({topic, token}){
        if (!topic || !token) {
            throw "Didn't provide one of the required parameters."
        }
        return this.sns.confirmSubscription({
            TopicArn: topic,
            Token: token
        }).promise();
    }
    
    async publishToTopic({topic, message, subject, messageDeduplicationId, messageGroupId}){
        if (!topic || !message) {
            throw "Didn't provide one of the required parameters."
        }
        return this.sns.publish(removeUndefinedAndEmpty({
            TopicArn: topic,
            Message: message, 
            Subject: subject, 
            MessageDeduplicationId: messageDeduplicationId,
            MessageGroupId: messageGroupId,
            MessageStructure: typeof(message) === "object" ? "json" : undefined
        })).promise();
    }
    
    async deleteTopic({topic}){
        if (!topic) {
            throw "Didn't provide one of the required parameters."
        }
        return this.sns.deleteTopic({
            TopicArn: topic
        }).promise();
    }
    
    async unsubscribe({subscriptionArn}){
        if (!subscriptionArn) {
            throw "Didn't provide one of the required parameters."
        }
        return this.sns.unsubscribe({
            SubscriptionArn: subscriptionArn
        }).promise();
    }
    
    async describeTopic({topic}){
        if (!topic) {
            throw "Didn't provide one of the required parameters."
        }
        return this.sns.getTopicAttributes({
            TopicArn: topic
        }).promise();
    }
    
    async describeSubscription({subscriptionArn}){
        if (!subscriptionArn) {
            throw "Didn't provide one of the required parameters."
        }
        return this.sns.getSubscriptionAttributes({
            SubscriptionArn: subscriptionArn
        }).promise();
    }
    
    async listTopics({nextToken}){
        return this.sns.listTopics({NextToken: nextToken}).promise();
    }
    
    async listSubscriptions({topic, nextToken}){
        if (topic) return this.sns.listSubscriptionsByTopic({
            TopicArn: topic,
            NextToken: nextToken
        }).promise();
        return this.sns.listTopics({NextToken: nextToken}).promise();
    }
    
    async listRegions(){
        if (this.creds.region) this.creds.region = "us-east-1"
        const ec2 = new AWS.EC2(this.creds);
        return ec2.describeRegions({}).promise();
    }
}