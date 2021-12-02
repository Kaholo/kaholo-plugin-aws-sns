# kaholo-plugin-AWS-SNS
Kaholo plugin for integration with AWS SNS API.

##  Settings
1. Access Key ID (Vault) **Required if not in action** - The default AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in action** - The default AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (String) **Required if not in action** - The ID of the default region to make requests on.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)

## Method: Create Topic
Create a new topic.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Name (String) **Required** - The name of the topic to create.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
5. Display Name (String) **Optional** - The display name to use for a topic with SMS subscriptions.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
6. Type (Options) **Optional** - The type of topic to create. Possible values are: Standard, FIFO.Possible values: **Standard | FIFO**
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
7. Enable Content-based Message Deduplication (Boolean) **Optional** - For FIFO topics only. If true, enable default message deduplication based on message content. If unchecked, a deduplication ID must be provided for every publish request.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
8. Encryption Master KMS Key ID (String) **Optional** - If specified, enable encryption and use the specified key. Otherwise disable encryption.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
9. Access Policy JSON (Text) **Optional** - If specified, set the access policy of the new Topic according to the provided JSON.  Can provide as a JSON string or as an object from code.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-authentication-and-access-control.html)
10. HTTP/S Delivery Retry Policy JSON (Text) **Optional** - Only for standard topic type. If specified, set the http/s delivery retry policy of the new Topic according to the provided JSON.  Can provide as a JSON string or as an object from code.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html)
11. Delivery Status Logging Protocols (Options) **Optional** - Enable delivery status logging for the specified protocol(s). If provided must also provide 'Success Sample Rate'. Can provide multiple values as an array from code.Possible values: **None | AWS Lambda | Amazon SQS | HTTP/S | Platform application endpoint | Amazon Kinesis Data Firehose**
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html)
12. Success Sample Rate (String) **Required for Delivery Status Logging** - Required when enabling delivery status logging. The percentage of successful message deliveries to log. Possible values are 1-100.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html)
13. Successful Delivery Role ARN (String) **Optional** - ARN of an IAM role to use on successful deliveries.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html)
14. Failed Delivery Role ARN (String) **Optional** - ARN of an IAM role to use on failed deliveries.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html)

## Method: Subscribe
Subscribe the specified endpoint to the specified Topic. All endpoints subscribed to a topic will receive any messages published in the assoicated topic.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Required** - The topic to subscribe to.
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html)
5. Protocol (Options) **Required** - The protocol to use to send messages in this subscription.Possible values: **HTTP | HTTPS | Email | Email JSON | SMS | SQS | Application | Lambda | Firehose**
[Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html)
6. Endpoint (String) **Required** - The endpoint that you want to receive notifications. Endpoints format vary by protocol.
[Learn More](http://example.com/webhook)

## Method: Confirm Subscription
Confirm a newly created subscription, using the token sent to the subscribed endpoint.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Required** - The topic of the subscription.
5. Token (String) **Required** - Short-lived token sent to an endpoint during the Subscribe action.

## Method: Publish To Topic
Publish a new message into the specified topic.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Required** - The topic to subscribe to.
[Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)
5. Message (Text) **Required** - The message you want to send. Also accepts an object from code to use as the message, for sending different messages to different transport protocols.
[Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)
6. Subject (String) **Optional** - Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints.
[Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)
7. Message Deduplication ID (String) **Optional** - This parameter applies only to FIFO topics. Every message must have a unique Message Deduplication ID. Can contain up to 128 alphanumeric characters (a-z, A-Z, 0-9) and punctuation (!"#$%&'()*+,-./:;<=>?@[]^_{|}~).
[Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)
8. Message Group ID (String) **Optional** - This parameter applies only to FIFO topics. The Message Group ID is a tag that specifies that a message belongs to a specific message group. Can contain up to 128 alphanumeric characters (a-z, A-Z, 0-9) and punctuation (!"#$%&'()*+,-./:;<=>?@[]^_{|}~).
[Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)

## Method: Delete Topic
Delete the specified topic.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Required** - The topic to delete.

## Method: Unsubscribe
Delete a subscription of an endpoint to a topic.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic of the subscription.
5. Subscription ARN (Autocomplete) **Required** - The subscrition to remove.

## Method: Describe Topic
Describe the specified topic.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Required** - The topic to describe.

## Method: Describe Subscription
Describe the specified subscription.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic of the subscription.
5. Subscription ARN (Autocomplete) **Required** - The subscrition to describe.

## Method: List Topics
List all topics for the authenticated user in the specified region.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Next Token (String) **Optional** - Pass to retrieve topics from last left. This element is returned if there are more subscriptions to retrieve.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

## Method: List Subscriptions
List subscriptions for the authenticated user in the specified region. Can also filter by topic.

## Parameters
1. Access Key ID (Vault) **Required if not in settings** - The AWS Access Key ID to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Required if not in settings** - The AWS Access Key secret to use for authentication.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Required if not in settings** - Make the request in the specified region.
[Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - If specified, list only subscriptions of the specified topic.
5. Next Token (String) **Optional** - Pass to retrieve topics from last left. This element is returned if there are more subscriptions to retrieve.
[Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
