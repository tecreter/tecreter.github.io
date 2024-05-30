// (function () {
//
//     // select laguage
//     const selectLangKorea = document.getElementById('select-lang-korean');
//     const selectLangEng = document.getElementById('select-lang-english');
//     const selectLangUl = document.querySelector('.select_lang');
//     const selectLangliKor = document.getElementById('lang-korean');
//     const selectLanglieng = document.getElementById('lang-english');
//
//
//     function selectLangHandler(e) {
//         selectLangUl.style.display = 'flex';
//     }
//
//     selectLangKorea.addEventListener('click', selectLangHandler);
//     selectLangEng.addEventListener('click', selectLangHandler);
//
//     function chooseLangHandler1(e) {
//         selectLangKorea.style.display = 'none';
//         selectLangEng.style.display = 'flex';
//         selectLangUl.style.display = 'none';
//     }
//
//     function chooseLangHandler2(e) {
//         selectLangKorea.style.display = 'flex';
//         selectLangEng.style.display = 'none';
//         selectLangUl.style.display = 'none';
//         querySelectorAll(top_btn).classList.add(active);
//     }
//
//     selectLangliKor.addEventListener('click', chooseLangHandler2);
//     selectLanglieng.addEventListener('click', chooseLangHandler1);
//
// })();

function getParameter(param) {
    var requestParam = '';

    var url = unescape(location.href);

    var exsistsParam = _.contains(url, '=');

    if (exsistsParam) {
        var paramArr = (url.substring(url.indexOf('?') + 1, url.length)).split('&');

        for(var i=0; i < paramArr.length; i++) {
            var temp = paramArr[i].split('=');

            if (temp[0].toUpperCase() == param.toUpperCase()) {
                requestParam = paramArr[i].split('=')[1];
                break;
            }
        }
    }

    return requestParam;
}