// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace video. */
        namespace video {

            /** Namespace transcoder. */
            namespace transcoder {

                /** Namespace v1beta1. */
                namespace v1beta1 {

                    /** Properties of a Job. */
                    interface IJob {

                        /** Job name */
                        name?: (string|null);

                        /** Job inputUri */
                        inputUri?: (string|null);

                        /** Job outputUri */
                        outputUri?: (string|null);

                        /** Job templateId */
                        templateId?: (string|null);

                        /** Job config */
                        config?: (google.cloud.video.transcoder.v1beta1.IJobConfig|null);

                        /** Job priority */
                        priority?: (number|null);

                        /** Job originUri */
                        originUri?: (google.cloud.video.transcoder.v1beta1.Job.IOriginUri|null);

                        /** Job state */
                        state?: (google.cloud.video.transcoder.v1beta1.Job.ProcessingState|keyof typeof google.cloud.video.transcoder.v1beta1.Job.ProcessingState|null);

                        /** Job progress */
                        progress?: (google.cloud.video.transcoder.v1beta1.IProgress|null);

                        /** Job failureReason */
                        failureReason?: (string|null);

                        /** Job failureDetails */
                        failureDetails?: (google.cloud.video.transcoder.v1beta1.IFailureDetail[]|null);
                    }

                    /** Represents a Job. */
                    class Job implements IJob {

                        /**
                         * Constructs a new Job.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IJob);

                        /** Job name. */
                        public name: string;

                        /** Job inputUri. */
                        public inputUri: string;

                        /** Job outputUri. */
                        public outputUri: string;

                        /** Job templateId. */
                        public templateId: string;

                        /** Job config. */
                        public config?: (google.cloud.video.transcoder.v1beta1.IJobConfig|null);

                        /** Job priority. */
                        public priority: number;

                        /** Job originUri. */
                        public originUri?: (google.cloud.video.transcoder.v1beta1.Job.IOriginUri|null);

                        /** Job state. */
                        public state: (google.cloud.video.transcoder.v1beta1.Job.ProcessingState|keyof typeof google.cloud.video.transcoder.v1beta1.Job.ProcessingState);

                        /** Job progress. */
                        public progress?: (google.cloud.video.transcoder.v1beta1.IProgress|null);

                        /** Job failureReason. */
                        public failureReason: string;

                        /** Job failureDetails. */
                        public failureDetails: google.cloud.video.transcoder.v1beta1.IFailureDetail[];

                        /** Job jobConfig. */
                        public jobConfig?: ("templateId"|"config");

                        /**
                         * Creates a new Job instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Job instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IJob): google.cloud.video.transcoder.v1beta1.Job;

                        /**
                         * Encodes the specified Job message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Job.verify|verify} messages.
                         * @param message Job message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Job.verify|verify} messages.
                         * @param message Job message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Job message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Job
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Job;

                        /**
                         * Decodes a Job message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Job
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Job;

                        /**
                         * Verifies a Job message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Job message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Job
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Job;

                        /**
                         * Creates a plain object from a Job message. Also converts values to other types if specified.
                         * @param message Job
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Job to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Job {

                        /** Properties of an OriginUri. */
                        interface IOriginUri {

                            /** OriginUri hls */
                            hls?: (string|null);

                            /** OriginUri dash */
                            dash?: (string|null);
                        }

                        /** Represents an OriginUri. */
                        class OriginUri implements IOriginUri {

                            /**
                             * Constructs a new OriginUri.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Job.IOriginUri);

                            /** OriginUri hls. */
                            public hls: string;

                            /** OriginUri dash. */
                            public dash: string;

                            /**
                             * Creates a new OriginUri instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns OriginUri instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Job.IOriginUri): google.cloud.video.transcoder.v1beta1.Job.OriginUri;

                            /**
                             * Encodes the specified OriginUri message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Job.OriginUri.verify|verify} messages.
                             * @param message OriginUri message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Job.IOriginUri, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified OriginUri message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Job.OriginUri.verify|verify} messages.
                             * @param message OriginUri message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Job.IOriginUri, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an OriginUri message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns OriginUri
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Job.OriginUri;

                            /**
                             * Decodes an OriginUri message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns OriginUri
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Job.OriginUri;

                            /**
                             * Verifies an OriginUri message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an OriginUri message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns OriginUri
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Job.OriginUri;

                            /**
                             * Creates a plain object from an OriginUri message. Also converts values to other types if specified.
                             * @param message OriginUri
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Job.OriginUri, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this OriginUri to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** ProcessingState enum. */
                        enum ProcessingState {
                            PROCESSING_STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            RUNNING = 2,
                            SUCCEEDED = 3,
                            FAILED = 4
                        }
                    }

                    /** Properties of a JobTemplate. */
                    interface IJobTemplate {

                        /** JobTemplate name */
                        name?: (string|null);

                        /** JobTemplate config */
                        config?: (google.cloud.video.transcoder.v1beta1.IJobConfig|null);
                    }

                    /** Represents a JobTemplate. */
                    class JobTemplate implements IJobTemplate {

                        /**
                         * Constructs a new JobTemplate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IJobTemplate);

                        /** JobTemplate name. */
                        public name: string;

                        /** JobTemplate config. */
                        public config?: (google.cloud.video.transcoder.v1beta1.IJobConfig|null);

                        /**
                         * Creates a new JobTemplate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobTemplate instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IJobTemplate): google.cloud.video.transcoder.v1beta1.JobTemplate;

                        /**
                         * Encodes the specified JobTemplate message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.JobTemplate.verify|verify} messages.
                         * @param message JobTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IJobTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobTemplate message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.JobTemplate.verify|verify} messages.
                         * @param message JobTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IJobTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobTemplate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.JobTemplate;

                        /**
                         * Decodes a JobTemplate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.JobTemplate;

                        /**
                         * Verifies a JobTemplate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobTemplate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobTemplate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.JobTemplate;

                        /**
                         * Creates a plain object from a JobTemplate message. Also converts values to other types if specified.
                         * @param message JobTemplate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.JobTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobTemplate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a JobConfig. */
                    interface IJobConfig {

                        /** JobConfig inputs */
                        inputs?: (google.cloud.video.transcoder.v1beta1.IInput[]|null);

                        /** JobConfig editList */
                        editList?: (google.cloud.video.transcoder.v1beta1.IEditAtom[]|null);

                        /** JobConfig elementaryStreams */
                        elementaryStreams?: (google.cloud.video.transcoder.v1beta1.IElementaryStream[]|null);

                        /** JobConfig muxStreams */
                        muxStreams?: (google.cloud.video.transcoder.v1beta1.IMuxStream[]|null);

                        /** JobConfig manifests */
                        manifests?: (google.cloud.video.transcoder.v1beta1.IManifest[]|null);

                        /** JobConfig output */
                        output?: (google.cloud.video.transcoder.v1beta1.IOutput|null);

                        /** JobConfig adBreaks */
                        adBreaks?: (google.cloud.video.transcoder.v1beta1.IAdBreak[]|null);

                        /** JobConfig pubsubDestination */
                        pubsubDestination?: (google.cloud.video.transcoder.v1beta1.IPubsubDestination|null);

                        /** JobConfig spriteSheets */
                        spriteSheets?: (google.cloud.video.transcoder.v1beta1.ISpriteSheet[]|null);

                        /** JobConfig overlays */
                        overlays?: (google.cloud.video.transcoder.v1beta1.IOverlay[]|null);
                    }

                    /** Represents a JobConfig. */
                    class JobConfig implements IJobConfig {

                        /**
                         * Constructs a new JobConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IJobConfig);

                        /** JobConfig inputs. */
                        public inputs: google.cloud.video.transcoder.v1beta1.IInput[];

                        /** JobConfig editList. */
                        public editList: google.cloud.video.transcoder.v1beta1.IEditAtom[];

                        /** JobConfig elementaryStreams. */
                        public elementaryStreams: google.cloud.video.transcoder.v1beta1.IElementaryStream[];

                        /** JobConfig muxStreams. */
                        public muxStreams: google.cloud.video.transcoder.v1beta1.IMuxStream[];

                        /** JobConfig manifests. */
                        public manifests: google.cloud.video.transcoder.v1beta1.IManifest[];

                        /** JobConfig output. */
                        public output?: (google.cloud.video.transcoder.v1beta1.IOutput|null);

                        /** JobConfig adBreaks. */
                        public adBreaks: google.cloud.video.transcoder.v1beta1.IAdBreak[];

                        /** JobConfig pubsubDestination. */
                        public pubsubDestination?: (google.cloud.video.transcoder.v1beta1.IPubsubDestination|null);

                        /** JobConfig spriteSheets. */
                        public spriteSheets: google.cloud.video.transcoder.v1beta1.ISpriteSheet[];

                        /** JobConfig overlays. */
                        public overlays: google.cloud.video.transcoder.v1beta1.IOverlay[];

                        /**
                         * Creates a new JobConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobConfig instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IJobConfig): google.cloud.video.transcoder.v1beta1.JobConfig;

                        /**
                         * Encodes the specified JobConfig message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.JobConfig.verify|verify} messages.
                         * @param message JobConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IJobConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobConfig message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.JobConfig.verify|verify} messages.
                         * @param message JobConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IJobConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.JobConfig;

                        /**
                         * Decodes a JobConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.JobConfig;

                        /**
                         * Verifies a JobConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.JobConfig;

                        /**
                         * Creates a plain object from a JobConfig message. Also converts values to other types if specified.
                         * @param message JobConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.JobConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Input. */
                    interface IInput {

                        /** Input key */
                        key?: (string|null);

                        /** Input uri */
                        uri?: (string|null);

                        /** Input preprocessingConfig */
                        preprocessingConfig?: (google.cloud.video.transcoder.v1beta1.IPreprocessingConfig|null);
                    }

                    /** Represents an Input. */
                    class Input implements IInput {

                        /**
                         * Constructs a new Input.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IInput);

                        /** Input key. */
                        public key: string;

                        /** Input uri. */
                        public uri: string;

                        /** Input preprocessingConfig. */
                        public preprocessingConfig?: (google.cloud.video.transcoder.v1beta1.IPreprocessingConfig|null);

                        /**
                         * Creates a new Input instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Input instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IInput): google.cloud.video.transcoder.v1beta1.Input;

                        /**
                         * Encodes the specified Input message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Input.verify|verify} messages.
                         * @param message Input message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Input message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Input.verify|verify} messages.
                         * @param message Input message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Input message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Input
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Input;

                        /**
                         * Decodes an Input message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Input
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Input;

                        /**
                         * Verifies an Input message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Input message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Input
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Input;

                        /**
                         * Creates a plain object from an Input message. Also converts values to other types if specified.
                         * @param message Input
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Input to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Output. */
                    interface IOutput {

                        /** Output uri */
                        uri?: (string|null);
                    }

                    /** Represents an Output. */
                    class Output implements IOutput {

                        /**
                         * Constructs a new Output.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IOutput);

                        /** Output uri. */
                        public uri: string;

                        /**
                         * Creates a new Output instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Output instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IOutput): google.cloud.video.transcoder.v1beta1.Output;

                        /**
                         * Encodes the specified Output message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Output.verify|verify} messages.
                         * @param message Output message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Output message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Output.verify|verify} messages.
                         * @param message Output message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Output message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Output
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Output;

                        /**
                         * Decodes an Output message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Output
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Output;

                        /**
                         * Verifies an Output message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Output message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Output
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Output;

                        /**
                         * Creates a plain object from an Output message. Also converts values to other types if specified.
                         * @param message Output
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Output to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EditAtom. */
                    interface IEditAtom {

                        /** EditAtom key */
                        key?: (string|null);

                        /** EditAtom inputs */
                        inputs?: (string[]|null);

                        /** EditAtom endTimeOffset */
                        endTimeOffset?: (google.protobuf.IDuration|null);

                        /** EditAtom startTimeOffset */
                        startTimeOffset?: (google.protobuf.IDuration|null);
                    }

                    /** Represents an EditAtom. */
                    class EditAtom implements IEditAtom {

                        /**
                         * Constructs a new EditAtom.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IEditAtom);

                        /** EditAtom key. */
                        public key: string;

                        /** EditAtom inputs. */
                        public inputs: string[];

                        /** EditAtom endTimeOffset. */
                        public endTimeOffset?: (google.protobuf.IDuration|null);

                        /** EditAtom startTimeOffset. */
                        public startTimeOffset?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new EditAtom instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EditAtom instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IEditAtom): google.cloud.video.transcoder.v1beta1.EditAtom;

                        /**
                         * Encodes the specified EditAtom message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.EditAtom.verify|verify} messages.
                         * @param message EditAtom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IEditAtom, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EditAtom message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.EditAtom.verify|verify} messages.
                         * @param message EditAtom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IEditAtom, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EditAtom message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EditAtom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.EditAtom;

                        /**
                         * Decodes an EditAtom message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EditAtom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.EditAtom;

                        /**
                         * Verifies an EditAtom message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EditAtom message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EditAtom
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.EditAtom;

                        /**
                         * Creates a plain object from an EditAtom message. Also converts values to other types if specified.
                         * @param message EditAtom
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.EditAtom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EditAtom to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AdBreak. */
                    interface IAdBreak {

                        /** AdBreak startTimeOffset */
                        startTimeOffset?: (google.protobuf.IDuration|null);
                    }

                    /** Represents an AdBreak. */
                    class AdBreak implements IAdBreak {

                        /**
                         * Constructs a new AdBreak.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IAdBreak);

                        /** AdBreak startTimeOffset. */
                        public startTimeOffset?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new AdBreak instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AdBreak instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IAdBreak): google.cloud.video.transcoder.v1beta1.AdBreak;

                        /**
                         * Encodes the specified AdBreak message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AdBreak.verify|verify} messages.
                         * @param message AdBreak message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IAdBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AdBreak message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AdBreak.verify|verify} messages.
                         * @param message AdBreak message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IAdBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AdBreak message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AdBreak
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.AdBreak;

                        /**
                         * Decodes an AdBreak message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AdBreak
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.AdBreak;

                        /**
                         * Verifies an AdBreak message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AdBreak message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AdBreak
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.AdBreak;

                        /**
                         * Creates a plain object from an AdBreak message. Also converts values to other types if specified.
                         * @param message AdBreak
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.AdBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AdBreak to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an ElementaryStream. */
                    interface IElementaryStream {

                        /** ElementaryStream key */
                        key?: (string|null);

                        /** ElementaryStream videoStream */
                        videoStream?: (google.cloud.video.transcoder.v1beta1.IVideoStream|null);

                        /** ElementaryStream audioStream */
                        audioStream?: (google.cloud.video.transcoder.v1beta1.IAudioStream|null);

                        /** ElementaryStream textStream */
                        textStream?: (google.cloud.video.transcoder.v1beta1.ITextStream|null);
                    }

                    /** Represents an ElementaryStream. */
                    class ElementaryStream implements IElementaryStream {

                        /**
                         * Constructs a new ElementaryStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IElementaryStream);

                        /** ElementaryStream key. */
                        public key: string;

                        /** ElementaryStream videoStream. */
                        public videoStream?: (google.cloud.video.transcoder.v1beta1.IVideoStream|null);

                        /** ElementaryStream audioStream. */
                        public audioStream?: (google.cloud.video.transcoder.v1beta1.IAudioStream|null);

                        /** ElementaryStream textStream. */
                        public textStream?: (google.cloud.video.transcoder.v1beta1.ITextStream|null);

                        /** ElementaryStream elementaryStream. */
                        public elementaryStream?: ("videoStream"|"audioStream"|"textStream");

                        /**
                         * Creates a new ElementaryStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ElementaryStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IElementaryStream): google.cloud.video.transcoder.v1beta1.ElementaryStream;

                        /**
                         * Encodes the specified ElementaryStream message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ElementaryStream.verify|verify} messages.
                         * @param message ElementaryStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IElementaryStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ElementaryStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ElementaryStream.verify|verify} messages.
                         * @param message ElementaryStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IElementaryStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ElementaryStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ElementaryStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.ElementaryStream;

                        /**
                         * Decodes an ElementaryStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ElementaryStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.ElementaryStream;

                        /**
                         * Verifies an ElementaryStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ElementaryStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ElementaryStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.ElementaryStream;

                        /**
                         * Creates a plain object from an ElementaryStream message. Also converts values to other types if specified.
                         * @param message ElementaryStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.ElementaryStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ElementaryStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MuxStream. */
                    interface IMuxStream {

                        /** MuxStream key */
                        key?: (string|null);

                        /** MuxStream fileName */
                        fileName?: (string|null);

                        /** MuxStream container */
                        container?: (string|null);

                        /** MuxStream elementaryStreams */
                        elementaryStreams?: (string[]|null);

                        /** MuxStream segmentSettings */
                        segmentSettings?: (google.cloud.video.transcoder.v1beta1.ISegmentSettings|null);

                        /** MuxStream encryption */
                        encryption?: (google.cloud.video.transcoder.v1beta1.IEncryption|null);
                    }

                    /** Represents a MuxStream. */
                    class MuxStream implements IMuxStream {

                        /**
                         * Constructs a new MuxStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IMuxStream);

                        /** MuxStream key. */
                        public key: string;

                        /** MuxStream fileName. */
                        public fileName: string;

                        /** MuxStream container. */
                        public container: string;

                        /** MuxStream elementaryStreams. */
                        public elementaryStreams: string[];

                        /** MuxStream segmentSettings. */
                        public segmentSettings?: (google.cloud.video.transcoder.v1beta1.ISegmentSettings|null);

                        /** MuxStream encryption. */
                        public encryption?: (google.cloud.video.transcoder.v1beta1.IEncryption|null);

                        /**
                         * Creates a new MuxStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MuxStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IMuxStream): google.cloud.video.transcoder.v1beta1.MuxStream;

                        /**
                         * Encodes the specified MuxStream message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.MuxStream.verify|verify} messages.
                         * @param message MuxStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IMuxStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MuxStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.MuxStream.verify|verify} messages.
                         * @param message MuxStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IMuxStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MuxStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MuxStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.MuxStream;

                        /**
                         * Decodes a MuxStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MuxStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.MuxStream;

                        /**
                         * Verifies a MuxStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MuxStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MuxStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.MuxStream;

                        /**
                         * Creates a plain object from a MuxStream message. Also converts values to other types if specified.
                         * @param message MuxStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.MuxStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MuxStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Manifest. */
                    interface IManifest {

                        /** Manifest fileName */
                        fileName?: (string|null);

                        /** Manifest type */
                        type?: (google.cloud.video.transcoder.v1beta1.Manifest.ManifestType|keyof typeof google.cloud.video.transcoder.v1beta1.Manifest.ManifestType|null);

                        /** Manifest muxStreams */
                        muxStreams?: (string[]|null);
                    }

                    /** Represents a Manifest. */
                    class Manifest implements IManifest {

                        /**
                         * Constructs a new Manifest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IManifest);

                        /** Manifest fileName. */
                        public fileName: string;

                        /** Manifest type. */
                        public type: (google.cloud.video.transcoder.v1beta1.Manifest.ManifestType|keyof typeof google.cloud.video.transcoder.v1beta1.Manifest.ManifestType);

                        /** Manifest muxStreams. */
                        public muxStreams: string[];

                        /**
                         * Creates a new Manifest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Manifest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IManifest): google.cloud.video.transcoder.v1beta1.Manifest;

                        /**
                         * Encodes the specified Manifest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Manifest.verify|verify} messages.
                         * @param message Manifest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Manifest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Manifest.verify|verify} messages.
                         * @param message Manifest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Manifest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Manifest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Manifest;

                        /**
                         * Decodes a Manifest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Manifest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Manifest;

                        /**
                         * Verifies a Manifest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Manifest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Manifest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Manifest;

                        /**
                         * Creates a plain object from a Manifest message. Also converts values to other types if specified.
                         * @param message Manifest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.Manifest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Manifest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Manifest {

                        /** ManifestType enum. */
                        enum ManifestType {
                            MANIFEST_TYPE_UNSPECIFIED = 0,
                            HLS = 1,
                            DASH = 2
                        }
                    }

                    /** Properties of a PubsubDestination. */
                    interface IPubsubDestination {

                        /** PubsubDestination topic */
                        topic?: (string|null);
                    }

                    /** Represents a PubsubDestination. */
                    class PubsubDestination implements IPubsubDestination {

                        /**
                         * Constructs a new PubsubDestination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IPubsubDestination);

                        /** PubsubDestination topic. */
                        public topic: string;

                        /**
                         * Creates a new PubsubDestination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PubsubDestination instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IPubsubDestination): google.cloud.video.transcoder.v1beta1.PubsubDestination;

                        /**
                         * Encodes the specified PubsubDestination message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PubsubDestination.verify|verify} messages.
                         * @param message PubsubDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IPubsubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PubsubDestination message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PubsubDestination.verify|verify} messages.
                         * @param message PubsubDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IPubsubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PubsubDestination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PubsubDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.PubsubDestination;

                        /**
                         * Decodes a PubsubDestination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PubsubDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.PubsubDestination;

                        /**
                         * Verifies a PubsubDestination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PubsubDestination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PubsubDestination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.PubsubDestination;

                        /**
                         * Creates a plain object from a PubsubDestination message. Also converts values to other types if specified.
                         * @param message PubsubDestination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.PubsubDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PubsubDestination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SpriteSheet. */
                    interface ISpriteSheet {

                        /** SpriteSheet format */
                        format?: (string|null);

                        /** SpriteSheet filePrefix */
                        filePrefix?: (string|null);

                        /** SpriteSheet spriteWidthPixels */
                        spriteWidthPixels?: (number|null);

                        /** SpriteSheet spriteHeightPixels */
                        spriteHeightPixels?: (number|null);

                        /** SpriteSheet columnCount */
                        columnCount?: (number|null);

                        /** SpriteSheet rowCount */
                        rowCount?: (number|null);

                        /** SpriteSheet startTimeOffset */
                        startTimeOffset?: (google.protobuf.IDuration|null);

                        /** SpriteSheet endTimeOffset */
                        endTimeOffset?: (google.protobuf.IDuration|null);

                        /** SpriteSheet totalCount */
                        totalCount?: (number|null);

                        /** SpriteSheet interval */
                        interval?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a SpriteSheet. */
                    class SpriteSheet implements ISpriteSheet {

                        /**
                         * Constructs a new SpriteSheet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.ISpriteSheet);

                        /** SpriteSheet format. */
                        public format: string;

                        /** SpriteSheet filePrefix. */
                        public filePrefix: string;

                        /** SpriteSheet spriteWidthPixels. */
                        public spriteWidthPixels: number;

                        /** SpriteSheet spriteHeightPixels. */
                        public spriteHeightPixels: number;

                        /** SpriteSheet columnCount. */
                        public columnCount: number;

                        /** SpriteSheet rowCount. */
                        public rowCount: number;

                        /** SpriteSheet startTimeOffset. */
                        public startTimeOffset?: (google.protobuf.IDuration|null);

                        /** SpriteSheet endTimeOffset. */
                        public endTimeOffset?: (google.protobuf.IDuration|null);

                        /** SpriteSheet totalCount. */
                        public totalCount: number;

                        /** SpriteSheet interval. */
                        public interval?: (google.protobuf.IDuration|null);

                        /** SpriteSheet extractionStrategy. */
                        public extractionStrategy?: ("totalCount"|"interval");

                        /**
                         * Creates a new SpriteSheet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SpriteSheet instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.ISpriteSheet): google.cloud.video.transcoder.v1beta1.SpriteSheet;

                        /**
                         * Encodes the specified SpriteSheet message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.SpriteSheet.verify|verify} messages.
                         * @param message SpriteSheet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.ISpriteSheet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SpriteSheet message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.SpriteSheet.verify|verify} messages.
                         * @param message SpriteSheet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.ISpriteSheet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SpriteSheet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SpriteSheet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.SpriteSheet;

                        /**
                         * Decodes a SpriteSheet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SpriteSheet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.SpriteSheet;

                        /**
                         * Verifies a SpriteSheet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SpriteSheet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SpriteSheet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.SpriteSheet;

                        /**
                         * Creates a plain object from a SpriteSheet message. Also converts values to other types if specified.
                         * @param message SpriteSheet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.SpriteSheet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SpriteSheet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Overlay. */
                    interface IOverlay {

                        /** Overlay image */
                        image?: (google.cloud.video.transcoder.v1beta1.Overlay.IImage|null);

                        /** Overlay animations */
                        animations?: (google.cloud.video.transcoder.v1beta1.Overlay.IAnimation[]|null);
                    }

                    /** Represents an Overlay. */
                    class Overlay implements IOverlay {

                        /**
                         * Constructs a new Overlay.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IOverlay);

                        /** Overlay image. */
                        public image?: (google.cloud.video.transcoder.v1beta1.Overlay.IImage|null);

                        /** Overlay animations. */
                        public animations: google.cloud.video.transcoder.v1beta1.Overlay.IAnimation[];

                        /**
                         * Creates a new Overlay instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Overlay instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IOverlay): google.cloud.video.transcoder.v1beta1.Overlay;

                        /**
                         * Encodes the specified Overlay message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.verify|verify} messages.
                         * @param message Overlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Overlay message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.verify|verify} messages.
                         * @param message Overlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Overlay message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Overlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Overlay;

                        /**
                         * Decodes an Overlay message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Overlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Overlay;

                        /**
                         * Verifies an Overlay message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Overlay message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Overlay
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Overlay;

                        /**
                         * Creates a plain object from an Overlay message. Also converts values to other types if specified.
                         * @param message Overlay
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.Overlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Overlay to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Overlay {

                        /** Properties of a NormalizedCoordinate. */
                        interface INormalizedCoordinate {

                            /** NormalizedCoordinate x */
                            x?: (number|null);

                            /** NormalizedCoordinate y */
                            y?: (number|null);
                        }

                        /** Represents a NormalizedCoordinate. */
                        class NormalizedCoordinate implements INormalizedCoordinate {

                            /**
                             * Constructs a new NormalizedCoordinate.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate);

                            /** NormalizedCoordinate x. */
                            public x: number;

                            /** NormalizedCoordinate y. */
                            public y: number;

                            /**
                             * Creates a new NormalizedCoordinate instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns NormalizedCoordinate instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate): google.cloud.video.transcoder.v1beta1.Overlay.NormalizedCoordinate;

                            /**
                             * Encodes the specified NormalizedCoordinate message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.NormalizedCoordinate.verify|verify} messages.
                             * @param message NormalizedCoordinate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified NormalizedCoordinate message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.NormalizedCoordinate.verify|verify} messages.
                             * @param message NormalizedCoordinate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a NormalizedCoordinate message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns NormalizedCoordinate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Overlay.NormalizedCoordinate;

                            /**
                             * Decodes a NormalizedCoordinate message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns NormalizedCoordinate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Overlay.NormalizedCoordinate;

                            /**
                             * Verifies a NormalizedCoordinate message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a NormalizedCoordinate message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns NormalizedCoordinate
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Overlay.NormalizedCoordinate;

                            /**
                             * Creates a plain object from a NormalizedCoordinate message. Also converts values to other types if specified.
                             * @param message NormalizedCoordinate
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Overlay.NormalizedCoordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this NormalizedCoordinate to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an Image. */
                        interface IImage {

                            /** Image uri */
                            uri?: (string|null);

                            /** Image resolution */
                            resolution?: (google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate|null);

                            /** Image alpha */
                            alpha?: (number|null);
                        }

                        /** Represents an Image. */
                        class Image implements IImage {

                            /**
                             * Constructs a new Image.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IImage);

                            /** Image uri. */
                            public uri: string;

                            /** Image resolution. */
                            public resolution?: (google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate|null);

                            /** Image alpha. */
                            public alpha: number;

                            /**
                             * Creates a new Image instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Image instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IImage): google.cloud.video.transcoder.v1beta1.Overlay.Image;

                            /**
                             * Encodes the specified Image message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.Image.verify|verify} messages.
                             * @param message Image message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Overlay.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Image message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.Image.verify|verify} messages.
                             * @param message Image message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Overlay.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Image message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Image
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Overlay.Image;

                            /**
                             * Decodes an Image message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Image
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Overlay.Image;

                            /**
                             * Verifies an Image message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Image message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Image
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Overlay.Image;

                            /**
                             * Creates a plain object from an Image message. Also converts values to other types if specified.
                             * @param message Image
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Overlay.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Image to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an AnimationStatic. */
                        interface IAnimationStatic {

                            /** AnimationStatic xy */
                            xy?: (google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate|null);

                            /** AnimationStatic startTimeOffset */
                            startTimeOffset?: (google.protobuf.IDuration|null);
                        }

                        /** Represents an AnimationStatic. */
                        class AnimationStatic implements IAnimationStatic {

                            /**
                             * Constructs a new AnimationStatic.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationStatic);

                            /** AnimationStatic xy. */
                            public xy?: (google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate|null);

                            /** AnimationStatic startTimeOffset. */
                            public startTimeOffset?: (google.protobuf.IDuration|null);

                            /**
                             * Creates a new AnimationStatic instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnimationStatic instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationStatic): google.cloud.video.transcoder.v1beta1.Overlay.AnimationStatic;

                            /**
                             * Encodes the specified AnimationStatic message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.AnimationStatic.verify|verify} messages.
                             * @param message AnimationStatic message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationStatic, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnimationStatic message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.AnimationStatic.verify|verify} messages.
                             * @param message AnimationStatic message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationStatic, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnimationStatic message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnimationStatic
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Overlay.AnimationStatic;

                            /**
                             * Decodes an AnimationStatic message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnimationStatic
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Overlay.AnimationStatic;

                            /**
                             * Verifies an AnimationStatic message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnimationStatic message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnimationStatic
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Overlay.AnimationStatic;

                            /**
                             * Creates a plain object from an AnimationStatic message. Also converts values to other types if specified.
                             * @param message AnimationStatic
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Overlay.AnimationStatic, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnimationStatic to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an AnimationFade. */
                        interface IAnimationFade {

                            /** AnimationFade fadeType */
                            fadeType?: (google.cloud.video.transcoder.v1beta1.Overlay.FadeType|keyof typeof google.cloud.video.transcoder.v1beta1.Overlay.FadeType|null);

                            /** AnimationFade xy */
                            xy?: (google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate|null);

                            /** AnimationFade startTimeOffset */
                            startTimeOffset?: (google.protobuf.IDuration|null);

                            /** AnimationFade endTimeOffset */
                            endTimeOffset?: (google.protobuf.IDuration|null);
                        }

                        /** Represents an AnimationFade. */
                        class AnimationFade implements IAnimationFade {

                            /**
                             * Constructs a new AnimationFade.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationFade);

                            /** AnimationFade fadeType. */
                            public fadeType: (google.cloud.video.transcoder.v1beta1.Overlay.FadeType|keyof typeof google.cloud.video.transcoder.v1beta1.Overlay.FadeType);

                            /** AnimationFade xy. */
                            public xy?: (google.cloud.video.transcoder.v1beta1.Overlay.INormalizedCoordinate|null);

                            /** AnimationFade startTimeOffset. */
                            public startTimeOffset?: (google.protobuf.IDuration|null);

                            /** AnimationFade endTimeOffset. */
                            public endTimeOffset?: (google.protobuf.IDuration|null);

                            /**
                             * Creates a new AnimationFade instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnimationFade instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationFade): google.cloud.video.transcoder.v1beta1.Overlay.AnimationFade;

                            /**
                             * Encodes the specified AnimationFade message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.AnimationFade.verify|verify} messages.
                             * @param message AnimationFade message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationFade, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnimationFade message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.AnimationFade.verify|verify} messages.
                             * @param message AnimationFade message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationFade, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnimationFade message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnimationFade
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Overlay.AnimationFade;

                            /**
                             * Decodes an AnimationFade message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnimationFade
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Overlay.AnimationFade;

                            /**
                             * Verifies an AnimationFade message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnimationFade message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnimationFade
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Overlay.AnimationFade;

                            /**
                             * Creates a plain object from an AnimationFade message. Also converts values to other types if specified.
                             * @param message AnimationFade
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Overlay.AnimationFade, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnimationFade to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an AnimationEnd. */
                        interface IAnimationEnd {

                            /** AnimationEnd startTimeOffset */
                            startTimeOffset?: (google.protobuf.IDuration|null);
                        }

                        /** Represents an AnimationEnd. */
                        class AnimationEnd implements IAnimationEnd {

                            /**
                             * Constructs a new AnimationEnd.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationEnd);

                            /** AnimationEnd startTimeOffset. */
                            public startTimeOffset?: (google.protobuf.IDuration|null);

                            /**
                             * Creates a new AnimationEnd instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnimationEnd instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationEnd): google.cloud.video.transcoder.v1beta1.Overlay.AnimationEnd;

                            /**
                             * Encodes the specified AnimationEnd message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.AnimationEnd.verify|verify} messages.
                             * @param message AnimationEnd message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationEnd, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnimationEnd message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.AnimationEnd.verify|verify} messages.
                             * @param message AnimationEnd message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Overlay.IAnimationEnd, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnimationEnd message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnimationEnd
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Overlay.AnimationEnd;

                            /**
                             * Decodes an AnimationEnd message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnimationEnd
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Overlay.AnimationEnd;

                            /**
                             * Verifies an AnimationEnd message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnimationEnd message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnimationEnd
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Overlay.AnimationEnd;

                            /**
                             * Creates a plain object from an AnimationEnd message. Also converts values to other types if specified.
                             * @param message AnimationEnd
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Overlay.AnimationEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnimationEnd to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an Animation. */
                        interface IAnimation {

                            /** Animation animationStatic */
                            animationStatic?: (google.cloud.video.transcoder.v1beta1.Overlay.IAnimationStatic|null);

                            /** Animation animationFade */
                            animationFade?: (google.cloud.video.transcoder.v1beta1.Overlay.IAnimationFade|null);

                            /** Animation animationEnd */
                            animationEnd?: (google.cloud.video.transcoder.v1beta1.Overlay.IAnimationEnd|null);
                        }

                        /** Represents an Animation. */
                        class Animation implements IAnimation {

                            /**
                             * Constructs a new Animation.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IAnimation);

                            /** Animation animationStatic. */
                            public animationStatic?: (google.cloud.video.transcoder.v1beta1.Overlay.IAnimationStatic|null);

                            /** Animation animationFade. */
                            public animationFade?: (google.cloud.video.transcoder.v1beta1.Overlay.IAnimationFade|null);

                            /** Animation animationEnd. */
                            public animationEnd?: (google.cloud.video.transcoder.v1beta1.Overlay.IAnimationEnd|null);

                            /** Animation animationType. */
                            public animationType?: ("animationStatic"|"animationFade"|"animationEnd");

                            /**
                             * Creates a new Animation instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Animation instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Overlay.IAnimation): google.cloud.video.transcoder.v1beta1.Overlay.Animation;

                            /**
                             * Encodes the specified Animation message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.Animation.verify|verify} messages.
                             * @param message Animation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Overlay.IAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Animation message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Overlay.Animation.verify|verify} messages.
                             * @param message Animation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Overlay.IAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Animation message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Animation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Overlay.Animation;

                            /**
                             * Decodes an Animation message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Animation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Overlay.Animation;

                            /**
                             * Verifies an Animation message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Animation message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Animation
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Overlay.Animation;

                            /**
                             * Creates a plain object from an Animation message. Also converts values to other types if specified.
                             * @param message Animation
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Overlay.Animation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Animation to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** FadeType enum. */
                        enum FadeType {
                            FADE_TYPE_UNSPECIFIED = 0,
                            FADE_IN = 1,
                            FADE_OUT = 2
                        }
                    }

                    /** Properties of a PreprocessingConfig. */
                    interface IPreprocessingConfig {

                        /** PreprocessingConfig color */
                        color?: (google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IColor|null);

                        /** PreprocessingConfig denoise */
                        denoise?: (google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDenoise|null);

                        /** PreprocessingConfig deblock */
                        deblock?: (google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDeblock|null);

                        /** PreprocessingConfig audio */
                        audio?: (google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IAudio|null);
                    }

                    /** Represents a PreprocessingConfig. */
                    class PreprocessingConfig implements IPreprocessingConfig {

                        /**
                         * Constructs a new PreprocessingConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IPreprocessingConfig);

                        /** PreprocessingConfig color. */
                        public color?: (google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IColor|null);

                        /** PreprocessingConfig denoise. */
                        public denoise?: (google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDenoise|null);

                        /** PreprocessingConfig deblock. */
                        public deblock?: (google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDeblock|null);

                        /** PreprocessingConfig audio. */
                        public audio?: (google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IAudio|null);

                        /**
                         * Creates a new PreprocessingConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PreprocessingConfig instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IPreprocessingConfig): google.cloud.video.transcoder.v1beta1.PreprocessingConfig;

                        /**
                         * Encodes the specified PreprocessingConfig message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.verify|verify} messages.
                         * @param message PreprocessingConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IPreprocessingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PreprocessingConfig message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.verify|verify} messages.
                         * @param message PreprocessingConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IPreprocessingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PreprocessingConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PreprocessingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.PreprocessingConfig;

                        /**
                         * Decodes a PreprocessingConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PreprocessingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.PreprocessingConfig;

                        /**
                         * Verifies a PreprocessingConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PreprocessingConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PreprocessingConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.PreprocessingConfig;

                        /**
                         * Creates a plain object from a PreprocessingConfig message. Also converts values to other types if specified.
                         * @param message PreprocessingConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PreprocessingConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace PreprocessingConfig {

                        /** Properties of a Color. */
                        interface IColor {

                            /** Color saturation */
                            saturation?: (number|null);

                            /** Color contrast */
                            contrast?: (number|null);

                            /** Color brightness */
                            brightness?: (number|null);
                        }

                        /** Represents a Color. */
                        class Color implements IColor {

                            /**
                             * Constructs a new Color.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IColor);

                            /** Color saturation. */
                            public saturation: number;

                            /** Color contrast. */
                            public contrast: number;

                            /** Color brightness. */
                            public brightness: number;

                            /**
                             * Creates a new Color instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Color instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IColor): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Color;

                            /**
                             * Encodes the specified Color message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Color.verify|verify} messages.
                             * @param message Color message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Color message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Color.verify|verify} messages.
                             * @param message Color message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Color message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Color
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Color;

                            /**
                             * Decodes a Color message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Color
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Color;

                            /**
                             * Verifies a Color message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Color message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Color
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Color;

                            /**
                             * Creates a plain object from a Color message. Also converts values to other types if specified.
                             * @param message Color
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Color to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Denoise. */
                        interface IDenoise {

                            /** Denoise strength */
                            strength?: (number|null);

                            /** Denoise tune */
                            tune?: (string|null);
                        }

                        /** Represents a Denoise. */
                        class Denoise implements IDenoise {

                            /**
                             * Constructs a new Denoise.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDenoise);

                            /** Denoise strength. */
                            public strength: number;

                            /** Denoise tune. */
                            public tune: string;

                            /**
                             * Creates a new Denoise instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Denoise instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDenoise): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Denoise;

                            /**
                             * Encodes the specified Denoise message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Denoise.verify|verify} messages.
                             * @param message Denoise message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDenoise, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Denoise message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Denoise.verify|verify} messages.
                             * @param message Denoise message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDenoise, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Denoise message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Denoise
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Denoise;

                            /**
                             * Decodes a Denoise message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Denoise
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Denoise;

                            /**
                             * Verifies a Denoise message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Denoise message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Denoise
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Denoise;

                            /**
                             * Creates a plain object from a Denoise message. Also converts values to other types if specified.
                             * @param message Denoise
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Denoise, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Denoise to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Deblock. */
                        interface IDeblock {

                            /** Deblock strength */
                            strength?: (number|null);

                            /** Deblock enabled */
                            enabled?: (boolean|null);
                        }

                        /** Represents a Deblock. */
                        class Deblock implements IDeblock {

                            /**
                             * Constructs a new Deblock.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDeblock);

                            /** Deblock strength. */
                            public strength: number;

                            /** Deblock enabled. */
                            public enabled: boolean;

                            /**
                             * Creates a new Deblock instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Deblock instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDeblock): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Deblock;

                            /**
                             * Encodes the specified Deblock message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Deblock.verify|verify} messages.
                             * @param message Deblock message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDeblock, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Deblock message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Deblock.verify|verify} messages.
                             * @param message Deblock message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IDeblock, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Deblock message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Deblock
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Deblock;

                            /**
                             * Decodes a Deblock message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Deblock
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Deblock;

                            /**
                             * Verifies a Deblock message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Deblock message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Deblock
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Deblock;

                            /**
                             * Creates a plain object from a Deblock message. Also converts values to other types if specified.
                             * @param message Deblock
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Deblock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Deblock to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an Audio. */
                        interface IAudio {

                            /** Audio lufs */
                            lufs?: (number|null);

                            /** Audio highBoost */
                            highBoost?: (boolean|null);

                            /** Audio lowBoost */
                            lowBoost?: (boolean|null);
                        }

                        /** Represents an Audio. */
                        class Audio implements IAudio {

                            /**
                             * Constructs a new Audio.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IAudio);

                            /** Audio lufs. */
                            public lufs: number;

                            /** Audio highBoost. */
                            public highBoost: boolean;

                            /** Audio lowBoost. */
                            public lowBoost: boolean;

                            /**
                             * Creates a new Audio instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Audio instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IAudio): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Audio;

                            /**
                             * Encodes the specified Audio message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Audio.verify|verify} messages.
                             * @param message Audio message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Audio message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Audio.verify|verify} messages.
                             * @param message Audio message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Audio message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Audio
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Audio;

                            /**
                             * Decodes an Audio message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Audio
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Audio;

                            /**
                             * Verifies an Audio message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Audio message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Audio
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Audio;

                            /**
                             * Creates a plain object from an Audio message. Also converts values to other types if specified.
                             * @param message Audio
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.PreprocessingConfig.Audio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Audio to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a VideoStream. */
                    interface IVideoStream {

                        /** VideoStream codec */
                        codec?: (string|null);

                        /** VideoStream profile */
                        profile?: (string|null);

                        /** VideoStream tune */
                        tune?: (string|null);

                        /** VideoStream preset */
                        preset?: (string|null);

                        /** VideoStream heightPixels */
                        heightPixels?: (number|null);

                        /** VideoStream widthPixels */
                        widthPixels?: (number|null);

                        /** VideoStream pixelFormat */
                        pixelFormat?: (string|null);

                        /** VideoStream bitrateBps */
                        bitrateBps?: (number|null);

                        /** VideoStream rateControlMode */
                        rateControlMode?: (string|null);

                        /** VideoStream enableTwoPass */
                        enableTwoPass?: (boolean|null);

                        /** VideoStream crfLevel */
                        crfLevel?: (number|null);

                        /** VideoStream vbvSizeBits */
                        vbvSizeBits?: (number|null);

                        /** VideoStream vbvFullnessBits */
                        vbvFullnessBits?: (number|null);

                        /** VideoStream allowOpenGop */
                        allowOpenGop?: (boolean|null);

                        /** VideoStream gopFrameCount */
                        gopFrameCount?: (number|null);

                        /** VideoStream gopDuration */
                        gopDuration?: (google.protobuf.IDuration|null);

                        /** VideoStream entropyCoder */
                        entropyCoder?: (string|null);

                        /** VideoStream bPyramid */
                        bPyramid?: (boolean|null);

                        /** VideoStream bFrameCount */
                        bFrameCount?: (number|null);

                        /** VideoStream frameRate */
                        frameRate?: (number|null);

                        /** VideoStream aqStrength */
                        aqStrength?: (number|null);
                    }

                    /** Represents a VideoStream. */
                    class VideoStream implements IVideoStream {

                        /**
                         * Constructs a new VideoStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IVideoStream);

                        /** VideoStream codec. */
                        public codec: string;

                        /** VideoStream profile. */
                        public profile: string;

                        /** VideoStream tune. */
                        public tune: string;

                        /** VideoStream preset. */
                        public preset: string;

                        /** VideoStream heightPixels. */
                        public heightPixels: number;

                        /** VideoStream widthPixels. */
                        public widthPixels: number;

                        /** VideoStream pixelFormat. */
                        public pixelFormat: string;

                        /** VideoStream bitrateBps. */
                        public bitrateBps: number;

                        /** VideoStream rateControlMode. */
                        public rateControlMode: string;

                        /** VideoStream enableTwoPass. */
                        public enableTwoPass: boolean;

                        /** VideoStream crfLevel. */
                        public crfLevel: number;

                        /** VideoStream vbvSizeBits. */
                        public vbvSizeBits: number;

                        /** VideoStream vbvFullnessBits. */
                        public vbvFullnessBits: number;

                        /** VideoStream allowOpenGop. */
                        public allowOpenGop: boolean;

                        /** VideoStream gopFrameCount. */
                        public gopFrameCount: number;

                        /** VideoStream gopDuration. */
                        public gopDuration?: (google.protobuf.IDuration|null);

                        /** VideoStream entropyCoder. */
                        public entropyCoder: string;

                        /** VideoStream bPyramid. */
                        public bPyramid: boolean;

                        /** VideoStream bFrameCount. */
                        public bFrameCount: number;

                        /** VideoStream frameRate. */
                        public frameRate: number;

                        /** VideoStream aqStrength. */
                        public aqStrength: number;

                        /** VideoStream gopMode. */
                        public gopMode?: ("gopFrameCount"|"gopDuration");

                        /**
                         * Creates a new VideoStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IVideoStream): google.cloud.video.transcoder.v1beta1.VideoStream;

                        /**
                         * Encodes the specified VideoStream message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.VideoStream.verify|verify} messages.
                         * @param message VideoStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IVideoStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VideoStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.VideoStream.verify|verify} messages.
                         * @param message VideoStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IVideoStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VideoStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.VideoStream;

                        /**
                         * Decodes a VideoStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.VideoStream;

                        /**
                         * Verifies a VideoStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VideoStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.VideoStream;

                        /**
                         * Creates a plain object from a VideoStream message. Also converts values to other types if specified.
                         * @param message VideoStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.VideoStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VideoStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AudioStream. */
                    interface IAudioStream {

                        /** AudioStream codec */
                        codec?: (string|null);

                        /** AudioStream bitrateBps */
                        bitrateBps?: (number|null);

                        /** AudioStream channelCount */
                        channelCount?: (number|null);

                        /** AudioStream channelLayout */
                        channelLayout?: (string[]|null);

                        /** AudioStream mapping */
                        mapping?: (google.cloud.video.transcoder.v1beta1.AudioStream.IAudioAtom[]|null);

                        /** AudioStream sampleRateHertz */
                        sampleRateHertz?: (number|null);
                    }

                    /** Represents an AudioStream. */
                    class AudioStream implements IAudioStream {

                        /**
                         * Constructs a new AudioStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IAudioStream);

                        /** AudioStream codec. */
                        public codec: string;

                        /** AudioStream bitrateBps. */
                        public bitrateBps: number;

                        /** AudioStream channelCount. */
                        public channelCount: number;

                        /** AudioStream channelLayout. */
                        public channelLayout: string[];

                        /** AudioStream mapping. */
                        public mapping: google.cloud.video.transcoder.v1beta1.AudioStream.IAudioAtom[];

                        /** AudioStream sampleRateHertz. */
                        public sampleRateHertz: number;

                        /**
                         * Creates a new AudioStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AudioStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IAudioStream): google.cloud.video.transcoder.v1beta1.AudioStream;

                        /**
                         * Encodes the specified AudioStream message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AudioStream.verify|verify} messages.
                         * @param message AudioStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IAudioStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AudioStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AudioStream.verify|verify} messages.
                         * @param message AudioStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IAudioStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AudioStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AudioStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.AudioStream;

                        /**
                         * Decodes an AudioStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AudioStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.AudioStream;

                        /**
                         * Verifies an AudioStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AudioStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AudioStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.AudioStream;

                        /**
                         * Creates a plain object from an AudioStream message. Also converts values to other types if specified.
                         * @param message AudioStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.AudioStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AudioStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace AudioStream {

                        /** Properties of an AudioAtom. */
                        interface IAudioAtom {

                            /** AudioAtom key */
                            key?: (string|null);

                            /** AudioAtom channels */
                            channels?: (google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.IAudioChannel[]|null);
                        }

                        /** Represents an AudioAtom. */
                        class AudioAtom implements IAudioAtom {

                            /**
                             * Constructs a new AudioAtom.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.AudioStream.IAudioAtom);

                            /** AudioAtom key. */
                            public key: string;

                            /** AudioAtom channels. */
                            public channels: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.IAudioChannel[];

                            /**
                             * Creates a new AudioAtom instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AudioAtom instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.AudioStream.IAudioAtom): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom;

                            /**
                             * Encodes the specified AudioAtom message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.verify|verify} messages.
                             * @param message AudioAtom message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.AudioStream.IAudioAtom, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AudioAtom message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.verify|verify} messages.
                             * @param message AudioAtom message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.AudioStream.IAudioAtom, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AudioAtom message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AudioAtom
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom;

                            /**
                             * Decodes an AudioAtom message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AudioAtom
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom;

                            /**
                             * Verifies an AudioAtom message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AudioAtom message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AudioAtom
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom;

                            /**
                             * Creates a plain object from an AudioAtom message. Also converts values to other types if specified.
                             * @param message AudioAtom
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AudioAtom to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace AudioAtom {

                            /** Properties of an AudioChannel. */
                            interface IAudioChannel {

                                /** AudioChannel inputs */
                                inputs?: (google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.IAudioChannelInput[]|null);
                            }

                            /** Represents an AudioChannel. */
                            class AudioChannel implements IAudioChannel {

                                /**
                                 * Constructs a new AudioChannel.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.IAudioChannel);

                                /** AudioChannel inputs. */
                                public inputs: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.IAudioChannelInput[];

                                /**
                                 * Creates a new AudioChannel instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AudioChannel instance
                                 */
                                public static create(properties?: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.IAudioChannel): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel;

                                /**
                                 * Encodes the specified AudioChannel message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.verify|verify} messages.
                                 * @param message AudioChannel message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.IAudioChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified AudioChannel message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.verify|verify} messages.
                                 * @param message AudioChannel message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.IAudioChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an AudioChannel message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AudioChannel
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel;

                                /**
                                 * Decodes an AudioChannel message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AudioChannel
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel;

                                /**
                                 * Verifies an AudioChannel message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AudioChannel message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AudioChannel
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel;

                                /**
                                 * Creates a plain object from an AudioChannel message. Also converts values to other types if specified.
                                 * @param message AudioChannel
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AudioChannel to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            namespace AudioChannel {

                                /** Properties of an AudioChannelInput. */
                                interface IAudioChannelInput {

                                    /** AudioChannelInput key */
                                    key?: (string|null);

                                    /** AudioChannelInput track */
                                    track?: (number|null);

                                    /** AudioChannelInput channel */
                                    channel?: (number|null);

                                    /** AudioChannelInput gainDb */
                                    gainDb?: (number|null);
                                }

                                /** Represents an AudioChannelInput. */
                                class AudioChannelInput implements IAudioChannelInput {

                                    /**
                                     * Constructs a new AudioChannelInput.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.IAudioChannelInput);

                                    /** AudioChannelInput key. */
                                    public key: string;

                                    /** AudioChannelInput track. */
                                    public track: number;

                                    /** AudioChannelInput channel. */
                                    public channel: number;

                                    /** AudioChannelInput gainDb. */
                                    public gainDb: number;

                                    /**
                                     * Creates a new AudioChannelInput instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns AudioChannelInput instance
                                     */
                                    public static create(properties?: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.IAudioChannelInput): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.AudioChannelInput;

                                    /**
                                     * Encodes the specified AudioChannelInput message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.AudioChannelInput.verify|verify} messages.
                                     * @param message AudioChannelInput message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.IAudioChannelInput, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified AudioChannelInput message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.AudioChannelInput.verify|verify} messages.
                                     * @param message AudioChannelInput message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.IAudioChannelInput, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an AudioChannelInput message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns AudioChannelInput
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.AudioChannelInput;

                                    /**
                                     * Decodes an AudioChannelInput message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns AudioChannelInput
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.AudioChannelInput;

                                    /**
                                     * Verifies an AudioChannelInput message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an AudioChannelInput message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns AudioChannelInput
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.AudioChannelInput;

                                    /**
                                     * Creates a plain object from an AudioChannelInput message. Also converts values to other types if specified.
                                     * @param message AudioChannelInput
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.cloud.video.transcoder.v1beta1.AudioStream.AudioAtom.AudioChannel.AudioChannelInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this AudioChannelInput to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };
                                }
                            }
                        }
                    }

                    /** Properties of a TextStream. */
                    interface ITextStream {

                        /** TextStream codec */
                        codec?: (string|null);

                        /** TextStream languageCode */
                        languageCode?: (string|null);

                        /** TextStream mapping */
                        mapping?: (google.cloud.video.transcoder.v1beta1.TextStream.ITextAtom[]|null);
                    }

                    /** Represents a TextStream. */
                    class TextStream implements ITextStream {

                        /**
                         * Constructs a new TextStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.ITextStream);

                        /** TextStream codec. */
                        public codec: string;

                        /** TextStream languageCode. */
                        public languageCode: string;

                        /** TextStream mapping. */
                        public mapping: google.cloud.video.transcoder.v1beta1.TextStream.ITextAtom[];

                        /**
                         * Creates a new TextStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.ITextStream): google.cloud.video.transcoder.v1beta1.TextStream;

                        /**
                         * Encodes the specified TextStream message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.TextStream.verify|verify} messages.
                         * @param message TextStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.ITextStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.TextStream.verify|verify} messages.
                         * @param message TextStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.ITextStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.TextStream;

                        /**
                         * Decodes a TextStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.TextStream;

                        /**
                         * Verifies a TextStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.TextStream;

                        /**
                         * Creates a plain object from a TextStream message. Also converts values to other types if specified.
                         * @param message TextStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.TextStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace TextStream {

                        /** Properties of a TextAtom. */
                        interface ITextAtom {

                            /** TextAtom key */
                            key?: (string|null);

                            /** TextAtom inputs */
                            inputs?: (google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.ITextInput[]|null);
                        }

                        /** Represents a TextAtom. */
                        class TextAtom implements ITextAtom {

                            /**
                             * Constructs a new TextAtom.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.TextStream.ITextAtom);

                            /** TextAtom key. */
                            public key: string;

                            /** TextAtom inputs. */
                            public inputs: google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.ITextInput[];

                            /**
                             * Creates a new TextAtom instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TextAtom instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.TextStream.ITextAtom): google.cloud.video.transcoder.v1beta1.TextStream.TextAtom;

                            /**
                             * Encodes the specified TextAtom message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.verify|verify} messages.
                             * @param message TextAtom message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.TextStream.ITextAtom, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TextAtom message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.verify|verify} messages.
                             * @param message TextAtom message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.TextStream.ITextAtom, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TextAtom message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TextAtom
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.TextStream.TextAtom;

                            /**
                             * Decodes a TextAtom message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TextAtom
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.TextStream.TextAtom;

                            /**
                             * Verifies a TextAtom message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TextAtom message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TextAtom
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.TextStream.TextAtom;

                            /**
                             * Creates a plain object from a TextAtom message. Also converts values to other types if specified.
                             * @param message TextAtom
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.TextStream.TextAtom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TextAtom to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace TextAtom {

                            /** Properties of a TextInput. */
                            interface ITextInput {

                                /** TextInput key */
                                key?: (string|null);

                                /** TextInput track */
                                track?: (number|null);
                            }

                            /** Represents a TextInput. */
                            class TextInput implements ITextInput {

                                /**
                                 * Constructs a new TextInput.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.ITextInput);

                                /** TextInput key. */
                                public key: string;

                                /** TextInput track. */
                                public track: number;

                                /**
                                 * Creates a new TextInput instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns TextInput instance
                                 */
                                public static create(properties?: google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.ITextInput): google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.TextInput;

                                /**
                                 * Encodes the specified TextInput message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.TextInput.verify|verify} messages.
                                 * @param message TextInput message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified TextInput message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.TextInput.verify|verify} messages.
                                 * @param message TextInput message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a TextInput message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns TextInput
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.TextInput;

                                /**
                                 * Decodes a TextInput message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns TextInput
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.TextInput;

                                /**
                                 * Verifies a TextInput message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a TextInput message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns TextInput
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.TextInput;

                                /**
                                 * Creates a plain object from a TextInput message. Also converts values to other types if specified.
                                 * @param message TextInput
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.video.transcoder.v1beta1.TextStream.TextAtom.TextInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this TextInput to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }
                    }

                    /** Properties of a SegmentSettings. */
                    interface ISegmentSettings {

                        /** SegmentSettings segmentDuration */
                        segmentDuration?: (google.protobuf.IDuration|null);

                        /** SegmentSettings individualSegments */
                        individualSegments?: (boolean|null);
                    }

                    /** Represents a SegmentSettings. */
                    class SegmentSettings implements ISegmentSettings {

                        /**
                         * Constructs a new SegmentSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.ISegmentSettings);

                        /** SegmentSettings segmentDuration. */
                        public segmentDuration?: (google.protobuf.IDuration|null);

                        /** SegmentSettings individualSegments. */
                        public individualSegments: boolean;

                        /**
                         * Creates a new SegmentSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SegmentSettings instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.ISegmentSettings): google.cloud.video.transcoder.v1beta1.SegmentSettings;

                        /**
                         * Encodes the specified SegmentSettings message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.SegmentSettings.verify|verify} messages.
                         * @param message SegmentSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.ISegmentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SegmentSettings message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.SegmentSettings.verify|verify} messages.
                         * @param message SegmentSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.ISegmentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SegmentSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SegmentSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.SegmentSettings;

                        /**
                         * Decodes a SegmentSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SegmentSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.SegmentSettings;

                        /**
                         * Verifies a SegmentSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SegmentSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SegmentSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.SegmentSettings;

                        /**
                         * Creates a plain object from a SegmentSettings message. Also converts values to other types if specified.
                         * @param message SegmentSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.SegmentSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SegmentSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Encryption. */
                    interface IEncryption {

                        /** Encryption key */
                        key?: (string|null);

                        /** Encryption iv */
                        iv?: (string|null);

                        /** Encryption aes_128 */
                        aes_128?: (google.cloud.video.transcoder.v1beta1.Encryption.IAes128Encryption|null);

                        /** Encryption sampleAes */
                        sampleAes?: (google.cloud.video.transcoder.v1beta1.Encryption.ISampleAesEncryption|null);

                        /** Encryption mpegCenc */
                        mpegCenc?: (google.cloud.video.transcoder.v1beta1.Encryption.IMpegCommonEncryption|null);
                    }

                    /** Represents an Encryption. */
                    class Encryption implements IEncryption {

                        /**
                         * Constructs a new Encryption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IEncryption);

                        /** Encryption key. */
                        public key: string;

                        /** Encryption iv. */
                        public iv: string;

                        /** Encryption aes_128. */
                        public aes_128?: (google.cloud.video.transcoder.v1beta1.Encryption.IAes128Encryption|null);

                        /** Encryption sampleAes. */
                        public sampleAes?: (google.cloud.video.transcoder.v1beta1.Encryption.ISampleAesEncryption|null);

                        /** Encryption mpegCenc. */
                        public mpegCenc?: (google.cloud.video.transcoder.v1beta1.Encryption.IMpegCommonEncryption|null);

                        /** Encryption encryptionMode. */
                        public encryptionMode?: ("aes_128"|"sampleAes"|"mpegCenc");

                        /**
                         * Creates a new Encryption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Encryption instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IEncryption): google.cloud.video.transcoder.v1beta1.Encryption;

                        /**
                         * Encodes the specified Encryption message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Encryption.verify|verify} messages.
                         * @param message Encryption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Encryption message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Encryption.verify|verify} messages.
                         * @param message Encryption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Encryption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Encryption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Encryption;

                        /**
                         * Decodes an Encryption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Encryption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Encryption;

                        /**
                         * Verifies an Encryption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Encryption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Encryption
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Encryption;

                        /**
                         * Creates a plain object from an Encryption message. Also converts values to other types if specified.
                         * @param message Encryption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.Encryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Encryption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Encryption {

                        /** Properties of an Aes128Encryption. */
                        interface IAes128Encryption {

                            /** Aes128Encryption keyUri */
                            keyUri?: (string|null);
                        }

                        /** Represents an Aes128Encryption. */
                        class Aes128Encryption implements IAes128Encryption {

                            /**
                             * Constructs a new Aes128Encryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Encryption.IAes128Encryption);

                            /** Aes128Encryption keyUri. */
                            public keyUri: string;

                            /**
                             * Creates a new Aes128Encryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Aes128Encryption instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Encryption.IAes128Encryption): google.cloud.video.transcoder.v1beta1.Encryption.Aes128Encryption;

                            /**
                             * Encodes the specified Aes128Encryption message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Encryption.Aes128Encryption.verify|verify} messages.
                             * @param message Aes128Encryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Encryption.IAes128Encryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Aes128Encryption message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Encryption.Aes128Encryption.verify|verify} messages.
                             * @param message Aes128Encryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Encryption.IAes128Encryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Aes128Encryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Aes128Encryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Encryption.Aes128Encryption;

                            /**
                             * Decodes an Aes128Encryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Aes128Encryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Encryption.Aes128Encryption;

                            /**
                             * Verifies an Aes128Encryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Aes128Encryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Aes128Encryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Encryption.Aes128Encryption;

                            /**
                             * Creates a plain object from an Aes128Encryption message. Also converts values to other types if specified.
                             * @param message Aes128Encryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Encryption.Aes128Encryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Aes128Encryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SampleAesEncryption. */
                        interface ISampleAesEncryption {

                            /** SampleAesEncryption keyUri */
                            keyUri?: (string|null);
                        }

                        /** Represents a SampleAesEncryption. */
                        class SampleAesEncryption implements ISampleAesEncryption {

                            /**
                             * Constructs a new SampleAesEncryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Encryption.ISampleAesEncryption);

                            /** SampleAesEncryption keyUri. */
                            public keyUri: string;

                            /**
                             * Creates a new SampleAesEncryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SampleAesEncryption instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Encryption.ISampleAesEncryption): google.cloud.video.transcoder.v1beta1.Encryption.SampleAesEncryption;

                            /**
                             * Encodes the specified SampleAesEncryption message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Encryption.SampleAesEncryption.verify|verify} messages.
                             * @param message SampleAesEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Encryption.ISampleAesEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SampleAesEncryption message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Encryption.SampleAesEncryption.verify|verify} messages.
                             * @param message SampleAesEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Encryption.ISampleAesEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SampleAesEncryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SampleAesEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Encryption.SampleAesEncryption;

                            /**
                             * Decodes a SampleAesEncryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SampleAesEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Encryption.SampleAesEncryption;

                            /**
                             * Verifies a SampleAesEncryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SampleAesEncryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SampleAesEncryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Encryption.SampleAesEncryption;

                            /**
                             * Creates a plain object from a SampleAesEncryption message. Also converts values to other types if specified.
                             * @param message SampleAesEncryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Encryption.SampleAesEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SampleAesEncryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a MpegCommonEncryption. */
                        interface IMpegCommonEncryption {

                            /** MpegCommonEncryption keyId */
                            keyId?: (string|null);

                            /** MpegCommonEncryption scheme */
                            scheme?: (string|null);
                        }

                        /** Represents a MpegCommonEncryption. */
                        class MpegCommonEncryption implements IMpegCommonEncryption {

                            /**
                             * Constructs a new MpegCommonEncryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1beta1.Encryption.IMpegCommonEncryption);

                            /** MpegCommonEncryption keyId. */
                            public keyId: string;

                            /** MpegCommonEncryption scheme. */
                            public scheme: string;

                            /**
                             * Creates a new MpegCommonEncryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MpegCommonEncryption instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1beta1.Encryption.IMpegCommonEncryption): google.cloud.video.transcoder.v1beta1.Encryption.MpegCommonEncryption;

                            /**
                             * Encodes the specified MpegCommonEncryption message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Encryption.MpegCommonEncryption.verify|verify} messages.
                             * @param message MpegCommonEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1beta1.Encryption.IMpegCommonEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MpegCommonEncryption message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Encryption.MpegCommonEncryption.verify|verify} messages.
                             * @param message MpegCommonEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.Encryption.IMpegCommonEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MpegCommonEncryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MpegCommonEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Encryption.MpegCommonEncryption;

                            /**
                             * Decodes a MpegCommonEncryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MpegCommonEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Encryption.MpegCommonEncryption;

                            /**
                             * Verifies a MpegCommonEncryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MpegCommonEncryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MpegCommonEncryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Encryption.MpegCommonEncryption;

                            /**
                             * Creates a plain object from a MpegCommonEncryption message. Also converts values to other types if specified.
                             * @param message MpegCommonEncryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1beta1.Encryption.MpegCommonEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MpegCommonEncryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a Progress. */
                    interface IProgress {

                        /** Progress analyzed */
                        analyzed?: (number|null);

                        /** Progress encoded */
                        encoded?: (number|null);

                        /** Progress uploaded */
                        uploaded?: (number|null);

                        /** Progress notified */
                        notified?: (number|null);
                    }

                    /** Represents a Progress. */
                    class Progress implements IProgress {

                        /**
                         * Constructs a new Progress.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IProgress);

                        /** Progress analyzed. */
                        public analyzed: number;

                        /** Progress encoded. */
                        public encoded: number;

                        /** Progress uploaded. */
                        public uploaded: number;

                        /** Progress notified. */
                        public notified: number;

                        /**
                         * Creates a new Progress instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Progress instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IProgress): google.cloud.video.transcoder.v1beta1.Progress;

                        /**
                         * Encodes the specified Progress message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Progress.verify|verify} messages.
                         * @param message Progress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Progress message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.Progress.verify|verify} messages.
                         * @param message Progress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Progress message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Progress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.Progress;

                        /**
                         * Decodes a Progress message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Progress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.Progress;

                        /**
                         * Verifies a Progress message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Progress message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Progress
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.Progress;

                        /**
                         * Creates a plain object from a Progress message. Also converts values to other types if specified.
                         * @param message Progress
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.Progress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Progress to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FailureDetail. */
                    interface IFailureDetail {

                        /** FailureDetail description */
                        description?: (string|null);
                    }

                    /** Represents a FailureDetail. */
                    class FailureDetail implements IFailureDetail {

                        /**
                         * Constructs a new FailureDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IFailureDetail);

                        /** FailureDetail description. */
                        public description: string;

                        /**
                         * Creates a new FailureDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FailureDetail instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IFailureDetail): google.cloud.video.transcoder.v1beta1.FailureDetail;

                        /**
                         * Encodes the specified FailureDetail message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.FailureDetail.verify|verify} messages.
                         * @param message FailureDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IFailureDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FailureDetail message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.FailureDetail.verify|verify} messages.
                         * @param message FailureDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IFailureDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FailureDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FailureDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.FailureDetail;

                        /**
                         * Decodes a FailureDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FailureDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.FailureDetail;

                        /**
                         * Verifies a FailureDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FailureDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FailureDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.FailureDetail;

                        /**
                         * Creates a plain object from a FailureDetail message. Also converts values to other types if specified.
                         * @param message FailureDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.FailureDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FailureDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Represents a TranscoderService */
                    class TranscoderService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new TranscoderService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new TranscoderService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TranscoderService;

                        /**
                         * Calls CreateJob.
                         * @param request CreateJobRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Job
                         */
                        public createJob(request: google.cloud.video.transcoder.v1beta1.ICreateJobRequest, callback: google.cloud.video.transcoder.v1beta1.TranscoderService.CreateJobCallback): void;

                        /**
                         * Calls CreateJob.
                         * @param request CreateJobRequest message or plain object
                         * @returns Promise
                         */
                        public createJob(request: google.cloud.video.transcoder.v1beta1.ICreateJobRequest): Promise<google.cloud.video.transcoder.v1beta1.Job>;

                        /**
                         * Calls ListJobs.
                         * @param request ListJobsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                         */
                        public listJobs(request: google.cloud.video.transcoder.v1beta1.IListJobsRequest, callback: google.cloud.video.transcoder.v1beta1.TranscoderService.ListJobsCallback): void;

                        /**
                         * Calls ListJobs.
                         * @param request ListJobsRequest message or plain object
                         * @returns Promise
                         */
                        public listJobs(request: google.cloud.video.transcoder.v1beta1.IListJobsRequest): Promise<google.cloud.video.transcoder.v1beta1.ListJobsResponse>;

                        /**
                         * Calls GetJob.
                         * @param request GetJobRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Job
                         */
                        public getJob(request: google.cloud.video.transcoder.v1beta1.IGetJobRequest, callback: google.cloud.video.transcoder.v1beta1.TranscoderService.GetJobCallback): void;

                        /**
                         * Calls GetJob.
                         * @param request GetJobRequest message or plain object
                         * @returns Promise
                         */
                        public getJob(request: google.cloud.video.transcoder.v1beta1.IGetJobRequest): Promise<google.cloud.video.transcoder.v1beta1.Job>;

                        /**
                         * Calls DeleteJob.
                         * @param request DeleteJobRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteJob(request: google.cloud.video.transcoder.v1beta1.IDeleteJobRequest, callback: google.cloud.video.transcoder.v1beta1.TranscoderService.DeleteJobCallback): void;

                        /**
                         * Calls DeleteJob.
                         * @param request DeleteJobRequest message or plain object
                         * @returns Promise
                         */
                        public deleteJob(request: google.cloud.video.transcoder.v1beta1.IDeleteJobRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls CreateJobTemplate.
                         * @param request CreateJobTemplateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and JobTemplate
                         */
                        public createJobTemplate(request: google.cloud.video.transcoder.v1beta1.ICreateJobTemplateRequest, callback: google.cloud.video.transcoder.v1beta1.TranscoderService.CreateJobTemplateCallback): void;

                        /**
                         * Calls CreateJobTemplate.
                         * @param request CreateJobTemplateRequest message or plain object
                         * @returns Promise
                         */
                        public createJobTemplate(request: google.cloud.video.transcoder.v1beta1.ICreateJobTemplateRequest): Promise<google.cloud.video.transcoder.v1beta1.JobTemplate>;

                        /**
                         * Calls ListJobTemplates.
                         * @param request ListJobTemplatesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListJobTemplatesResponse
                         */
                        public listJobTemplates(request: google.cloud.video.transcoder.v1beta1.IListJobTemplatesRequest, callback: google.cloud.video.transcoder.v1beta1.TranscoderService.ListJobTemplatesCallback): void;

                        /**
                         * Calls ListJobTemplates.
                         * @param request ListJobTemplatesRequest message or plain object
                         * @returns Promise
                         */
                        public listJobTemplates(request: google.cloud.video.transcoder.v1beta1.IListJobTemplatesRequest): Promise<google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse>;

                        /**
                         * Calls GetJobTemplate.
                         * @param request GetJobTemplateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and JobTemplate
                         */
                        public getJobTemplate(request: google.cloud.video.transcoder.v1beta1.IGetJobTemplateRequest, callback: google.cloud.video.transcoder.v1beta1.TranscoderService.GetJobTemplateCallback): void;

                        /**
                         * Calls GetJobTemplate.
                         * @param request GetJobTemplateRequest message or plain object
                         * @returns Promise
                         */
                        public getJobTemplate(request: google.cloud.video.transcoder.v1beta1.IGetJobTemplateRequest): Promise<google.cloud.video.transcoder.v1beta1.JobTemplate>;

                        /**
                         * Calls DeleteJobTemplate.
                         * @param request DeleteJobTemplateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteJobTemplate(request: google.cloud.video.transcoder.v1beta1.IDeleteJobTemplateRequest, callback: google.cloud.video.transcoder.v1beta1.TranscoderService.DeleteJobTemplateCallback): void;

                        /**
                         * Calls DeleteJobTemplate.
                         * @param request DeleteJobTemplateRequest message or plain object
                         * @returns Promise
                         */
                        public deleteJobTemplate(request: google.cloud.video.transcoder.v1beta1.IDeleteJobTemplateRequest): Promise<google.protobuf.Empty>;
                    }

                    namespace TranscoderService {

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1beta1.TranscoderService#createJob}.
                         * @param error Error, if any
                         * @param [response] Job
                         */
                        type CreateJobCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1beta1.Job) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1beta1.TranscoderService#listJobs}.
                         * @param error Error, if any
                         * @param [response] ListJobsResponse
                         */
                        type ListJobsCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1beta1.ListJobsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1beta1.TranscoderService#getJob}.
                         * @param error Error, if any
                         * @param [response] Job
                         */
                        type GetJobCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1beta1.Job) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1beta1.TranscoderService#deleteJob}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1beta1.TranscoderService#createJobTemplate}.
                         * @param error Error, if any
                         * @param [response] JobTemplate
                         */
                        type CreateJobTemplateCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1beta1.JobTemplate) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1beta1.TranscoderService#listJobTemplates}.
                         * @param error Error, if any
                         * @param [response] ListJobTemplatesResponse
                         */
                        type ListJobTemplatesCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1beta1.TranscoderService#getJobTemplate}.
                         * @param error Error, if any
                         * @param [response] JobTemplate
                         */
                        type GetJobTemplateCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1beta1.JobTemplate) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1beta1.TranscoderService#deleteJobTemplate}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteJobTemplateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                    }

                    /** Properties of a CreateJobRequest. */
                    interface ICreateJobRequest {

                        /** CreateJobRequest parent */
                        parent?: (string|null);

                        /** CreateJobRequest job */
                        job?: (google.cloud.video.transcoder.v1beta1.IJob|null);
                    }

                    /** Represents a CreateJobRequest. */
                    class CreateJobRequest implements ICreateJobRequest {

                        /**
                         * Constructs a new CreateJobRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.ICreateJobRequest);

                        /** CreateJobRequest parent. */
                        public parent: string;

                        /** CreateJobRequest job. */
                        public job?: (google.cloud.video.transcoder.v1beta1.IJob|null);

                        /**
                         * Creates a new CreateJobRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateJobRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.ICreateJobRequest): google.cloud.video.transcoder.v1beta1.CreateJobRequest;

                        /**
                         * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.CreateJobRequest.verify|verify} messages.
                         * @param message CreateJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.CreateJobRequest.verify|verify} messages.
                         * @param message CreateJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateJobRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.CreateJobRequest;

                        /**
                         * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.CreateJobRequest;

                        /**
                         * Verifies a CreateJobRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateJobRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.CreateJobRequest;

                        /**
                         * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                         * @param message CreateJobRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateJobRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListJobsRequest. */
                    interface IListJobsRequest {

                        /** ListJobsRequest parent */
                        parent?: (string|null);

                        /** ListJobsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListJobsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListJobsRequest. */
                    class ListJobsRequest implements IListJobsRequest {

                        /**
                         * Constructs a new ListJobsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IListJobsRequest);

                        /** ListJobsRequest parent. */
                        public parent: string;

                        /** ListJobsRequest pageSize. */
                        public pageSize: number;

                        /** ListJobsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListJobsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListJobsRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IListJobsRequest): google.cloud.video.transcoder.v1beta1.ListJobsRequest;

                        /**
                         * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ListJobsRequest.verify|verify} messages.
                         * @param message ListJobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ListJobsRequest.verify|verify} messages.
                         * @param message ListJobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListJobsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListJobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.ListJobsRequest;

                        /**
                         * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListJobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.ListJobsRequest;

                        /**
                         * Verifies a ListJobsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListJobsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.ListJobsRequest;

                        /**
                         * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                         * @param message ListJobsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListJobsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetJobRequest. */
                    interface IGetJobRequest {

                        /** GetJobRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetJobRequest. */
                    class GetJobRequest implements IGetJobRequest {

                        /**
                         * Constructs a new GetJobRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IGetJobRequest);

                        /** GetJobRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetJobRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetJobRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IGetJobRequest): google.cloud.video.transcoder.v1beta1.GetJobRequest;

                        /**
                         * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.GetJobRequest.verify|verify} messages.
                         * @param message GetJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.GetJobRequest.verify|verify} messages.
                         * @param message GetJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetJobRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.GetJobRequest;

                        /**
                         * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.GetJobRequest;

                        /**
                         * Verifies a GetJobRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetJobRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.GetJobRequest;

                        /**
                         * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                         * @param message GetJobRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetJobRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteJobRequest. */
                    interface IDeleteJobRequest {

                        /** DeleteJobRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteJobRequest. */
                    class DeleteJobRequest implements IDeleteJobRequest {

                        /**
                         * Constructs a new DeleteJobRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IDeleteJobRequest);

                        /** DeleteJobRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteJobRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteJobRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IDeleteJobRequest): google.cloud.video.transcoder.v1beta1.DeleteJobRequest;

                        /**
                         * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.DeleteJobRequest.verify|verify} messages.
                         * @param message DeleteJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.DeleteJobRequest.verify|verify} messages.
                         * @param message DeleteJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteJobRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.DeleteJobRequest;

                        /**
                         * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.DeleteJobRequest;

                        /**
                         * Verifies a DeleteJobRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteJobRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.DeleteJobRequest;

                        /**
                         * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                         * @param message DeleteJobRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteJobRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListJobsResponse. */
                    interface IListJobsResponse {

                        /** ListJobsResponse jobs */
                        jobs?: (google.cloud.video.transcoder.v1beta1.IJob[]|null);

                        /** ListJobsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListJobsResponse. */
                    class ListJobsResponse implements IListJobsResponse {

                        /**
                         * Constructs a new ListJobsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IListJobsResponse);

                        /** ListJobsResponse jobs. */
                        public jobs: google.cloud.video.transcoder.v1beta1.IJob[];

                        /** ListJobsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListJobsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListJobsResponse instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IListJobsResponse): google.cloud.video.transcoder.v1beta1.ListJobsResponse;

                        /**
                         * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ListJobsResponse.verify|verify} messages.
                         * @param message ListJobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ListJobsResponse.verify|verify} messages.
                         * @param message ListJobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListJobsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListJobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.ListJobsResponse;

                        /**
                         * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListJobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.ListJobsResponse;

                        /**
                         * Verifies a ListJobsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListJobsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.ListJobsResponse;

                        /**
                         * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                         * @param message ListJobsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListJobsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CreateJobTemplateRequest. */
                    interface ICreateJobTemplateRequest {

                        /** CreateJobTemplateRequest parent */
                        parent?: (string|null);

                        /** CreateJobTemplateRequest jobTemplate */
                        jobTemplate?: (google.cloud.video.transcoder.v1beta1.IJobTemplate|null);

                        /** CreateJobTemplateRequest jobTemplateId */
                        jobTemplateId?: (string|null);
                    }

                    /** Represents a CreateJobTemplateRequest. */
                    class CreateJobTemplateRequest implements ICreateJobTemplateRequest {

                        /**
                         * Constructs a new CreateJobTemplateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.ICreateJobTemplateRequest);

                        /** CreateJobTemplateRequest parent. */
                        public parent: string;

                        /** CreateJobTemplateRequest jobTemplate. */
                        public jobTemplate?: (google.cloud.video.transcoder.v1beta1.IJobTemplate|null);

                        /** CreateJobTemplateRequest jobTemplateId. */
                        public jobTemplateId: string;

                        /**
                         * Creates a new CreateJobTemplateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateJobTemplateRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.ICreateJobTemplateRequest): google.cloud.video.transcoder.v1beta1.CreateJobTemplateRequest;

                        /**
                         * Encodes the specified CreateJobTemplateRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.CreateJobTemplateRequest.verify|verify} messages.
                         * @param message CreateJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.ICreateJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateJobTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.CreateJobTemplateRequest.verify|verify} messages.
                         * @param message CreateJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.ICreateJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateJobTemplateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.CreateJobTemplateRequest;

                        /**
                         * Decodes a CreateJobTemplateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.CreateJobTemplateRequest;

                        /**
                         * Verifies a CreateJobTemplateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateJobTemplateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateJobTemplateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.CreateJobTemplateRequest;

                        /**
                         * Creates a plain object from a CreateJobTemplateRequest message. Also converts values to other types if specified.
                         * @param message CreateJobTemplateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.CreateJobTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateJobTemplateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListJobTemplatesRequest. */
                    interface IListJobTemplatesRequest {

                        /** ListJobTemplatesRequest parent */
                        parent?: (string|null);

                        /** ListJobTemplatesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListJobTemplatesRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListJobTemplatesRequest. */
                    class ListJobTemplatesRequest implements IListJobTemplatesRequest {

                        /**
                         * Constructs a new ListJobTemplatesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IListJobTemplatesRequest);

                        /** ListJobTemplatesRequest parent. */
                        public parent: string;

                        /** ListJobTemplatesRequest pageSize. */
                        public pageSize: number;

                        /** ListJobTemplatesRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListJobTemplatesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListJobTemplatesRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IListJobTemplatesRequest): google.cloud.video.transcoder.v1beta1.ListJobTemplatesRequest;

                        /**
                         * Encodes the specified ListJobTemplatesRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ListJobTemplatesRequest.verify|verify} messages.
                         * @param message ListJobTemplatesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IListJobTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListJobTemplatesRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ListJobTemplatesRequest.verify|verify} messages.
                         * @param message ListJobTemplatesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IListJobTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListJobTemplatesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListJobTemplatesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.ListJobTemplatesRequest;

                        /**
                         * Decodes a ListJobTemplatesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListJobTemplatesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.ListJobTemplatesRequest;

                        /**
                         * Verifies a ListJobTemplatesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListJobTemplatesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListJobTemplatesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.ListJobTemplatesRequest;

                        /**
                         * Creates a plain object from a ListJobTemplatesRequest message. Also converts values to other types if specified.
                         * @param message ListJobTemplatesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.ListJobTemplatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListJobTemplatesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetJobTemplateRequest. */
                    interface IGetJobTemplateRequest {

                        /** GetJobTemplateRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetJobTemplateRequest. */
                    class GetJobTemplateRequest implements IGetJobTemplateRequest {

                        /**
                         * Constructs a new GetJobTemplateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IGetJobTemplateRequest);

                        /** GetJobTemplateRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetJobTemplateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetJobTemplateRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IGetJobTemplateRequest): google.cloud.video.transcoder.v1beta1.GetJobTemplateRequest;

                        /**
                         * Encodes the specified GetJobTemplateRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.GetJobTemplateRequest.verify|verify} messages.
                         * @param message GetJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IGetJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetJobTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.GetJobTemplateRequest.verify|verify} messages.
                         * @param message GetJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IGetJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetJobTemplateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.GetJobTemplateRequest;

                        /**
                         * Decodes a GetJobTemplateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.GetJobTemplateRequest;

                        /**
                         * Verifies a GetJobTemplateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetJobTemplateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetJobTemplateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.GetJobTemplateRequest;

                        /**
                         * Creates a plain object from a GetJobTemplateRequest message. Also converts values to other types if specified.
                         * @param message GetJobTemplateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.GetJobTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetJobTemplateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteJobTemplateRequest. */
                    interface IDeleteJobTemplateRequest {

                        /** DeleteJobTemplateRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteJobTemplateRequest. */
                    class DeleteJobTemplateRequest implements IDeleteJobTemplateRequest {

                        /**
                         * Constructs a new DeleteJobTemplateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IDeleteJobTemplateRequest);

                        /** DeleteJobTemplateRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteJobTemplateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteJobTemplateRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IDeleteJobTemplateRequest): google.cloud.video.transcoder.v1beta1.DeleteJobTemplateRequest;

                        /**
                         * Encodes the specified DeleteJobTemplateRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.DeleteJobTemplateRequest.verify|verify} messages.
                         * @param message DeleteJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IDeleteJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteJobTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.DeleteJobTemplateRequest.verify|verify} messages.
                         * @param message DeleteJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IDeleteJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteJobTemplateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.DeleteJobTemplateRequest;

                        /**
                         * Decodes a DeleteJobTemplateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.DeleteJobTemplateRequest;

                        /**
                         * Verifies a DeleteJobTemplateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteJobTemplateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteJobTemplateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.DeleteJobTemplateRequest;

                        /**
                         * Creates a plain object from a DeleteJobTemplateRequest message. Also converts values to other types if specified.
                         * @param message DeleteJobTemplateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.DeleteJobTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteJobTemplateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListJobTemplatesResponse. */
                    interface IListJobTemplatesResponse {

                        /** ListJobTemplatesResponse jobTemplates */
                        jobTemplates?: (google.cloud.video.transcoder.v1beta1.IJobTemplate[]|null);

                        /** ListJobTemplatesResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListJobTemplatesResponse. */
                    class ListJobTemplatesResponse implements IListJobTemplatesResponse {

                        /**
                         * Constructs a new ListJobTemplatesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1beta1.IListJobTemplatesResponse);

                        /** ListJobTemplatesResponse jobTemplates. */
                        public jobTemplates: google.cloud.video.transcoder.v1beta1.IJobTemplate[];

                        /** ListJobTemplatesResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListJobTemplatesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListJobTemplatesResponse instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1beta1.IListJobTemplatesResponse): google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse;

                        /**
                         * Encodes the specified ListJobTemplatesResponse message. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse.verify|verify} messages.
                         * @param message ListJobTemplatesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1beta1.IListJobTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListJobTemplatesResponse message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse.verify|verify} messages.
                         * @param message ListJobTemplatesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1beta1.IListJobTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListJobTemplatesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListJobTemplatesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse;

                        /**
                         * Decodes a ListJobTemplatesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListJobTemplatesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse;

                        /**
                         * Verifies a ListJobTemplatesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListJobTemplatesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListJobTemplatesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse;

                        /**
                         * Creates a plain object from a ListJobTemplatesResponse message. Also converts values to other types if specified.
                         * @param message ListJobTemplatesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1beta1.ListJobTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListJobTemplatesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
