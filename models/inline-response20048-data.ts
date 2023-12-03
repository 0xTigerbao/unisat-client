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

import { InlineResponse20048DataMatchHistory } from './inline-response20048-data-match-history';
import {
    InlineResponse20048DataMatchHistory,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20048Data
 */
export interface InlineResponse20048Data {

    /**
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    id?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    tick?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    amount?: string;

    /**
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    ts?: number;

    /**
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    status?: string;

    /**
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    totalConfirmedNum?: number;

    /**
     * Total number of confirmations (rollUp + approve)
     *
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    totalNum?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    rollUpConfirmNum?: number;

    /**
     * Total number of rollUp confirmations
     *
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    rollUpTotalNum?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    approveConfirmNum?: number;

    /**
     * Total number of approve confirmations
     *
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    approveTotalNum?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    cancelConfirmedNum?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20048Data
     */
    cancelTotalNum?: number;

    /**
     * Decrease operation is required to withdraw, which in rollup inscription
     *
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    rollUpTxid?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    paymentTxid?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    inscribeTxid?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    approveTxid?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20048Data
     */
    completedAmount?: string;

    /**
     * @type {Array<InlineResponse20048DataMatchHistory>}
     * @memberof InlineResponse20048Data
     */
    matchHistory?: Array<InlineResponse20048DataMatchHistory>;
}
