/**
 * @license MIT
 * @copyright 2024 Harmanpreet
 */

"use strict";
window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID="8b3b72d5";
const API_KEY = "b4c6f01a1f4cec73d58404d1c2f853c5";
const TYPE = "public";

/**
 * 
 * @param {Array} queries  
 * @param {Function} successCallback 
 */
export const fetchData = async function (queries, successCallback){
    const query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

    const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const response = await fetch(url);

    if(response.ok){
        const data =await response.json();
    successCallback(data);
    }
}