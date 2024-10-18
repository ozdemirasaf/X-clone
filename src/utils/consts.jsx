import store from "../store"



export const MainManu = [
	{
		path: '/',
		title: 'Anasayfa',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#fff"
						d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z">
					</path>
				</svg>
			),
			passive: (
				<svg
					viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#e7e9ea"
						d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z">
					</path>
				</svg>
			)
		}
	},
	{
		path: '/explore',
		title: 'Keşfet',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#fff"
						d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z">
					</path>
				</svg>
			),
			passive: (
				<svg
					viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#e7e9ea"
						d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
					</path>
				</svg>
			)
		}
	},
	{
		path: '/notifications',
		title: 'Bildirimler',
		notification: 4,
		icon: {
			active: (
				<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#fff"
						d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z">
					</path>
				</svg>
			),
			passive: (
				<svg
					viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#e7e9ea"
						d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z">
					</path>
				</svg>
			)
		}
	},
	{
		path: '/messages',
		title: 'Mesajlar',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#fff"
						d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z">
					</path>
				</svg>
			),
			passive: (
				<svg
					viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#e7e9ea"
						d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z">
					</path>
				</svg>
			)
		}
	},
	{
		path: '/lists',
		title: 'Listler',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#fff"
						d="M6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4zm.643 15.8l8.109-11.58h2.515L9.158 17.8H6.643z">
					</path>
				</svg>
			),
			passive: (
				<svg
					viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#e7e9ea"
						d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z">
					</path>
				</svg>
			)
		}
	},
	{
		path: '/bookMarks',
		title: 'Yer İşaretleri',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#fff"
						d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z">
					</path>
				</svg>
			),
			passive: (
				<svg
					viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#e7e9ea"
						d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
					</path>
				</svg>
			)
		}
	},
	{
		path: '/premium',
		title: 'Onaylanmış',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#fff"
						d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
					</path>
				</svg>
			),
			passive: (
				<svg
					viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#e7e9ea"
						d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
					</path>
				</svg>
			)
		}
	},
	{
		path: () => {
			return `/${store.getState().auth.currentAccount.username}`
		},
		title: 'Profil',
		icon: {
			active: (
				<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#fff"
						d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z">
					</path>
				</svg>
			),
			passive: (
				<svg
					viewBox="0 0 24 24" width={26.25} height={26.25}>
					<path
						fill="#e7e9ea"
						d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z">
					</path>
				</svg>
			)
		}
	}

]

export const topics = [
	{
		title: "Türkiye tarihinde gündemde",
		topic: {
			type: 'tag',
			value: "dilanpolat"
		}
	},
	{
		title: "Türkiye tarihinde gündemde",
		topic: {
			type: 'query',
			value: "Starlink"
		},
		postCount: 13663
	},
	{
		title: "Türkiye tarihinde gündemde",
		topic: {
			type: 'tag',
			value: "DiscordKapatılsın"
		},
		postCount: 17500
	},
	{
		title: "Türkiye tarihinde gündemde",
		topic: {
			type: 'tag',
			value: "Aysenurhalil"
		},
		postCount: 36100
	},
	{
		title: "Politika",
		topic: {
			type: 'tag',
			value: "Köfteci Yusuf"
		},
		postCount: 22400
	},
	{
		title: "İş & Finans",
		topic: {
			type: 'tag',
			value: "Telegram"
		},
		postCount: 21400
	},
	{
		title: "Türkiye tarihinde gündemde",
		topic: {
			type: 'query',
			value: "Ecrin"
		},
		postCount: 50100
	},
	{
		title: "Türkiye tarihinde gündemde",
		topic: {
			type: 'query',
			value: "Ebu Ubeyde"
		},
		postCount: 31500
	},
	{
		title: "İş & Finans",
		topic: {
			type: 'query',
			value: "viop"
		},
		postCount: 2058
	},
	{
		title: "Türkiye tarihinde gündemde",
		topic: {
			type: 'tag',
			value: "KızılGoncalar"
		},
		postCount: 24000
	},
	{
		title: "Türkiye tarihinde gündemde",
		topic: {
			type: 'tag',
			value: "vahset"
		},
		postCount: 17600
	}
]

export const colors = [
	{
		primary: '#1d9bf0',
		secondary: '#8ecdf8'
	},
	{
		primary: '#ffd400',
		secondary: '#ffea80'
	},
	{
		primary: '#f91880',
		secondary: '#fc8cc0'
	},
	{
		primary: '#7856ff',
		secondary: '#bcabff'
	},
	{
		primary: '#ff7a00',
		secondary: '#ffb80'
	},
	{
		primary: '#00ba7c',
		secondary: '#80ddbe'
	}

]

export const fontSizes = [
	14,
	15,
	16,
	18,
	19
]