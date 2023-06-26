class ApiInstance {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get = async <ResponseType>(path: string): Promise<ResponseType> => {
    try {
      const resp = await fetch(`${this.baseUrl}${path}`);
      const jsonResp = await resp.json();
      return jsonResp;
    } catch (error) {
      console.log(`Error in get path ${path}, with error `, error);
      throw error;
    }
  };

  post = async <BodyType, ResponseType>(
    path: string,
    data: BodyType
  ): Promise<ResponseType> => {
    try {
      const resp = await fetch(`${this.baseUrl}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const jsonResp = await resp.json();
      return jsonResp;
    } catch (error) {
      console.log(`Error in post path ${path}, with error `, error);
      throw error;
    }
  };
}

const api = new ApiInstance('https://fakestoreapi.com');

export default api;
