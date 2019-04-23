import {map} from '../common/Mapper';

/**
 * @export
 * @class SrtStatisticSend
 */
export default class SrtStatisticSend {
  constructor(obj: any) {
    this.bytes = map(obj.bytes);
    this.bytesDropped = map(obj.bytesDropped);
    this.mbitRate = map(obj.mbitRate);
    this.packets = map(obj.packets);
    this.packetsDropped = map(obj.packetsDropped);
    this.packetsLost = map(obj.packetsLost);
    this.packetsRetransmitted = map(obj.packetsRetransmitted);
  }

  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public bytes?: number;
  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public bytesDropped?: number;
  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public mbitRate?: number;
  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public packets?: number;
  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public packetsDropped?: number;
  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public packetsLost?: number;
  /**
   * @type {number}
   * @memberof SrtStatisticSend
   */
  public packetsRetransmitted?: number;
}
