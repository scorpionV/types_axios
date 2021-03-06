export type Methods ='get' | 'GET' | 'delete ' | 'Delete' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put'| 'PUT'| 'patch' | 'PATCH'
export interface AxiosRequestConfig{
    url:string
    methods?:Methods
    data?:any
    params?:any
}
