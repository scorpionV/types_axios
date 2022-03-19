import {AxiosRequestConfig} from './types';
import xhr from './xhr'
function axios(config:AxiosRequestConfig): void{
    xhr(config)
}
expect default axios 