export class HttpClient {
  constructor(public baseUrl: string) {
  }

  async get<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(this.baseUrl + path, init)

    if (!response.ok) {
      throw new Error(`Failed to fetch data. (${response.statusText})`)
    }

    return await response.json()
  }

  async getText(path: string, init?: RequestInit): Promise<string> {
    const response = await fetch(this.baseUrl + path, init)

    if (!response.ok) {
      throw new Error(`Failed to fetch data. (${response.statusText})`)
    }

    return await response.text()
  }

  async post<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(this.baseUrl + path, {
      ...init,
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch data. (${response.statusText})`)
    }

    return await response.json()
  }
}
