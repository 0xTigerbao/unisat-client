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
 * @interface InlineResponse20024DataBalance
 */
export interface InlineResponse20024DataBalance {

    /**
     * Confirmed module balance.
     *
     * @type {string}
     * @memberof InlineResponse20024DataBalance
     */
    module?: string;

    /**
     * Confirmed swap balance.
     *
     * @type {string}
     * @memberof InlineResponse20024DataBalance
     */
    swap?: string;

    /**
     * The balance converted from pending to swap.
     *
     * @type {string}
     * @memberof InlineResponse20024DataBalance
     */
    pendingSwap?: string;

    /**
     * The balance converted from pending to module.
     *
     * @type {string}
     * @memberof InlineResponse20024DataBalance
     */
    pendingAvailable?: string;
}
