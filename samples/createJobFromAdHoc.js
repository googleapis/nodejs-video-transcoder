/**
 * Copyright 2020, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function main(projectId, location, inputUri, outputUri) {
  // [START transcoder_create_job_from_ad_hoc]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // projectId = 'my-project-id';
  // location = 'us-central1';
  // inputUri = 'gs://my-bucket/my-video-file';
  // outputUri = 'gs://my-bucket/my-output-folder/';

  // Imports the Transcoder library
  const {TranscoderServiceClient} =
    require('@google-cloud/video-transcoder').v1;

  // Instantiates a client
  const transcoderServiceClient = new TranscoderServiceClient({
    version: 'v1',
  });

  async function createJobFromAdHoc() {
    // Construct request
    const request = {
      parent: transcoderServiceClient.locationPath(projectId, location),
      job: {
        inputUri: inputUri,
        outputUri: outputUri,
        config: {
          elementaryStreams: [
            {
              key: 'video-stream0',
              videoStream: {
                h264: {
                  heightPixels: 360,
                  widthPixels: 640,
                  bitrateBps: 550000,
                  frameRate: 60,
                },
              },
            },
            {
              key: 'video-stream1',
              videoStream: {
                h264: {
                  heightPixels: 720,
                  widthPixels: 1280,
                  bitrateBps: 2500000,
                  frameRate: 60,
                },
              },
            },
            {
              key: 'audio-stream0',
              audioStream: {
                codec: 'aac',
                bitrateBps: 64000,
              },
            },
          ],
          muxStreams: [
            {
              key: 'sd',
              container: 'mp4',
              elementaryStreams: ['video-stream0', 'audio-stream0'],
            },
            {
              key: 'hd',
              container: 'mp4',
              elementaryStreams: ['video-stream1', 'audio-stream0'],
            },
          ],
        },
      },
    };

    // Run request
    const [response] = await transcoderServiceClient.createJob(request);
    console.log(`Job: ${response.name}`);
  }

  createJobFromAdHoc();
  // [END transcoder_create_job_from_ad_hoc]
}

// node createJobFromAdHoc.js <projectId> <location> <inputUri> <outputUri>
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
