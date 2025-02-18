import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import OrganizationType from './OrganizationType';
import ResourceLimitContainer from './ResourceLimitContainer';

/**
 * @export
 * @class Organization
 */
export class Organization extends BitmovinResource {
  /**
   * Specifies the type of the organization in the hierachy. Only sub-organizations can be newly created. (required)
   * @type {OrganizationType}
   * @memberof Organization
   */
  public type?: OrganizationType;

  /**
   * ID of the parent organization
   * @type {string}
   * @memberof Organization
   */
  public parentId?: string;

  /**
   * Hexadecimal color
   * @type {string}
   * @memberof Organization
   */
  public labelColor?: string;

  /**
   * @type {ResourceLimitContainer[]}
   * @memberof Organization
   */
  public limitsPerResource?: ResourceLimitContainer[];

  constructor(obj?: Partial<Organization>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
    this.parentId = map(obj.parentId);
    this.labelColor = map(obj.labelColor);
    this.limitsPerResource = mapArray(obj.limitsPerResource, ResourceLimitContainer);
  }
}

export default Organization;

