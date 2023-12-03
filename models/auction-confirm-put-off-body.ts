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
 * @interface AuctionConfirmPutOffBody
 */
export interface AuctionConfirmPutOffBody {

    /**
     * @type {string}
     * @memberof AuctionConfirmPutOffBody
     */
    auctionId: string;

    /**
     * @type {string}
     * @memberof AuctionConfirmPutOffBody
     */
    psbt: string;

    /**
     * Is Base64 format, the default is hex format
     *
     * @type {boolean}
     * @memberof AuctionConfirmPutOffBody
     */
    fromBase64?: boolean;
}