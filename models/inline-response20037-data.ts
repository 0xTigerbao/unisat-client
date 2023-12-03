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
 * @interface InlineResponse20037Data
 */
export interface InlineResponse20037Data {

    /**
     * Total value of all pools
     *
     * @type {string}
     * @memberof InlineResponse20037Data
     */
    liquidity?: string;

    /**
     * 7 days volume
     *
     * @type {string}
     * @memberof InlineResponse20037Data
     */
    volume7d?: string;

    /**
     * 24 hours volume
     *
     * @type {string}
     * @memberof InlineResponse20037Data
     */
    volume24h?: string;

    /**
     * Number of transactions in 24 hours
     *
     * @type {number}
     * @memberof InlineResponse20037Data
     */
    transactions?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20037Data
     */
    pairs?: number;
}
