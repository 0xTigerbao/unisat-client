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
 * @interface InlineResponse20029Data
 */
export interface InlineResponse20029Data {

    /**
     * The real amount of tick0
     *
     * @type {string}
     * @memberof InlineResponse20029Data
     */
    amount0?: string;

    /**
     * The real amount of tick1
     *
     * @type {string}
     * @memberof InlineResponse20029Data
     */
    amount1?: string;

    /**
     * The usd value of amount0
     *
     * @type {string}
     * @memberof InlineResponse20029Data
     */
    amount0USD?: string;

    /**
     * The usd value of amount1
     *
     * @type {string}
     * @memberof InlineResponse20029Data
     */
    amount1USD?: string;

    /**
     * Estimated lp
     *
     * @type {string}
     * @memberof InlineResponse20029Data
     */
    lp?: string;

    /**
     * tick0/tick1
     *
     * @type {string}
     * @memberof InlineResponse20029Data
     */
    tick0PerTick1?: string;

    /**
     * tick1/tick0
     *
     * @type {string}
     * @memberof InlineResponse20029Data
     */
    tick1PerTick0?: string;

    /**
     * The proportion of the injected quantity in the pool
     *
     * @type {string}
     * @memberof InlineResponse20029Data
     */
    shareOfPool?: string;
}
