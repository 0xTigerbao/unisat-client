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

import { InscriptionItem } from './inscription-item';
import {
    InscriptionItem,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20011DataUtxo
 */
export interface InlineResponse20011DataUtxo {

    /**
     * @type {string}
     * @memberof InlineResponse20011DataUtxo
     */
    address?: string;

    /**
     * @type {number}
     * @memberof InlineResponse20011DataUtxo
     */
    codeType?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20011DataUtxo
     */
    height?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20011DataUtxo
     */
    idx?: number;

    /**
     * @type {Array<InscriptionItem>}
     * @memberof InlineResponse20011DataUtxo
     */
    inscriptions?: Array<InscriptionItem>;

    /**
     * @type {boolean}
     * @memberof InlineResponse20011DataUtxo
     * @example false
     */
    isOpInRBF?: boolean;

    /**
     * @type {number}
     * @memberof InlineResponse20011DataUtxo
     * @example 10000
     */
    satoshi?: number;

    /**
     * @type {string}
     * @memberof InlineResponse20011DataUtxo
     */
    scriptPk?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20011DataUtxo
     */
    scriptType?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20011DataUtxo
     */
    txid?: string;

    /**
     * @type {number}
     * @memberof InlineResponse20011DataUtxo
     * @example 0
     */
    vout?: number;
}