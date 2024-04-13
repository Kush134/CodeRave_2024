import io
from google.oauth2 import service_account
from google.cloud import speech
from google.cloud import storage
from mutagen.mp3 import MP3

client_file = "sa_speech.json"
credentials = service_account.Credentials.from_service_account_file(client_file)
client = speech.SpeechClient(credentials=credentials)

audio_file = "topology.mp3"


def get_audio(audio_file):
    audio_len = MP3(audio_file).info.length
    if audio_len <= 60:
        with io.open(audio_file, "rb") as f:
            content = f.read()
            audio = speech.RecognitionAudio(content=content)

        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED,
            sample_rate_hertz=48000,
            language_code="en-US",
            audio_channel_count=2,
        )

        response = client.recognize(config=config, audio=audio)
        output = ""
        for result in response.results:
            # print(result.alternatives[0].transcript)
            output += result.alternatives[0].transcript
        return output
    else:
        bucket_name = "speech-to-text-231"
        storage_client = storage.Client(credentials=credentials)
        bucket = storage_client.bucket(bucket_name)
        # bucket.create(project = 'diamond-hacks-419518', location = 'us')
        # print(bucket_name + " created")
        blob = bucket.blob(audio_file)
        with open(audio_file, "rb") as file:
            blob.upload_from_file(file)
        # print(blob.gsutil)
        gcs = "gs://" + bucket_name + "/" + audio_file
        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED,
            sample_rate_hertz=48000,
            language_code="en-US",
            audio_channel_count=2,
        )
        audio = speech.RecognitionAudio(uri=gcs)
        operation = client.long_running_recognize(config=config, audio=audio)

        print("Waiting for operation to complete...")
        response = operation.result(timeout=audio_len)

        output = ""
        for result in response.results:
            # print(result.alternatives[0].transcript)
            output += result.alternatives[0].transcript
        return output
