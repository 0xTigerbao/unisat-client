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

import { InlineResponse20059Data } from './inline-response20059-data';
import {
    InlineResponse20059Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20059
 */
export interface InlineResponse20059 {

    /**
     * @type {number}
     * @memberof InlineResponse20059
     */
    code: number;

    /**
     * @type {string}
     * @memberof InlineResponse20059
     */
    msg: string;

    /**
     * @type {InlineResponse20059Data}
     * @memberof InlineResponse20059
     */
    data: InlineResponse20059Data;
}
