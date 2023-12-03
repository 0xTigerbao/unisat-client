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
 * @interface OrderCreateBRC20MintParams
 */
export interface OrderCreateBRC20MintParams {

    /**
     * Bitcoin address to receive the inscriptions
     *
     * @type {string}
     * @memberof OrderCreateBRC20MintParams
     */
    receiveAddress?: string;

    /**
     * The fee rate of transaction
     *
     * @type {number}
     * @memberof OrderCreateBRC20MintParams
     * @example 1
     */
    feeRate?: number;

    /**
     * The balance of inscription
     *
     * @type {number}
     * @memberof OrderCreateBRC20MintParams
     * @example 546
     */
    outputValue?: number;

    /**
     * Developer address to receive extra fee
     *
     * @type {string}
     * @memberof OrderCreateBRC20MintParams
     */
    devAddress?: string;

    /**
     * Extra fee to pay to developer's address
     *
     * @type {number}
     * @memberof OrderCreateBRC20MintParams
     */
    devFee?: number;

    /**
     * tick in brc20-mint
     *
     * @type {string}
     * @memberof OrderCreateBRC20MintParams
     */
    brc20Ticker?: string;

    /**
     * amt in brc20-mint
     *
     * @type {string}
     * @memberof OrderCreateBRC20MintParams
     */
    brc20Amount?: string;

    /**
     * Repetition count
     *
     * @type {number}
     * @memberof OrderCreateBRC20MintParams
     * @example 1
     */
    count?: number;
}
