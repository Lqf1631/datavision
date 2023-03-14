export interface ChinaAdd {
	confirm: number;
	heal: number;
	dead: number;
	nowConfirm: number;
	suspect: number;
	localConfirmH5: number;
	nowSevere: number;
	importedCase: number;
	noInfect: number;
	localConfirm: number;
	noInfectH5: number;
}

export interface ShowAddSwitch {
	all: boolean;
	confirm: boolean;
	dead: boolean;
	heal: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	importedCase: boolean;
	noInfect: boolean;
	suspect: boolean;
	localConfirm: boolean;
	localinfeciton: boolean;
}

export interface Total {
	nowConfirm: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	adcode: string;
	dead: number;
	showRate: boolean;
	continueDayZeroLocalConfirm: number;
	confirm: number;
	heal: number;
	mtime: string;
	wzz: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
}

export interface Total {
	mtime: string;
	adcode: string;
	nowConfirm: number;
	confirm: number;
	dead: number;
	showRate: boolean;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroConfirm: number;
	heal: number;
	showHeal: boolean;
	wzz: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	mtime: string;
	confirm: number;
	heal: number;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	highRiskAreaNum: number;
	dead: number;
	showRate: boolean;
	showHeal: boolean;
	wzz: number;
	nowConfirm: number;
	continueDayZeroLocalConfirm: number;
	adcode: string;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Today {
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: string;
}

export interface Children {
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
	date: string;
	today: Today;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface AreaTree {
	total: Total;
	children: Children[];
	name: string;
	today: Today;
}

export interface ChinaTotal {
	nowConfirm: number;
	showlocalinfeciton: number;
	localConfirmH5: number;
	mediumRiskAreaNum: number;
	nowLocalWzz: number;
	localConfirmAdd: number;
	nowSevere: number;
	localWzzAdd: number;
	confirmAdd: number;
	noInfectH5: number;
	local_acc_confirm: number;
	dead: number;
	importedCase: number;
	showLocalConfirm: number;
	noInfect: number;
	deadAdd: number;
	mtime: string;
	highRiskAreaNum: number;
	localConfirm: number;
	confirm: number;
	heal: number;
	suspect: number;
	mRiskTime: string;
}

export interface Diseaseh5Shelf {
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
}

export interface StatisGradeCityDetail {
	province: string;
	confirmAdd: number;
	dead: number;
	heal: number;
	grade: string;
	wzz_add: string;
	syear: number;
	city: string;
	nowConfirm: number;
	confirm: number;
	date: string;
	mtime: string;
	sdate: string;
}

export interface Data {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}

export interface RootObject {
	ret: number;
	info: string;
	data: Data;
}