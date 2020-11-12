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

const path = require('path');
const assert = require('assert');
const {execSync} = require('child_process');

const {Storage} = require('@google-cloud/storage');
const bucketName = 'nodejs-samples-transcoder-test';
const storage = new Storage();

const projectNumber = process.env.GOOGLE_CLOUD_PROJECT_NUMBER;
const location = 'us-central1';
const templateId = 'my-nodejs-test-template';
const preset = 'preset/web-hd';
const templateName = `projects/${projectNumber}/locations/${location}/jobTemplates/${templateId}`;

const testFileName = 'ChromeCast.mp4';
const inputUri = `gs://${bucketName}/${testFileName}`;
const outputUriForPreset = `gs://${bucketName}/test-output-preset/`;
const outputUriForTemplate = `gs://${bucketName}/test-output-template/`;
const outputUriForAdHoc = `gs://${bucketName}/test-output-adhoc/`;

const cwd = path.join(__dirname, '..');
const resourceFile = `testdata/${testFileName}`;

before(async () => {
  assert(
    process.env.GOOGLE_CLOUD_PROJECT_NUMBER,
    'Must set GOOGLE_CLOUD_PROJECT_NUMBER environment variable!'
  );
  // Create a Cloud Storage bucket to be used for testing.
  async function deleteFiles() {
    const [files] = await storage.bucket(bucketName).getFiles();
    for (const file of files) {
      await storage.bucket(bucketName).file(file.name).delete();
    }
  }
  await deleteFiles();
  await storage.bucket(bucketName).delete();
  await storage.createBucket(bucketName);
  await storage.bucket(bucketName).upload(resourceFile);
  this.projectId = await storage.getProjectId();
});

describe('Job template functions', () => {
  before(() => {
    // Delete the job template if it already exists
    execSync(
      `node deleteJobTemplate.js ${this.projectId} ${location} ${templateId}`,
      {
        cwd,
      }
    );
    const output = execSync(
      `node createJobTemplate.js ${this.projectId} ${location} ${templateId}`,
      {cwd}
    );
    assert.ok(output.includes(templateName));
  });

  after(() => {
    const output = execSync(
      `node deleteJobTemplate.js ${this.projectId} ${location} ${templateId}`,
      {cwd}
    );
    assert.ok(output.includes('Deleted job template'));
  });

  it('should get a job template', () => {
    const output = execSync(
      `node getJobTemplate.js ${this.projectId} ${location} ${templateId}`,
      {cwd}
    );
    assert.ok(output.includes(templateName));
  });

  it('should show a list of job templates', () => {
    const output = execSync(
      `node listJobTemplates.js ${this.projectId} ${location}`,
      {
        cwd,
      }
    );
    assert.ok(output.includes(templateName));
  });
});

describe('Job functions preset', () => {
  before(function () {
    const output = execSync(
      `node createJobFromPreset.js ${this.projectId} ${location} ${inputUri} ${outputUriForPreset} ${preset}`,
      {cwd}
    );
    assert.ok(
      output.includes(`projects/${projectNumber}/locations/${location}/jobs/`)
    );
    this.presetJobId = output.toString().split('/').pop();
  });

  after(function () {
    const output = execSync(
      `node deleteJob.js ${this.projectId} ${location} ${this.presetJobId}`,
      {cwd}
    );
    assert.ok(output.includes('Deleted job'));
  });

  it('should get a job', function () {
    const output = execSync(
      `node getJob.js ${this.projectId} ${location} ${this.presetJobId}`,
      {cwd}
    );
    const jobName = `projects/${projectNumber}/locations/${location}/jobs/${this.presetJobId}`;
    assert.ok(output.includes(jobName));
  });

  it('should show a list of jobs', function () {
    const output = execSync(`node listJobs.js ${this.projectId} ${location}`, {
      cwd,
    });
    const jobName = `projects/${projectNumber}/locations/${location}/jobs/${this.presetJobId}`;
    assert.ok(output.includes(jobName));
  });

  it('should pause for job to run', done => {
    setTimeout(done, 60000);
  });

  it('should check that the job succeeded', function () {
    const output = execSync(
      `node getJobState.js ${this.projectId} ${location} ${this.presetJobId}`,
      {cwd}
    );
    assert.ok(output.includes('Job state: SUCCEEDED'));
  });
});

describe('Job functions template', () => {
  before(function () {
    let output = execSync(
      `node createJobTemplate.js ${this.projectId} ${location} ${templateId}`,
      {cwd}
    );
    assert.ok(output.includes(templateName));
    output = execSync(
      `node createJobFromTemplate.js ${this.projectId} ${location} ${inputUri} ${outputUriForTemplate} ${templateId}`,
      {cwd}
    );
    assert.ok(
      output.includes(`projects/${projectNumber}/locations/${location}/jobs/`)
    );
    this.templateJobId = output.toString().split('/').pop();
  });

  after(function () {
    let output = execSync(
      `node deleteJob.js ${this.projectId} ${location} ${this.templateJobId}`,
      {cwd}
    );
    assert.ok(output.includes('Deleted job'));
    output = execSync(
      `node deleteJobTemplate.js ${this.projectId} ${location} ${templateId}`,
      {cwd}
    );
    assert.ok(output.includes('Deleted job template'));
  });

  it('should get a job', function () {
    const output = execSync(
      `node getJob.js ${this.projectId} ${location} ${this.templateJobId}`,
      {cwd}
    );
    const jobName = `projects/${projectNumber}/locations/${location}/jobs/${this.templateJobId}`;
    assert.ok(output.includes(jobName));
  });

  it('should show a list of jobs', function () {
    const output = execSync(`node listJobs.js ${this.projectId} ${location}`, {
      cwd,
    });
    const jobName = `projects/${projectNumber}/locations/${location}/jobs/${this.templateJobId}`;
    assert.ok(output.includes(jobName));
  });

  it('should pause for job to run', done => {
    setTimeout(done, 60000);
  });

  it('should check that the job succeeded', function () {
    const output = execSync(
      `node getJobState.js ${this.projectId} ${location} ${this.templateJobId}`,
      {cwd}
    );
    assert.ok(output.includes('Job state: SUCCEEDED'));
  });
});

describe('Job functions adhoc', () => {
  before(function () {
    const output = execSync(
      `node createJobFromAdHoc.js ${this.projectId} ${location} ${inputUri} ${outputUriForAdHoc}`,
      {cwd}
    );
    assert.ok(
      output.includes(`projects/${projectNumber}/locations/${location}/jobs/`)
    );
    this.adhocJobId = output.toString().split('/').pop();
  });

  after(function () {
    const output = execSync(
      `node deleteJob.js ${this.projectId} ${location} ${this.adhocJobId}`,
      {cwd}
    );
    assert.ok(output.includes('Deleted job'));
  });

  it('should get a job', function () {
    const output = execSync(
      `node getJob.js ${this.projectId} ${location} ${this.adhocJobId}`,
      {cwd}
    );
    const jobName = `projects/${projectNumber}/locations/${location}/jobs/${this.adhocJobId}`;
    assert.ok(output.includes(jobName));
  });

  it('should show a list of jobs', function () {
    const output = execSync(`node listJobs.js ${this.projectId} ${location}`, {
      cwd,
    });
    const jobName = `projects/${projectNumber}/locations/${location}/jobs/${this.adhocJobId}`;
    assert.ok(output.includes(jobName));
  });

  it('should pause for job to run', done => {
    setTimeout(done, 60000);
  });

  it('should check that the job succeeded', function () {
    const output = execSync(
      `node getJobState.js ${this.projectId} ${location} ${this.adhocJobId}`,
      {cwd}
    );
    assert.ok(output.includes('Job state: SUCCEEDED'));
  });
});