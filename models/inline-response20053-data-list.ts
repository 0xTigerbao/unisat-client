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

import { InlineResponse20053DataAttributes } from './inline-response20053-data-attributes';
import {
    InlineResponse20053DataAttributes,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20053DataList
 */
export interface InlineResponse20053DataList {

    /**
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    auctionId: string;

    /**
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    inscriptionId: string;

    /**
     * @type {number}
     * @memberof InlineResponse20053DataList
     */
    inscriptionNumber: number;

    /**
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    event: InlineResponse20053DataListEventEnum;

    /**
     * @type {number}
     * @memberof InlineResponse20053DataList
     */
    price: number;

    /**
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    from: string;

    /**
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    to: string | null;

    /**
     * @type {number}
     * @memberof InlineResponse20053DataList
     */
    timestamp: number;

    /**
     * @type {number}
     * @memberof InlineResponse20053DataList
     */
    nftConfirmNum?: number;

    /**
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    nftType?: InlineResponse20053DataListNftTypeEnum;

    /**
     * An error message generated by the order
     *
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    endMsg?: string | null;

    /**
     * The update order generates multiple events
     *
     * @type {boolean}
     * @memberof InlineResponse20053DataList
     */
    newest?: boolean;

    /**
     * Brc20 filed
     *
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    name?: string | null;

    /**
     * Brc20 filed
     *
     * @type {number}
     * @memberof InlineResponse20053DataList
     */
    unitPrice?: number | null;

    /**
     * Brc20 filed
     *
     * @type {number}
     * @memberof InlineResponse20053DataList
     */
    amount?: number | null;

    /**
     * Domain filed
     *
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    domain?: string | null;

    /**
     * Domain filed
     *
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    domainType?: InlineResponse20053DataListDomainTypeEnum;

    /**
     * Domain filed
     *
     * @type {Array<string>}
     * @memberof InlineResponse20053DataList
     */
    domainCategorys?: Array<InlineResponse20053DataListDomainCategorysEnum>;

    /**
     * Collection filed
     *
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    collectionId?: string | null;

    /**
     * Collection filed
     *
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    collectionItemName?: string | null;

    /**
     * Collection filed
     *
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    contentType?: string | null;

    /**
     * Collection filed
     *
     * @type {string}
     * @memberof InlineResponse20053DataList
     */
    contentBody?: string | null;

    /**
     * Collection filed
     *
     * @type {Array<InlineResponse20053DataAttributes>}
     * @memberof InlineResponse20053DataList
     */
    attributes?: Array<InlineResponse20053DataAttributes> | null;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20053DataListEventEnum {
    Listed = 'Listed',
    Sold = 'Sold',
    Cancel = 'Cancel',
    Claim = 'Claim',
    Updated = 'Updated'
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20053DataListNftTypeEnum {
    Brc20 = 'brc20',
    Domain = 'domain',
    Collection = 'collection'
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20053DataListDomainTypeEnum {
    Sats = 'sats',
    Unisat = 'unisat',
    Btc = 'btc',
    Xbt = 'xbt',
    Ord = 'ord',
    Gm = 'gm',
    Bitmap = 'bitmap',
    X = 'x',
    Null = 'null'
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20053DataListDomainCategorysEnum {
    Keyboard = 'Keyboard',
    NonKeyboard = 'Non Keyboard',
    _199 = '1-99',
    _3D = '3D',
    _4D = '4D',
    _5D = '5D',
    SingleEmoji = 'Single Emoji',
    MultiEmoji = 'Multi Emoji',
    CommonWord = 'Common Word',
    _1Letter1Number = '1 Letter + 1 Number',
    _2Letters = '2 Letters',
    _3Letters = '3 Letters',
    Numbers = 'Numbers'
}

