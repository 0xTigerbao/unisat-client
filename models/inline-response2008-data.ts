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
 * @interface InlineResponse2008Data
 */
export interface InlineResponse2008Data {

    /**
     * @type {string}
     * @memberof InlineResponse2008Data
     */
    address?: string;

    /**
     * @type {number}
     * @memberof InlineResponse2008Data
     */
    codeType?: number;

    /**
     * @type {Array<InscriptionItem>}
     * @memberof InlineResponse2008Data
     */
    inscriptions?: Array<InscriptionItem>;

    /**
     * @type {number}
     * @memberof InlineResponse2008Data
     */
    satoshi?: number;

    /**
     * @type {string}
     * @memberof InlineResponse2008Data
     */
    scriptPk?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2008Data
     */
    scriptType?: string;

    /**
     * @type {number}
     * @memberof InlineResponse2008Data
     */
    height?: number;

    /**
     * @type {string}
     * @memberof InlineResponse2008Data
     */
    txid?: string;

    /**
     * @type {number}
     * @memberof InlineResponse2008Data
     */
    idx?: number;

    /**
     * @type {number}
     * @memberof InlineResponse2008Data
     */
    heightSpent?: number;

    /**
     * @type {string}
     * @memberof InlineResponse2008Data
     */
    txidSpent?: string;

    /**
     * @type {number}
     * @memberof InlineResponse2008Data
     */
    vout?: number;
}
