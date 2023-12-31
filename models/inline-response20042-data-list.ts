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

import {
    
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20042DataList
 */
export interface InlineResponse20042DataList {

    /**
     * @type {string}
     * @memberof InlineResponse20042DataList
     */
    tick?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20042DataList
     */
    amount?: string;

    /**
     * Current number of confirmations
     *
     * @type {number}
     * @memberof InlineResponse20042DataList
     */
    cur?: number;

    /**
     * Total number of confirmations
     *
     * @type {number}
     * @memberof InlineResponse20042DataList
     */
    sum?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20042DataList
     */
    ts?: number;

    /**
     * @type {string}
     * @memberof InlineResponse20042DataList
     */
    txid?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20042DataList
     */
    type?: string;
}
