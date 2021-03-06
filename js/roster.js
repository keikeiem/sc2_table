/*
    Proleague 2016 roster
    Author : keikeiem (keikeiem@naver.com)
    Last Update : 2016. 3. 12
    Source : KeSPA Facebook
*/
var ktRolster = []
var ktName = ['김대엽', '주성욱', '최성일', '정지훈', '전태양', '박근일', '이동녕', '황강호'];
var ktRace = ['P', 'P', 'P', 'T', 'T', 'T', 'Z', 'Z'];
var ktID = ['Stats', 'Zest', 'Trust', 'JJAKJI', 'TY', 'SpeeD', 'Leenock', 'Losira'];
for (var i = 0; i < ktName.length; i++) {
    ktRolster.push({ name: ktName[i], race: ktRace[i], id: ktID[i] });
}

var samsungGalaxy = [];
// 1라운드
// var sGName = ['남기웅', '백동준', '김기현', '노준규', '서태희', '강민수', '박진혁'];
// var sGRace = ['P', 'P', 'T', 'T', 'T', 'Z', 'Z'];
// var sGID = ['Hurricane', 'Dear', 'Reality', 'BravO', 'Journey', 'Solar', 'Armani'];

// 2라운드
var sGName = ['송병구', '남기웅', '백동준', '김기현', '노준규', '서태희', '강민수', '박진혁'];
var sGRace = ['P', 'P', 'P', 'T', 'T', 'T', 'Z', 'Z'];
var sGID = ['Stork', 'Hurricane', 'Dear', 'Reality', 'BravO', 'Journey', 'Solar', 'Armani'];
for (var i = 0; i < sGName.length; i++) {
    samsungGalaxy.push({ name: sGName[i], race: sGRace[i], id: sGID[i] });
}

var skT1 = [];
var skName = ['김도우', '박한솔', '김명식', '이신형', '조중혁', '박령우', '어윤수', '김준혁'];
var skRace = ['P', 'P', 'P', 'T', 'T', 'Z', 'Z', 'Z'];
var skID = ['Classic', 'Zoun', 'MyungSiK', 'INnoVation', 'Dream', 'Dark', 'soO', 'Impact'];
for (var i = 0; i < skName.length; i++) {
    skT1.push({ name: skName[i], race: skRace[i], id: skID[i] });
}

var cjEntus = [];
// 1라운드
// var cjName = ['김준호', '변영봉', '정우용', '이재선', '한지원', '신희범'];
// var cjRace = ['P', 'P', 'T', 'T', 'Z', 'Z'];
// var cjID = ['herO', 'Hush', 'Bbyong', 'Bunny', 'ByuL', 'Ragnarok'];

// 2라운드
var cjName = ['김준호', '변영봉', '이재선', '한지원', '신희범'];
var cjRace = ['P', 'P', 'T', 'Z', 'Z'];
var cjID = ['herO', 'Hush', 'Bunny', 'ByuL', 'Ragnarok'];
for (var i = 0; i < cjName.length; i++) {
    cjEntus.push({ name: cjName[i], race: cjRace[i], id: cjID[i] });
}

var jinAir = [];
// 1라운드
// var jGName = ['김유진', '조성호', '장현우', '김도욱', '조성주', '이병렬'];
// var jGRace = ['P', 'P', 'P', 'T', 'T', 'Z'];
// var jGID = ['sOs', 'Trap', 'Creator', 'Cure', 'Maru', 'Rogue'];

// 2라운드
var jGName = ['김유진', '조성호', '장현우', '김도욱', '조성주', '고석현', '이병렬'];
var jGRace = ['P', 'P', 'P', 'T', 'T', 'Z', 'Z'];
var jGID = ['sOs', 'Trap', 'Creator', 'Cure', 'Maru', 'HyuN', 'Rogue'];
for (var i = 0; i < jGName.length; i++) {
    jinAir.push({ name: jGName[i], race: jGRace[i], id: jGID[i] });
}

var mvp = [];
// 1라운드
// var mvpName = ['이형섭', '안상원', '한재운', '김기용', '고병재', '김동원', '김효종', '현성민'];
// var mvpRace = ['P', 'P', 'P', 'T', 'T', 'T', 'Z', 'Z'];
// var mvpID = ['Choya', 'Seed', 'Blaze', 'Forte', 'GuMiho', 'Ryung', 'Horror', 'Depature'];

// 2라운드
var mvpName = ['안상원', '한재운', '김기용', '고병재', '김동원', '김효종', '박남규', '현성민'];
var mvpRace = ['P', 'P', 'T', 'T', 'T', 'Z', 'Z', 'Z'];
var mvpID = ['Seed', 'Blaze', 'Forte', 'GuMiho', 'Ryung', 'Horror', 'Pet', 'Depature'];
for (var i = 0; i < mvpName.length; i++) {
    mvp.push({ name: mvpName[i], race: mvpRace[i], id: mvpID[i] });
}

var afreeca = [];
// 1라운드
// var aFName = ['김도경', '서성민', '신건우', '최지성', '한이석', '황규석', '이원표'];
// var aFRace = ['P', 'P', 'P', 'T', 'T', 'T', 'Z'];
// var aFID = ['Billowy', 'Super', 'SGW', 'Bomber', 'aLive', 'KeeN', 'Curious'];

// 2라운드
var aFName = ['김도경', '서성민', '조지현', '최지성', '한이석', '황규석', '이원표', '이원주'];
var aFRace = ['P', 'P', 'P', 'T', 'T', 'T', 'Z', 'Z'];
var aFID = ['Billowy', 'Super', 'Patience', 'Bomber', 'aLive', 'KeeN', 'Curious', 'DRGLing'];
for (var i = 0; i < aFName.length; i++) {
    afreeca.push({ name: aFName[i], race: aFRace[i], id: aFID[i] });
}
