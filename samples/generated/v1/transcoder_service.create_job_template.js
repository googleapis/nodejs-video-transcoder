// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, jobTemplate, jobTemplateId) {
  // [START transcoder_v1_generated_TranscoderService_CreateJobTemplate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent location to create this job template.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. Parameters for creating job template.
   */
  // const jobTemplate = {}
  /**
   *  Required. The ID to use for the job template, which will become the final component
   *  of the job template's resource name.
   *  This value should be 4-63 characters, and valid characters must match the
   *  regular expression `[a-zA-Z][a-zA-Z0-9_-]*`.
   */
  // const jobTemplateId = 'abc123'

  // Imports the Transcoder library
  const {TranscoderServiceClient} = require('@google-cloud/video-transcoder').v1;

  // Instantiates a client
  const transcoderClient = new TranscoderServiceClient();

  async function callCreateJobTemplate() {
    // Construct request
    const request = {
      parent,
      jobTemplate,
      jobTemplateId,
    };

    // Run request
    const response = await transcoderClient.createJobTemplate(request);
    console.log(response);
  }

  callCreateJobTemplate();
  // [END transcoder_v1_generated_TranscoderService_CreateJobTemplate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
