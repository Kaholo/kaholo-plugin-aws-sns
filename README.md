# kaholo-plugin-aws-sns
Kaholo plugin for integration with AWS SNS API.

##  Settings
1. Access Key ID (Vault) **Optional** - The default AWS Access Key ID to use for authentication.
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - The default AWS Access Key secret to use for authentication.
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (String) **Optional** - The ID of the default region to make requests on.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)

## Method: Create Topic
Create Topic

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Name (String) **Optional** - The name of the topic to create.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
5. Display Name (String) **Optional** - The display name to use for a topic with SMS subscriptions.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
6. Type (Options) **Optional** - The type of topic to create. Possible values are: Standard, FIFO.Possible values: **Standard | FIFO**
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
7. Enable Content-based Message Deduplication (Boolean) **Optional** - For FIFO topics only. If true, enable default message deduplication based on message content. If unchecked, a deduplication ID must be provided for every publish request.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
8. Encryption Master KMS Key ID (String) **Optional** - If specified, enable encryption and use the specified key. Otherwise disable encryption.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
9. Encryption Master KMS Key ID (String) **Optional** - If specified, enable encryption and use the specified key. Otherwise disable encryption.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
10. Access Policy JSON (Text) **Optional** - If specified, set the access policy of the new Topic according to the provided JSON. Can provide the local path of a JSON file on your agent, or pass JS object from code.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-authentication-and-access-control.html)
11. Delivery Retry Policy JSON (Text) **Optional** - If specified, set the delivery retry policy of the new Topic according to the provided JSON. Can provide the local path of a JSON file on your agent, or pass JS object from code.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html)
12. Delivery Status Logging Protocols (Options) **Optional** - Enable delivery status logging for the specified protocol(s). If provided must also provide 'Success Sample Rate'. Can provide multiple values as an array from code.Possible values: **None | AWS Lambda | Amazon SQS | None | Platform application endpoint | Amazon Kinesis Data Firehose**
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html)
13. Success Sample Rate (String) **Optional** - Required when enabling delivery status logging. The percentage of successful message deliveries to log. Possible values are 1-100.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html)
14. Successful Delivery Role ARN (String) **Optional** - ARN of an IAM role to use on successful deliveries.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html)
15. Failed Delivery Role ARN (String) **Optional** - ARN of an IAM role to use on failed deliveries.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-topic-attributes.html)

## Method: Subscribe
Subscribe

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic to subscribe to.
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html)
5. Protocol (Options) **Optional** - The protocol to use to send messages in this subscription.Possible values: **HTTP | HTTPS | Email | Email JSON | SMS | SQS | Application | Lambda | Firehose**
    [Learn More](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html)
6. Endpoint (String) **Optional** - The endpoint that you want to receive notifications. Endpoints format vary by protocol.
    [Learn More](http://example.com/webhook)

## Method: Confirm Subscription
Confirm Subscription

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic of the subscription.
    
5. Subscription ARN (Autocomplete) **Optional** - The subscrition to confirm.
    

## Method: Publish To Topic
Publish To Topic

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic to subscribe to.
    [Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)
5. Message (Text) **Optional** - The message you want to send. Also accepts an object from code to use as the message, for sending different messages to different transport protocols.
    [Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)
6. Subject (String) **Optional** - Optional parameter to be used as the "Subject" line when the message is delivered to email endpoints.
    [Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)
7. Message Deduplication ID (String) **Optional** - This parameter applies only to FIFO topics. Every message must have a unique Message Deduplication ID. Can contain up to 128 alphanumeric characters (a-z, A-Z, 0-9) and punctuation (!"#$%&'()*+,-./:;<=>?@[]^_{|}~).
    [Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)
8. Message Group ID (String) **Optional** - This parameter applies only to FIFO topics. The Message Group ID is a tag that specifies that a message belongs to a specific message group. Can contain up to 128 alphanumeric characters (a-z, A-Z, 0-9) and punctuation (!"#$%&'()*+,-./:;<=>?@[]^_{|}~).
    [Learn More](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)

## Method: Delete Topic
Delete Topic

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic to delete.
    

## Method: Unsubscribe
Unsubscribe

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic of the subscription.
    
5. Subscription ARN (Autocomplete) **Optional** - The subscrition to remove.
    

## Method: Describe Topic
Describe Topic

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic to describe.
    

## Method: Describe Subscription
Describe Subscription

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - The topic of the subscription.
    
5. Subscription ARN (Autocomplete) **Optional** - The subscrition to describe.
    

## Method: List Topics
List Topics

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)

## Method: List Subscriptions
List Subscriptions

## Parameters
1. Access Key ID (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
2. Access Key Secret (Vault) **Optional** - This is a parameter taken from the vault to access AWS
    [Learn More](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
3. Region (Autocomplete) **Optional** - Make the request in the specified region.
    [Learn More](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
4. Topic (Autocomplete) **Optional** - If specified, list only subscriptions of the specified topic.
    
