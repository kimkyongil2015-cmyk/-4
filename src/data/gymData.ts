import { FacilityItem, ProgramItem, PricingPlan, ReviewItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_logo_gym_1791435715396.jpg';

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'weight',
    category: '머신 웨이트',
    name: '웨이트존',
    englishName: 'Weight Training Zone',
    tagline: '세계 최고 수준의 인체공학적 궤적으로 완성하는 타겟 트레이닝',
    description: '미국 정품 해머스트렝스(Hammer Strength) MTS 및 플레이트 로디드 머신을 전 라인업 완비하여 관절 부담 없이 타겟 부위 근육에 직접적인 수축과 이완 자극을 전달합니다.',
    image: '/src/assets/images/korean_gym_weight_zone_1791436564575.jpg',
    keySpecs: [
      '해머스트렝스 공식 인증 옵티시얼 센터',
      '상체·하체·등 부위별 특화 머신 40여 종',
      '체형별 미세 조절 가능한 인체공학 패드',
      '여성/남성 누구나 다루기 쉬운 셀렉터라이즈 핀 머신 완비'
    ],
    equipmentList: [
      'Hammer Strength MTS Iso-Lateral Chest Press',
      'Hammer Strength MTS Front Pulldown & High Row',
      'Life Fitness Signature Hack Squat & Leg Press',
      'Arsenal Strength Linear Hack Squat',
      'Atlantis Glute & Hip Thrust Machine'
    ],
    recommendedFor: '부상 위험 없이 안전하게 특정 근육을 자극하고 싶은 초보자 및 상급자'
  },
  {
    id: 'cardio',
    category: '유산소 & 카디오',
    name: '유산소존',
    englishName: 'Cardio & Conditioning Zone',
    tagline: '스마트 데이터 모니터링과 쾌적한 뷰를 갖춘 프리미엄 카디오 스페이스',
    description: '글로벌 1위 테크노짐(Technogym) 최신형 트레드밀과 계단 운동의 정점인 매트릭스 스텝밀(천국의 계단) 6대를 배치하여 대기 없이 최고의 칼로리 연소 효율을 보장합니다.',
    image: '/src/assets/images/korean_gym_cardio_zone_1791436582302.jpg',
    keySpecs: [
      '천국의 계단(StairMaster / Matrix Climbmill) 6대 완비',
      '개인 스마트폰 무선 충전 및 고화질 스마트 미러링 디스플레이',
      '독립 환기 공기정화 덕트로 24시간 쾌적한 산소 농도 유지',
      '경사도 및 자동 완충 쇽업소버 러닝 벨트'
    ],
    equipmentList: [
      'Technogym Artis Treadmill with Live Console',
      'Matrix Endurance ClimbMill (천국의 계단)',
      'Concept2 Indoor Rower & SkiErg',
      'Assault Fitness AirBike Elite'
    ],
    recommendedFor: '체지방 감량, 심폐지구력 향상 및 인터벌 트레이닝을 원하는 분'
  },
  {
    id: 'free-weight',
    category: '프리웨이트',
    name: '프리웨이트존',
    englishName: 'Heavy Free Weight Zone',
    tagline: '올림픽 공인 규격 장비와 넉넉한 독립 파워랙 플랫폼',
    description: '스웨덴 엘리코(Eleiko) 공인 바벨 및 최고급 우레탄 덤벨 세트(1kg~50kg)를 구비하여 3대 운동 및 고강도 파워 트레이닝에 최적화된 독립 리프팅 환경을 제공합니다.',
    image: '/src/assets/images/korean_gym_free_weight_1791436597423.jpg',
    keySpecs: [
      '정규 파워랙 6대 및 독립 데드리프트 드롭 플랫폼',
      '1kg부터 50kg까지 촘촘한 고밀도 우레탄 덤벨 풀세트',
      '충격 및 소음 흡수 고탄성 특수 3중 고무 블록 바닥재',
      '각도 조절형 멀티 어저스터블 벤치 8대 비치'
    ],
    equipmentList: [
      'Eleiko Olympic Weightlifting Barbell & Plates',
      'Rogue Fitness Monster Lite Power Racks',
      'Urethane Dumbbells (1kg ~ 50kg, 2쌍 완비)',
      'Competition Flat & Adjustable Benches'
    ],
    recommendedFor: '스쿼트·벤치프레스·데드리프트 등 정통 3대 운동 및 근비대 강화'
  },
  {
    id: 'stretching',
    category: '스트레칭 & 모빌리티',
    name: '스트레칭존',
    englishName: 'Stretching & Recovery Zone',
    tagline: '운동 전 관절 가동성 확보와 운동 후 완벽한 근막 이완',
    description: '따뜻한 간접 조명과 프리미엄 친환경 요가 매트가 구비된 독립 힐링 공간입니다. 폼롤러, 마사지건, 스트레칭 밴드를 통해 부상을 예방하고 신체 밸런스를 바로잡습니다.',
    image: '/src/assets/images/korean_gym_stretching_1791436611661.jpg',
    keySpecs: [
      '친환경 프리미엄 와이드 논슬립 스트레칭 매트',
      '부위별 경도별 폼롤러 및 럼블롤러 구비',
      '하이퍼볼트(Hypervolt) 근막 이완 마사지건 비치',
      '전신 거울을 통한 셀프 자세 및 가동범위 체크'
    ],
    equipmentList: [
      'Lululemon & Manduka Pro Alignment Mats',
      'Hyperice Hypervolt 2 Pro Percussive Massage Guns',
      'TriggerPoint Foam Rollers & Massage Balls',
      'Theraband Resistance Mobility Bands'
    ],
    recommendedFor: '관절 유연성 개선, 체형 불균형 회복 및 운동 후 피로 해소'
  },
  {
    id: 'amenities',
    category: '샤워 & 편의시설',
    name: '샤워 및 편의시설',
    englishName: 'Locker & Hotel-style Amenities',
    tagline: '오직 나만을 위한 쾌적한 1인 독립 프라이빗 샤워 부스',
    description: '다른 사람의 시선에 구애받지 않는 개별 부스와 호텔급 어메니티를 완비했습니다. 운동 전후 가벼운 마음으로 방문하실 수 있도록 최고급 파우더룸과 휴게 공간을 마련했습니다.',
    image: '/src/assets/images/facility_stretching_lounge_1791424149475.jpg',
    keySpecs: [
      '남녀 공간 완전 분리 및 1인 개별 독립 샤워 부스',
      '다이슨(Dyson) 슈퍼소닉 헤어드라이어 전석 배치',
      '프리미엄 샴푸/바디워시/클렌징폼 무상 제공',
      '친환경 살균 건조 헬스복 및 최고급 코튼 타월 무료 대여'
    ],
    equipmentList: [
      'Dyson Supersonic Hair Dryers in Every Station',
      'Hotel Grade Natural Aromatherapy Body Amenities',
      'Smart Digital Coded Individual Lockers',
      'Air Shower Booth & Body Dryer'
    ],
    recommendedFor: '출근 전, 점심시간, 퇴근 후 언제나 상쾌한 리프레시를 원하는 회원'
  }
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'weight-training',
    title: '웨이트 트레이닝',
    englishTitle: 'Targeted Weight Training',
    level: '초·중·상급자 모두',
    duration: '50분 / 세션',
    tagline: '해부학적 관점의 정확한 타겟 자극과 체계적인 볼륨 관리',
    description: '올바른 자세와 부위별 근육 고립 원리를 습득하여, 원하는 부위의 탄력과 근육량을 균형 있게 키워주는 정통 피트니스 프로그램입니다.',
    targetAudience: [
      '탄탄하고 입체적인 상하체 라인을 만들고 싶은 남녀',
      '혼자 운동할 때 타겟 부위에 자극을 잘 느끼지 못하는 분',
      '자세 불안정으로 운동할 때마다 관절 통증을 겪었던 분'
    ],
    keyEffects: [
      '기초대사량 증가로 살이 잘 찌지 않는 체질 변화',
      '근섬유 활성화를 통한 신체 탄력 및 실루엣 개선',
      '스스로 운동 루틴을 설계할 수 있는 기구 사용 독립성 확립'
    ],
    curriculum: [
      '1단계: 관절 가동성 테스트 및 체성분 분석',
      '2단계: 주요 머신 궤적 숙지 및 호흡법 확립',
      '3단계: 주동근 타겟 고립과 세트별 중량 설정 점진적 과부하',
      '4단계: 개인 맞춤형 분할 루틴 및 영양 가이드 제공'
    ]
  },
  {
    id: 'posture-alignment',
    title: '체형 관리 & 밸런스',
    englishTitle: 'Postural Alignment & Correction',
    level: '모든 회원',
    duration: '50분 / 세션',
    tagline: '틀어진 관절 정렬을 바로잡고 아름다운 바디라인 회복',
    description: '오랜 좌식 생활로 무너진 거북목, 라운드 숄더, 골반 비대칭을 교정 운동과 코어 활성화를 통해 본래의 편안하고 바른 자세로 되돌립니다.',
    targetAudience: [
      '오래 앉아 일하는 직장인 및 만성 목·어깨 결림을 겪는 분',
      '거북목, 굽은 등, 골반 뒤틀림으로 옷태가 살지 않는 분',
      '좌우 비대칭으로 인해 걸음걸이나 운동 시 밸런스가 무너지는 분'
    ],
    keyEffects: [
      '목·어깨·허리의 만성 피로와 긴장성 결림 완화',
      '바른 척추 정렬을 통한 자연스러운 키 1~2cm 신장 및 옷태 개선',
      '심부 코어 근육 강화를 통한 일상 활력 증진'
    ],
    curriculum: [
      '1단계: 정적·동적 체형 분석(Exbody & 관절각 측정)',
      '2단계: 단축된 근육 이완(Myofascial Release) 및 스트레칭',
      '3단계: 약화된 안정화 근육 및 골반기저근/복횡근 활성화',
      '4단계: 일상 생활 자세 교정 습관 큐잉 및 유지 트레이닝'
    ]
  },
  {
    id: 'strength-conditioning',
    title: '근력 강화 & 파워',
    englishTitle: 'Strength & Conditioning',
    level: '중·상급자 권장',
    duration: '50분 / 세션',
    tagline: '체계적인 주기화 프로그램으로 한계를 넘어서는 퍼포먼스 향상',
    description: '스쿼트, 데드리프트, 벤치프레스 등 복합 다관절 운동을 중심으로 한 주기화 훈련(Periodization)을 통해 신경계 발달과 절대 근력을 극대화합니다.',
    targetAudience: [
      '기초 웨이트를 넘어 3대 중량 증량을 목표로 하는 분',
      '스포츠 활동(러닝, 구기종목, 골프 등) 퍼포먼스를 높이고 싶은 분',
      '체력의 한계를 극복하고 강인한 체력을 기르고 싶은 분'
    ],
    keyEffects: [
      '골밀도 향상 및 인대/건 강화로 부상 예방력 증대',
      '신경근 효율 향상으로 폭발적인 파워 및 중량 수행 능력 확보',
      '에너지 대사 최적화로 일상 피로도 현저히 감소'
    ],
    curriculum: [
      '1단계: 1RM 추정치 산출 및 무브먼트 스크리닝(FMS)',
      '2단계: 바벨 리프팅 메커니즘 교정 및 바패스(Bar Path) 최적화',
      '3단계: RPE 기반 주차별 주기화 볼륨 트레이닝',
      '4단계: 디로드(Deload) 주간 및 파워 피킹(Peaking) 세션'
    ]
  },
  {
    id: 'fat-loss',
    title: '체중 감량 & 다이어트',
    englishTitle: 'Fat Loss & Body Recomposition',
    level: '남녀 전 회원',
    duration: '50분 / 세션',
    tagline: '굶지 않는 스마트 영양과 고효율 인터벌로 완성하는 체지방 컷팅',
    description: '단순한 체중 감량이 아닌 근육량을 보존하면서 순수 체지방만을 감량하는 바디 리컴포지션(Body Recomposition) 과학적 트레이닝 플랜입니다.',
    targetAudience: [
      '체지방률을 건강하게 낮추고 복근/바디라인을 완성하고 싶은 분',
      '반복되는 요요 현상으로 굶는 다이어트에 지치신 분',
      '결혼식, 바디프로필 등 중요한 일정을 앞두고 계신 분'
    ],
    keyEffects: [
      '근손실 없는 주당 안정적 체지방 감량 및 바디 라인 정돈',
      'EPOC(운동 후 초과 산소 소비) 효과를 통한 운동 후에도 칼로리 소모 지속',
      '지속 가능한 평생 식습관 매뉴얼 구축'
    ],
    curriculum: [
      '1단계: 기초대사량(BMR) 및 TDEE 정밀 계산',
      '2단계: 고강도 서킷 & 복합 인터벌 트레이닝(HIIT) 병행',
      '3단계: 주간 인바디 트래킹 및 실시간 식단 피드백',
      '4단계: 목표 달성 후 요요 없는 유지 칼로리 전환 플랜'
    ]
  },
  {
    id: 'beginner-program',
    title: '초보자 운동 프로그램',
    englishTitle: 'Beginner Fitness Onboarding',
    level: '헬스 초보자 / 첫 시작 회원',
    duration: '50분 / 세션 (4주 코스)',
    tagline: '헬스장이 두려운 초보자를 위한 1:1 친절 멘토링 입문 코스',
    description: '헬스장에 처음 오시는 분도 주눅 들지 않고 스스로 즐겁게 운동할 수 있도록 헬스장 기본 에티켓부터 필수 머신 사용법, 안전 수칙을 차근차근 전수합니다.',
    targetAudience: [
      '헬스장 등록 후 러닝머신만 걷다가 집에 돌아가신 적 있는 분',
      '기구 사용법을 몰라 다른 사람 시선이 부담스러우셨던 분',
      '평생 운동을 해본 적 없지만 건강을 위해 첫발을 떼고 싶은 분'
    ],
    keyEffects: [
      '헬스장 내 전 구역 머신을 스스로 세팅하고 사용할 수 있는 자신감',
      '부상 없는 올바른 호흡법과 관절 보호 동작 체득',
      '주 3회 운동이 자연스러워지는 평생 운동 습관 형성'
    ],
    curriculum: [
      '1주차: 스트레칭 루틴 & 머신 조작법 및 의자 높이 조절법',
      '2주차: 안전한 하체 기초 운동(레그프레스, 레그익스텐션)',
      '3주차: 등 & 가슴 기초 운동(렛풀다운, 체스트프레스)',
      '4주차: 유산소 인터벌 설정법 & 나만의 주간 운동 계획표 완성'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'membership-1m',
    category: 'membership',
    name: '1개월 단기 집중권',
    periodOrSessions: '1개월 이용',
    badge: '단기 트라이얼',
    description: '머슬랩의 프리미엄 시설과 분위기를 한 달간 집중적으로 경험해볼 수 있는 입문용 멤버십',
    features: [
      '머슬랩 전 구역 시설 무제한 이용',
      '1인 프라이빗 샤워 부스 & 파우더룸 이용',
      '등록 시 전문 트레이너 인바디 1:1 상담 1회',
      '수건 & 헬스복 기본 대여 혜택 포함'
    ],
    recommendedFor: '단기간 집중 운동이 필요하거나 먼저 시설을 체험해보고 싶은 분'
  },
  {
    id: 'membership-3m',
    category: 'membership',
    name: '3개월 습관 형성권',
    periodOrSessions: '3개월 이용',
    badge: '베스트 스타터',
    description: '운동이 일상이 되는 100일간의 여정, 눈에 띄는 체형 변화를 시작하는 가장 합리적인 플랜',
    features: [
      '머슬랩 전 구역 시설 무제한 이용',
      '정밀 3D 체형분석 및 체성분 리포트 2회 제공',
      '1:1 웰컴 오리엔테이션 세션 2회 무료 제공',
      '개인 락커 & 운동복 풀 패키지 지원'
    ],
    recommendedFor: '작심삼일을 넘어 꾸준한 운동 습관을 확실하게 잡고 싶은 분'
  },
  {
    id: 'membership-6m',
    category: 'membership',
    name: '6개월 프리미엄 멤버십',
    periodOrSessions: '6개월 이용',
    badge: '가장 많은 선택',
    isPopular: true,
    description: '회원님들이 가장 선호하는 대표 플랜으로, 체지방 감량과 근육량 증가의 확실한 결과를 만듭니다.',
    features: [
      '머슬랩 전 구역 시설 무제한 이용 (주말/공휴일 포함)',
      '월 1회 정기 체형 측정 및 운동 가이드라인 업데이트',
      '1:1 전담 코치 배정 및 모바일 루틴 질의응답',
      '동반 지인 무료 1일 체험권 2매 증정',
      '개인 전용 락커 및 운동복 전액 지원'
    ],
    recommendedFor: '확실한 체형 변화와 체력 증진을 목표로 하는 직장인 및 일반인'
  },
  {
    id: 'membership-12m',
    category: 'membership',
    name: '12개월 VIP 멤버십',
    periodOrSessions: '12개월 이용',
    badge: '최대 혜택 플랜',
    description: '1년 동안 나만의 건강한 라이프스타일을 완성하는 VIP 패키지로 최고의 혜택을 제공합니다.',
    features: [
      '머슬랩 전 구역 시설 365일 무제한 이용',
      '홀딩(휴회) 제도 연간 총 60일 자유 분할 사용 가능',
      '1:1 VIP 퍼스널 트레이닝 2회 특별 세션 제공',
      '최상단 지정 개인 락커 및 프리미엄 운동복 무료',
      '동반 지인 무료 1일 체험권 5매 증정'
    ],
    recommendedFor: '꾸준한 건강 관리가 라이프스타일인 분들을 위한 최적의 멤버십'
  },
  {
    id: 'pt-10',
    category: 'pt',
    name: '1:1 PT 스타터 세션',
    periodOrSessions: '10회 패키지',
    badge: '기초 완성',
    description: '정확한 기구 사용법과 올바른 운동 자세를 마스터하여 부상 없는 기본기를 완성합니다.',
    features: [
      '1:1 프라이빗 맞춤 코칭 (회당 50분)',
      '관절 가동 범위 및 보상작용 정밀 평가',
      '개인 맞춤형 식단 가이드라인 초안 제공',
      'PT 진행 기간 중 헬스 시설 이용 혜택 포함'
    ],
    recommendedFor: '헬스 초보자 또는 혼자 운동할 때 자세가 불안정한 분'
  },
  {
    id: 'pt-20',
    category: 'pt',
    name: '1:1 PT 바디 체인지 세션',
    periodOrSessions: '20회 패키지',
    badge: '추천 코스',
    isPopular: true,
    description: '체지방 감량과 탄력 있는 근육 형성을 동시에 달성하는 가장 선호도 높은 시그니처 트레이닝',
    features: [
      '1:1 프라이빗 맞춤 코칭 (회당 50분)',
      '주차별 점진적 과부하 프로그램 및 체중 리포트',
      '데일리 모바일 식단 밀착 피드백 및 영양 코칭',
      'PT 기간 중 헬스 시설 및 락커/운동복 무료 지원'
    ],
    recommendedFor: '체중 감량, 근력 향상, 바디프로필 준비 등 확실한 목표가 있는 분'
  },
  {
    id: 'pt-30',
    category: 'pt',
    name: '1:1 PT 마스터 VIP 코스',
    periodOrSessions: '30회 패키지',
    badge: '완벽한 체질 개선',
    description: '체형 교정과 고난도 리프팅 기술까지 평생 스스로 운동할 수 있는 운동 자립을 완성합니다.',
    features: [
      '1:1 프라이빗 맞춤 코칭 (회당 50분)',
      '자세 교정, 근력 향상, 체형 밸런스 통합 솔루션',
      '개인별 평생 맞춤 운동 루틴 라이브러리 제작 제공',
      '최고급 스포츠 마사지 및 근막 이완 테라피 포함'
    ],
    recommendedFor: '만성 통증 교정과 함께 체계적인 운동 자립을 원하는 분'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    authorName: '이*진 회원님',
    authorRole: '20대 여성 회원 · 6개월차',
    targetGoal: '헬스 초보 탈출 및 체지방 5kg 감량',
    durationPeriod: '6개월 이용 중',
    rating: 5,
    highlight: '“운동을 처음 시작했는데 시설이 깔끔하고 이용하기 편해서 꾸준히 다니고 있어요.”',
    reviewText: '“평소 운동을 안 해봐서 헬스장 등록할 때 정말 걱정이 많았어요. 하지만 머슬랩은 입장할 때부터 분위기가 차분하고 환해서 부담이 전혀 없었습니다. 트레이너 선생님들이 친절하게 기본 기구 사용법을 알려주셨고, 호텔급 1인 샤워실이 너무 깨끗해서 퇴근길에 매일 출석도장을 찍고 있습니다!”',
    satisfactionPoints: ['청결하고 세련된 인테리어', '1인 독립 샤워부스', '초보자 친화적인 코칭'],
    isSample: true
  },
  {
    id: 'rev-2',
    authorName: '김*우 회원님',
    authorRole: '30대 남성 회원 · 1년차',
    targetGoal: '근력 강화 및 3대 중량 증량',
    durationPeriod: '1년 이용 중',
    rating: 5,
    highlight: '“남녀 모두 편하게 운동할 수 있는 분위기라 만족스럽습니다.”',
    reviewText: '“웨이트존과 프리웨이트존 동선 분리가 완벽합니다. 해머스트렝스 정품 머신에 엘리코 바벨까지 장비 퀄리티가 정말 압도적입니다. 퇴근 피크 타임에도 파워랙이 6대나 있어서 낭비되는 시간 없이 집중해서 운동하고 갑니다. 주변 지인들에게도 적극 추천하고 있어요.”',
    satisfactionPoints: ['최고급 외산 머신 완비', '넓은 랙 공간 & 대기 없음', '차분하고 집중도 높은 환경'],
    isSample: true
  },
  {
    id: 'rev-3',
    authorName: '박*서 회원님',
    authorRole: '30대 여성 회원 · 4개월차',
    targetGoal: '직장인 거북목 교정 및 허리 통증 개선',
    durationPeriod: '4개월 이용 중',
    rating: 5,
    highlight: '“운동 프로그램이 체계적으로 구성되어 있어 목표를 잡고 운동하기 좋았습니다.”',
    reviewText: '“컴퓨터 앞에 오래 앉아 있어 만성적인 목과 허리 통증이 심했는데, 체형 관리 프로그램을 수강하면서 통증이 싹 사라졌습니다. 단순 땀만 흘리는 운동이 아니라 제 관절 각도와 가동범위를 체크해 맞춤 교정 루틴을 짜주신 덕분입니다. 체계적인 전문성에 감탄했습니다.”',
    satisfactionPoints: ['정밀 체형 분석', '맞춤형 교정 루틴', '통증 완화 효과'],
    isSample: true
  },
  {
    id: 'rev-4',
    authorName: '정*훈 회원님',
    authorRole: '40대 남성 회원 · 8개월차',
    targetGoal: '체중 9kg 감량 및 혈압 수치 안정화',
    durationPeriod: '8개월 이용 중',
    rating: 5,
    highlight: '“단순히 무게만 치는 곳이 아니라 건강을 과학적으로 관리받는 느낌입니다.”',
    reviewText: '“체중 감량 프로그램을 진행하면서 무리한 굶기 없이도 8개월 동안 9kg을 건강하게 감량했습니다. 유산소존의 천국의 계단과 스마트 트레드밀 덕분에 지루하지 않게 심폐 운동을 할 수 있었어요. 청결 관리가 철저해서 땀 냄새 없는 쾌적함이 가장 마음에 듭니다.”',
    satisfactionPoints: ['체계적인 심박수 모니터링', '공기청정 환기 시스템', '지속 가능한 식단 지도'],
    isSample: true
  },
  {
    id: 'rev-5',
    authorName: '최*민 회원님',
    authorRole: '20대 남성 회원 · 3개월차',
    targetGoal: '골격근량 3.5kg 증가 및 바디 프로필 준비',
    durationPeriod: '3개월 이용 중',
    rating: 5,
    highlight: '“머신 궤적이 워낙 훌륭해서 원하는 부위에 딱 꽂히는 수축감이 다릅니다.”',
    reviewText: '“여러 헬스장을 다녀봤지만 머슬랩 머신 라인업은 감탄이 나옵니다. 궤적이 부드러워 어깨 부상 걱정 없이 중량을 다룰 수 있어요. 코치진분들이 언제나 밝게 인사해주시고 자세 질문에도 성심성의껏 답변해주셔서 매일 운동 오는 시간이 기다려집니다.”',
    satisfactionPoints: ['부상 없는 인체공학 궤적', '코치진 전문성', '열정적인 운동 분위기'],
    isSample: true
  },
  {
    id: 'rev-6',
    authorName: '강*윤 회원님',
    authorRole: '30대 여성 회원 · 5개월차',
    targetGoal: '힙업 및 전신 바디 탄력 케어',
    durationPeriod: '5개월 이용 중',
    rating: 5,
    highlight: '“여성 회원들도 눈치 보지 않고 웨이트를 즐길 수 있는 세련된 공간이에요.”',
    reviewText: '“일반 동네 헬스장의 칙칙함이나 어수선함이 전혀 없고, 마치 호텔 피트니스 클럽에 온 듯한 인테리어입니다. 여성 전용 힙 머신과 가벼운 덤벨부터 체계적으로 갖춰져 있어서 혼자서도 주 4회씩 루틴을 돌고 있어요. 파우더룸 다이슨 드라이어까지 완벽합니다.”',
    satisfactionPoints: ['호텔급 파우더룸', '힙 & 하체 특화 머신', '남녀 모두 편안한 에티켓'],
    isSample: true
  }
];

export const LOCATION_INFO = {
  brandName: '머슬랩 (MUSCLE LAB)',
  address: '서울특별시 동작구 대림로 2 (신대방역 인근 머슬랩 타워 B1-2F)',
  phone: '[02-0000-0000 / 상담 예약 센터]',
  operatingHours: {
    weekdays: '평일 06:00 ~ 24:00',
    weekends: '토·일 및 공휴일 09:00 ~ 21:00',
    holidayNotice: '설/추석 명절 당일 외 연중무휴 정상 운영'
  },
  parking: {
    guide: '건물 지하 1층 ~ 지하 3층 자주식 주차장 완비',
    benefit: '머슬랩 회원 일일 2시간 무료 주차 등록 지원',
    valet: '대형 SUV 및 수입차 여유 주차 가능 (피크 시간 발렛 파킹 지원)'
  },
  publicTransport: {
    subway: '지하철 2호선 신대방역 도보 1~2분',
    bus: '신대방역 정류장(간선/지선/마을버스) 하차 후 도보 50m'
  },
  naverMapQuery: 'https://map.naver.com/p/entry/subway-station/20231?c=14.24,0,0,0,dh'
};
