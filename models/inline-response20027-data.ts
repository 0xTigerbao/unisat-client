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
 * @interface InlineResponse20027Data
 */
export interface InlineResponse20027Data {

    /**
     * User signature information
     *
     * @type {string}
     * @memberof InlineResponse20027Data
     */
    signMsg?: string;

    /**
     * Number of bytes on L1 chain
     *
     * @type {number}
     * @memberof InlineResponse20027Data
     */
    bytesL1?: number;

    /**
     * Number of bytes on L1 chain
     *
     * @type {number}
     * @memberof InlineResponse20027Data
     */
    bytesL2?: number;

    /**
     * Bitcoin network fee rate
     *
     * @type {string}
     * @memberof InlineResponse20027Data
     */
    feeRate?: string;

    /**
     * L2 cost per byte
     *
     * @type {string}
     * @memberof InlineResponse20027Data
     */
    gasPrice?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20027Data
     */
    serviceFeeL1?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20027Data
     */
    serviceFeeL2?: string;

    /**
     * L1 USD price per sats
     *
     * @type {string}
     * @memberof InlineResponse20027Data
     */
    unitUsdPriceL1?: string;

    /**
     * L2 USD price per sats
     *
     * @type {string}
     * @memberof InlineResponse20027Data
     */
    unitUsdPriceL2?: string;

    /**
     * The user's remainin L2 sats balance
     *
     * @type {string}
     * @memberof InlineResponse20027Data
     */
    serviceTickBalance?: string;
}
