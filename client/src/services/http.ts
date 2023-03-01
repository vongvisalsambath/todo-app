import { SERVER_URL } from "../config";
import { HTTPMethod } from "../types/http";

export const request = (method: keyof typeof HTTPMethod, path: string, body?: any, queryString?: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const requestOptions: any = {
        method: method,
        headers: { "Content-Type": "application/json" },
      };

      let url = `${SERVER_URL}${path}`;

      if (method === HTTPMethod.GET) {
        if (queryString) url += queryString;
      } else {
        requestOptions.body = JSON.stringify(body);
      }

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.error) throw data;
          return resolve(data);
        });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
