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

import { UTXO } from './utxo';
import {
    UTXO,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20010Data
 */
export interface InlineResponse20010Data {

    /**
     * @type {number}
     * @memberof InlineResponse20010Data
     */
    cursor?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20010Data
     */
    total?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20010Data
     */
    totalConfirmed?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20010Data
     */
    totalUnconfirmed?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20010Data
     */
    totalUnconfirmedSpend?: number;

    /**
     * @type {Array<UTXO>}
     * @memberof InlineResponse20010Data
     */
    utxo?: Array<UTXO>;
}