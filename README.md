# Getting Started

To install dependencies: `npm install`

**First, configure the aws access key and aws access token in `.env.local`** as the following format:

```env
AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY

<!-- For key usage on client components, not recommended and needs to be refactored into backend serverless functions-->
NEXT_PUBLIC_AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or other ports(next.js will find a suitable port if 3000 is already taken) with your browser to see the result.

## AWS GenAI

Since the project is initialized, the models provided by AWS is constantly increasing, please note that as more models are included into AWS BedRock, there are other potential samples we can build to prototype/showcase using these GenAI models.

If prototyping a web app doesn't feel like a straightforward approach, using `python boto3` is one of the most easist way that can get results very quickly. Also, it's easy to integrate boto3 into a serverless runtime.

## Prototype landing page

A further decoration of the landing page is required.

![alt text](description_image/landing.png)

## Gen AI model list

So far only AWS bedrock models are integrated and listed. But considering to include more models(google models, OpenAI models, etc) and introduce clickable feature for each model card that links to model details content when clicked.

![alt text](description_image/model_list.png)

## Click examples to check out code tools

As a quick prototype, a claude2 model integration is provided for duplicate code checking. The feature can be extended to use selected models. Also, further implementation with more models integrated is required

![alt text](description_image/temp_examples.png)

A quick execution result is as below:

![alt text](description_image/temp_duplicate_code.png)

## Actions

- Refactoring of code bases during impl
- Unit testing update needs to be initiated
- Consider a quick login
- Deployment
