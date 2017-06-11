# {{ FUNCTION_NAME }}

## usage

To send this function messages, publish a message to the {{ PUBSUB_TOPIC }} pubsub
topic

```bash
$ gcloud beta pubsub topics publish {{ PUBSUB_TOPIC }} '{"hello":"world"}'
```

Then read the logs with

```bash
$ gcloud beta functions logs read --limit 5 {{ FUNCTION_NAME }}
```
