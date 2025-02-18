import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import VideoApi from './video/VideoApi';
import LiveApi from './live/LiveApi';

/**
 * StreamsApi - object-oriented interface
 * @export
 * @class StreamsApi
 * @extends {BaseAPI}
 */
export default class StreamsApi extends BaseAPI {
  public video: VideoApi;
  public live: LiveApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.video = new VideoApi(configuration);
    this.live = new LiveApi(configuration);
  }
}
