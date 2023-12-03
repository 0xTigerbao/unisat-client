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
 * @interface InlineResponse20038DataList
 */
export interface InlineResponse20038DataList {

    /**
     * Function type
     *
     * @type {string}
     * @memberof InlineResponse20038DataList
     * @example swap
     */
    funcType?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20038DataList
     */
    tickA?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20038DataList
     */
    tickB?: string;

    /**
     * @type {string}
     * @memberof InlineResponse20038DataList
     */
    gas?: string;

    /**
     * @type {number}
     * @memberof InlineResponse20038DataList
     */
    ts?: number;
}
