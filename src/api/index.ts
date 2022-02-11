import qs from 'query-string';

export const ENDPOINT = '//localhost:3001/';

class Api {
  domain: string;

  constructor(domain: string) {
    this.domain = domain;
  }

  async perform(url: string, data?: object | null, config?: object) {
    const request = await fetch(`${this.domain}${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await request.json();
  }

  async get(path: string, searchParams: object = {}) {
    return await this.perform(`${path}?${qs.stringify(searchParams)}`);
  }

  async post(path: string, data: object) {
    return await this.perform(path, data, {
      method: 'POST',
    });
  }

  async put(path: string, data: object) {
    return await this.perform(path, data, {
      method: 'PUT',
    });
  }

  async delete(path: string) {
    return await this.perform(path, null, {
      method: 'DELETE',
    });
  }
}

export default new Api(ENDPOINT);
