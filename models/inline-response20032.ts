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

import { InlineResponse20032Data } from './inline-response20032-data';
import {
    InlineResponse20032Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20032
 */
export interface InlineResponse20032 {

    /**
     * @type {number}
     * @memberof InlineResponse20032
     */
    code: number;

    /**
     * @type {string}
     * @memberof InlineResponse20032
     */
    msg: string;

    /**
     * @type {InlineResponse20032Data}
     * @memberof InlineResponse20032
     */
    data: InlineResponse20032Data;
}
