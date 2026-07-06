/*
 * js/data.js — 콘텐츠 데이터 임베드
 * _workspace/02_data/*.json 의 내용을 그대로 전역 객체로 담는다.
 * file://로 직접 열어도 fetch 없이 동작하도록 하기 위함(와인 정적 사이트 구축 스킬 참조).
 * 원본 JSON 사본은 site/data/*.json 에 별도 보관(참고·향후 서버 전환용).
 */
window.WINE_DATA = {
  // 품종 14종 (레드 8, 화이트 6) — 02_data/grapes.json
  grapes: [
    {
      "id": "cabernet-sauvignon",
      "name": "카베르네 소비뇽",
      "nameEn": "Cabernet Sauvignon",
      "color": "red",
      "aromas": [
        "블랙커런트(카시스)",
        "자두",
        "시더우드(삼나무)",
        "피망(서늘한 산지)"
      ],
      "body": "풀바디",
      "regions": [
        "보르도(프랑스)",
        "나파밸리(미국)",
        "칠레",
        "쿠나와라(호주)"
      ],
      "description": "\"레드 와인의 왕\"으로 불리는 세계에서 가장 널리 재배되는 레드 품종. 껍질이 두껍고 씨가 커서 탄닌 함량이 높으며 짙은 색과 장기 숙성력이 특징이다. 오크 숙성과 궁합이 좋아 바닐라·담배 향이 더해지는 경우가 많다.",
      "beginnerTip": "탄닌이 강해 입안이 마르는 느낌이 들면 스테이크 등 기름진 육류와 함께 마시면 훨씬 부드럽게 느껴진다.",
      "source": "와인 노트(conginfo.com); 프랑스 레드 와인 정리(mojji.bravohsc.com) — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "프랑스 레드 와인 정리(mojji.bravohsc.com)",
          "url": "https://mojji.bravohsc.com/entry/프랑스-레드-와인-까베르네-소비뇽-피노누아-메를로-시라-포도-품종-정리"
        }
      ]
    },
    {
      "id": "merlot",
      "name": "메를로",
      "nameEn": "Merlot",
      "color": "red",
      "aromas": [
        "자두",
        "블랙체리",
        "초콜릿·모카"
      ],
      "body": "미디엄~풀바디",
      "regions": [
        "보르도 우안: 포므롤·생테밀리옹(프랑스)",
        "캘리포니아(미국)",
        "칠레"
      ],
      "description": "카베르네 소비뇽보다 부드럽고 둥근 질감의 레드 품종. 탄닌이 상대적으로 부드럽고 과즙미가 풍부해 단독으로도, 카베르네 소비뇽과의 블렌딩(보르도 우안 스타일)으로도 널리 쓰인다.",
      "beginnerTip": "탄닌이 부담스러운 레드 와인 초보자에게 첫 레드로 추천되는 품종이다.",
      "source": "와인 노트(conginfo.com); Wine Folly, Defining Medium-Bodied Red Wines — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "Wine Folly, Defining Medium-Bodied Red Wines",
          "url": "https://winefolly.com/deep-dive/medium-bodied-red-wines/"
        }
      ]
    },
    {
      "id": "pinot-noir",
      "name": "피노 누아",
      "nameEn": "Pinot Noir",
      "color": "red",
      "aromas": [
        "체리",
        "딸기",
        "흙·버섯(숙성 시)"
      ],
      "body": "라이트~미디엄바디",
      "regions": [
        "부르고뉴 코트 도르(프랑스)",
        "오리건·소노마(미국)",
        "센트럴 오타고(뉴질랜드)"
      ],
      "description": "가볍고 섬세한 레드 품종으로 재배가 까다로워 \"재배자의 무덤\"이라 불리기도 한다. 껍질이 얇아 색과 탄닌이 옅고, 서늘한 기후에서 가장 섬세하게 표현된다.",
      "beginnerTip": "탄닌이 약해 차게(약 13~15도) 마셔도 좋고, 연어처럼 기름진 생선과도 잘 어울린다.",
      "source": "와인 노트(conginfo.com); Bernard Marr's Wine Guide, Burgundy — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "Bernard Marr's Wine Guide, Burgundy",
          "url": "https://bmwineguide.co.uk/in-introduction-to-the-worlds-most-important-wine-regions/"
        }
      ]
    },
    {
      "id": "syrah-shiraz",
      "name": "시라 / 쉬라즈",
      "nameEn": "Syrah / Shiraz",
      "color": "red",
      "aromas": [
        "블랙베리",
        "자두",
        "후추·감초(스파이시함)"
      ],
      "body": "풀바디",
      "regions": [
        "북부 론: 에르미타주·코트로티(프랑스)",
        "바로사밸리(호주)"
      ],
      "description": "같은 품종이지만 프랑스에서는 시라, 호주에서는 쉬라즈로 불리며 스타일이 다르다. 프랑스 론의 시라는 후추·감초의 스파이시함과 미네랄이 강조되고, 호주 쉬라즈는 잼 같은 과실미와 초콜릿 풍미가 부각된다.",
      "beginnerTip": "라벨에 \"Syrah\"면 프랑스·서늘한 스타일, \"Shiraz\"면 호주·진한 과실 스타일일 가능성이 높다.",
      "source": "와인 노트(conginfo.com); Global Wine Authority, New World Wine Regions — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "sangiovese",
      "name": "산지오베제",
      "nameEn": "Sangiovese",
      "color": "red",
      "aromas": [
        "체리",
        "자두",
        "흙·허브(세이보리)"
      ],
      "body": "미디엄바디",
      "regions": [
        "토스카나: 키안티 클라시코·브루넬로 디 몬탈치노(이탈리아)"
      ],
      "description": "이탈리아 토스카나를 대표하는 품종으로 키안티(Chianti)의 주역. 밝은 루비색에 높은 산도와 단단한 탄닌을 지녔으며, 토마토 소스가 들어간 이탈리아 음식과 잘 어울린다.",
      "beginnerTip": "산도가 높아 크림 파스타나 피자처럼 기름진 이탈리아 음식과 특히 잘 맞는다.",
      "source": "Hospitality.Institute, Old World Wines; 와인 노트(conginfo.com) — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "Hospitality.Institute, Old World Wines",
          "url": "https://hospitality.institute/bha203/old-world-wines-europe-journey/"
        },
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        }
      ]
    },
    {
      "id": "tempranillo",
      "name": "템프라니요",
      "nameEn": "Tempranillo",
      "color": "red",
      "aromas": [
        "체리",
        "자두",
        "바닐라·가죽(오크 숙성 시)"
      ],
      "body": "미디엄~풀바디",
      "regions": [
        "리오하(스페인)",
        "리베라 델 두에로(스페인)"
      ],
      "description": "스페인을 대표하는 레드 품종으로 리오하(Rioja) 와인의 근간. 등급(크리안사·레세르바·그란 레세르바)에 따라 오크·병 숙성 기간이 다르다.",
      "beginnerTip": "육류 요리와 잘 맞으며, 오크 숙성 기간이 긴 \"레세르바\"·\"그란 레세르바\" 표기를 보면 더 부드럽고 복합적인 맛을 기대할 수 있다.",
      "source": "와인 노트(conginfo.com); viavinumwinetours, Wine Region Maps — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "viavinumwinetours, Wine Region Maps",
          "url": "https://viavinumwinetours.com/en/wine-region-maps/"
        }
      ]
    },
    {
      "id": "malbec",
      "name": "말벡",
      "nameEn": "Malbec",
      "color": "red",
      "aromas": [
        "블랙베리",
        "자두",
        "스모키·초콜릿 노트"
      ],
      "body": "풀바디",
      "regions": [
        "멘도사(아르헨티나)",
        "카오르(프랑스, 원산지)"
      ],
      "description": "아르헨티나의 국가대표 품종. 원산지는 프랑스 카오르지만 아르헨티나 멘도사의 고지대·건조한 기후에서 전 세계적으로 가장 유명한 스타일을 만들어낸다. 짙은 색과 실키한 질감으로 \"블랙 와인\"이라는 별명을 가졌다.",
      "beginnerTip": "탄닌은 강하지만 질감이 부드러워 카베르네 소비뇽보다 접근하기 쉬운 풀바디 레드로 추천된다.",
      "source": "Global Wine Authority, New World Wine Regions; 와인 노트(conginfo.com) — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        },
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        }
      ]
    },
    {
      "id": "nebbiolo",
      "name": "네비올로",
      "nameEn": "Nebbiolo",
      "color": "red",
      "aromas": [
        "장미",
        "타르",
        "말린 체리",
        "감초"
      ],
      "body": "미디엄~풀바디",
      "regions": [
        "피에몬테: 바롤로·바르바레스코(이탈리아)"
      ],
      "description": "이탈리아 피에몬테의 왕, 바롤로·바르바레스코를 만드는 품종. \"일찍 꽃 피고 늦게 익는\" 만생종으로 당도·산도·탄닌이 모두 높아 장기 숙성형 와인이 된다. 색은 옅은 편이지만 탄닌은 매우 강하다.",
      "beginnerTip": "어릴 때는 탄닌이 매우 강하므로, 디캔팅하거나 숙성된 빈티지를 고르면 훨씬 부드럽게 즐길 수 있다.",
      "source": "와인 노트(conginfo.com); oboe.com, Old World Wine Regions — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "oboe.com, Old World Wine Regions",
          "url": "https://oboe.com/learn/mastering-wset-level-3-wine-knowledge-gzqzry/old-world-wine-regions-2"
        }
      ]
    },
    {
      "id": "chardonnay",
      "name": "샤르도네",
      "nameEn": "Chardonnay",
      "color": "white",
      "aromas": [
        "사과",
        "시트러스",
        "버터·바닐라(오크 숙성 시)"
      ],
      "body": "라이트~풀바디(양조 방식에 따라 편차 큼)",
      "regions": [
        "부르고뉴: 샤블리·몽라셰(프랑스)",
        "캘리포니아(미국)",
        "호주"
      ],
      "description": "세계에서 가장 많이 재배되는 화이트 품종. 오크 숙성 없이 스테인리스 탱크에서 만들면 가볍고 상큼한 시트러스·사과 풍미가 나고, 오크 숙성과 말로락틱 발효를 거치면 버터·바닐라 향의 묵직한 스타일이 된다.",
      "beginnerTip": "라벨에 \"unoaked\" 또는 \"Chablis\"가 있으면 산뜻한 스타일, \"oaked\" 또는 캘리포니아산이면 진하고 크리미한 스타일일 가능성이 크다.",
      "source": "Wine Folly, Basic Guide to White Wine; Amsterdam Wine Academy — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "Wine Folly, Basic Guide to White Wine",
          "url": "https://winefolly.com/deep-dive/beginners-white-wines-list/"
        },
        {
          "label": "Amsterdam Wine Academy",
          "url": "https://amsterdamwineacademy.com/en/top-10-white-grape-varieties-and-their-flavor-profiles/"
        }
      ]
    },
    {
      "id": "sauvignon-blanc",
      "name": "소비뇽 블랑",
      "nameEn": "Sauvignon Blanc",
      "color": "white",
      "aromas": [
        "자몽",
        "풋풀(허브)",
        "그린애플",
        "패션프루트(뉴질랜드)"
      ],
      "body": "라이트~미디엄바디",
      "regions": [
        "말버러(뉴질랜드)",
        "루아르: 상세르(프랑스)",
        "보르도 화이트(프랑스)"
      ],
      "description": "상쾌한 산도와 뚜렷한 아로마가 특징인 화이트 품종. 뉴질랜드 말버러산은 패션프루트 등 열대과일 향이 강하고, 프랑스 루아르(상세르)산은 미네랄리티가 강조된다.",
      "beginnerTip": "산도가 매우 높아 차게 마시는 것이 좋고, 새콤한 소스나 염소치즈와 궁합이 좋다.",
      "source": "Amsterdam Wine Academy; Global Wine Authority — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "Amsterdam Wine Academy",
          "url": "https://amsterdamwineacademy.com/en/top-10-white-grape-varieties-and-their-flavor-profiles/"
        },
        {
          "label": "Global Wine Authority",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "riesling",
      "name": "리슬링",
      "nameEn": "Riesling",
      "color": "white",
      "aromas": [
        "라임",
        "복숭아",
        "꿀",
        "페트롤 뉘앙스(숙성 시)"
      ],
      "body": "라이트~미디엄바디",
      "regions": [
        "모젤(독일)",
        "알자스(프랑스)",
        "클레어밸리(호주)"
      ],
      "description": "드라이부터 매우 스위트까지 폭넓은 스타일을 아우르는 고산도 화이트 품종. 산도가 매우 높아 당도가 있어도 균형이 무너지지 않는다. 독일 모젤의 슬레이트 토양에서는 미네랄리티와 라임·복숭아 향이 특징적으로 나타난다.",
      "beginnerTip": "\"단맛=저품질\"이라는 편견과 달리, 리슬링은 당도가 있어도 산도가 이를 받쳐줘 균형 잡힌 맛을 낸다.",
      "source": "Amsterdam Wine Academy; oboe.com, Old World Wine Regions — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "Amsterdam Wine Academy",
          "url": "https://amsterdamwineacademy.com/en/top-10-white-grape-varieties-and-their-flavor-profiles/"
        },
        {
          "label": "oboe.com, Old World Wine Regions",
          "url": "https://oboe.com/learn/mastering-wset-level-3-wine-knowledge-gzqzry/old-world-wine-regions-2"
        }
      ]
    },
    {
      "id": "pinot-grigio",
      "name": "피노 그리지오 / 피노 그리",
      "nameEn": "Pinot Grigio / Pinot Gris",
      "color": "white",
      "aromas": [
        "그린애플",
        "배",
        "시트러스",
        "미네랄"
      ],
      "body": "라이트~미디엄바디",
      "regions": [
        "이탈리아 북부",
        "알자스(프랑스)",
        "오리건(미국)"
      ],
      "description": "가볍고 산뜻한 화이트 품종. 이탈리아식 이름 \"그리지오\"와 프랑스·알자스식 이름 \"그리\"는 같은 품종이지만 스타일이 다르다 — 이탈리아 스타일은 가볍고 크리스프하며, 알자스 스타일은 더 묵직하고 향신료 뉘앙스가 있다.",
      "beginnerTip": "가볍고 부담 없는 첫 화이트 와인으로 추천되며, 해산물 전채와 잘 맞는다.",
      "source": "Wine Folly, Pinot Gris vs Pinot Grigio; Coravin — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "Wine Folly, Pinot Gris vs Pinot Grigio",
          "url": "https://winefolly.com/deep-dive/whats-the-difference-between-pinot-gris-and-pinot-grigio/"
        },
        {
          "label": "Coravin",
          "url": "https://www.coravin.com/blogs/community/how-does-pinot-grigio-taste"
        }
      ]
    },
    {
      "id": "gewurztraminer",
      "name": "게뷔르츠트라미너",
      "nameEn": "Gewürztraminer",
      "color": "white",
      "aromas": [
        "리치",
        "장미꽃잎",
        "망고·복숭아",
        "생강 등 스파이스"
      ],
      "body": "미디엄~풀바디",
      "regions": [
        "알자스(프랑스)",
        "독일",
        "알토아디제(이탈리아)"
      ],
      "description": "향이 매우 화려한 아로마틱 화이트 품종. 이름의 \"게뷔르츠\"는 독일어로 \"향신료가 있는\"이라는 뜻이며, 산도는 낮고 질감이 풍성하다. 대체로 오프-드라이(약간 단맛) 스타일이 많다.",
      "beginnerTip": "향이 워낙 강해 향신료가 많이 들어간 아시아 음식(태국·인도 요리)과 잘 어울린다.",
      "source": "Wine Folly, The Comprehensive Guide to Gewürztraminer; Wikipedia — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "Wine Folly, The Comprehensive Guide to Gewürztraminer",
          "url": "https://winefolly.com/grapes/gewurztraminer/"
        }
      ]
    },
    {
      "id": "moscato",
      "name": "모스카토",
      "nameEn": "Moscato",
      "color": "white",
      "aromas": [
        "허니서클(인동초)",
        "백화",
        "포도",
        "감귤"
      ],
      "body": "라이트바디",
      "regions": [
        "피에몬테: 아스티(이탈리아)"
      ],
      "description": "달콤하고 저알코올인 아로마틱 화이트 품종. 이탈리아의 모스카토 다스티(Moscato d'Asti)가 대표적이며, 대체로 약발포성(frizzante)에 당도가 있고 알코올 도수가 5~7%로 낮다.",
      "beginnerTip": "달고 알코올이 낮아 와인이 처음인 사람이나 디저트 와인으로 접근하기 좋다.",
      "source": "terravenos, Moscato vs Pinot Grigio; Amsterdam Wine Academy — _workspace/01_knowledge_grapes.md",
      "refs": [
        {
          "label": "terravenos, Moscato vs Pinot Grigio",
          "url": "https://terravenos.com/trellis/moscato-vs-pinot-grigio/"
        },
        {
          "label": "Amsterdam Wine Academy",
          "url": "https://amsterdamwineacademy.com/en/top-10-white-grape-varieties-and-their-flavor-profiles/"
        }
      ]
    }
  ],

  // 산지 11곳 (구세계 6, 신세계 5) — 02_data/regions.json
  regions: [
    {
      "id": "bordeaux",
      "name": "보르도",
      "nameEn": "Bordeaux",
      "country": "프랑스",
      "world": "old",
      "grapes": [
        "카베르네 소비뇽",
        "메를로",
        "소비뇽 블랑(화이트)",
        "세미용(화이트)"
      ],
      "climate": "대서양 해양성 기후, 지롱드강 기준 좌안 자갈질 / 우안 점토질 토양",
      "styleNote": "카베르네 소비뇽·메를로 블렌딩의 본고장. 좌안(자갈질, 카베르네 소비뇽 중심)은 골격이 탄탄하고 블랙커런트 풍미, 우안(점토질, 메를로 중심)은 더 부드럽고 자두 풍미가 풍부하다. 대표 스타일: 메독(좌안 블렌드), 포므롤·생테밀리옹(우안 블렌드).",
      "source": "Vinodivino, What Is An Old World Wine; oboe.com, Old World Wine Regions — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Vinodivino, What Is An Old World Wine",
          "url": "https://vinodivino.com/blogs/blog/what-is-an-old-world-wine"
        },
        {
          "label": "oboe.com, Old World Wine Regions",
          "url": "https://oboe.com/learn/mastering-wset-level-3-wine-knowledge-gzqzry/old-world-wine-regions-2"
        }
      ]
    },
    {
      "id": "bourgogne",
      "name": "부르고뉴",
      "nameEn": "Bourgogne / Burgundy",
      "country": "프랑스",
      "world": "old",
      "grapes": [
        "피노 누아",
        "샤르도네"
      ],
      "climate": "대륙성 기후(더운 여름·추운 겨울), 밭 단위(클리마)로 세분화된 석회질 토양",
      "styleNote": "피노 누아와 샤르도네 단일 품종 와인의 정점. \"클리마(climat)\"라는 극세분화된 밭 단위로 테루아를 표현하며, 같은 마을 안에서도 밭 등급(그랑크뤼·프르미에크뤼·빌라주)에 따라 가격·품질이 크게 갈린다. 대표 스타일: 코트 도르 레드, 샤블리(화이트).",
      "source": "Bernard Marr's Wine Guide; oboe.com, Old World Wine Regions — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Bernard Marr's Wine Guide",
          "url": "https://bmwineguide.co.uk/in-introduction-to-the-worlds-most-important-wine-regions/"
        },
        {
          "label": "oboe.com, Old World Wine Regions",
          "url": "https://oboe.com/learn/mastering-wset-level-3-wine-knowledge-gzqzry/old-world-wine-regions-2"
        }
      ]
    },
    {
      "id": "tuscany",
      "name": "토스카나",
      "nameEn": "Tuscany",
      "country": "이탈리아",
      "world": "old",
      "grapes": [
        "산지오베제"
      ],
      "climate": "지중해성 기후(따뜻하고 일조량 풍부), 구릉지 점토·석회질 토양",
      "styleNote": "산지오베제의 고향. 키안티·브루넬로 디 몬탈치노·수퍼투스칸의 산실로, 높은 산도와 단단한 탄닌, 체리·흙 풍미의 세이보리한 와인을 만든다.",
      "source": "Hospitality.Institute, Old World Wines — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Hospitality.Institute, Old World Wines",
          "url": "https://hospitality.institute/bha203/old-world-wines-europe-journey/"
        }
      ]
    },
    {
      "id": "piedmont",
      "name": "피에몬테",
      "nameEn": "Piedmont",
      "country": "이탈리아",
      "world": "old",
      "grapes": [
        "네비올로",
        "바르베라",
        "모스카토"
      ],
      "climate": "온화한 대륙성 기후, 점토·석회암 토양",
      "styleNote": "네비올로로 만드는 \"와인의 왕\" 바롤로와 바르바레스코의 산지. 점토와 석회암이 섞인 토양과 온화한 기후가 강렬한 아로마, 단단한 탄닌, 뛰어난 숙성 잠재력을 부여한다. 모스카토 다스티도 이 지역 산물.",
      "source": "Vinodivino, What Is An Old World Wine — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Vinodivino, What Is An Old World Wine",
          "url": "https://vinodivino.com/blogs/blog/what-is-an-old-world-wine"
        }
      ]
    },
    {
      "id": "rioja",
      "name": "리오하",
      "nameEn": "Rioja",
      "country": "스페인",
      "world": "old",
      "grapes": [
        "템프라니요"
      ],
      "climate": "대륙성·대서양성 혼재, 석회암·점토질 토양",
      "styleNote": "템프라니요 기반 레드 와인의 본산. 오크·병 숙성 등급 체계(크리안사·레세르바·그란 레세르바)가 특징적이며, 전통적으로 미국산 오크통 숙성으로 바닐라·코코넛 뉘앙스가 자주 나타난다.",
      "source": "viavinumwinetours, Wine Region Maps — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "viavinumwinetours, Wine Region Maps",
          "url": "https://viavinumwinetours.com/en/wine-region-maps/"
        }
      ]
    },
    {
      "id": "mosel",
      "name": "모젤",
      "nameEn": "Mosel",
      "country": "독일",
      "world": "old",
      "grapes": [
        "리슬링"
      ],
      "climate": "서늘한 대륙성 기후, 슬레이트(점판암) 급경사지",
      "styleNote": "세계 최고의 리슬링 산지 중 하나. 모젤강을 따라 이어지는 매우 가파른 슬레이트 경사지가 낮에 축적한 열을 밤에도 전달해 서늘한 기후에서도 포도가 익을 수 있게 하며, 산도가 매우 높고 미네랄리티가 강한 리슬링을 만든다.",
      "source": "oboe.com, Old World Wine Regions — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "oboe.com, Old World Wine Regions",
          "url": "https://oboe.com/learn/mastering-wset-level-3-wine-knowledge-gzqzry/old-world-wine-regions-2"
        }
      ]
    },
    {
      "id": "napa-valley",
      "name": "나파밸리",
      "nameEn": "Napa Valley",
      "country": "미국",
      "world": "new",
      "grapes": [
        "카베르네 소비뇽",
        "샤르도네"
      ],
      "climate": "지중해성/따뜻한 캘리포니아 기후, 다양한 미세기후",
      "styleNote": "미국을 대표하는 프리미엄 와인 산지이자 카베르네 소비뇽의 성지. 따뜻하고 건조한 기후에 밸리 플로어~산지의 다양한 미세기후가 공존해 진하고 힘 있는 스타일의 레드를 만든다. 가격대가 높은 프리미엄·아이콘 와인이 많다.",
      "source": "Global Wine Authority; California Winery Advisor — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Global Wine Authority",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        },
        {
          "label": "California Winery Advisor",
          "url": "https://californiawineryadvisor.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "central-valley-chile",
      "name": "센트럴밸리",
      "nameEn": "Central Valley",
      "country": "칠레",
      "world": "new",
      "grapes": [
        "카베르네 소비뇽",
        "메를로",
        "카르메네르"
      ],
      "climate": "안데스산맥·태평양 사이 온화한 기후, 큰 일교차",
      "styleNote": "칠레 와인 생산의 중심지(마이포·라펠·쿠리코·마울레 등 세부 밸리 포함). 안데스산맥과 태평양 사이의 큰 일교차가 산도를 유지시키면서도 포도를 충분히 익게 한다. 칠레 시그니처 품종 카르메네르가 특히 유명.",
      "source": "Global Wine Authority, New World Wine Regions — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "barossa-valley",
      "name": "바로사밸리",
      "nameEn": "Barossa Valley",
      "country": "호주",
      "world": "new",
      "grapes": [
        "쉬라즈"
      ],
      "climate": "따뜻한 대륙성 기후",
      "styleNote": "호주를 대표하는 쉬라즈 산지. 블랙베리·자두 등 잼처럼 농축된 과실미와 초콜릿·스파이스 풍미의 진하고 힘 있는 풀바디 레드로 유명하며, 100년 넘은 올드바인이 남아있는 것으로도 알려져 있다.",
      "source": "Global Wine Authority, New World Wine Regions — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "marlborough",
      "name": "말버러",
      "nameEn": "Marlborough",
      "country": "뉴질랜드",
      "world": "new",
      "grapes": [
        "소비뇽 블랑"
      ],
      "climate": "서늘한 해양성 기후, 강한 일조량",
      "styleNote": "뉴질랜드 최대 와인 산지이자 소비뇽 블랑의 새로운 기준을 제시한 곳. 뉴질랜드 전체 와인 생산량의 약 77%를 차지한다(연도 미상). 자몽·패션프루트·풋풀 향이 강렬하게 살아있는 개성 강한 소비뇽 블랑을 만든다.",
      "source": "Global Wine Authority, New World Wine Regions — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "mendoza",
      "name": "멘도사",
      "nameEn": "Mendoza",
      "country": "아르헨티나",
      "world": "new",
      "grapes": [
        "말벡",
        "카베르네 소비뇽",
        "토론테스(화이트)"
      ],
      "climate": "고지대 대륙성 기후(안데스 산기슭, 해발 900m 이상), 건조하고 일교차 큼",
      "styleNote": "아르헨티나 와인의 심장부이자 세계 최고의 말벡 산지. 일조량은 풍부하지만 밤 기온이 낮아 산도를 지킨 채 진하고 부드러운 말벡을 만든다.",
      "source": "Global Wine Authority, New World Wine Regions — _workspace/01_knowledge_regions.md",
      "refs": [
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    }
  ],

  // 시장·트렌드 — 02_data/market.json
  market: {
    "marketSize": {
      "year": 2025,
      "global": {
        "note": "조사기관별 산정 방식(소매가 vs 생산자 출하가, 주류 전체 포함 여부 등)이 달라 추정치 편차가 크다(2025년 기준 약 3,577억~5,664억 달러). 절대값보다 \"성장/축소 방향성\"과 \"성장 동력(프리미엄화)\"에 주목할 것.",
        "estimates": [
          {
            "source": "Grand View Research",
            "value2025": "약 5,496억 달러",
            "forecast": "2033년 1조 820억 달러(CAGR 9.1%)",
            "url": "https://www.grandviewresearch.com/industry-analysis/wine-market"
          },
          {
            "source": "Fortune Business Insights",
            "value2025": "약 5,664억 달러",
            "forecast": "2034년 1조 3,313억 달러(CAGR 9.96%)",
            "url": "https://www.fortunebusinessinsights.com/wine-market-102836"
          },
          {
            "source": "IMARC Group",
            "value2025": "약 5,327억 달러",
            "forecast": "2034년 8,110억 달러(CAGR 4.64%)",
            "url": "https://www.imarcgroup.com/wine-market"
          },
          {
            "source": "Market Data Forecast",
            "value2025": "약 3,577억 달러",
            "forecast": null,
            "url": "https://www.marketdataforecast.com/market-reports/wine-market"
          }
        ]
      },
      "productionConsumption2024": {
        "productionMhl": 225.8,
        "productionChangeYoY": "-4.8%",
        "productionNote": "60여 년 만의 최저치",
        "consumptionMhl": 214,
        "consumptionChangeYoY": "-3.3%",
        "consumptionNote": "1961년 이후 최저 수준",
        "vineyardAreaHa": 7100000,
        "vineyardAreaChangeYoY": "-0.6%",
        "vineyardAreaNote": "4년 연속 감소",
        "exportVolumeMhl": 99.8,
        "causes": [
          "기후변화로 인한 이상기후",
          "인플레이션",
          "지정학적 불안정",
          "소비 습관 변화"
        ],
        "source": "OIV(국제와인기구), \"State of the World Vine and Wine Sector in 2024\"(2025년 4월 발표) — https://www.oiv.int/press/state-world-vine-and-wine-sector-2024-adaptation-cooperation",
        "sourceUrl": "https://www.oiv.int/press/state-world-vine-and-wine-sector-2024-adaptation-cooperation"
      },
      "usMarket": {
        "note": "세계 최대 단일 시장 중 하나. 참고용.",
        "year": "2025~2026",
        "volumeChangeYoY": "-5%(2025년, 20년 만에 최저, 사상 처음 3억 케이스 이하로 하락)",
        "valueForecast2026": "+2~4%(프리미엄화·가격 인상에 의한 성장, 소비량 증가 아님)",
        "marketValueUSD": "약 1,150억 달러",
        "source": "Forbes, \"$115 Billion U.S. Wine Market Enters 'Reset'\"(2026.05); SVB, \"State of the US Wine Industry Report 2026\"",
        "refs": [
          {
            "label": "Forbes, \"$115 Billion U.S. Wine Market Enters 'Reset'\"",
            "url": "https://www.forbes.com/sites/lizthach/2026/05/12/115-billion-us-wine-market-enters-reset-amid-shifting-consumer-trends/"
          },
          {
            "label": "SVB, \"State of the US Wine Industry Report 2026\"",
            "url": "https://www.svb.com/trends-insights/reports/wine-report/"
          }
        ]
      }
    },
    "trends": [
      {
        "id": "premiumization",
        "name": "프리미엄화(Premiumization) — \"적게, 더 좋게\"",
        "description": "소비자가 마시는 절대량은 줄이되 병당 지출 단가를 높이는 경향. 특히 15~49.99달러 구간(\"masstige\" 프리미엄 세그먼트)이 가장 견조하게 성장한다. 15달러 이상 병은 판매 감소가 완만한 반면 저가 브랜드는 더 가파르게 감소한다.",
        "year": "2025년 실적 기준, 2026년에도 지속 전망",
        "source": "SevenFifty Daily, \"5 Wine Industry Trends to Watch in 2026\"; The Wine Concierge",
        "refs": [
          {
            "label": "SevenFifty Daily, \"5 Wine Industry Trends to Watch in 2026\"",
            "url": "https://daily.sevenfifty.com/5-wine-industry-trends-to-watch-in-2026/"
          },
          {
            "label": "The Wine Concierge",
            "url": "https://thewineconcierge.co/blogs/news/wine-trends-2026-premiumization-wellness-whats-next"
          }
        ]
      },
      {
        "id": "low-no-alcohol",
        "name": "저알코올·논알콜(Low & No-Alcohol) 와인 확대",
        "description": "건강을 중시하는 밀레니얼·Z세대를 중심으로 저알코올·논알콜 와인 수요가 늘고 있으며, 2026년에는 \"특이 상품\"에서 \"프리미엄 카테고리\"로 지위가 격상될 전망이다.",
        "year": "2025~2026년",
        "source": "SevenFifty Daily; Dimins, \"2026 Wine & Spirits Industry Trends\"",
        "refs": [
          {
            "label": "SevenFifty Daily",
            "url": "https://daily.sevenfifty.com/5-wine-industry-trends-to-watch-in-2026/"
          },
          {
            "label": "Dimins, \"2026 Wine & Spirits Industry Trends\"",
            "url": "https://www.dimins.com/blog/2026/01/13/2026-wine-spirits-industry-trends/"
          }
        ]
      },
      {
        "id": "organic-natural",
        "name": "내추럴·유기농·바이오다이나믹 와인 성장",
        "description": "최소 개입 양조(minimal-intervention winemaking), 유기농·바이오다이나믹 인증 와인에 대한 관심이 건강 지향 소비층을 중심으로 확대되고 있다.",
        "year": "2025~2026년",
        "source": "Tastewise, \"Organic Wine Trends: Sales And Data In 2026\"",
        "refs": [
          {
            "label": "Tastewise, \"Organic Wine Trends: Sales And Data In 2026\"",
            "url": "https://tastewise.io/blog/organic-wine-trends"
          }
        ]
      },
      {
        "id": "online-dtc",
        "name": "온라인·DTC(Direct-to-Consumer) 판매 확대",
        "description": "미국에서는 주(州) 간 와인 배송을 허용하는 지역이 2015년 32개 주에서 현재 47개 주로 늘며 온라인·직배송 채널이 성장 동력으로 부상했다.",
        "year": "2026년",
        "source": "Dimins, \"2026 Wine & Spirits Industry Trends\"",
        "refs": [
          {
            "label": "Dimins, \"2026 Wine & Spirits Industry Trends\"",
            "url": "https://www.dimins.com/blog/2026/01/13/2026-wine-spirits-industry-trends/"
          }
        ]
      },
      {
        "id": "wine-rtd",
        "name": "와인 기반 RTD(Ready-to-Drink) 성장",
        "description": "캔 와인, 와인 스프리처 등 와인 기반 RTD 제품이 빠르게 성장하며 캐주얼·경험 중심 소비를 흡수하고 있다. 2025년 약 14% 성장.",
        "year": "2025년",
        "source": "SevenFifty Daily",
        "refs": [
          {
            "label": "SevenFifty Daily",
            "url": "https://daily.sevenfifty.com/5-wine-industry-trends-to-watch-in-2026/"
          }
        ]
      },
      {
        "id": "selective-drinking",
        "name": "전반적 소비량 감소 속 \"선택적 음용(selective drinking)\"",
        "description": "세계적으로 와인 소비량 자체는 줄고 있지만(1961년 이후 최저), 소비자는 마시는 횟수를 줄이는 대신 상황에 맞는 프리미엄 와인을 선택하는 방향으로 이동하고 있다.",
        "year": "2024~2026년",
        "source": "Vinetur, \"Global Wine Consumption in 2026 Continues to Decline as Consumers Shift Toward Premium and Selective Drinking\"; OIV",
        "refs": [
          {
            "label": "Vinetur, \"Global Wine Consumption in 2026 Continues to Decline\"",
            "url": "https://www.vinetur.com/en/global-wine-consumption-in-2026-continues-to-decline-as-consumers-shift-toward-premium-and-selective-drinking.html"
          },
          {
            "label": "OIV",
            "url": "https://www.oiv.int/press/state-world-vine-and-wine-sector-2024-adaptation-cooperation"
          }
        ]
      }
    ],
    "priceRanges": [
      {
        "tier": "daily",
        "tierLabel": "데일리(일상용)",
        "usdRange": "4~15달러",
        "krwRangeKorea": "1만~3만원",
        "channelsKorea": [
          "편의점(스마트오더)",
          "마트 매대"
        ],
        "note": "접근성·가성비 중심. 대량 생산 브랜드 와인, 편의점 단독 PB 와인(예: 이마트24 \"더 롱독\" 9,900원). 편의점에서는 3만원 이하 구간이 가격 경쟁력이 가장 높다.",
        "source": "Gus Clemens on Wine, \"Wine price segments\"; 다사자, 편의점·마트 주류 가격 비교(2026.04 갱신) — _workspace/01_market_price.md",
        "refs": [
          {
            "label": "Gus Clemens on Wine, \"Wine price segments\"",
            "url": "https://www.gusclemensonwine.com/wine-price-segments/"
          },
          {
            "label": "다사자, 편의점·마트 주류 가격 비교(2026.04 갱신)",
            "url": "https://dasaja.co.kr/saja_guide/107"
          }
        ]
      },
      {
        "tier": "mid",
        "tierLabel": "미들(선물·특별한 날)",
        "usdRange": "15~30달러",
        "krwRangeKorea": "3만~7만원",
        "channelsKorea": [
          "대형마트(이마트·롯데마트·홈플러스)",
          "창고형 매장(코스트코 등)"
        ],
        "note": "테루아·품종 개성이 본격적으로 드러나는 구간. 최근 미국 시장에서도 가장 견조하게 성장하는 프리미엄화 핵심 구간과 맞물린다. 대표 유형: 프랑스 AOC급, 이탈리아 DOC/DOCG급, 나파밸리 중급 라인, 뉴질랜드 소비뇽 블랑.",
        "source": "Gus Clemens on Wine; 노써치, 와인 구매 장소 가이드(2025~2026) — _workspace/01_market_price.md",
        "refs": [
          {
            "label": "Gus Clemens on Wine",
            "url": "https://www.gusclemensonwine.com/wine-price-segments/"
          },
          {
            "label": "노써치, 와인 구매 장소 가이드(2025~2026)",
            "url": "https://v.daum.net/v/94r91RaV7f"
          }
        ]
      },
      {
        "tier": "premium",
        "tierLabel": "프리미엄/럭셔리",
        "usdRange": "30달러 이상(상한 없음)",
        "krwRangeKorea": "7만원 이상(마트 상시가 기준), 10만원 이상은 장터·전문점·온라인 중심",
        "channelsKorea": [
          "와인전문점",
          "온라인·수입사 직판",
          "마트 특별 장터"
        ],
        "note": "소장 가치·숙성 잠재력을 갖춘 구간. 대형마트 상시가가 7만원을 넘으면 로컬 와인샵·온라인 대비 가격 메리트가 낮아지는 경향. 대표 유형: 보르도 그랑크뤼, 부르고뉴 프리미에/그랑크뤼, 나파밸리 컬트 와인, 빈티지 샴페인.",
        "source": "Gus Clemens on Wine; 지극히 개인적인 와인노트 — _workspace/01_market_price.md",
        "refs": [
          {
            "label": "Gus Clemens on Wine",
            "url": "https://www.gusclemensonwine.com/wine-price-segments/"
          },
          {
            "label": "지극히 개인적인 와인노트",
            "url": "https://mypersonalwinenote.com/%EC%99%80%EC%9D%B8-%EA%B5%AC%EB%A7%A4-%EC%9E%A5%EC%86%8C/"
          }
        ]
      }
    ],
    "priceRangesCaveat": "한국 가격 구간 수치는 업계 표준 통계가 아닌 유통업체 사례·개인 리뷰어(threads, 블로그) 기반으로, 공신력 있는 1차 출처(국세청·주류업계 협회 공식 통계)는 확인하지 못했다. 참고용으로만 사용 권장.",
    "korea": {
      "year": 2025,
      "importVolumeHl2025": 487558,
      "importVolumeChangeYoY2025": "+5.27%",
      "importValueUSD2025": "약 4억 900만 달러",
      "importValueChangeYoY2025": "-7.48%",
      "importFiguresNote": "2024년 수입량이 출처별로 453,482hl(Wine Review) / 463,152hl(와인21닷컴) / 453,151hl(동일 통계 세부 재인용)로 소폭 엇갈린다. 2021~2025년 추세를 톤 단위로 제시한 자료(2021년 약 7.6만 톤→2025년 약 5.1만 톤, 30% 이상 감소)도 있으나 단위(톤/헥토리터)가 혼재돼 직접 비교에는 주의가 필요하다.",
      "topCountries": {
        "byVolume2025": [
          {
            "rank": 1,
            "country": "칠레",
            "share": "22.54%"
          }
        ],
        "byValue2025": [
          {
            "rank": 1,
            "country": "프랑스",
            "share": "36.97%"
          }
        ],
        "note": "물량 기준 1위는 칠레, 금액 기준 1위는 프랑스가 수년째 유지. 2024년 금액 기준 프랑스·미국·이탈리아 합산 점유율 69%, 2025년 금액 기준 프랑스·이탈리아·미국 합산 65.12%. 2025년 미국 물량 점유율은 9.95%(2024)→7.91%로 하락.",
        "source": "Wine Review(2025.01); 와인21닷컴(2026.01.27) — 관세청 무역통계 재인용",
        "refs": [
          {
            "label": "Wine Review(2025.01)",
            "url": "https://winereview.co.kr/%ED%95%9C%EA%B5%AD-%EC%88%98%EC%9E%85%EC%99%80%EC%9D%B8%EC%8B%9C%EC%9E%A5-2024%EB%85%84-%EC%8B%9C%EC%9E%A5-%EA%B2%B0%EC%82%B0%EA%B3%BC-2025%EB%85%84-%EC%A0%84%EB%A7%9D/"
          },
          {
            "label": "와인21닷컴(2026.01.27)",
            "url": "https://www.wine21.com/11_news/news_view.html?Idx=20943"
          }
        ]
      },
      "typeShare": {
        "2024": {
          "red": "57.03%",
          "white": "28.59%",
          "sparkling": "13.09%"
        },
        "2025": {
          "red": "50.87%",
          "white": "26.82%",
          "sparkling": "20.46%"
        },
        "note": "금액 기준. 레드 비중이 처음으로 60% 아래로 내려간 뒤 계속 하락, 스파클링 비중이 크게 증가. 화이트 부문에서는 뉴질랜드산이 32,396hl로 1위이며 코로나 이후 유일하게 지속 성장하는 카테고리로 언급된다. 2026년에도 레드 감소·화이트/스파클링 증가 흐름 전망.",
        "source": "Wine Review(2025.01); 와인21닷컴(2026.01.27)",
        "refs": [
          {
            "label": "Wine Review(2025.01)",
            "url": "https://winereview.co.kr/%ED%95%9C%EA%B5%AD-%EC%88%98%EC%9E%85%EC%99%80%EC%9D%B8%EC%8B%9C%EC%9E%A5-2024%EB%85%84-%EC%8B%9C%EC%9E%A5-%EA%B2%B0%EC%82%B0%EA%B3%BC-2025%EB%85%84-%EC%A0%84%EB%A7%9D/"
          },
          {
            "label": "와인21닷컴(2026.01.27)",
            "url": "https://www.wine21.com/11_news/news_view.html?Idx=20943"
          }
        ]
      },
      "channels": [
        {
          "name": "대형마트(이마트·롯데마트·홈플러스)/창고형(코스트코 등)",
          "note": "여전히 가장 대중적인 구매 장소"
        },
        {
          "name": "편의점 스마트오더(예: GS25 \"와인25플러스\")",
          "note": "주문 건수 전년 대비 성장률 2021년 +1300%, 2022년 +148%, 2023년 +174%, 2024년 +193.1%, 2025년에도 두 자릿수 이상 성장. 상시 진열은 약 40종이나 스마트오더로는 약 2,000종 주문 가능, 이용 가능 매장 비율 약 95%."
        },
        {
          "name": "와인전문점 / 온라인(오픈마켓 등 제한적 채널) / 백화점",
          "note": "프리미엄 구간 소비자가 주로 이용"
        }
      ],
      "channelsSource": "와인인, \"2025 국내 와인시장 리뷰 & 2026 프리뷰\"; 소믈리에타임즈, \"주류 스마트오더 허용 이후, 와인 업계 '바쁘다 바빠'\"",
      "regulationNote": "한국은 전통주를 제외한 일반 주류(와인 포함)의 온라인 직접 판매(택배 배송)를 원칙적으로 금지한다. 2020년 4월 국세청 고시 개정으로 \"스마트오더\"(온라인 주문·결제 + 오프라인 매장 본인 픽업, 신분증 지참)만 예외적으로 허용됐다. 전통주는 2017년 7월부터 산업 육성 목적으로 완전한 온라인 판매(택배)가 허용된 것과 대조적이다. 업계에서는 스마트오더보다 폭넓은 온라인 판매 허용을 요구하는 목소리가 계속 나온다.",
      "regulationSource": "소믈리에타임즈; 와인21닷컴, \"스마트 오더보다 더 스마트한, '와인 온라인 판매'를 허용할 때\"; 법제처, \"주류의 통신판매에 관한 명령위임 고시\"",
      "recentTrends": [
        {
          "period": "2020~2021년",
          "description": "코로나19 \"홈술\" 붐으로 전년 대비 20~30% 성장, 국민 술 시장에 도전하는 수준까지 성장",
          "source": "식품음료신문",
          "refs": [
            {
              "label": "식품음료신문",
              "url": "https://www.thinkfood.co.kr/news/articleView.html?idxno=89632"
            }
          ]
        },
        {
          "period": "2022~2024년",
          "description": "사회적 거리두기 해제 이후 수입액·수입량 연속 감소(조정기)",
          "source": "Wine Review; 와인21닷컴",
          "refs": [
            {
              "label": "Wine Review",
              "url": "https://winereview.co.kr/%ED%95%9C%EA%B5%AD-%EC%88%98%EC%9E%85%EC%99%80%EC%9D%B8%EC%8B%9C%EC%9E%A5-2024%EB%85%84-%EC%8B%9C%EC%9E%A5-%EA%B2%B0%EC%82%B0%EA%B3%BC-2025%EB%85%84-%EC%A0%84%EB%A7%9D/"
            },
            {
              "label": "와인21닷컴",
              "url": "https://www.wine21.com/11_news/news_view.html?Idx=20943"
            }
          ]
        },
        {
          "period": "2025년",
          "description": "물량 반등(+5.27%)했으나 금액은 계속 감소(-7.48%)하는 디커플링. GS25·카카오 협업 \"Gift X\" 와인 페어링 다이닝, 마스터클래스 등 경험형 소비가 최대 2배 이상 신장률",
          "source": "와인인; 와인21닷컴",
          "refs": [
            {
              "label": "와인인",
              "url": "https://winein.co.kr/2025-%EA%B5%AD%EB%82%B4-%EC%99%80%EC%9D%B8%EC%8B%9C%EC%9E%A5-%EB%A6%AC%EB%B7%B0-2026-%ED%94%84%EB%A6%AC%EB%B7%B0/"
            },
            {
              "label": "와인21닷컴",
              "url": "https://www.wine21.com/11_news/news_view.html?Idx=20943"
            }
          ]
        },
        {
          "period": "2026년 전망",
          "description": "고환율로 고급 와인 시장이 위축되고 저가 와인 수요가 늘어나는 추세가 전망됨",
          "source": "와인인, \"2025 국내 와인시장 리뷰 & 2026 프리뷰\"",
          "refs": [
            {
              "label": "와인인, \"2025 국내 와인시장 리뷰 & 2026 프리뷰\"",
              "url": "https://winein.co.kr/2025-%EA%B5%AD%EB%82%B4-%EC%99%80%EC%9D%B8%EC%8B%9C%EC%9E%A5-%EB%A6%AC%EB%B7%B0-2026-%ED%94%84%EB%A6%AC%EB%B7%B0/"
            }
          ]
        }
      ],
      "channelsRefs": [
        {
          "label": "와인인, \"2025 국내 와인시장 리뷰 & 2026 프리뷰\"",
          "url": "https://winein.co.kr/2025-%EA%B5%AD%EB%82%B4-%EC%99%80%EC%9D%B8%EC%8B%9C%EC%9E%A5-%EB%A6%AC%EB%B7%B0-2026-%ED%94%84%EB%A6%AC%EB%B7%B0/"
        },
        {
          "label": "소믈리에타임즈, \"주류 스마트오더 허용 이후, 와인 업계 '바쁘다 바빠'\"",
          "url": "https://www.sommeliertimes.com/news/articleView.html?idxno=17000"
        }
      ],
      "regulationRefs": [
        {
          "label": "소믈리에타임즈",
          "url": "https://www.sommeliertimes.com/news/articleView.html?idxno=17000"
        },
        {
          "label": "와인21닷컴, \"스마트 오더보다 더 스마트한, '와인 온라인 판매'를 허용할 때\"",
          "url": "https://www.wine21.com/11_news/news_view.html?Idx=18896"
        },
        {
          "label": "법제처, \"주류의 통신판매에 관한 명령위임 고시\"",
          "url": "https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%A3%BC%EB%A5%98%EC%9D%98%20%ED%86%B5%EC%8B%A0%ED%8C%90%EB%A7%A4%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%AA%85%EB%A0%B9%EC%9C%84%EC%9E%84%20%EA%B3%A0%EC%8B%9C"
        }
      ]
    },
    "researchGaps": [
      "국가별(유럽/아시아/남미 등) 세부 글로벌 시장 규모는 조사하지 않음 — 글로벌 총계와 미국·한국만 확인.",
      "글로벌 시장 규모(금액) 추정치 간 편차가 커서 단일 대표값 대신 기관별 추정치를 모두 병기함.",
      "한국 가격 구간 수치는 공신력 있는 1차 통계(국세청·업계 협회) 기준이 아니므로 참고용.",
      "관세청 원자료(K-stat, stat.kita.net)를 직접 조회하지 못해 2차 출처(업계 매체) 재인용 수치를 사용함."
    ]
  },

  // 테이스팅·페어링 — 02_data/guide.json
  guide: {
    "tasting": {
      "order": [
        {
          "step": "보기(Look)",
          "description": "잔을 흰 배경 앞에서 기울여 색·투명도·점성을 본다. 레드는 숙성될수록 보라빛→벽돌색·갈색으로, 화이트는 옅은 색→황금색·호박색으로 짙어진다. 잔 벽에 흘러내리는 \"다리(legs/tears)\"가 느리고 진할수록 알코올·당도가 높은 편이다."
        },
        {
          "step": "향 맡기(Smell)",
          "description": "잔을 가볍게 흔들어(스월링) 향을 개방시킨 뒤 코를 가까이 대고 향을 맡는다. 1차 향(품종 유래: 과일·꽃·허브), 2차 향(발효 유래: 효모·버터), 3차 향/부케(숙성 유래: 오크·가죽·흙)로 나뉜다."
        },
        {
          "step": "맛보기(Taste)",
          "description": "소량을 입에 머금고 입안 전체로 굴려 산도·탄닌·바디·당도·풍미를 느낀 뒤 삼키거나 뱉고 여운을 확인한다."
        },
        {
          "step": "균형감 평가",
          "description": "색·향·맛 요소가 얼마나 조화롭게 어우러지는지 종합 평가한다."
        }
      ],
      "axes": [
        {
          "name": "색(Color/Appearance)",
          "meaning": "색의 농도와 톤으로 와인의 나이·품종·바디를 짐작할 수 있다. 레드는 숙성될수록 보라빛에서 벽돌색·갈색으로, 화이트는 반대로 옅은 색에서 황금색·호박색으로 짙어진다."
        },
        {
          "name": "향(Aroma/Nose)",
          "meaning": "1차 향(품종: 과일·꽃·허브), 2차 향(발효: 효모·버터), 3차 향/부케(숙성: 오크·가죽·흙)로 구분된다."
        },
        {
          "name": "산도(Acidity)",
          "meaning": "레몬을 입에 문 듯한 상쾌하고 침이 고이는 감각. 낮음-중간(-)-중간-중간(+)-높음의 5단계(WSET 체계)로 평가하며, 서늘한 기후 포도일수록 산도가 높은 경향이 있다."
        },
        {
          "name": "탄닌(Tannin)",
          "meaning": "입안을 마르게 하는 떫은 감각. 포도 껍질·씨·줄기 또는 오크에서 우러나며, 주로 레드 와인에서 뚜렷하다. 기름진 음식(단백질·지방)과 만나면 부드럽게 느껴진다."
        },
        {
          "name": "바디(Body)",
          "meaning": "입안에서 느껴지는 무게감·질감. 알코올 도수가 가장 큰 영향을 주며, 대체로 12%대 초반은 가볍게, 13% 후반 이상은 묵직하게 느껴진다(임계값은 출처별로 다소 상이, 참고용)."
        },
        {
          "name": "당도(Sweetness)",
          "meaning": "잔당(residual sugar) 정도에 따른 단맛. 드라이-오프드라이-미디엄드라이-미디엄스위트-스위트-매우 스위트의 스펙트럼으로 평가한다."
        },
        {
          "name": "여운(Finish)",
          "meaning": "삼킨 뒤에도 입과 목에 남는 맛·향의 지속 시간. 일반적으로 품질이 높은 와인일수록 여운이 길다고 평가된다."
        }
      ],
      "source": "Michelin Guide Korea, 와인의 맛을 표현하는 테이스팅 용어 101; 위키백과, 포도주 시음; WSET Level 3 Wines(한국어); Wine Folly, What Is Wine Body — _workspace/01_knowledge_tasting.md",
      "refs": [
        {
          "label": "Michelin Guide Korea, 와인의 맛을 표현하는 테이스팅 용어 101",
          "url": "https://guide.michelin.com/kr/ko/article/features/와인의-맛을-표현하는-테이스팅-용어-101"
        },
        {
          "label": "WSET Level 3 Wines(한국어)",
          "url": "https://www.wsetglobal.com/media/3125/wset_l3_wines_sat_kr_jun-2016.pdf"
        },
        {
          "label": "Wine Folly, What Is Wine Body",
          "url": "https://winefolly.com/tips/what-is-wine-body-and-how-to-taste-it/"
        }
      ]
    },
    "pairing": {
      "principles": [
        {
          "name": "무게감(바디) 매칭",
          "description": "음식과 와인의 무게감을 비슷하게 맞춘다. 묵직한 요리(스튜, 스테이크)에는 풀바디 와인을, 가벼운 요리(샐러드, 흰살 생선)에는 라이트바디 와인을 맞춘다."
        },
        {
          "name": "산도 매칭(대비 전략)",
          "description": "산도 높은 와인은 기름지고 크리미한 음식을 상쾌하게 \"잘라내는(cut through)\" 역할을 한다. 다만 산도 높은 음식에 산도 높은 와인을 맞추면 신맛끼리 부딪힐 수 있다."
        },
        {
          "name": "탄닌과 지방(공명 전략)",
          "description": "지방이 혀를 코팅해 탄닌의 떫은 느낌(수렴성)을 부드럽게 중화시킨다. 탄닌 강한 레드가 기름진 붉은 육류와 오랫동안 짝을 이뤄온 이유다."
        },
        {
          "name": "단맛 매칭",
          "description": "\"와인은 항상 음식보다 달거나 최소한 같아야 한다.\" 음식의 단맛은 와인의 쓴맛·산미·알코올감을 도드라지게 하므로, 디저트에는 디저트보다 단 와인을 맞춰야 균형이 맞는다."
        }
      ],
      "principlesSource": "WineWiki, Food and Wine Pairing Principles; Enobytes, The Science of Wine Pairing — _workspace/01_knowledge_pairing.md",
      "examples": [
        {
          "food": "스테이크(붉은 육류)",
          "wine": "카베르네 소비뇽",
          "why": "지방이 강한 탄닌을 코팅·중화시켜 부드럽게 느껴지게 하고, 와인의 산도는 고기의 기름진 맛을 개운하게 정리해준다.",
          "source": "마시자 매거진, 스테이크와 어울리는 최고의 와인",
          "sourceUrl": "https://mashija.com/스테이크와-어울리는-최고의-와인-무엇을-고를-것인가/"
        },
        {
          "food": "생굴",
          "wine": "샤블리 / 샴페인",
          "why": "굴 특유의 짠맛·바다향에 샤블리(비오크 샤르도네)나 샴페인의 높은 산도·미네랄리티가 맞물려 신선함을 극대화한다.",
          "source": "와인21닷컴, 음식과 와인 페어링 기초",
          "sourceUrl": "https://www.wine21.com/11_news/news_view.html?Idx=17341"
        },
        {
          "food": "매운 태국·아시아 음식",
          "wine": "오프-드라이 리슬링",
          "why": "와인의 단맛이 캡사이신 자극을 완화시키고, 리슬링의 높은 산도가 향신료의 풍미를 산뜻하게 받쳐준다.",
          "source": "와인21닷컴, 음식과 와인 페어링 기초",
          "sourceUrl": "https://www.wine21.com/11_news/news_view.html?Idx=17341"
        },
        {
          "food": "크림 파스타·리소토",
          "wine": "소비뇽 블랑",
          "why": "상쾌한 산도가 크림 소스의 무거움을 씻어내며 입안을 리프레시해준다.",
          "source": "Enobytes, The Science of Wine Pairing",
          "sourceUrl": "https://www.enobytes.com/2026/01/11/the-science-of-wine-pairing-why-salt-fat-acid-and-sweet-matter/"
        },
        {
          "food": "토마토 소스 파스타·피자",
          "wine": "산지오베제(키안티)",
          "why": "토마토의 산미와 산지오베제의 높은 산도가 조화를 이루며, 세이보리한 흙·허브 풍미가 소스와 공명하는 \"지역 궁합(what grows together, goes together)\".",
          "source": "Hospitality.Institute, Old World Wines",
          "sourceUrl": "https://hospitality.institute/bha203/old-world-wines-europe-journey/"
        },
        {
          "food": "연어(구운/훈제)",
          "wine": "피노 누아",
          "why": "연어의 기름진 질감이 피노 누아의 부드러운 탄닌·붉은 과일 풍미와 무게감이 맞아떨어지는 예외적 조합.",
          "source": "와인 노트(conginfo.com)",
          "sourceUrl": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "food": "염소치즈",
          "wine": "소비뇽 블랑",
          "why": "염소치즈의 시큼하고 크리미한 풍미가 소비뇽 블랑의 높은 산도·허브 향과 균형을 이루는 프랑스 루아르 전통 궁합.",
          "source": "와인21닷컴, 음식과 와인 페어링 기초",
          "sourceUrl": "https://www.wine21.com/11_news/news_view.html?Idx=17341"
        },
        {
          "food": "블루치즈",
          "wine": "포트(주정강화 와인)",
          "why": "짭짤한 치즈에 달콤한 와인을 매칭하면 단맛이 짠맛을 부드럽게 감싸는 클래식 디저트 궁합.",
          "source": "와인21닷컴, 음식과 와인 페어링 기초",
          "sourceUrl": "https://www.wine21.com/11_news/news_view.html?Idx=17341"
        },
        {
          "food": "초콜릿 디저트",
          "wine": "늦수확/주정강화 스위트 와인",
          "why": "\"와인은 음식보다 달아야 한다\" 원칙의 대표 사례. 드라이한 와인을 맞추면 밍밍하고 시게 느껴진다.",
          "source": "Enobytes, The Science of Wine Pairing",
          "sourceUrl": "https://www.enobytes.com/2026/01/11/the-science-of-wine-pairing-why-salt-fat-acid-and-sweet-matter/"
        },
        {
          "food": "양갈비·바비큐(스파이시한 육류)",
          "wine": "시라/쉬라즈",
          "why": "쉬라즈의 후추·스파이스 풍미가 양념된 육류의 향신료와 공명하며, 강한 탄닌이 고기의 지방과 어우러져 부드러워진다.",
          "source": "WineWiki, Food and Wine Pairing Principles",
          "sourceUrl": "https://www.winewithseth.com/winewiki/food-and-wine-pairing-principles/"
        },
        {
          "food": "삼겹살·기름진 돼지고기 요리",
          "wine": "말벡",
          "why": "탄닌이 강하면서도 실키한 질감의 말벡이 삼겹살의 기름기를 잡아주면서도 거부감이 적다.",
          "source": "와인21닷컴, 음식과 와인 페어링 기초",
          "sourceUrl": "https://www.wine21.com/11_news/news_view.html?Idx=17341"
        }
      ],
      "principlesRefs": [
        {
          "label": "WineWiki, Food and Wine Pairing Principles",
          "url": "https://www.winewithseth.com/winewiki/food-and-wine-pairing-principles/"
        },
        {
          "label": "Enobytes, The Science of Wine Pairing",
          "url": "https://www.enobytes.com/2026/01/11/the-science-of-wine-pairing-why-salt-fat-acid-and-sweet-matter/"
        }
      ]
    }
  },

  // 리뷰·평점(대표 스타일 카드) 15종 — 02_data/reviews.json 의 items 배열
  // 고정 별점 없음. 별점은 사용자가 매기며 localStorage(wine_tastings)에 저장된다.
  reviewsNote: "이 파일은 개별 상품에 대한 평론가·소비자 리뷰 원자료가 조사에서 확보되지 않아, 조사된 품종·산지·가격대 사실에 근거한 '대표 스타일 소개 카드'로 구성했다. 고정된 별점(평점) 필드는 포함하지 않는다 — 카드별 별점은 사이트에서 사용자가 직접 매기는 개인 평가이며 localStorage(wine_tastings)에 저장된다.",
  reviews: [
    {
      "id": "bordeaux-left-bank-blend",
      "wineName": "보르도 좌안 블렌드 (메독 스타일)",
      "type": "red",
      "grape": "카베르네 소비뇽 중심 블렌드",
      "region": "보르도(프랑스)",
      "priceTier": "mid",
      "body": "풀바디",
      "description": "지롱드강 좌안의 자갈질 토양에서 나는 카베르네 소비뇽 중심 블렌드. 골격이 탄탄하고 블랙커런트·시더우드 풍미가 도드라진다.",
      "pairingHint": "스테이크 등 기름진 붉은 육류 — 지방이 탄닌을 부드럽게 중화시킨다.",
      "source": "_workspace/01_knowledge_regions.md(보르도), 01_knowledge_grapes.md(카베르네 소비뇽), 01_market_price.md(미들 구간)",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "Vinodivino, What Is An Old World Wine",
          "url": "https://vinodivino.com/blogs/blog/what-is-an-old-world-wine"
        }
      ]
    },
    {
      "id": "napa-cabernet-sauvignon",
      "wineName": "나파밸리 카베르네 소비뇽",
      "type": "red",
      "grape": "카베르네 소비뇽",
      "region": "나파밸리(미국)",
      "priceTier": "premium",
      "body": "풀바디",
      "description": "따뜻하고 건조한 캘리포니아 기후에서 나는 진하고 힘 있는 스타일. 오크 숙성을 거쳐 바닐라·담배 향이 더해지는 경우가 많은 프리미엄·아이콘 와인 산지.",
      "pairingHint": "스테이크 등 기름진 붉은 육류.",
      "source": "_workspace/01_knowledge_regions.md(나파밸리), 01_knowledge_grapes.md(카베르네 소비뇽), 01_market_price.md(프리미엄 구간)",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "Global Wine Authority",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "pomerol-right-bank-blend",
      "wineName": "보르도 우안 블렌드 (포므롤·생테밀리옹 스타일)",
      "type": "red",
      "grape": "메를로 중심 블렌드",
      "region": "보르도(프랑스)",
      "priceTier": "premium",
      "body": "미디엄~풀바디",
      "description": "점토질 토양의 우안에서 메를로가 중심이 되어 만드는 스타일로 좌안보다 더 부드럽고 자두 풍미가 풍부하다.",
      "pairingHint": "탄닌이 부담스러운 레드 초보자에게 추천되는 첫 레드 스타일.",
      "source": "_workspace/01_knowledge_regions.md(보르도), 01_knowledge_grapes.md(메를로)",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "Vinodivino, What Is An Old World Wine",
          "url": "https://vinodivino.com/blogs/blog/what-is-an-old-world-wine"
        }
      ]
    },
    {
      "id": "bourgogne-pinot-noir",
      "wineName": "부르고뉴 피노 누아 (코트 도르 스타일)",
      "type": "red",
      "grape": "피노 누아",
      "region": "부르고뉴(프랑스)",
      "priceTier": "premium",
      "body": "라이트~미디엄바디",
      "description": "클리마(밭 단위 구획) 하나하나가 개성을 갖는다는 믿음이 강한 산지. 체리·딸기 향과 함께 숙성되면 흙·버섯 부케가 나타난다.",
      "pairingHint": "연어(구운/훈제) — 기름진 질감이 부드러운 탄닌·붉은 과일 풍미와 맞아떨어진다.",
      "source": "_workspace/01_knowledge_regions.md(부르고뉴), 01_knowledge_grapes.md(피노 누아), 01_knowledge_pairing.md(조합 6)",
      "refs": [
        {
          "label": "와인 노트(conginfo.com)",
          "url": "https://conginfo.com/entry/레드-와인-포도-품종-느낌으로-쉽게-알아보기"
        },
        {
          "label": "Bernard Marr's Wine Guide",
          "url": "https://bmwineguide.co.uk/in-introduction-to-the-worlds-most-important-wine-regions/"
        }
      ]
    },
    {
      "id": "chablis-unoaked-chardonnay",
      "wineName": "샤블리 (비오크 샤르도네)",
      "type": "white",
      "grape": "샤르도네",
      "region": "부르고뉴 샤블리(프랑스)",
      "priceTier": "mid",
      "body": "라이트~미디엄바디(비오크)",
      "description": "오크 숙성 없이 스테인리스 탱크에서 만들어 가볍고 상큼한 시트러스·사과 풍미가 나는 스타일.",
      "pairingHint": "생굴 — 높은 산도·미네랄리티가 굴의 짠맛·바다향과 신선함을 극대화한다.",
      "source": "_workspace/01_knowledge_grapes.md(샤르도네), 01_knowledge_pairing.md(조합 2)",
      "refs": [
        {
          "label": "Wine Folly, Basic Guide to White Wine",
          "url": "https://winefolly.com/deep-dive/beginners-white-wines-list/"
        },
        {
          "label": "Bernard Marr's Wine Guide",
          "url": "https://bmwineguide.co.uk/in-introduction-to-the-worlds-most-important-wine-regions/"
        }
      ]
    },
    {
      "id": "marlborough-sauvignon-blanc",
      "wineName": "말버러 소비뇽 블랑",
      "type": "white",
      "grape": "소비뇽 블랑",
      "region": "말버러(뉴질랜드)",
      "priceTier": "daily",
      "body": "라이트~미디엄바디",
      "description": "서늘한 해양성 기후와 강한 일조량이 만나 자몽·패션프루트·풋풀 향이 강렬하게 살아있는 개성 강한 스타일.",
      "pairingHint": "크림 파스타·리소토 또는 염소치즈 — 산도가 크리미함을 개운하게 정리한다.",
      "source": "_workspace/01_knowledge_regions.md(말버러), 01_knowledge_grapes.md(소비뇽 블랑), 01_knowledge_pairing.md(조합 4·7)",
      "refs": [
        {
          "label": "Amsterdam Wine Academy",
          "url": "https://amsterdamwineacademy.com/en/top-10-white-grape-varieties-and-their-flavor-profiles/"
        },
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "mosel-riesling",
      "wineName": "모젤 리슬링",
      "type": "white",
      "grape": "리슬링",
      "region": "모젤(독일)",
      "priceTier": "mid",
      "body": "라이트~미디엄바디",
      "description": "슬레이트 급경사지에서 나는 산도가 매우 높고 미네랄리티가 강한 스타일. 카비네트~트로켄베렌아우스레제 등 당도별 등급이 있다.",
      "pairingHint": "매운 태국·아시아 음식(오프-드라이 스타일) — 단맛이 매운맛을 진정시킨다.",
      "source": "_workspace/01_knowledge_regions.md(모젤), 01_knowledge_grapes.md(리슬링), 01_knowledge_pairing.md(조합 3)",
      "refs": [
        {
          "label": "Amsterdam Wine Academy",
          "url": "https://amsterdamwineacademy.com/en/top-10-white-grape-varieties-and-their-flavor-profiles/"
        },
        {
          "label": "oboe.com, Old World Wine Regions",
          "url": "https://oboe.com/learn/mastering-wset-level-3-wine-knowledge-gzqzry/old-world-wine-regions-2"
        }
      ]
    },
    {
      "id": "chianti-classico",
      "wineName": "키안티 클라시코",
      "type": "red",
      "grape": "산지오베제",
      "region": "토스카나(이탈리아)",
      "priceTier": "mid",
      "body": "미디엄바디",
      "description": "밝은 루비색에 높은 산도와 단단한 탄닌, 체리·흙의 세이보리 풍미를 가진 이탈리아 대표 레드.",
      "pairingHint": "토마토 소스 파스타·피자 — 토마토의 산미와 산지오베제의 높은 산도가 조화를 이루는 지역 궁합.",
      "source": "_workspace/01_knowledge_regions.md(토스카나), 01_knowledge_grapes.md(산지오베제), 01_knowledge_pairing.md(조합 5)",
      "refs": [
        {
          "label": "Hospitality.Institute, Old World Wines",
          "url": "https://hospitality.institute/bha203/old-world-wines-europe-journey/"
        }
      ]
    },
    {
      "id": "rioja-reserva",
      "wineName": "리오하 레세르바",
      "type": "red",
      "grape": "템프라니요",
      "region": "리오하(스페인)",
      "priceTier": "mid",
      "body": "미디엄~풀바디",
      "description": "오크 숙성 기간이 긴 등급(레세르바)으로, 체리·자두 향에 바닐라·가죽 뉘앙스가 더해진 부드럽고 복합적인 스타일.",
      "pairingHint": "육류 요리 전반과 잘 맞는다.",
      "source": "_workspace/01_knowledge_regions.md(리오하), 01_knowledge_grapes.md(템프라니요)",
      "refs": [
        {
          "label": "viavinumwinetours, Wine Region Maps",
          "url": "https://viavinumwinetours.com/en/wine-region-maps/"
        }
      ]
    },
    {
      "id": "mendoza-malbec",
      "wineName": "멘도사 말벡",
      "type": "red",
      "grape": "말벡",
      "region": "멘도사(아르헨티나)",
      "priceTier": "daily",
      "body": "풀바디",
      "description": "안데스 산기슭 고지대의 큰 일교차가 산도를 지킨 채 진하고 부드러운 탄닌을 만든다. 짙은 색과 실키한 질감의 \"블랙 와인\".",
      "pairingHint": "삼겹살·기름진 돼지고기 요리 — 실키한 탄닌이 기름기를 잡아준다.",
      "source": "_workspace/01_knowledge_regions.md(멘도사), 01_knowledge_grapes.md(말벡), 01_knowledge_pairing.md(조합 11)",
      "refs": [
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "barolo-nebbiolo",
      "wineName": "바롤로 / 바르바레스코",
      "type": "red",
      "grape": "네비올로",
      "region": "피에몬테(이탈리아)",
      "priceTier": "premium",
      "body": "미디엄~풀바디",
      "description": "\"와인의 왕\"으로 불리는 장기 숙성형 와인. 색은 옅은 편이지만 탄닌·산도가 매우 강하며 장미·타르·말린 체리 향이 특징적이다.",
      "pairingHint": "어릴 때는 탄닌이 강하므로 디캔팅하거나 숙성된 빈티지를 권장.",
      "source": "_workspace/01_knowledge_regions.md(피에몬테), 01_knowledge_grapes.md(네비올로)",
      "refs": [
        {
          "label": "oboe.com, Old World Wine Regions",
          "url": "https://oboe.com/learn/mastering-wset-level-3-wine-knowledge-gzqzry/old-world-wine-regions-2"
        },
        {
          "label": "Vinodivino, What Is An Old World Wine",
          "url": "https://vinodivino.com/blogs/blog/what-is-an-old-world-wine"
        }
      ]
    },
    {
      "id": "barossa-shiraz",
      "wineName": "바로사밸리 쉬라즈",
      "type": "red",
      "grape": "쉬라즈",
      "region": "바로사밸리(호주)",
      "priceTier": "mid",
      "body": "풀바디",
      "description": "따뜻한 대륙성 기후에서 블랙베리·자두 등 잼처럼 농축된 과실미와 초콜릿·스파이스 풍미를 내는 진하고 힘 있는 스타일. 100년 넘은 올드바인도 남아있다.",
      "pairingHint": "양갈비·바비큐 등 스파이시한 육류 — 후추·스파이스 풍미가 양념과 공명한다.",
      "source": "_workspace/01_knowledge_regions.md(바로사밸리), 01_knowledge_grapes.md(시라/쉬라즈), 01_knowledge_pairing.md(조합 10)",
      "refs": [
        {
          "label": "Global Wine Authority, New World Wine Regions",
          "url": "https://globalwineauthority.com/new-world-wine-regions/"
        }
      ]
    },
    {
      "id": "italian-pinot-grigio",
      "wineName": "이탈리아 피노 그리지오",
      "type": "white",
      "grape": "피노 그리지오",
      "region": "이탈리아 북부",
      "priceTier": "daily",
      "body": "라이트~미디엄바디",
      "description": "가볍고 담백하며 크리스프한 산도가 특징인, 부담 없이 접근하기 좋은 화이트.",
      "pairingHint": "해산물 전채.",
      "source": "_workspace/01_knowledge_grapes.md(피노 그리지오/피노 그리)",
      "refs": [
        {
          "label": "Wine Folly, Pinot Gris vs Pinot Grigio",
          "url": "https://winefolly.com/deep-dive/whats-the-difference-between-pinot-gris-and-pinot-grigio/"
        }
      ]
    },
    {
      "id": "moscato-dasti",
      "wineName": "모스카토 다스티",
      "type": "white",
      "grape": "모스카토",
      "region": "피에몬테 아스티(이탈리아)",
      "priceTier": "daily",
      "body": "라이트바디",
      "description": "허니서클·백화 향이 강하고 약발포성에 당도가 있으며 알코올 도수가 5~7%로 낮은 디저트/입문용 와인.",
      "pairingHint": "초콜릿 등 디저트 — \"와인은 음식보다 달아야 한다\" 원칙에 부합.",
      "source": "_workspace/01_knowledge_grapes.md(모스카토), 01_knowledge_pairing.md(조합 9, 원리 참고)",
      "refs": [
        {
          "label": "terravenos, Moscato vs Pinot Grigio",
          "url": "https://terravenos.com/trellis/moscato-vs-pinot-grigio/"
        }
      ]
    },
    {
      "id": "alsace-gewurztraminer",
      "wineName": "알자스 게뷔르츠트라미너",
      "type": "white",
      "grape": "게뷔르츠트라미너",
      "region": "알자스(프랑스)",
      "priceTier": "mid",
      "body": "미디엄~풀바디",
      "description": "리치·장미꽃잎·망고 등 화려한 향이 피어오르는 아로마틱 화이트. 산도는 낮고 질감이 풍성하며 대체로 오프-드라이 스타일이 많다.",
      "pairingHint": "향신료가 강한 아시아 음식(태국·인도 요리).",
      "source": "_workspace/01_knowledge_grapes.md(게뷔르츠트라미너)",
      "refs": [
        {
          "label": "Wine Folly, The Comprehensive Guide to Gewürztraminer",
          "url": "https://winefolly.com/grapes/gewurztraminer/"
        }
      ]
    }
  ],

  // 용어 사전 38개 — 02_data/glossary.json
  glossary: [
    {
      "term": "탄닌",
      "termEn": "Tannin",
      "category": "맛·감각",
      "definition": "입안이 마르고 텁텁해지는 떫은 성분. 포도 껍질·씨·줄기나 오크통에서 나온다.",
      "analogy": "진한 홍차를 오래 우려 마셨을 때 혀와 잇몸이 조이는 그 느낌.",
      "tip": "탄닌이 강한 레드는 기름진 고기와 먹으면 지방이 떫은맛을 부드럽게 감싸준다.",
      "source": "_workspace/01_knowledge_tasting.md (WSET Level 3 Wines)"
    },
    {
      "term": "바디",
      "termEn": "Body",
      "category": "맛·감각",
      "definition": "입안에서 느껴지는 와인의 무게감. 물처럼 가벼운지 우유처럼 묵직한지의 정도.",
      "analogy": "저지방 우유(라이트바디)와 생크림(풀바디)의 질감 차이를 떠올리면 된다.",
      "tip": "알코올 도수가 높을수록(대략 13.5% 이상) 바디가 묵직해지는 경향이 있으니 라벨의 ABV를 힌트로 쓰자.",
      "source": "_workspace/01_knowledge_tasting.md (Wine Folly)"
    },
    {
      "term": "산도",
      "termEn": "Acidity",
      "category": "맛·감각",
      "definition": "와인을 마셨을 때 침이 고이고 상쾌해지는 새콤한 감각.",
      "analogy": "레몬 조각을 살짝 베어 문 듯한 그 자극.",
      "tip": "산도가 높은 화이트는 튀김·크림 소스처럼 기름진 음식의 느끼함을 씻어준다.",
      "source": "_workspace/01_knowledge_tasting.md (WSET Level 3 Wines)"
    },
    {
      "term": "당도",
      "termEn": "Sweetness",
      "category": "맛·감각",
      "definition": "와인에 남아있는 잔당의 양에 따라 결정되는 단맛의 정도. 드라이(Dry, 단맛 거의 없음)부터 스위트(Sweet)까지 이어진다.",
      "analogy": "드라이는 무가당 아이스티, 스위트는 설탕을 탄 아이스티라고 생각하면 쉽다.",
      "tip": "라벨에 'Dry/Sec/Trocken'이 있으면 단맛이 거의 없다는 뜻, 반대로 'Sweet/Doux'는 단맛이 있다는 신호다.",
      "source": "_workspace/01_knowledge_tasting.md"
    },
    {
      "term": "여운(피니시)",
      "termEn": "Finish",
      "category": "맛·감각",
      "definition": "와인을 삼킨 뒤에도 입과 목에 남는 맛과 향의 지속 시간.",
      "analogy": "좋은 커피를 마신 뒤에도 한참 향이 남는 것과 비슷한 느낌.",
      "tip": "여운이 길게 이어질수록 대체로 품질이 높게 평가되니, 가격대를 가늠하는 단서로 써도 좋다.",
      "source": "_workspace/01_knowledge_tasting.md (위키백과, 포도주 시음)"
    },
    {
      "term": "아로마·부케",
      "termEn": "Aroma / Bouquet",
      "category": "맛·감각",
      "definition": "와인에서 나는 향. 아로마는 포도 품종 자체의 과일·꽃 향(1차 향), 부케는 발효·숙성을 거치며 생기는 오크·가죽 같은 복합적인 향(2·3차 향)을 가리킨다.",
      "analogy": "아로마는 갓 딴 포도의 향, 부케는 오래 묵은 장을 열었을 때 나는 깊은 향이라고 보면 된다.",
      "tip": "잔을 가볍게 돌려(스월링) 향을 퍼뜨린 뒤 코를 가까이 대고 맡으면 훨씬 잘 느껴진다.",
      "source": "_workspace/01_knowledge_tasting.md (Michelin Guide Korea)"
    },
    {
      "term": "미네랄리티",
      "termEn": "Minerality",
      "category": "맛·감각",
      "definition": "젖은 돌·자갈에서 나는 것 같은 서늘하고 짭짤한 뉘앙스를 가리키는 표현.",
      "analogy": "비 온 뒤 아스팔트나 조약돌 냄새를 맡았을 때의 그 느낌.",
      "tip": "슬레이트·석회암 토양의 서늘한 산지(모젤 리슬링, 샤블리 등) 와인에서 자주 언급되는 표현이니 산지명과 함께 기억하면 좋다.",
      "source": "_workspace/01_knowledge_regions.md (모젤 슬레이트 토양 서술 기반)"
    },
    {
      "term": "밸런스",
      "termEn": "Balance",
      "category": "맛·감각",
      "definition": "산도·탄닌·당도·알코올 같은 요소들이 한쪽으로 치우치지 않고 조화롭게 어우러진 상태.",
      "analogy": "어느 한 가지 양념도 튀지 않는 잘 끓인 국의 맛과 비슷하다.",
      "tip": "시음 순서(보기→향맡기→맛보기)의 마지막 단계에서 이 밸런스를 종합적으로 평가한다.",
      "source": "_workspace/01_knowledge_tasting.md (위키백과, 포도주 시음)"
    },
    {
      "term": "노즈",
      "termEn": "Nose",
      "category": "맛·감각",
      "definition": "잔에 코를 대고 맡는 향 전체, 또는 그 행위 자체를 가리키는 소믈리에 용어.",
      "analogy": "\"노즈가 좋다\"는 말은 \"향이 풍부하고 매력적이다\"라는 뜻이다.",
      "tip": "와인 리뷰에서 \"노즈에서 체리향이 난다\"처럼 쓰인다면 향 단계에서 느껴지는 특징을 말하는 것으로 이해하면 된다.",
      "source": "_workspace/01_knowledge_tasting.md"
    },
    {
      "term": "빈티지",
      "termEn": "Vintage",
      "category": "양조·스타일",
      "definition": "포도를 수확한 연도. 라벨에 적힌 연도는 그 해에 딴 포도로 만들었다는 뜻이다.",
      "analogy": "과일의 \"수확 연도\"라고 생각하면 된다. 그 해 날씨가 좋았는지에 따라 품질이 달라진다.",
      "tip": "일반적인 와인은 몇 년 안에 마시는 것이 신선하지만, 고급 레드는 수년~수십 년 숙성을 견디기도 한다.",
      "source": "_workspace/01_knowledge_winemaking.md"
    },
    {
      "term": "논빈티지(NV)",
      "termEn": "Non-Vintage",
      "category": "양조·스타일",
      "definition": "서로 다른 연도에 수확한 포도를 섞어 만들어 특정 빈티지 연도를 표기하지 않은 와인.",
      "analogy": "여러 해의 재료를 섞어 매번 똑같은 맛을 내는 즉석 블렌드 커피와 비슷하다.",
      "tip": "샴페인 등 스파클링 와인에 흔하며, 해마다 맛이 들쭉날쭉하지 않고 일관된 것이 목표다.",
      "source": "WebSearch: Wine label terms Estate Bottled NV ABV — thewinecellargroup.com, personalwine.com"
    },
    {
      "term": "오크 숙성",
      "termEn": "Oak Aging",
      "category": "양조·스타일",
      "definition": "오크통에서 숙성시켜 바닐라·향신료 향을 더하고 탄닌을 부드럽게 다듬는 과정.",
      "analogy": "나무통에서 숙성한 위스키에서 나는 바닐라·캐러멜 향과 비슷한 원리다.",
      "tip": "라벨에 \"oaked\"라면 진하고 크리미한 스타일, \"unoaked\"라면 산뜻하고 가벼운 스타일일 가능성이 높다.",
      "source": "_workspace/01_knowledge_winemaking.md"
    },
    {
      "term": "디캔팅",
      "termEn": "Decanting",
      "category": "양조·스타일",
      "definition": "와인을 병에서 넓은 용기(디캔터)로 옮겨 공기와 접촉시키는 과정.",
      "analogy": "막 짠 원두커피가 시간이 지나며 향이 열리는 것처럼, 와인도 공기와 만나면 닫혀 있던 향이 풀린다.",
      "tip": "탄닌이 강하고 어린 레드 와인(네비올로·카베르네 소비뇽 등)일수록 디캔팅 효과가 크다.",
      "source": "_workspace/01_knowledge_grapes.md (네비올로 초심자 팁)"
    },
    {
      "term": "스파클링·전통방식",
      "termEn": "Sparkling Wine / Traditional Method",
      "category": "양조·스타일",
      "definition": "병 속에서 2차 발효를 일으켜 탄산을 가두는 발포성 와인 제조법. 샴페인이 대표적이다.",
      "analogy": "병 안에서 탄산음료가 만들어지는 것과 비슷한 원리(단, 자연 발효로 생긴 탄산이다).",
      "tip": "라벨에 \"Méthode Traditionnelle\"나 \"전통방식\"이 적혀 있으면 병 내 2차 발효를 거친 고급 스파클링임을 뜻한다.",
      "source": "_workspace/01_knowledge_winemaking.md (마시자 매거진)"
    },
    {
      "term": "주정강화 와인",
      "termEn": "Fortified Wine",
      "category": "양조·스타일",
      "definition": "발효 중이나 발효 후에 브랜디(증류주)를 첨가해 도수와 보존력을 높인 와인. 포트·셰리가 대표적이다.",
      "analogy": "와인에 독한 술을 살짝 섞어 도수를 끌어올린 셈이라, 일반 와인보다 훨씬 진하고 오래간다.",
      "tip": "발효 도중 첨가하면 달게(포트), 발효를 마친 뒤 첨가하면 상대적으로 드라이하게(셰리) 나온다.",
      "source": "_workspace/01_knowledge_winemaking.md (Spec's Wines)"
    },
    {
      "term": "내추럴 와인",
      "termEn": "Natural Wine",
      "category": "양조·스타일",
      "definition": "화학 첨가물·인위적 개입을 최소화하고 자연 효모로만 발효시킨 와인을 가리키는 흐름(법적으로 통일된 정의는 없다).",
      "analogy": "가공을 최소화한 \"유기농 홈메이드\" 와인이라고 생각하면 이해가 쉽다.",
      "tip": "일반 와인보다 향이 독특하거나(효모·과일 발효취) 탁한 경우가 있는데, 결함이 아니라 스타일인 경우가 많다.",
      "source": "종합 서술(범주 정의) — 별도 심층 조사는 시장/트렌드 도메인 권장"
    },
    {
      "term": "말로락틱 발효(MLF)",
      "termEn": "Malolactic Fermentation",
      "category": "양조·스타일",
      "definition": "날카로운 사과산을 부드러운 젖산으로 바꾸는 2차 발효 과정.",
      "analogy": "새콤한 풋사과 맛이 부드러운 우유 맛으로 순해지는 변화라고 보면 된다.",
      "tip": "오크 숙성 샤르도네 특유의 버터 향이 바로 이 과정에서 나오니, \"버터리(buttery)\"라는 표현을 보면 MLF를 거쳤다고 추측할 수 있다.",
      "source": "_workspace/01_knowledge_winemaking.md (enobytes)"
    },
    {
      "term": "블렌드",
      "termEn": "Blend",
      "category": "양조·스타일",
      "definition": "두 가지 이상의 포도 품종을 섞어 만든 와인.",
      "analogy": "여러 원두를 섞어 균형 잡힌 맛을 내는 블렌드 커피와 같은 원리다.",
      "tip": "보르도 블렌드(카베르네 소비뇽+메를로 등)처럼 지역 특유의 블렌드 조합을 알아두면 스타일을 예측하기 쉽다.",
      "source": "_workspace/01_knowledge_regions.md (보르도 서술)"
    },
    {
      "term": "테루아",
      "termEn": "Terroir",
      "category": "원산지·등급",
      "definition": "토양·기후·지형이 어우러져 만드는 그 땅만의 고유한 특성. 같은 품종이라도 자란 곳에 따라 맛이 달라지는 이유다.",
      "analogy": "같은 품종의 사과라도 산지마다 당도·식감이 다른 것과 같은 이치다.",
      "tip": "구세계 라벨이 품종 대신 지역명을 크게 쓰는 이유가 바로 이 테루아를 강조하기 위해서다.",
      "source": "_workspace/01_knowledge_regions.md"
    },
    {
      "term": "구세계",
      "termEn": "Old World",
      "category": "원산지·등급",
      "definition": "프랑스·이탈리아·스페인·독일 등 수백 년간 와인을 만들어온 유럽 전통 산지.",
      "analogy": "오래된 전통 방식을 고수하는 \"전통 맛집\"에 비유할 수 있다.",
      "tip": "라벨에 품종명 대신 지역명(예: Bourgogne, Chablis)이 크게 적혀 있으면 구세계 와인일 가능성이 높다.",
      "source": "_workspace/01_knowledge_regions.md"
    },
    {
      "term": "신세계",
      "termEn": "New World",
      "category": "원산지·등급",
      "definition": "미국·칠레·호주·뉴질랜드·아르헨티나 등 비교적 최근에 포도 재배가 시작된 산지.",
      "analogy": "전통보다 직관적이고 트렌디한 \"신흥 맛집\"에 비유할 수 있다.",
      "tip": "라벨에 품종명(예: Cabernet Sauvignon)이 크게 적혀 있으면 신세계 와인일 가능성이 높다.",
      "source": "_workspace/01_knowledge_regions.md"
    },
    {
      "term": "아펠라시옹(AOC/AOP)",
      "termEn": "Appellation (AOC / AOP)",
      "category": "원산지·등급",
      "definition": "프랑스의 원산지 통제 명칭 제도. 정해진 지역·품종·재배 방식 등 규정을 지켜야 표기할 수 있다.",
      "analogy": "\"이 지역에서 이 방식으로 만들었다\"를 보증하는 원산지 인증 마크와 비슷하다.",
      "tip": "AOC와 AOP는 사실상 같은 의미로, AOC는 프랑스 국내용, AOP는 EU 공식 명칭이다.",
      "source": "WebSearch: French wine AOC AOP Grand Cru hierarchy — Wine Folly, French Wine Authority"
    },
    {
      "term": "그랑 크뤼·프르미에 크뤼",
      "termEn": "Grand Cru / Premier Cru",
      "category": "원산지·등급",
      "definition": "프랑스에서 개별 포도밭의 품질에 따라 매기는 등급. 그랑 크뤼가 최상위, 프르미에 크뤼가 그다음이다.",
      "analogy": "같은 동네 안에서도 특급지와 준특급지로 나뉘는 부동산 등급과 비슷하다.",
      "tip": "그랑 크뤼는 특정 밭 이름 자체가 곧 브랜드일 만큼 가격이 높으니, 예산이 크지 않다면 프르미에 크뤼로 입문해도 충분하다.",
      "source": "WebSearch: French wine AOC AOP Grand Cru Premier Cru hierarchy — Wine Folly, Butterfield"
    },
    {
      "term": "DOCG·DOC·IGT",
      "termEn": "DOCG / DOC / IGT",
      "category": "원산지·등급",
      "definition": "이탈리아의 품질 등급 체계. DOCG(최상위·정부 보증)＞DOC(원산지 통제)＞IGT(지역 표시) 순으로 규정이 엄격하다.",
      "analogy": "한국의 품질 인증마크가 여러 단계로 나뉘는 것과 비슷한 구조다.",
      "tip": "DOCG는 정부가 맛까지 심사(관능 검사)하는 유일한 등급이니, 병목에 붙은 정부 인증 띠지를 확인하면 진위를 알 수 있다.",
      "source": "WebSearch: Italian wine DOCG DOC IGT hierarchy — WineWithSeth, MasterClass"
    },
    {
      "term": "리제르바",
      "termEn": "Riserva",
      "category": "원산지·등급",
      "definition": "이탈리아에서 규정보다 더 오래 숙성시킨 와인에 붙이는 표기. 보통 일반 등급보다 2년 이상 더 숙성한다.",
      "analogy": "\"장기 숙성 에디션\"이라고 보면 된다.",
      "tip": "Riserva가 붙으면 대체로 더 진하고 복합적이며 가격도 높다. 예: 브루넬로 디 몬탈치노 리제르바는 최소 4년 이상 숙성한다.",
      "source": "WebSearch: Italian wine DOCG Riserva aging requirement — WineWithSeth, Bonner Private Wine Partnership"
    },
    {
      "term": "프래디카트 체계",
      "termEn": "Prädikat System",
      "category": "원산지·등급",
      "definition": "독일에서 수확 시 포도가 얼마나 익었는지(당도)에 따라 매기는 등급. 카비네트→슈페트레제→아우스레제→베렌아우스레제→트로켄베렌아우스레제 순으로 포도가 더 익은 상태에서 수확한다.",
      "analogy": "같은 나무의 과일이라도 얼마나 더 오래 매달아 두었다가 땄는지에 따라 당도가 달라지는 것과 같다.",
      "tip": "등급이 높을수록(아우스레제 이상) 대체로 더 달고 진한 와인이 되지만, \"Trocken\" 표기가 있으면 그 단맛을 드라이하게 발효시켰다는 뜻이다.",
      "source": "WebSearch: German wine Prädikat Kabinett Spätlese Auslese Trockenbeerenauslese — WineWithSeth"
    },
    {
      "term": "트로켄",
      "termEn": "Trocken",
      "category": "원산지·등급",
      "definition": "독일어로 \"드라이(단맛이 거의 없음)\"라는 뜻의 라벨 표기.",
      "analogy": "\"Dry\"의 독일어 버전이라고 생각하면 된다.",
      "tip": "\"Spätlese Trocken\"처럼 프래디카트 등급과 함께 쓰이면, 잘 익은 포도로 만들었지만 드라이하게 발효시켰다는 의미다.",
      "source": "WebSearch: German wine Prädikat Trocken — WineWithSeth"
    },
    {
      "term": "크리안사·레세르바·그란 레세르바",
      "termEn": "Crianza / Reserva / Gran Reserva",
      "category": "원산지·등급",
      "definition": "스페인의 숙성 기간 등급. 크리안사(최소 2년, 오크 12개월 이상)→레세르바(최소 3년, 오크 12개월 이상)→그란 레세르바(최소 5년, 오크 2년+병 3년) 순으로 길어진다.",
      "analogy": "숙성 기간이 길수록 등급이 올라가는 치즈·위스키의 숙성 표기와 비슷하다.",
      "tip": "그란 레세르바가 붙으면 오래 숙성해 더 부드럽고 복합적인 맛을 기대할 수 있지만, 그만큼 가격도 높아진다.",
      "source": "WebSearch: Spanish wine Rioja Joven Crianza Reserva Gran Reserva aging years — Wine Folly, Winetraveler"
    },
    {
      "term": "에스테이트 보틀드",
      "termEn": "Estate Bottled",
      "category": "원산지·등급",
      "definition": "포도밭 재배부터 양조·병입까지 한 생산자가 자체 시설에서 모두 진행했다는 표기.",
      "analogy": "재료 재배부터 조리까지 한 농장에서 직접 하는 \"팜투테이블\" 레스토랑과 비슷하다.",
      "tip": "생산 전 과정을 직접 관리했다는 뜻이라 품질 관리가 더 철저했을 가능성이 높은 신호로 해석된다.",
      "source": "WebSearch: wine label terms Estate Bottled NV ABV — thewinecellargroup.com, personalwine.com"
    },
    {
      "term": "올드 바인",
      "termEn": "Old Vines / Vieilles Vignes",
      "category": "원산지·등급",
      "definition": "수십 년 이상 자란 오래된 포도나무에서 딴 포도로 만든 와인. 법적으로 통일된 최소 연령 기준은 없다.",
      "analogy": "젊은 나무보다 열매 수는 적지만 향이 응축된 노목의 과실이라고 보면 된다.",
      "tip": "오래된 나무일수록 수확량은 적지만 풍미가 응축되는 경향이 있어 프리미엄 표기로 쓰인다.",
      "source": "_workspace/01_knowledge_regions.md (바로사밸리 올드바인 서술)"
    },
    {
      "term": "브리딩",
      "termEn": "Breathing / Aeration",
      "category": "서빙·실전",
      "definition": "와인을 마시기 전 공기와 접촉시켜 향과 맛을 여는 과정. 디캔팅보다 간단히 병을 미리 따놓거나 잔을 흔드는 것도 포함된다.",
      "analogy": "막 뜯은 신문지 냄새가 시간이 지나면 옅어지듯, 와인도 공기와 만나면 거친 향이 부드러워진다.",
      "tip": "탄닌이 강한 어린 레드는 마시기 30분~1시간 전 미리 따라 두면 훨씬 부드럽게 느껴진다.",
      "source": "_workspace/01_knowledge_grapes.md (디캔팅 관련 서술 확장)"
    },
    {
      "term": "서빙 온도",
      "termEn": "Serving Temperature",
      "category": "서빙·실전",
      "definition": "와인 종류별로 가장 맛있게 느껴지는 권장 온도. 화이트·스파클링은 차게(6~10도), 레드는 서늘한 실온(16~18도)에 가깝게 마신다.",
      "analogy": "차가운 콜라와 미지근한 콜라의 맛 차이를 떠올리면, 온도가 맛에 얼마나 큰 영향을 주는지 이해하기 쉽다.",
      "tip": "레드도 너무 뜨거운 실온에서 마시면 알코올이 도드라지니, 냉장고에 20분만 넣어 살짝 서늘하게 마시는 것을 추천한다.",
      "source": "_workspace/01_knowledge_grapes.md (피노 누아 서빙 온도 서술 확장)"
    },
    {
      "term": "와인잔",
      "termEn": "Glassware",
      "category": "서빙·실전",
      "definition": "와인 종류에 따라 향과 맛을 최적화하도록 설계된 잔의 형태. 레드는 볼이 넓고, 화이트는 상대적으로 좁으며, 스파클링은 길쭉한 플루트형을 쓴다.",
      "analogy": "같은 향수라도 뿌리는 면적에 따라 향이 퍼지는 정도가 다른 것과 비슷한 원리다.",
      "tip": "잔이 마땅치 않다면 볼이 넓은 잔 하나로도 대부분의 와인을 무난하게 즐길 수 있다.",
      "source": "종합 서술(일반 상식) — 별도 출처 없음, 표기 주의"
    },
    {
      "term": "코르크 vs 스크류캡",
      "termEn": "Cork vs Screwcap",
      "category": "서빙·실전",
      "definition": "병을 막는 두 가지 방식. 코르크는 전통적인 나무껍질 마개, 스크류캡은 돌려서 여는 금속 마개다.",
      "analogy": "와인병 뚜껑이 병뚜껑이냐 트위스트캡 생수병이냐의 차이와 같다.",
      "tip": "스크류캡이라고 저품질인 것은 아니다. 산소 유입을 더 정밀하게 통제할 수 있어 신선함을 지키는 목적으로도 널리 쓰인다(특히 뉴질랜드·호주).",
      "source": "종합 서술(일반 상식) — 별도 출처 없음, 표기 주의"
    },
    {
      "term": "ABV(알코올 도수)",
      "termEn": "ABV (Alcohol by Volume)",
      "category": "서빙·실전",
      "definition": "와인에 알코올이 차지하는 비율(%). 라벨 하단에 작은 글씨로 표기된다.",
      "analogy": "소주(약 17~20%)보다는 낮지만 맥주(약 4~5%)보다는 훨씬 높은 도수라고 생각하면 감이 온다.",
      "tip": "12% 이하는 가벼운 편, 14% 이상은 진하고 묵직한 편이니 바디감을 가늠하는 가장 빠른 단서다.",
      "source": "WebSearch: wine label terms ABV meaning — thewinecellargroup.com"
    },
    {
      "term": "섹·브뤼",
      "termEn": "Sec / Brut",
      "category": "서빙·실전",
      "definition": "스파클링 와인의 당도 표기. 브뤼(Brut)는 매우 드라이, 섹(Sec)은 약간 단맛이 있는 편이다.",
      "analogy": "브뤼는 아메리카노, 섹은 설탕을 아주 살짝 넣은 커피라고 생각하면 된다.",
      "tip": "샴페인·스파클링을 처음 고를 때는 \"Brut\"이 가장 무난하고 대중적인 선택이다.",
      "source": "_workspace/01_knowledge_tasting.md (당도 스펙트럼 서술 확장)"
    }
  ],

  // 라벨 판독 가이드 — 02_data/labels.json
  labels: {
    "anatomy": [
      {
        "part": "생산자/와이너리 이름",
        "where": "라벨 최상단 또는 가장 큰 글씨",
        "meaning": "누가 만들었는지 알려주는 브랜드명. 유명 생산자는 그 자체로 품질 보증이 되기도 한다."
      },
      {
        "part": "원산지/지역명",
        "where": "중앙 또는 상단, 구세계 라벨에서는 가장 큰 글씨",
        "meaning": "구세계 라벨의 핵심 정보. 지역명이 곧 스타일·품종을 암시한다(예: Chablis = 비오크 샤르도네)."
      },
      {
        "part": "품종명",
        "where": "중앙, 신세계 라벨에서는 가장 큰 글씨",
        "meaning": "신세계 라벨의 핵심 정보. 품종명을 보면 맛의 방향을 바로 예측할 수 있다(예: Cabernet Sauvignon = 진하고 떫음)."
      },
      {
        "part": "빈티지(수확 연도)",
        "where": "라벨 상단 또는 지역명 근처, 4자리 숫자",
        "meaning": "포도를 수확한 해. 신선도(화이트·로제) 또는 숙성 정도(레드)를 가늠하는 단서. NV(Non-Vintage)면 여러 해를 블렌딩했다는 뜻."
      },
      {
        "part": "등급/품질 표기",
        "where": "지역명 근처 또는 하단, 작은 글씨나 별도 띠지",
        "meaning": "DOCG·AOC·Riserva·Reserva 같은 규정 준수·숙성 정도를 나타내는 공식 표기. 등급이 높을수록 대체로 규정이 엄격하고 가격도 높다."
      },
      {
        "part": "알코올 도수(ABV)",
        "where": "라벨 하단, 퍼센트(%) 숫자",
        "meaning": "바디감을 예측하는 가장 빠른 단서. 12% 이하는 가벼운 편, 14% 이상은 묵직한 편이다."
      },
      {
        "part": "용량",
        "where": "라벨 하단, 750ml 등 숫자",
        "meaning": "표준 와인병은 750ml. 대부분 병은 이 표준을 따르므로 특별히 확인할 필요는 적지만, 하프보틀(375ml)·매그넘(1.5L) 구분에 참고한다."
      },
      {
        "part": "병입자 정보(Estate bottled 등)",
        "where": "라벨 하단, 작은 글씨",
        "meaning": "재배부터 병입까지 한 생산자가 직접 했는지(Estate Bottled) 여부. 직접 관리한 와인은 품질 관리가 더 철저했을 가능성을 시사한다."
      }
    ],
    "oldVsNew": {
      "old": {
        "regions": ["프랑스", "이탈리아", "스페인", "독일"],
        "labelFocus": "지역명(원산지) 중심 표기",
        "why": "'테루아(그 땅만의 토양·기후가 만드는 특성)'를 중시하는 전통 때문에, 지역명 자체가 곧 스타일과 품종을 대변한다고 여긴다.",
        "example": "라벨에 'Bourgogne'라고만 적혀 있어도, 그 지역을 알면 포도가 피노 누아/샤르도네임을 짐작할 수 있다."
      },
      "new": {
        "regions": ["미국", "호주", "칠레", "뉴질랜드", "아르헨티나"],
        "labelFocus": "품종명 중심 표기",
        "why": "전통적 지역 규정보다 소비자가 맛을 직관적으로 예측하도록 품종을 전면에 내세우는 경향이 있다.",
        "example": "라벨에 'Cabernet Sauvignon'이라고 크게 적혀 있으면 어느 지역이든 그 품종 특유의 맛(진하고 떫음)을 기대할 수 있다."
      },
      "beginnerRule": "라벨에서 가장 큰 글씨가 지역명이면 구세계, 품종명이면 신세계로 첫 판단하면 대체로 맞는다. 구세계는 '지역을 알면 품종·스타일이 보이고', 신세계는 '품종을 보면 맛의 방향이 보인다'."
    },
    "gradings": [
      {
        "country": "프랑스",
        "system": "AOC/AOP (Appellation) > Grand Cru / Premier Cru",
        "note": "AOC는 원산지·품종·재배 방식을 규정하는 원산지 통제 명칭이며, Grand Cru·Premier Cru는 그 안에서 개별 포도밭에 매기는 밭 등급이다. 지역이 좁고 구체적일수록(마을 단위 > 밭 단위) 등급이 높아진다.",
        "terms": [
          { "label": "AOC/AOP", "meaning": "이 지역·방식대로 만들었다는 원산지 인증. 기본 품질 보증." },
          { "label": "Grand Cru", "meaning": "밭 등급의 최상위. 소량 생산에 가격도 가장 높다." },
          { "label": "Premier Cru", "meaning": "그랑 크뤼 다음가는 상위 밭 등급. 품질은 높지만 상대적으로 접근하기 쉽다." }
        ],
        "source": "WebSearch: French wine AOC AOP Grand Cru Premier Cru hierarchy — Wine Folly(winefolly.com/deep-dive/what-is-aoc-wine), French Wine Authority(frenchwineauthority.com)"
      },
      {
        "country": "이탈리아",
        "system": "DOCG > DOC > IGT",
        "note": "DOCG(정부 관능 검사까지 거치는 최고 등급) > DOC(원산지 통제) > IGT(지역 표시, 규정이 상대적으로 느슨함) 순으로 엄격하다.",
        "terms": [
          { "label": "DOCG", "meaning": "이탈리아 최고 등급. 정부가 맛까지 심사하고 병목에 인증 띠지를 붙인다." },
          { "label": "Riserva", "meaning": "규정보다 최소 2년 이상 더 숙성. 대체로 더 진하고 비싸다(예: 브루넬로 디 몬탈치노 리제르바는 4년 이상 숙성)." }
        ],
        "source": "WebSearch: Italian wine DOCG DOC IGT hierarchy Riserva aging — WineWithSeth(winewithseth.com/winewiki/italian-docg-classifications), Bonner Private Wine Partnership(bonnerprivatewines.com)"
      },
      {
        "country": "독일",
        "system": "Prädikat 체계: Kabinett → Spätlese → Auslese → Beerenauslese → Trockenbeerenauslese (수확 시 포도 당도 순)",
        "note": "등급은 '수확 시 포도가 얼마나 익었는지'를 기준으로 하며, 완성된 와인의 단맛과 항상 일치하지는 않는다(Trocken 표기가 있으면 드라이 발효).",
        "terms": [
          { "label": "Kabinett", "meaning": "가장 가벼운 등급. 산뜻하고 가벼운 편." },
          { "label": "Spätlese/Auslese", "meaning": "더 늦게 수확해 당도가 높음. 대체로 더 진하고 단맛이 있을 수 있음." },
          { "label": "Trocken", "meaning": "'드라이'라는 뜻. 등급과 별개로, 단맛 없이 발효했다는 표기." },
          { "label": "Eiswein", "meaning": "얼어붙은 포도로 만든 매우 달고 귀한 와인." }
        ],
        "source": "WebSearch: German wine Prädikat Kabinett Spätlese Auslese Trockenbeerenauslese Trocken — WineWithSeth(winewithseth.com/winewiki/pradikat-system)"
      },
      {
        "country": "스페인",
        "system": "Joven → Crianza → Reserva → Gran Reserva (숙성 기간 순)",
        "note": "리오하 등에서 흔히 쓰이는 숙성 기간 등급. 오크·병 숙성 기간이 길어질수록 등급이 올라간다.",
        "terms": [
          { "label": "Joven", "meaning": "숙성을 거의 하지 않은 신선한 와인." },
          { "label": "Crianza", "meaning": "최소 2년 숙성(오크 최소 12개월 포함)." },
          { "label": "Reserva", "meaning": "최소 3년 숙성(오크 최소 12개월, 병 6개월 포함)." },
          { "label": "Gran Reserva", "meaning": "최소 5년 숙성(오크 2년, 병 3년). 가장 부드럽고 복합적이며 가격도 높다." }
        ],
        "source": "WebSearch: Spanish wine Rioja Joven Crianza Reserva Gran Reserva aging years — Wine Folly(winefolly.com/deep-dive/rioja-wine-from-crianza-to-gran-reserva), Winetraveler(winetraveler.com)"
      },
      {
        "country": "공통 표기",
        "system": "국가에 관계없이 라벨에 자주 등장하는 용어",
        "note": "등급 체계와 별개로 어디서나 자주 보이는 표기들이다.",
        "terms": [
          { "label": "Vintage/NV", "meaning": "빈티지는 수확 연도, NV(Non-Vintage)는 여러 해를 블렌딩했다는 뜻." },
          { "label": "Estate Bottled", "meaning": "재배부터 병입까지 한 생산자가 직접 관리. 품질 관리 신호." },
          { "label": "ABV", "meaning": "알코올 도수. 12% 이하는 가벼운 편, 14% 이상은 묵직한 편." },
          { "label": "Sec/Brut", "meaning": "스파클링의 당도 표기. Brut이 가장 드라이하고 대중적이다." },
          { "label": "Old Vines/Vieilles Vignes", "meaning": "오래된 나무에서 딴 포도. 수확량은 적지만 풍미가 응축되는 경향." }
        ],
        "source": "WebSearch: wine label terms Estate Bottled NV ABV meaning beginner guide — thewinecellargroup.com, personalwine.com"
      }
    ],
    "readingTips": [
      "가장 큰 글씨가 지역명이면 구세계, 품종명이면 신세계로 먼저 판단한다.",
      "빈티지(연도)로 신선도를 가늠한다 — 화이트·로제는 최근 1~3년산이 신선하고, 고급 레드는 오래된 빈티지가 오히려 매력적일 수 있다.",
      "ABV(알코올 도수)로 바디감을 예측한다 — 12% 이하는 가볍게, 14% 이상은 묵직하게.",
      "Riserva·Reserva·Grand Cru 같은 등급 표기가 보이면 대체로 더 진하고 비싼 와인이라고 추측할 수 있다.",
      "라벨을 다 이해하지 못해도 괜찮다. 지역명/품종명 + 빈티지 + ABV, 이 세 가지만 확인해도 충분히 감을 잡을 수 있다."
    ],
    "source": "종합: _workspace/01_knowledge_regions.md, _workspace/01_knowledge_grapes.md + WebSearch(프랑스/이탈리아/독일/스페인 등급 체계, 공통 라벨 용어) — 상세 출처는 gradings 각 항목에 병기"
  },

  // 조사 공백 → "준비 중" 안내(02_sitemap.md 참조)
  researchGaps: {
    regions: "곧 추가될 산지: 포르투갈(도루/포트), 남아프리카공화국(스텔렌보쉬), 독일 라인가우 등 (조사 예정)",
    grapes: "곧 추가될 품종: 카르메네르(칠레), 진판델(미국), 그르나슈 등 (조사 예정)",
    pairing: "준비 중: 한국 음식(김치찌개·갈비찜·회 등)·비건 페어링 가이드",
    tastingAdvanced: "심화 학습(준비 중): 100점/20점 평가 점수 체계, 아로마 휠 상세 카테고리"
  }
};
