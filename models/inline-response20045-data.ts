/* tslint:disable */
/* eslint-disable */
/**
 * UniSat Wallet - OpenAPI
 * This is UniSat Wallet Open API. If you wish to use the OpenAPI, please feel free to send us an email, and we will provide you with an API KEY.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@unisat.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { InlineResponse20045DataList } from './inline-response20045-data-list';
import {
    InlineResponse20045DataList,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20045Data
 */
export interface InlineResponse20045Data {

    /**
     * @type {number}
     * @memberof InlineResponse20045Data
     */
    total?: number;

    /**
     * @type {Array<InlineResponse20045DataList>}
     * @memberof InlineResponse20045Data
     */
    list?: Array<InlineResponse20045DataList>;
}
