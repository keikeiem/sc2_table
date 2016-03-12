var array = [];
var maps = [
    { name: '어스름 탑', value: 1 },
    { name: '레릴락 마루', value: 2 },
    { name: '궤도 조선소', value: 3 },
    { name: '세라스 폐허', value: 4 },
    { name: '프리온 단구', value: 5 },
    { name: '울레나', value: 6 }
];
/** 라디오 버튼 클릭시
* @method radioClick
* @param {string} name : 라디오 버튼 이름
* @param {string} value : 승리팀 (1 or 2)
*/
var radioClick = function(name, value) {
    if (name === 'match1') { array[0] = Number(value); }
    if (name === 'match2') { array[1] = Number(value); }
    if (name === 'match3') { array[2] = Number(value); }
    if (name === 'match4') { array[3] = Number(value); }
    if (name === 'match5') { array[4] = Number(value); }
    console.log(array);
};
/** 라디오 버튼 데이터로 스코어 출력하는 함수
* @method checkArray
*/
var checkArray = function() {
    console.log(array);
};
/** Player Select Box를 생성하는 함수
* @method makePlayerBox
* @param {object} team : 선택된 팀 객체
* @param {string} teamOrder : 팀 순서 (1 or 2)
* @param {string} matchOrder : 세트 순서
*/
var makePlayerBox = function(team, teamOrder, matchOrder) {
    var string = '';
    string += '<select id="team' + teamOrder + 'match' + matchOrder + '" style="width:160px;">';
    string += '<option value="">[' + matchOrder + '세트 선수 선택]</option>';
    for (var i = 0; i < team.length; i++) {
        string += '<option value="' + i + '">' + team[i].name + '(' + team[i].race +', ' + team[i].id + ')' + '</option>';
    }
    string += '</select>';

    document.getElementById('team' + teamOrder + 'player' + matchOrder).innerHTML = string;
};
/** Map Select Box를 생성하는 함수
* @method makeMapBox
* @param {object} mapData : 맵 객체
* @param {string} matchOrder : 세트 순서
*/
var makeMapBox = function(mapData, matchOrder) {
    var string = '';
    string += '<select id="map' + matchOrder + '" style="width:160px; padding-left:30px;">';
    string += '<option value="">[' + matchOrder + '세트 맵 선택]</option>';
    for (var i = 0; i < mapData.length; i++) {
        string += '<option value="' + mapData[i].value + '">' + mapData[i].name + '</option>';
    }
    string += '</select>';

    document.getElementById('map' + matchOrder).innerHTML = string;
};
/** 팀 선택시 이벤트
* @method makeMapBox
* @param {string} teamOrder : 팀 순서 (1 or 2)
* @param {string} teanNumber : 팀 번호 (value)
*/
var selectTeam = function(teamOrder, teamNumber) {
    var team;
    teamNumber = Number(teamNumber);

    if (teamNumber === 1) { team = skT1; }
    if (teamNumber === 2) { team = ktRolster; }
    if (teamNumber === 3) { team = samsungGalaxy; }
    if (teamNumber === 4) { team = cjEntus; }
    if (teamNumber === 5) { team = jinAir; }
    if (teamNumber === 6) { team = mvp; }
    if (teamNumber === 7) { team = afreeca; }

    for (var i = 0; i < 5; i++) {
        makePlayerBox(team, teamOrder, i + 1);
    }
};

// 페이지 열리면 작동하는 함수
window.onload = function() {
    for (var i = 0; i < 5; i++) {
        makeMapBox(maps, i + 1);
    }
}
