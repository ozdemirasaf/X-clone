import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	currentAccount: {
		id: 1,
		username: 'Ömer asaf Özdemir',
		fullName: './jv0541',
		avatar: 'https://pbs.twimg.com/profile_images/1841453891990224896/zICPHsmD_reasonably_small.png'
	},
	accounts: [
		{
			id: 1,
			username: 'Ömer asaf Özdemir',
			fullName: './jv0541',
			avatar: 'https://pbs.twimg.com/profile_images/1841453891990224896/zICPHsmD_reasonably_small.png'
		},
		{
			id: 2,
			username: 'asaf özdemir',
			fullName: 'özdemirAsaf',
			avatar: 'https://pbs.twimg.com/profile_images/1841453891990224896/zICPHsmD_reasonably_small.png'
		}
	]
}
const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// state manipule etme metodlari
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload)
			if (state.currentAccount && action.payload === state.currentAccount.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccount = action.payload
		}
	}
})
export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer