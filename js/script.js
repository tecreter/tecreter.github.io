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

(function () {
    const selectLangKorea = document.getElementById('select-lang-ko');
    const selectLangEng = document.getElementById('select-lang-en');

    selectLangKorea.addEventListener('click', function () {
        sessionStorage.setItem('cons_lang', 'ko');
        location.reload();
    });

    selectLangEng.addEventListener('click', function () {
        sessionStorage.setItem('cons_lang', 'en');
        location.reload();
    });

})();

let translations = {};
let globalSiteLang = sessionStorage.getItem('cons_lang') || null;

let blang = globalSiteLang == null ? (navigator.language || navigator.userLanguage) : globalSiteLang;
let siteLang = (['en-US', 'en', 'EN'].indexOf(blang) >= 0) ? 'en' : 'ko';

if(globalSiteLang == null) sessionStorage.setItem('cons_lang', siteLang);
document.getElementById('select-lang-'+(siteLang == 'en' ? 'ko' : 'en')).style.display = "flex";

const fetchContent = () => {
    return fetch('/js/lang/'+siteLang+'.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            translations = data;
            translatePage();
        });
};
fetchContent();
const translatePage = () => {
    document.querySelectorAll('[localization-key]').forEach((element) => {
        let key = element.getAttribute('localization-key');
        let translation = translations[key];
        element.innerText = translation;
    });
};