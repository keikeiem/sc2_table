var scoreArray = [];
var maps = [
    { name: '어스름 탑', value: 1 },
    { name: '레릴락 마루', value: 2 },
    { name: '궤도 조선소', value: 3 },
    { name: '프로스트', value: 4 },
    { name: '세종과학기지', value: 5 },
    { name: '만발의 정원', value: 6 }
];
/** 라디오 버튼 클릭시
* @method radioClick
* @param {string} name : 라디오 버튼 이름
* @param {string} value : 승리팀 (1 or 2)
*/
var radioClick = function(name, value) {
    if (name === 'match1') { scoreArray[0] = Number(value); }
    if (name === 'match2') { scoreArray[1] = Number(value); }
    if (name === 'match3') { scoreArray[2] = Number(value); }
    if (name === 'match4') { scoreArray[3] = Number(value); }
    if (name === 'match5') { scoreArray[4] = Number(value); }
    if (name === 'match6') { scoreArray[5] = Number(value); }
    if (name === 'match7') { scoreArray[6] = Number(value); }
};
/** 라디오 버튼 데이터로 스코어 출력하는 함수
* @method computeScore
*/
var computeScore = function(array) {
    var team1score = 0;
    var team2score = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            team1score++;
        }
        if (array[i] === 2) {
            team2score++;
        }
    }
    return [team1score, team2score];
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
    string += '<option value="A">ACE</option>'
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
    string += '<select id="match' + matchOrder + 'map" style="width:160px; padding-left:30px;">';
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
    console.log(teamNumber);
    teamNumber = Number(teamNumber);

    if (teamNumber === 1) { team = skT1; }
    if (teamNumber === 2) { team = ktRolster; }
    if (teamNumber === 3) { team = samsungGalaxy; }
    if (teamNumber === 4) { team = cjEntus; }
    if (teamNumber === 5) { team = jinAir; }
    if (teamNumber === 6) { team = mvp; }
    if (teamNumber === 7) { team = afreeca; }

    var matchType = document.getElementById('proleagueMatchType').value;
    var matchCount;
    if (Number(matchType) === 1) {
        matchCount = 5;
    } else if (Number(matchType) === 2) {
        matchCount = 7;
    } else {
        return;
    }
    for (var i = 0; i < matchCount; i++) {
        makePlayerBox(team, teamOrder, i + 1);
    }
};

var selectMatchType = function(type) {
    // 정규 시즌 5전제
    if (Number(type) === 1) {
        var string = '';
        for (var i = 0; i < 5; i++) {
            string += makeMatchTableRow(i + 1);
        }
        document.getElementById('matchTable').innerHTML = string;
        for (var i = 0; i < 5; i++) {
            makeMapBox(maps, i + 1);
        }
    }
    // 포스트 시즌 7전제
    if (Number(type) === 2) {
        var string = '';
        for (var i = 0; i < 7; i++) {
            string += makeMatchTableRow(i + 1);
        }
        document.getElementById('matchTable').innerHTML = string;
        for (var i = 0; i < 7; i++) {
            makeMapBox(maps, i + 1);
        }
    }
};
// 매치 테이블 한 줄을 생성하는 함수
var makeMatchTableRow = function(roundNumber) {
    var string = '';
    string += '<div class="commonLayout" style="width:28px; height:28px; border:1px solid #DDD;">';
    string += '<input type="radio" name="match' + roundNumber + '" value="1" onclick="radioClick(this.name, this.value);"></input>';
    string += '</div>';
    string += '<div class="commonLayout" style="width:160px; height:30px;">';
    string += '<div id="team1player' + roundNumber + '" class="commonLayout">';
    string += '<select style="width:160px;"></select>';
    string += '</div>';
    string += '</div>';
    string += '<div class="commonLayout" style="width:160px; height:30px;">';
    string += '<div id="map' + roundNumber + '" class="commonLayout">';
    string += '<select style="width:160px;"></select>';
    string += '</div>';
    string += '</div>';
    string += '<div class="commonLayout" style="width:160px; height:30px;">';
    string += '<div id="team2player' + roundNumber + '" class="commonLayout">';
    string += '<select style="width:160px;"></select>';
    string += '</div>';
    string += '</div>';
    string += '<div class="commonLayout" style="width:28px; height:28px; border:1px solid #DDD;">';
    string += '<input type="radio" name="match' + roundNumber + '" value="2" onclick="radioClick(this.name, this.value);"></input>';
    string += '</div>';
    return string;
};

// 페이지 열리면 작동하는 함수
window.onload = function() {
    selectMatchType(document.getElementById('proleagueMatchType').value);
}
