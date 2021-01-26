import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import S3RoleBasedApi from './s3RoleBased/S3RoleBasedApi';
import GcsServiceAccountApi from './gcsServiceAccount/GcsServiceAccountApi';

/**
 * OutputsApi - object-oriented interface
 * @export
 * @class OutputsApi
 * @extends {BaseAPI}
 */
export default class OutputsApi extends BaseAPI {
  public s3RoleBased: S3RoleBasedApi;
  public gcsServiceAccount: GcsServiceAccountApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.s3RoleBased = new S3RoleBasedApi(configuration);
    this.gcsServiceAccount = new GcsServiceAccountApi(configuration);
  }
}
