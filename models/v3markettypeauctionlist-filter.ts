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
 * @interface V3markettypeauctionlistFilter
 */
export interface V3markettypeauctionlistFilter {

    /**
     * @type {string}
     * @memberof V3markettypeauctionlistFilter
     */
    nftType: V3markettypeauctionlistFilterNftTypeEnum;

    /**
     * @type {string}
     * @memberof V3markettypeauctionlistFilter
     */
    address?: string;

    /**
     * @type {string}
     * @memberof V3markettypeauctionlistFilter
     */
    tick?: string;

    /**
     * @type {number}
     * @memberof V3markettypeauctionlistFilter
     */
    minPrice?: number;

    /**
     * @type {number}
     * @memberof V3markettypeauctionlistFilter
     */
    maxPrice?: number;

    /**
     * @type {boolean}
     * @memberof V3markettypeauctionlistFilter
     */
    nftConfirm?: boolean;

    /**
     * Whether order ends
     *
     * @type {boolean}
     * @memberof V3markettypeauctionlistFilter
     */
    isEnd?: boolean;

    /**
     * @type {string}
     * @memberof V3markettypeauctionlistFilter
     */
    domainType?: V3markettypeauctionlistFilterDomainTypeEnum;

    /**
     * @type {number}
     * @memberof V3markettypeauctionlistFilter
     */
    domainMinLength?: number;

    /**
     * @type {number}
     * @memberof V3markettypeauctionlistFilter
     */
    domainMaxLength?: number;

    /**
     * @type {string}
     * @memberof V3markettypeauctionlistFilter
     */
    domainCategory?: string;

    /**
     * Fuzzy domain name search
     *
     * @type {string}
     * @memberof V3markettypeauctionlistFilter
     */
    domainFuzzy?: string;

    /**
     * @type {string}
     * @memberof V3markettypeauctionlistFilter
     */
    collectionId?: string;

    /**
     * Fuzzy collection name search
     *
     * @type {string}
     * @memberof V3markettypeauctionlistFilter
     */
    collectionFuzzy?: string;

    /**
     * Ignore start and limit and return all collection data
     *
     * @type {boolean}
     * @memberof V3markettypeauctionlistFilter
     */
    all?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum V3markettypeauctionlistFilterNftTypeEnum {
    Brc20 = 'brc20',
    Domain = 'domain',
    Collection = 'collection'
}
/**
 * @export
 * @enum {string}
 */
export enum V3markettypeauctionlistFilterDomainTypeEnum {
    Sats = 'sats',
    Unisat = 'unisat',
    Btc = 'btc',
    Xbt = 'xbt',
    Ord = 'ord',
    Gm = 'gm',
    Bitmap = 'bitmap',
    X = 'x'
}

