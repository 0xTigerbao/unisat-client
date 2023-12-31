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

import { TxHistoryItem } from './tx-history-item';
import {
    TxHistoryItem,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse2006Data
 */
export interface InlineResponse2006Data {

    /**
     * @type {TxHistoryItem}
     * @memberof InlineResponse2006Data
     */
    detail?: TxHistoryItem;

    /**
     * @type {number}
     * @memberof InlineResponse2006Data
     */
    start?: number;

    /**
     * @type {number}
     * @memberof InlineResponse2006Data
     */
    total?: number;
}
