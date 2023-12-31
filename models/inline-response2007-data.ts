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
 * @interface InlineResponse2007Data
 */
export interface InlineResponse2007Data {

    /**
     * @type {string}
     * @memberof InlineResponse2007Data
     */
    address?: string;

    /**
     * 0~3: Reserved , 4: CodeType_P2PK, 5: CodeType_P2PKH, 6: CodeType_P2SH, 7: CodeType_P2WPKH, 8: CodeType_P2WSH, 9: CodeType_P2TR
     *
     * @type {number}
     * @memberof InlineResponse2007Data
     */
    codeType?: InlineResponse2007DataCodeTypeEnum;

    /**
     * @type {Array<InscriptionItem>}
     * @memberof InlineResponse2007Data
     */
    inscriptions?: Array<InscriptionItem>;

    /**
     * @type {number}
     * @memberof InlineResponse2007Data
     */
    satoshi?: number;

    /**
     * @type {string}
     * @memberof InlineResponse2007Data
     */
    scriptPk?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2007Data
     */
    scriptSig?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2007Data
     */
    scriptType?: string;

    /**
     * @type {string}
     * @memberof InlineResponse2007Data
     */
    scriptWits?: string;

    /**
     * @type {number}
     * @memberof InlineResponse2007Data
     */
    sequence?: number;

    /**
     * @type {number}
     * @memberof InlineResponse2007Data
     */
    height?: number;

    /**
     * @type {string}
     * @memberof InlineResponse2007Data
     */
    txid?: string;

    /**
     * @type {number}
     * @memberof InlineResponse2007Data
     */
    idx?: number;

    /**
     * @type {number}
     * @memberof InlineResponse2007Data
     */
    heightTxo?: number;

    /**
     * @type {string}
     * @memberof InlineResponse2007Data
     */
    utxid?: string;

    /**
     * @type {number}
     * @memberof InlineResponse2007Data
     */
    vout?: number;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse2007DataCodeTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9
}

