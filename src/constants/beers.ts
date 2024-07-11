import { StaticImageData } from 'next/image';

import PNG_BonChef from '@/assets/raster/beer/bon-chef.png';
import PNG_FunkyFalcon02 from '@/assets/raster/beer/funky-falcon-02.png';
import PNG_FunkyFalcon from '@/assets/raster/beer/funky-falcon.png';
import PNG_GreenBullet from '@/assets/raster/beer/green-bullet.png';
import PNG_HappyTrails from '@/assets/raster/beer/happy-trails.png';
import PNG_HeadingUp from '@/assets/raster/beer/heading-up.png';
import PNG_HowlingWolf from '@/assets/raster/beer/howling-wolf.png';
import PNG_ImperialStoutJackDaniels from '@/assets/raster/beer/imperial-stout-jack-daniels.png';
import PNG_ImperialStout from '@/assets/raster/beer/imperial-stout.png';
import PNG_JazzHands from '@/assets/raster/beer/jazz-hands.png';
import PNG_ModernClassic from '@/assets/raster/beer/modern-classic.png';
import PNG_PieHard from '@/assets/raster/beer/pie-hard.png';
import PNG_Pils from '@/assets/raster/beer/pils.png';
import PNG_PornstarMartini from '@/assets/raster/beer/pornstar-martini.png';
import PNG_SichuanDragon from '@/assets/raster/beer/sichuan-dragon.png';
import PNG_SmokedPeach from '@/assets/raster/beer/smoked-peach.png';
import PNG_SpaceJumper from '@/assets/raster/beer/space-jumper.png';
import PNG_StroopwafelStout from '@/assets/raster/beer/stroopwafel-stout.png';
import PNG_SummerLovin from '@/assets/raster/beer/summer-lovin.png';
import PNG_SunsetSuzy from '@/assets/raster/beer/sunset-suzy.png';
import PNG_TangoNights from '@/assets/raster/beer/tango-nights.png';
import PNG_WhiteMamba from '@/assets/raster/beer/white-mamba.png';
import PNG_WindWalker from '@/assets/raster/beer/wind-walker.png';

type TBeer = {
	image: StaticImageData;
	name: string;
	category: string;
	price: number;
};

type TBeerName =
	| 'bonChef'
	| 'funkyFalcon02'
	| 'funkyFalcon'
	| 'greenBullet'
	| 'happyTrails'
	| 'headingUp'
	| 'howlingWolf'
	| 'imperialStoutJackDaniels'
	| 'imperialStout'
	| 'jazzHands'
	| 'modernClassic'
	| 'pieHard'
	| 'pils'
	| 'pornstarMartini'
	| 'sichuanDragon'
	| 'smokedPeach'
	| 'spaceJumper'
	| 'stroopwafelStout'
	| 'summerLovin'
	| 'sunsetSuzy'
	| 'tangoNights'
	| 'whiteMamba'
	| 'windWalker';

export const beer: Record<TBeerName, TBeer> = {
	funkyFalcon: {
		image: PNG_FunkyFalcon,
		name: 'Funky Falcon',
		category: 'Pale Ale',
		price: 2.75,
	},
	bonChef: {
		image: PNG_BonChef,
		name: 'Bon Chef',
		category: 'New England IPA',
		price: 2.75,
	},
	whiteMamba: {
		image: PNG_WhiteMamba,
		name: 'White Mamba',
		category: 'Witbier',
		price: 2.75,
	},
	greenBullet: {
		image: PNG_GreenBullet,
		name: 'Green Bullet',
		category: 'India Pale Ale',
		price: 2.75,
	},
	funkyFalcon02: {
		image: PNG_FunkyFalcon02,
		name: 'Funky Falcon 0.2%',
		category: 'Non-alcoholic Pale Ale',
		price: 2.3,
	},
	sunsetSuzy: {
		image: PNG_SunsetSuzy,
		name: 'Sunset Suzy',
		category: 'Orange Soda Sour',
		price: 2.75,
	},
	howlingWolf: {
		image: PNG_HowlingWolf,
		name: 'Howling Wolf',
		category: 'Porter',
		price: 3.0,
	},
	pils: {
		image: PNG_Pils,
		name: 'Pils',
		category: 'Classic Pilsner',
		price: 1.99,
	},
	modernClassic: {
		image: PNG_ModernClassic,
		name: 'Modern Classic',
		category: 'Double IPA',
		price: 4.5,
	},
	sichuanDragon: {
		image: PNG_SichuanDragon,
		name: 'Sichuan Dragon',
		category: 'Steam Lager',
		price: 3.0,
	},
	pornstarMartini: {
		image: PNG_PornstarMartini,
		name: 'PornStar Martini Sour',
		category: 'Cocktail Series',
		price: 3.9,
	},
	smokedPeach: {
		image: PNG_SmokedPeach,
		name: 'Smoked Peach Bourbon Sour',
		category: 'Cocktails Series',
		price: 4.25,
	},
	spaceJumper: {
		image: PNG_SpaceJumper,
		name: 'Space Jumper',
		category: 'Single Hop Galaxy IPA',
		price: 4.5,
	},
	windWalker: {
		image: PNG_WindWalker,
		name: 'Wind Walker',
		category: 'New England Double IPA',
		price: 4.5,
	},
	headingUp: {
		image: PNG_HeadingUp,
		name: 'Heading Up',
		category: 'Red IPA',
		price: 4.25,
	},
	jazzHands: {
		image: PNG_JazzHands,
		name: 'Jazz Hands',
		category: 'Honey Chamomile Saison',
		price: 3.75,
	},
	tangoNights: {
		image: PNG_TangoNights,
		name: 'Tango Nights',
		category: 'Tonka & Salted Caramel Stout',
		price: 4.0,
	},
	stroopwafelStout: {
		image: PNG_StroopwafelStout,
		name: 'Stroopwafel Stout',
		category: 'Stout',
		price: 4.0,
	},
	imperialStout: {
		image: PNG_ImperialStout,
		name: 'Imperial Stout Ardbeg Whisky',
		category: 'Barrel Aged',
		price: 8.8,
	},
	imperialStoutJackDaniels: {
		image: PNG_ImperialStoutJackDaniels,
		name: 'Imperial Stout Jack Daniels Makers Mark',
		category: 'Barrel Aged',
		price: 8.8,
	},
	pieHard: {
		image: PNG_PieHard,
		name: 'Pie Hard',
		category: 'Apple Pie Sour',
		price: 4.0,
	},
	summerLovin: {
		image: PNG_SummerLovin,
		name: "Summer Lovin'",
		category: 'Cucumber Watermelon Sour',
		price: 3.9,
	},
	happyTrails: {
		image: PNG_HappyTrails,
		name: 'Happy Trails',
		category: 'NZ West Coast IPA',
		price: 4.5,
	},
};
