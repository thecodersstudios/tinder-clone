export const user = {
  uid: 'coder',
  job: 'programmer',
  displayName: "The Coder's Studios",
  age: '80',
  photoURL:
    'https://cdn.discordapp.com/attachments/1073889482341875812/1074253729219481690/DALLE_2023-02-11_16.03.49_-_simple_computer_in_90s_modern_art_in_dark_theme.png',
};

export const etc = {
  loginBg: 'https://tinder.com/static/tinder.png',
  logo: 'https://cdn.discordapp.com/attachments/1073889482341875812/1074255223117332591/logo.png',
  matchedLogo:
    'https://cdn.discordapp.com/attachments/1073889482341875812/1075141288141279325/its-a-match.png',
};

export const users = [
  {
    uid: '123',
    displayName: 'Zendaya',
    job: 'actress',
    photoURL:
      'https://assets.vogue.com/photos/63a375616d963c890e208ea0/master/w_2560%2Cc_limit/66176870_134524944423011_8506480711071552370_n.jpg',
    age: 26,
  },
  {
    uid: '4',
    displayName: 'Ann',
    job: 'actress',
    photoURL:
      'https://mblogthumb-phinf.pstatic.net/20150630_289/zjvl851_14356534530941Rbz0_PNG/Screenshot_2015-06-30-15-39-57-1.png?type=w2',
    age: 22,
  },
  {
    uid: '5',
    displayName: 'Léa',
    job: 'actress',
    photoURL:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjBfMSAg/MDAxNDg0ODQxMTcwNzkz.ceH-TGP_p4HsQl3z0mlzfXBFcdZectqm16qcrvncIjcg.6euSCUmDFfjFXGemG9yNfTrMr3TipzSOO_y5afQ8VtIg.JPEG.haewonlee7/lea-seydoux-conde-nast-traveller-16oct15-getty_.jpg?type=w800',
    age: 24,
  },
  {
    uid: '6',
    displayName: 'Natalia',
    job: 'actress',
    photoURL: 'https://fimg5.pann.com/new/download.jsp?FileID=52567460',
    age: 24,
  },
  {
    uid: '7',
    displayName: 'Sophie',
    job: 'actress',
    photoURL: 'https://fimg5.pann.com/new/download.jsp?FileID=52567465',
    age: 26,
  },
];

export const assets = {
  logo: 'https://cdn.discordapp.com/attachments/1073889482341875812/1074255223117332591/logo.png',
  modalLogo:
    'https://cdn.discordapp.com/attachments/1073889482341875812/1074729465134993448/Tinder-logo.png',
};

const messages = [
  { uid: '123', displayName: 'Zendaya', text: '안녕하세요!', id: 1 },
  { uid: 'coder', displayName: 'the coders studios', text: '안녕하세요 ㅎㅎ', id: 2 },

  { uid: '123', displayName: 'Zendaya', text: '반가워요 :)', id: 3 },
  { uid: 'coder', displayName: 'the coders studios', text: '저도 반가워요', id: 4 },

  { uid: '123', displayName: 'Zendaya', text: '저는 젠다이아에요', id: 5 },
  { uid: '123', displayName: 'Zendaya', text: '스파이더맨에 나왔어요 ', id: 6 },
].reverse();

const chat = users.map((user) => ({
  ...user,
  message: 'Hello',
}));

export const mock = { user, etc, assets, chat, users, messages };
