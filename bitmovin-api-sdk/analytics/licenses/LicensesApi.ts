import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import DomainsApi from './domains/DomainsApi';
import AnalyticsLicense from '../../models/AnalyticsLicense';
import PaginationResponse from '../../models/PaginationResponse';

/**
 * LicensesApi - object-oriented interface
 * @export
 * @class LicensesApi
 * @extends {BaseAPI}
 */
export default class LicensesApi extends BaseAPI {
  public domains: DomainsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.domains = new DomainsApi(configuration);
  }

  /**
   * @summary Create Analytics License
   * @param {AnalyticsLicense} [analyticsLicense] Analytics License to be created
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public create(analyticsLicense?: AnalyticsLicense): Promise<AnalyticsLicense> {
    return this.restClient.post<AnalyticsLicense>('/analytics/licenses', {}, analyticsLicense).then((response) => {
      return new AnalyticsLicense(response);
    });
  }

  /**
   * @summary Get License
   * @param {string} licenseId License id
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public get(licenseId: string): Promise<AnalyticsLicense> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.get<AnalyticsLicense>('/analytics/licenses/{license_id}', pathParamMap).then((response) => {
      return new AnalyticsLicense(response);
    });
  }

  /**
   * @summary List Analytics Licenses
   * @throws {RequiredError}
   * @memberof LicensesApi
   */
  public list(): Promise<PaginationResponse<AnalyticsLicense>> {
    return this.restClient.get<PaginationResponse<AnalyticsLicense>>('/analytics/licenses', {}).then((response) => {
      const paginationResponse = new PaginationResponse<AnalyticsLicense>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AnalyticsLicense(i));
      }
      return paginationResponse;
    });
  }
}
