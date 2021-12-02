const parsers = require("./parsers");

const snsService = require('./aws.sns.service');
async function createTopic(action, settings){
    const { name, displayName, type, contentBasedDeduplication, kmsMasterKeyId, accessPolicyJson, 
        statusLoggingProtocols, deliveryRetryPolicyJson, successSampleRate, successFeedbackRoleArn, failureFeedbackRoleArn } = action.params;
    const client = snsService.from(action.params, settings);
    return client.createTopic({
        name: parsers.string(name),
        displayName: parsers.string(displayName),
        type: type,
        contentBasedDeduplication: parsers.boolean(contentBasedDeduplication),
        kmsMasterKeyId: parsers.string(kmsMasterKeyId),
        accessPolicyJson: parsers.jsonString(accessPolicyJson),
        deliveryRetryPolicyJson: parsers.jsonString(deliveryRetryPolicyJson),
        statusLoggingProtocols: parsers.array(statusLoggingProtocols),
        successSampleRate: parsers.string(successSampleRate),
        successFeedbackRoleArn: parsers.string(successFeedbackRoleArn),
        failureFeedbackRoleArn: parsers.string(failureFeedbackRoleArn)
    });
}

async function subscribe(action, settings){
    const { topic, protocol, endpoint } = action.params;
    const client = snsService.from(action.params, settings);
    return client.subscribe({
        topic: parsers.autocomplete(topic),
        endpoint: parsers.string(endpoint),
        protocol
    });
}

async function confirmSubscription(action, settings){
    const { topic, token } = action.params;
    const client = snsService.from(action.params, settings);
    return client.confirmSubscription({
        topic: parsers.autocomplete(topic),
        token: parsers.string(token)
    });
}

async function publishToTopic(action, settings){
    const { topic, message, subject, messageDeduplicationId, messageGroupId } = action.params;
    const client = snsService.from(action.params, settings);
    return client.publishToTopic({
        topic: parsers.autocomplete(topic),
        message: parsers.jsonString(message),
        subject: parsers.string(subject),
        messageDeduplicationId: parsers.string(messageDeduplicationId),
        messageGroupId: parsers.string(messageGroupId)
    });
}

async function deleteTopic(action, settings){
    const { topic } = action.params;
    const client = snsService.from(action.params, settings);
    return client.deleteTopic({
        topic: parsers.autocomplete(topic)
    });
}

async function unsubscribe(action, settings){
    const { topic, subscriptionArn } = action.params;
    const client = snsService.from(action.params, settings);
    return client.unsubscribe({
        topic: parsers.autocomplete(topic),
        subscriptionArn: parsers.autocomplete(subscriptionArn)
    });
}

async function describeTopic(action, settings){
    const { topic } = action.params;
    const client = snsService.from(action.params, settings);
    return client.describeTopic({
        topic: parsers.autocomplete(topic)
    });
}

async function describeSubscription(action, settings){
    const { topic, subscriptionArn } = action.params;
    const client = snsService.from(action.params, settings);
    return client.describeSubscription({
        topic: parsers.autocomplete(topic),
        subscriptionArn: parsers.autocomplete(subscriptionArn)
    });
}

async function listTopics(action, settings){
    const { nextToken } = action.params;
    const client = snsService.from(action.params, settings);
    return client.listTopics({
        nextToken: parsers.string(nextToken)
    });
}

async function listSubscriptions(action, settings){
    const { topic, nextToken } = action.params;
    const client = snsService.from(action.params, settings);
    return client.listSubscriptions({
        topic: parsers.autocomplete(topic),
        nextToken: parsers.string(nextToken)
    });
} 

module.exports = {
    createTopic,
	subscribe,
	confirmSubscription,
	publishToTopic,
	deleteTopic,
	unsubscribe,
	describeTopic,
	describeSubscription,
	listTopics,
	listSubscriptions,
    // Autocomplete Functions
    ...require("./autocomplete")
}