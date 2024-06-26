import { HttpClient } from "@/lib/client/client";

export class AuthApi {
  constructor(private readonly client: HttpClient) {
  }

  async getAccountInfo(address: string): Promise<{ accountNumber: number, sequence: number }> {
    try {
      const response = await this.client.get<{
        account: {
          "@type": string,
          address: string,
          pub_key: {
            "@type": string,
            key: string
          },
          account_number: string,
          sequence: string,
        }
      }>(`/cosmos/auth/v1beta1/accounts/${address}`)

      return {
        accountNumber: parseInt(response.account.account_number),
        sequence: parseInt(response.account.sequence)
      }
    } catch (e) {
      if (!(e instanceof Error && e.message.includes("Not Found"))) {
        console.error(e)
      }
    }

    return {
      accountNumber: 0,
      sequence: 0,
    }
  }
}
