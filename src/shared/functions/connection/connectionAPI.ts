import axios from 'axios';
import {MethodEnum} from '../../../enums/method.enum';

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class ConnectionAPI {
  static async call<T>(
    url: string,
    method: MethodType,
    body?: unknown,
  ): Promise<T> {
    switch (method) {
      case MethodEnum.GET:
      case MethodEnum.DELETE:
        return (await axios[method]<T>(url)).data;
      case MethodEnum.PATCH:
      case MethodEnum.PUT:
      case MethodEnum.POST:
      default:
        return (await axios[method]<T>(url, body)).data;
    }
  }

  static async connect<T>(
    url: string,
    method: MethodType,
    body?: unknown,
  ): Promise<T> {
    return this.call<T>(url, method, body).catch(error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error('Usuário sem premissão.');
          default:
            throw new Error('Algum erro aconteceu.');
        }
      }

      throw new Error('Sem conexão com o servidor.');
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};

export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};

export const connectionAPIPost = async <T>(
  url: string,
  body: unknown,
): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};

export const connectionAPIPut = async <T>(
  url: string,
  body: unknown,
): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};

export const connectionAPIPatch = async <T>(
  url: string,
  body: unknown,
): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
};
