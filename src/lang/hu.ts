export default {
	translation: {
		loading: "Betöltés",
		pageNotFound: "Az oldal nem található",
		pageNotFoundLonger:
			"A keresett oldal nem létezik vagy áthelyezésre került.",
		backToHome: "Vissza a főoldalra",
		version: "Verzió",
		errorOccurred: "Hiba történt!",
		welcome: {
			welcomeToRescanny: "Üdv a Rescanny-ben",
			loginOrRegister: "Lépj be a fiókodba vagy hozz létre egy újat",
			loginButton: "Bejelentkezés",
			registerButton: "Regisztráció",
		},
		login: {
			subTitle: "Lépj be a fiókodba vagy hozz létre egy újat",
			loginButton: "Bejelentkezés",
			acceptPrivacy:
				"A folytatással elfogadod a <0>{{terms}}</0> és az <br /> <1>{{privacy}}</1>.",
			link: {
				terms: "Általános Szerződési Feltételeket",
				privacy: "Adatvédelmi Szabályzatot",

				route: {
					terms: "/page/altalanos-szerzodesi-feltetelek",
					privacy: "/page/adatvedelmi-szabalyzat",
				},
			},
			googleButton: "Folytatás Google-lel",
			facebookButton: "Folytatás Facebook-kal",
		},
		input: {
			emailLabel: "E-mail cím",
			emailPlaceholder: "te@pelda.hu",
			lastName: "Vezetéknév",
			firstName: "Keresztnév",
			confirmationCode: "Megerősítő kód",
		},
		common: {
			save: "Mentés",
			tapToEdit: "Koppints a módosításhoz",
		},
		conjugation: {
			or: "Vagy",
		},
		navbar: {
			home: "Kezdőlap",
			profile: "Profil",
		},
		subscriptionBadge: "{{type}} Előfizetés",
		profile: {
			logoutButton: "Kijelentkezés",
			actions: "Műveletek",
			deleteButton: "Fiók törlése",
			accountSettings: {
				title: "Fiók beállítások",
				personal: {
					title: "Személyes adatok",
					subtitle: "Név és email cím módosítása",
				},
				appearance: {
					title: "Megjelenés",
					subtitle: "Nyelv és időzóna beállítások",
				},
				notifications: {
					title: "Értesítések",
					subtitle: "Email és push értesítések kezelése",
				},
			},
			subscriptionSection: {
				title: "Előfizetés",
				modify: "Módosítás",
				label: "Csomag",
				price: "Ár",
				nextBilling: "Következő fizetés",
			},
			manage: {
				personal: {
					name: "Név",
					emailHint: "Az email cím módosításához megerősítő emailt küldünk.",
					contact: "Elérhetőségek",
				},
			},
		},
		maintenance: {
			title: "Karbantartás alatt!",
			subtitle: "Hamarosan visszatérünk. Köszönjük a türelmedet!",
		},
		error: {
			title: "Hiba történt!",
			subtitle: "Valami hiba történt. Kérjük, próbáld újra.",
			requestFailed: "A kérés sikertelen volt. Kérjük próbálja újra!",
			submitFailed: "A beküldés sikertelen volt. Kérjük próbálja újra!",
		},
		button: {
			reloadPage: "Újrapróbálás",
			cancel: "Mégse",
			modify: "Módosítás",
			save: "Mentés",
			getCode: "Kód kérése",
			sending: "Küldés...",
			saving: "Mentés...",
			back: "Vissza",
		},
		modal: {
			profileDeletion: {
				title: "Fiók törlése",
				description:
					"Biztosan törölni szeretnéd a fiókodat? Ez a művelet <0>nem visszavonható</0>, és minden adatod <0>véglegesen törlésre kerül</0>.",
				confirm: "Törlés!",
			},
		},
		multiStepEmailChange: {
			currentEmail: "Jelenlegi e-mail:",
			newEmail: "Új e-mail:",
			emailChangedSuccessfully: "E-mail cím sikeresen megváltoztatva!",
		},
		validation: {
			invalidEmail: "Kérjük adjon meg egy érvényes e-mail címet!",
			invalidCode: "Kérjük adjon meg egy érvényes ellenőrző kódot!",
		},
	},
};
