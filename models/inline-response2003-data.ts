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
 * @interface InlineResponse2003Data
 */
export interface InlineResponse2003Data {

    /**
     * @type {number}
     * @memberof InlineResponse2003Data
     */
    paidAmount?: number;

    /**
     * The refund amount = size * refundFeeRate
     *
     * @type {number}
     * @memberof InlineResponse2003Data
     */
    refundTxSize?: number;

    /**
     * @type {number}
     * @memberof InlineResponse2003Data
     */
    safeRefundAmount?: number;
}
