// Auto-generated from aauhsoj_port_scraped.md
// Run: npm run build:data

import type { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = {
  "basic": {
    "name": "Sol JEONG",
    "role": "Manufacturing AI Researcher & Engineer",
    "github": "AAuhsoj",
    "instagram": "jsol_9876",
    "linkedin": "sol-jeong-2740613a6",
    "email": "bohomi1995j@gmail.com",
    "cvUrl": "https://portfolio-six-lovat-9bcbqsjjzy.vercel.app/cv_sol_jeong.pdf",
    "photoUrl": "https://portfolio-six-lovat-9bcbqsjjzy.vercel.app/profile.jpg"
  },
  "about": "Hello, I hold a master's degree from the IAI Lab, Kyung Hee University, where I majored in Big Data Analytics. I also earned my bachelor's degree in Industrial and Management Systems Engineering.",
  "skills": [
    {
      "name": "Python",
      "weight": 5,
      "category": "languages"
    },
    {
      "name": "Java",
      "weight": 3,
      "category": "languages"
    },
    {
      "name": "HTML",
      "weight": 2,
      "category": "languages"
    },
    {
      "name": "JavaScript",
      "weight": 1,
      "category": "languages"
    },
    {
      "name": "CSS",
      "weight": 1,
      "category": "languages"
    },
    {
      "name": "React",
      "weight": 1,
      "category": "frameworks"
    },
    {
      "name": "Node",
      "weight": 1,
      "category": "frameworks"
    },
    {
      "name": "Flask",
      "weight": 2,
      "category": "frameworks"
    },
    {
      "name": "Django",
      "weight": 3,
      "category": "frameworks"
    },
    {
      "name": "Langchain",
      "weight": 3,
      "category": "frameworks"
    },
    {
      "name": "Git",
      "weight": 4,
      "category": "tools"
    },
    {
      "name": "Chrome DevTools",
      "weight": 3,
      "category": "tools"
    },
    {
      "name": "npm",
      "weight": 1,
      "category": "tools"
    },
    {
      "name": "Notion",
      "weight": 3,
      "category": "tools"
    },
    {
      "name": "VS Code",
      "weight": 4,
      "category": "tools"
    },
    {
      "name": "Cursor AI",
      "weight": 3,
      "category": "tools"
    },
    {
      "name": "MySQL",
      "weight": 3,
      "category": "data"
    },
    {
      "name": "PostgreSQL",
      "weight": 3,
      "category": "data"
    },
    {
      "name": "MongoDB",
      "weight": 1,
      "category": "data"
    },
    {
      "name": "Docker",
      "weight": 1,
      "category": "devops"
    },
    {
      "name": "AWS",
      "weight": 3,
      "category": "devops"
    },
    {
      "name": "GCP",
      "weight": 2,
      "category": "devops"
    }
  ],
  "timeline": [
    {
      "title": "SK Hynix",
      "subtitle": "AI/ML Researcher",
      "date": "Mar. 2026 - Jul. 2026"
    },
    {
      "title": "IAI Lab. in Kyung-Hee Univ.",
      "subtitle": "M.S. Big Data Analytics",
      "date": "Mar. 2023 - Feb. 2026",
      "titleUrl": "http://iai.khu.ac.kr/wiki/wiki.php/BPM%20Lab.",
      "subtitleUrl": "http://bigdata21.khu.ac.kr/main/main.html"
    },
    {
      "title": "KT Aivle School",
      "subtitle": "Fullstack Developer Boot Camp",
      "date": "Oct. 2023 - Feb. 2024",
      "titleUrl": "https://aivle.kt.co.kr/home/main/indexMain",
      "tags": [
        "AI",
        "Front",
        "Back"
      ]
    },
    {
      "title": "Kyung-Hee University",
      "subtitle": "B.A. Industrial and Management Systems Engineering",
      "date": "Mar. 2017 - Feb. 2023",
      "titleUrl": "https://www.khu.ac.kr/kor/user/main/view.do",
      "subtitleUrl": "https://ie.khu.ac.kr/ie/user/main/view.do"
    }
  ],
  "sideProjects": [
    {
      "id": "newspeace-ai-기반-뉴스-감성-분석-서비스",
      "type": "side",
      "title": "Newspeace - AI 기반 뉴스 감성 분석 서비스",
      "organization": "KT AIVLE School",
      "period": "2023.7 ~ 2023.8",
      "link": "https://github.com/orgs/7MP-14/repositories",
      "presentationUrl": "https://aauhsoj.github.io/aauhsoj_port/assets/papers/newspeace_ai_sentiment_analysis.pdf",
      "keywords": [
        "Team Project",
        "AI Service",
        "Sentiment Analysis"
      ],
      "tags": [
        "Django",
        "React",
        "FinBERT",
        "AWS"
      ],
      "description": "수많은 정보 속에서 뉴스 기사의 양적인 측면을 넘어 그 내용의 질적(긍정/부정)인 측면을 신속하게 파악하여 사용자에게 인사이트를 제공하는 AI 기반 뉴스 감성 분석 서비스입니다.\n\n특정 키워드 검색 시 최근 일주일간의 기사를 분석하여 긍정/부정 비율과 관련 기사 목록을 제공하며, KOSPI 100 종목을 대상으로 여론 변화 추이와 실시간 주가 시세를 비교할 수 있습니다. 구독한 키워드의 부정 기사 비율이 50% 이상일 경우 사용자에게 즉시 이메일 알림을 발송합니다.",
      "features": [
        "FinBERT-SC 모델을 활용한 뉴스 감성 분석 (긍정/부정 분류)",
        "KeyBERT와 Kiwi 형태소 분석기를 통한 핵심 키워드 추출",
        "KOSPI 100 종목 대상 여론 변화 추이와 주가 시세 비교 시각화",
        "키워드 구독 및 부정 기사 비율 50% 이상 시 이메일 알림",
        "30분 단위 실시간 트렌드 분석 및 빈출 키워드 노출",
        "카카오톡 챗봇을 통한 감성 분석 결과 및 주가 정보 제공",
        "Django REST API 기반 백엔드 및 React 기반 프론트엔드",
        "AWS(EC2, S3, RDS) 환경 배포 및 NGINX 서버 구성"
      ]
    },
    {
      "id": "monte-carlo-시뮬레이션-기반-자산-수익률-분석",
      "type": "side",
      "title": "Monte Carlo 시뮬레이션 기반 자산 수익률 분석",
      "organization": "경희대학교 산업경영공학과",
      "period": "2022.9 ~ 2022.12",
      "link": "https://github.com/AAuhsoj/monte-carlo-portfolio",
      "presentationUrl": "https://aauhsoj.github.io/aauhsoj_port/assets/papers/monte_carlo_portfolio_analysis.pdf",
      "keywords": [
        "Course Project",
        "Financial Data Analysis"
      ],
      "tags": [
        "Python",
        "Monte Carlo",
        "CVXPY"
      ],
      "description": "Portfolio Visualizer를 참고하여 Fama-French 10개 산업군 포트폴리오 데이터를 활용한 Monte Carlo 시뮬레이션 시스템을 구현했습니다.\n\n다변량 정규분포 기반으로 수익률을 샘플링하고, 리밸런싱 주기별 비교 분석을 수행했습니다. GVM(Global Variance Minimum) 포트폴리오 최적화를 CVXPY로 구현했으며, MDD, VaR, CVaR 등 다양한 성과 지표를 계산하고 Rolling analysis 방식으로 백테스트를 수행했습니다.",
      "features": [
        "Fama-French 라이브러리를 활용한 10개 산업군 포트폴리오 데이터 수집",
        "CVXPY를 통한 GVM 포트폴리오 최적화",
        "다변량 정규분포 샘플링 기반 Monte Carlo 시뮬레이션",
        "리밸런싱 주기별 비교 분석 (Not rebalanced / 1 month / r month)",
        "Sharpe Ratio, MDD, VaR, CVaR 등 성과 지표 계산",
        "Rolling analysis를 활용한 2021년 데이터 백테스트"
      ]
    },
    {
      "id": "개인-포트폴리오-웹사이트",
      "type": "side",
      "title": "개인 포트폴리오 웹사이트",
      "period": "2024.1 ~ 진행중",
      "link": "https://github.com/AAuhsoj/aauhsoj_port",
      "keywords": [
        "Portfolio",
        "Personal Website"
      ],
      "tags": [
        "Jekyll",
        "SCSS",
        "JavaScript"
      ],
      "description": "Jekyll 기반의 개인 포트폴리오 웹사이트를 구축했습니다.\n\nNeumorphism 디자인 테마를 적용하여 현대적이고 세련된 UI를 구현했습니다. GitHub Pages를 통해 배포하며, 연구 프로젝트, 논문, 사이드 프로젝트 등을 체계적으로 정리하여 보여줍니다. 반응형 디자인으로 모바일 환경에서도 최적화된 경험을 제공합니다.",
      "features": [
        "Neumorphism 디자인 시스템 적용",
        "반응형 웹 디자인 (모바일/태블릿/데스크탑)",
        "AOS(Animate On Scroll) 애니메이션 효과",
        "GitHub Pages를 통한 자동 배포",
        "모듈화된 섹션 구조 (About, Skills, Timeline, Projects, Publications, Contact)",
        "SCSS를 활용한 효율적인 스타일 관리"
      ]
    }
  ],
  "researchProjects": [
    {
      "id": "skhy-26년-aiml-기반-예측을-통한-스케줄링-고도화",
      "type": "research",
      "title": "SKHy '26년 AI/ML 기반 예측을 통한 스케줄링 고도화",
      "organization": "SK하이닉스(SK(주))",
      "period": "2026.3 ~ 2026.7",
      "keywords": [
        "WIP Prediction",
        "Scheduling"
      ],
      "tags": [
        "Semiconductor",
        "Time-series Forecasting"
      ]
    },
    {
      "id": "설비-및-공정-통합-관제를-위한-제조-특화-slm-개발",
      "type": "research",
      "title": "설비 및 공정 통합 관제를 위한 제조 특화 SLM 개발",
      "organization": "한화모멘텀",
      "period": "2025.3 ~ 2026.2",
      "keywords": [
        "SLM",
        "Manufacturing"
      ],
      "tags": [
        "Process Control",
        "Smart Factory"
      ]
    },
    {
      "id": "머신러닝을-활용한-디스패칭-규칙-자동생성-및-고도화",
      "type": "research",
      "title": "머신러닝을 활용한 디스패칭 규칙 자동생성 및 고도화",
      "organization": "CSPI",
      "period": "2024.10 ~ 2025.3",
      "keywords": [
        "Dispatching Rule",
        "Machine Learning"
      ],
      "tags": [
        "Scheduling",
        "Optimization"
      ]
    },
    {
      "id": "생성형-ai-및-스몰데이터-기반-온디바이스-ai-품질-검사-최적화",
      "type": "research",
      "title": "생성형 AI 및 스몰데이터 기반 온디바이스 AI 품질 검사 최적화",
      "organization": "주력산업IT융합사업, 산업통상자원부",
      "period": "2024.07 ~ 2026.02",
      "keywords": [
        "Generative AI",
        "On-device AI"
      ],
      "tags": [
        "Quality Inspection",
        "Small Data"
      ]
    },
    {
      "id": "자율운항-성능-고도화를-위한-해상환경-학습-데이터셋-구축",
      "type": "research",
      "title": "자율운항 성능 고도화를 위한 해상환경 학습 데이터셋 구축",
      "organization": "국방벤처혁신기술지원사업, 방위사업청",
      "period": "2024.03 ~ 2024.12",
      "keywords": [
        "Autonomous Navigation",
        "Marine Dataset"
      ],
      "tags": [
        "Defense",
        "Data Collection"
      ]
    }
  ],
  "publications": [
    {
      "id": "an-llm-based-question-answering-framework-for-indu",
      "type": "international-journal",
      "authors": "Sol Jeong and Jae-Yoon Jung*",
      "title": "An LLM-based Question Answering Framework for Industrial IoT Data Using Text-to-SQL",
      "venue": "SCI Journal",
      "period": "Submitted",
      "link": "https://aauhsoj.github.io/aauhsoj_port/assets/papers/text_to_sql_2025.pdf",
      "tags": [
        "LLM",
        "Text-to-SQL",
        "Industrial IoT"
      ]
    },
    {
      "id": "tracklens-explainable-multi-object-tracking",
      "type": "international-journal",
      "authors": "Sol Jeong and Jae-Yoon Jung*",
      "title": "TrackLens: Explainable Multi-Object Tracking",
      "venue": "SCI Journal",
      "period": "in preparation",
      "tags": [
        "Multiple Object Tracking",
        "Explainable AI",
        "Computer Vision"
      ]
    },
    {
      "id": "wind-power-generation-forecasting-using-explainabl",
      "type": "international-conference",
      "authors": "Sol Jeong, Minsik Kim, Myeong-Gu Kang, and Jae-Yoon Jung*",
      "title": "Wind power generation forecasting using explainable artificial intelligence",
      "venue": "The 7th International Conference on Computational Intelligence and Intelligent Systems (CIIS 2024)",
      "period": "Nov 2024",
      "link": "https://aauhsoj.github.io/aauhsoj_port/assets/papers/CIIS2024_WindXAI_Sol_NoScript.pdf",
      "tags": [
        "Transformer",
        "Time-series Forecasting",
        "Explainable AI"
      ]
    },
    {
      "id": "text-to-sql을-활용한-관계형-데이터베이스-연동-llm-기반-질의응답-시스템",
      "type": "domestic-conference",
      "authors": "정솔, 김민식, 강명구, 정재윤*",
      "title": "Text-to-SQL을 활용한 관계형 데이터베이스 연동 LLM 기반 질의응답 시스템",
      "venue": "2025 한국전자거래학회 추계학술대회",
      "period": "Dec 2025",
      "link": "https://aauhsoj.github.io/aauhsoj_port/assets/papers/coms_2025_text_to_sql.pdf",
      "award": "학술대회 우수논문상 수상",
      "tags": [
        "LLM",
        "Text-to-SQL",
        "Question Answering"
      ]
    },
    {
      "id": "tracklens-객체-추적-모델의-설명가능-기법",
      "type": "domestic-conference",
      "authors": "정솔, 한영석, 정재윤*",
      "title": "TrackLens: 객체 추적 모델의 설명가능 기법",
      "venue": "대한산업공학회/한국경영과학회/한국시뮬레이션학회 춘계공동학술대회",
      "period": "Jun 2025",
      "link": "https://aauhsoj.github.io/aauhsoj_port/assets/papers/tracklens_2025.pdf",
      "tags": [
        "Multiple Object Tracking",
        "Explainable AI",
        "Computer Vision"
      ]
    }
  ],
  "heroTexts": [
    "Building Data-Driven Solutions",
    "AI & Machine Learning Researcher",
    "Big Data Analytics Specialist"
  ]
} as const

export default portfolioData
