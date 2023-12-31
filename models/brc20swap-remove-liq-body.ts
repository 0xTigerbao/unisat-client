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
 * @interface Brc20swapRemoveLiqBody
 */
export interface Brc20swapRemoveLiqBody {

    /**
     * @type {string}
     * @memberof Brc20swapRemoveLiqBody
     */
    address: string;

    /**
     * @type {string}
     * @memberof Brc20swapRemoveLiqBody
     */
    tick0: string;

    /**
     * @type {string}
     * @memberof Brc20swapRemoveLiqBody
     */
    tick1: string;

    /**
     * @type {string}
     * @memberof Brc20swapRemoveLiqBody
     */
    lp: string;

    /**
     * Input amount of tick0
     *
     * @type {string}
     * @memberof Brc20swapRemoveLiqBody
     */
    amount0: string;

    /**
     * Input amount of tick1
     *
     * @type {string}
     * @memberof Brc20swapRemoveLiqBody
     */
    amount1: string;

    /**
     * @type {string}
     * @memberof Brc20swapRemoveLiqBody
     */
    slippage: string;

    /**
     * Timestamp (seconds)
     *
     * @type {number}
     * @memberof Brc20swapRemoveLiqBody
     */
    ts: number;

    /**
     * User signature
     *
     * @type {string}
     * @memberof Brc20swapRemoveLiqBody
     */
    sig: string;
}
