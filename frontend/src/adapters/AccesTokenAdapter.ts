import { AccessTokenAPI, AccessToken } from '@/models'

export function AccessTokenAdapter(accessToken: AccessTokenAPI): AccessToken {
	return {
		accessToken: accessToken.access_token,
		tokenType: accessToken.token_type,
	}
}
