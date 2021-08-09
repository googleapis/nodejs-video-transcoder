[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Transcoder API: Node.js Client](https://github.com/googleapis/nodejs-video-transcoder)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/video-transcoder.svg)](https://www.npmjs.org/package/@google-cloud/video-transcoder)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-video-transcoder/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-video-transcoder)




Transcoder client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-video-transcoder/blob/master/CHANGELOG.md).

* [Transcoder API Node.js Client API Reference][client-docs]
* [Transcoder API Documentation][product-docs]
* [github.com/googleapis/nodejs-video-transcoder](https://github.com/googleapis/nodejs-video-transcoder)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Transcoder API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/video-transcoder
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'my-project';
// const location = 'us-central1';
const {TranscoderServiceClient} = require('@google-cloud/video-transcoder');
const client = new TranscoderServiceClient();
async function listJobs() {
  const [jobs] = await client.listJobs({
    parent: client.locationPath(projectId, location),
  });
  console.info('jobs:');
  for (const job of jobs) {
    console.info(job);
  }
}
listJobs();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-video-transcoder/tree/master/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Job From Ad Hoc | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/createJobFromAdHoc.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/createJobFromAdHoc.js,samples/README.md) |
| Create Job From Preset | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/createJobFromPreset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/createJobFromPreset.js,samples/README.md) |
| Create Job From Template | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/createJobFromTemplate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/createJobFromTemplate.js,samples/README.md) |
| Create Job Template | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/createJobTemplate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/createJobTemplate.js,samples/README.md) |
| Create Job With Animated Overlay | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/createJobWithAnimatedOverlay.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/createJobWithAnimatedOverlay.js,samples/README.md) |
| Create Job With Periodic Images Spritesheet | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/createJobWithPeriodicImagesSpritesheet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/createJobWithPeriodicImagesSpritesheet.js,samples/README.md) |
| Create Job With Set Number Images Spritesheet | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/createJobWithSetNumberImagesSpritesheet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/createJobWithSetNumberImagesSpritesheet.js,samples/README.md) |
| Create Job With Static Overlay | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/createJobWithStaticOverlay.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/createJobWithStaticOverlay.js,samples/README.md) |
| Delete Job | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/deleteJob.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/deleteJob.js,samples/README.md) |
| Delete Job Template | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/deleteJobTemplate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/deleteJobTemplate.js,samples/README.md) |
| Get Job | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/getJob.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/getJob.js,samples/README.md) |
| Get Job State | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/getJobState.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/getJobState.js,samples/README.md) |
| Get Job Template | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/getJobTemplate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/getJobTemplate.js,samples/README.md) |
| List Job Templates | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/listJobTemplates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/listJobTemplates.js,samples/README.md) |
| List Jobs | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/listJobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/listJobs.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-video-transcoder/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-transcoder&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Transcoder API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-video-transcoder/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-video-transcoder/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/video-transcoder/latest
[product-docs]: https://googleapis.dev/nodejs/transcoder/latest
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=transcoder.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
