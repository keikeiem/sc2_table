var selectSet = function() {
    var tableElement = document.getElementById('setTable');
    var setElement = document.getElementById('selectSet').value;

    var string = '';

    for (var setNumber = 0; setNumber < setElement; setNumber++) {
        string += '<div class="commonLayout" style="width:300px;">';
        string += '<div class="commonLayout" style="width:50px; height:30px; border:1px solid #DDD;">';
        string += '<span class="tableTitle">'+ (setNumber + 1) +'세트</span></div>';
        string += '<div class="commonLayout" style="height:30px; border:1px solid #DDD;">';
        string += '<select id="p1_r'+ (setNumber + 1) +'">';
        string += '<option value="">[결과]</option>';
        string += '<option value="W">승리</option>';
        string += '<option value="L">패배</option>';
        string += '<option value="N">미진행</option>';
        string += '</select></div>';
        string += '<div class="commonLayout" style="height:30px; border:1px solid #DDD:">';
        string += '<select id="map'+ (setNumber + 1) +'">'
        string += '<option value="">[ 맵 ]</option>';
        string += '<option value="1">어스름 탑</option>';
        string += '<option value="2">레릴락 마루</option>';
        string += '<option value="3">세라스 폐허</option>';
        string += '<option value="4">궤도 조선소</option>';
        string += '<option value="5">프리온 단구</option>';
        string += '<option value="6">중앙 프로토콜</option>';
        string += '<option value="7">울레나</option>';
        string += '<option value="8">라크쉬르</option>';
        string += '<option value="9">하늘방패</option>';
        string += '</select></div>';
        string += '<div class="commonLayout" style="height:30px; border:1px solid #DDD:">';
        string += '<select id="p2_r'+ (setNumber + 1) +'">';
        string += '<option value="">[결과]</option>';
        string += '<option value="W">승리</option>';
        string += '<option value="L">패배</option>';
        string += '<option value="N">미진행</option>';
        string += '</select></div></div>';
    }

    tableElement.innerHTML = string;
};

var makeHTML = function() {
    var terranIconSrc = 'http://intotheclan.com/xe/files/attach/images/140/373/041/b256c9a64d458e1f042cc26880e1fcd5.png';
    var zergIconSrc = 'http://intotheclan.com/xe/files/attach/images/140/373/041/e78ff49d2133d443a4e1f91943c223c5.png';
    var protossIconSrc = 'http://intotheclan.com/xe/files/attach/images/140/373/041/15895471f9eff259d228252d164f0bc8.png';
    var terranBackColor = '#E0E0FF';
    var zergBackColor = '#FFE0E0';
    var protossBackColor = '#E0FFE0';

    // 세트 수
    var setElement = document.getElementById('selectSet').value;

    // 세트별 결과 Object
    var setResult = [];
    function getMapName(value) {
        if (value === 1) { return '어스름 탑'; }
        if (value === 2) { return '레릴락 마루'; }
        if (value === 3) { return '세라스 폐허'; }
        if (value === 4) { return '궤도 조선소'; }
        if (value === 5) { return '프리온 단구'; }
        if (value === 6) { return '중앙 프로토콜'; }
        if (value === 7) { return '울레나'; }
        if (value === 8) { return '라크쉬르'; }
        if (value === 9) { return '하늘방패'; }
    }
    function getTeamName(value) {
        if (value === 1) { return 'SK Telecom T1'; }
        if (value === 2) { return 'KT Rolster'; }
        if (value === 3) { return 'Samsung Galaxy'; }
        if (value === 4) { return 'CJ Entus'; }
        if (value === 5) { return 'JinAir Greenwings'; }
        if (value === 6) { return 'MVP Chicckenmaru'; }
        if (value === 7) { return 'Afreeca Freecs'; }
    }
    // 선수명, 종족, 스코어
    var mainResult = {
        player1Name: document.getElementById('player1').value,
        player1Team: getTeamName(Number(document.getElementById('team1').value)),
        player1Race: document.getElementById('race1').value,
        player1Score: 0,
        player2Score: 0,
        player2Race: document.getElementById('race2').value,
        player2Team: getTeamName(Number(document.getElementById('team2').value)),
        player2Name: document.getElementById('player2').value
    };

    // 세트별 결과
    for (var setNumber = 0; setNumber < setElement; setNumber ++) {
        setResult.push({
            player1: document.getElementById('p1_r' + (setNumber + 1)).value,
            map: getMapName(Number(document.getElementById('map' + (setNumber + 1)).value)),
            player2: document.getElementById('p2_r' + (setNumber + 1)).value,
        });
        if (setResult[setNumber].player1 === 'W') {
            mainResult.player1Score++;
        }
        if (setResult[setNumber].player2 === 'W') {
            mainResult.player2Score++;
        }
    }

    // 틀 만들기
    var string = '';
    string += '<div style="width:448px">';
    string += '<div style="background-color:' + ( mainResult.player1Race === 'T' ? terranBackColor : mainResult.player1Race === 'Z' ? zergBackColor : mainResult.player1Race === 'P' ? protossBackColor : '#FFF' ) + '; position:relative; display:table-row; float:left; width:200px; height:25px; border:1px solid #DDD;">'
    // string += '<span style="padding:3px 0; width:100%; font-weight:bold; text-align:right; display:inline-block;">';
    string += '<span style="padding:3px 0; width:100%; font-weight:bold; text-align:right; float:right;">';
    string += mainResult.player1Name + ( mainResult.player1Team ? '(' + mainResult.player1Team + ')' : '' );
    string += mainResult.player1Race ? '<img src="' + ( mainResult.player1Race === 'T' ? terranIconSrc : mainResult.player1Race === 'Z' ? zergIconSrc : mainResult.player1Race === 'P' ? protossIconSrc : '' ) + '"/>' : '';
    string += '</span></div>';
    string += '<div style="position:relative; display:table-row; float:left; width:20px; height:25px; border:1px solid #DDD;">';
    string += '<span style="width:100%; font-weight:bold; text-align:center; float:inherit; line-height:2;">';
    string += mainResult.player1Score;
    string += '</span></div>';
    string += '<div style="position:relative; display:table-row; float:left; width:20px; height:25px; border:1px solid #DDD;">';
    // string += '<span style="padding:3px 0; width:100%; font-weight:bold; text-align:center; display:inline-block;">';
    string += '<span style="width:100%; font-weight:bold; text-align:center; float:inherit; line-height:2;">';
    string += mainResult.player2Score;
    string += '</span></div>';
    string += '<div style="background-color:' + ( mainResult.player2Race === 'T' ? terranBackColor : mainResult.player2Race === 'Z' ? zergBackColor : mainResult.player2Race === 'P' ? protossBackColor : '#FFF' ) + '; position:relative; display:table-row; float:left; width:200px; height:25px; border:1px solid #DDD;">';
    // string += '<span style="padding:3px 0; width:100%; font-weight:bold; text-align:left; display:inline-block;">';
    string += '<span style="padding:3px 0; width:100%; font-weight:bold; text-align:left; float:left;">';
    string += mainResult.player2Race ? '<img src="' + ( mainResult.player2Race === 'T' ? terranIconSrc : mainResult.player2Race === 'Z' ? zergIconSrc : mainResult.player2Race === 'P' ? protossIconSrc : '' ) + '"/>' : '';
    string += mainResult.player2Name + ( mainResult.player2Team ? '(' + mainResult.player2Team + ')' : '' );
    string += '</span></div>';
    string += '</div>';

    for (var i = 0; i < setResult.length; i++) {
        string += '<div style="width:448px">';
        string += '<div style="position:relative; display:table-row; float:left; width:121px; height:25px; border:1px solid #DDD; background-color:#F7F7F7;">';
        string += '<span style="padding:3px 0; width:100%; font-weight:bold; text-align:center; display:inline-block;">';
        string += setResult[i].player1 === 'N' ? '' : setResult[i].player1;
        string += '</span></div>';
        string += '<div style="position:relative; display:table-row; float:left; width:200px; height:25px; border:1px solid #DDD; background-color:#EEEEAA;">';
        string += '<span style="text-decoration:'+ ( setResult[i].player1 === 'N' ? 'line-through' : ''  ) + '; padding:3px 0; width:100%; font-weight:bold; text-align:center; display:inline-block;">';
        string += setResult[i].map;
        string += '</span></div>';
        string += '<div style="position:relative; display:table-row; float:left; width:121px; height:25px; border:1px solid #DDD; background-color:#F7F7F7;">';
        string += '<span style="padding:3px 0; width:100%; font-weight:bold; text-align:center; display:inline-block;">';
        string += setResult[i].player2 === 'N' ? '' : setResult[i].player2;
        string += '</span></div>';
        string += '</div>'
    }

    var resultElement = document.getElementById('resultArea');
    resultElement.value = string;
    // document.getElementById('test').innerHTML = string;
};

var showSource = function() {
    var sourceElement = document.getElementById('resultArea');
    if (sourceElement.style.display === 'none') {
        sourceElement.style.display = '';
    } else {
        sourceElement.style.display = 'none';
    }
};

var showContent = function(type) {
    var tab1 = document.getElementById('tab1');
    var tab2 = document.getElementById('tab2');
    if (type === 1) {
        tab1.style.display = '';
        tab2.style.display = 'none';
    }
    if (type === 2) {
        tab1.style.display = 'none';
        tab2.style.display = '';
    }
}
