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

import { InlineResponse20044Data } from './inline-response20044-data';
import {
    InlineResponse20044Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20044
 */
export interface InlineResponse20044 {

    /**
     * @type {number}
     * @memberof InlineResponse20044
     */
    code: number;

    /**
     * @type {string}
     * @memberof InlineResponse20044
     */
    msg: string;

    /**
     * @type {InlineResponse20044Data}
     * @memberof InlineResponse20044
     */
    data: InlineResponse20044Data;
}
