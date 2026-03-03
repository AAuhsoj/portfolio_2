너는 시니어 프론트엔드 엔지니어/디자이너다.
목표: 기존 Jekyll 포트폴리오(https://aauhsoj.github.io/aauhsoj_port//)를 ‘한국 정서에 맞는’ 깔끔한 포트폴리오로 React 기반으로 전면 리팩토링한다.
결과물은 “바로 빌드/배포 가능한 완성 레포”여야 한다.

[필수 입력 데이터]
- 내가 제공한 Markdown 파일(aauhsoj_port_scraped.md)을 단일 소스 오브 트루스로 사용한다.
- 이 md에서 About / Skills / Timeline / Side Projects(상세) / Research Projects / Publications / Contact / CV 링크를 파싱하여 사이트에 표시한다.
- 데이터는 src/data/portfolio.ts (또는 portfolio.json)로 정규화해서 사용한다. (md → 파싱 스크립트 포함)

[기술 스택/구현 제약]
- React + TypeScript + Vite
- 스타일: TailwindCSS
- 애니메이션: Framer Motion
- 텍스트 애니메이션은 React Bits(https://reactbits.dev/ 혹은 동등한 오픈소스) 스타일로 구현
  - “Rotating Text” 또는 “Typing” 중 하나를 hero에 적용 (선택 가능 옵션으로 구성)
- 폰트: Pretendard(또는 한국어 가독성 좋은 산세리프) 적용
- 완전 반응형: 모바일(360px)~데스크탑(1440px)에서 여백/폰트/그리드 최적화
- 접근성: 시맨틱 태그, 키보드 포커스, aria-label, 대비 준수

[디자인 방향(한국 정서)]
- 과한 네오모피즘/장식 최소화, 더 “단정/정돈/가독성/여백” 중심
- 헤더(상단 내비게이션) 반드시 존재 (레퍼런스: https://kimignis.github.io/ 느낌)
- 섹션 간 간격 넉넉하게, 타이포 스케일 명확하게 (H1/H2/body)
- 카드 UI는 얇은 보더/소프트 섀도우/라운드(16~24px) 정도로 절제

[요구사항 반영 체크리스트]
(0) 전역 헤더 추가
- 좌측: 이름/로고 텍스트
- 우측 메뉴: About / Tech Stack / Timeline / Side Projects / Research Projects / Publications / Contact / CV
- CV는 항상 상단 헤더에 노출 + Timeline 섹션에도 별도 버튼 유지
- 모바일에서는 햄버거 메뉴(스크롤 잠금 포함)

(1) Hero의 멘트 전환을 “텍스트 애니메이션”으로 교체
- 현재처럼 여러 멘트가 왔다갔다 하는 구조를
  - RotatingText 또는 Typing 애니메이션(React Bits 스타일)으로 구현
- 예시 문구 3개 정도를 데이터로 관리하며 쉽게 수정 가능해야 함
- 애니메이션은 과하지 않게: duration/interval 적절히, reduced-motion 지원

(2) Skills 섹션 구조 개편
- ‘Skills’라는 단일 뭉치 대신 명확한 “Tech Stack”으로 재구성
- 권장 카테고리(예):
  - Languages
  - Frameworks & Libraries
  - Data/DB
  - DevOps & Cloud
  - Tools
- 기존 데이터(언어/프레임워크/툴)를 위 카테고리로 재매핑하는 로직 포함
- 표현 방식은 “칩/배지 + 숙련도(선택적으로)”
  - 숙련도 숫자(1~5)는 막대/점으로 표현하되 과하게 강조하지 말 것
- 필터/탭으로 카테고리 전환 가능하게

(3) CV 링크 노출 강화
- Header에 CV 버튼(다운로드/새 탭)
- Timeline 섹션 상단에도 “CV 보기” 버튼
- Contact 섹션에도 CV 링크 포함 (중복이지만 사용자 동선 확보)

(4) 프로젝트 정보 구조 일관화
- Side Projects는 상세(모달/페이지)가 있는데 Research Projects는 없는 문제 해결
- 해결 방식:
  A안) Side/Research 모두 “공통 Project Detail 페이지”를 갖는다. (권장)
     - /projects/:slug 라우팅
     - 카드 클릭 → 상세 페이지
  B안) 둘 다 모달 상세로 통일
- aauhsoj_port_scraped.md 기준으로
  - Side Projects는 detailed description + features를 상세에 반드시 반영
  - Research Projects는 md에 상세가 없으므로 “상세 페이지 템플릿”을 만들고
    - 기간/기관/키워드/태그를 잘 보이게 정리
    - (선택) “요약 설명은 비워두되 UI는 깨지지 않게” 처리

(5) 전반적인 타이포/여백/모바일 개선
- 본문 최소 16px, 줄간격 1.6 내외
- 섹션 최대 폭(예: 1040~1120px) + 중앙정렬
- 카드 그리드: 모바일 1열, 태블릿 2열, 데스크탑 3열(콘텐츠 길이에 따라)
- 모바일에서 좌우 패딩 충분히(최소 16~20px)
- 스크롤 애니메이션은 AOS 같은 과한 느낌 대신 Framer Motion으로 “살짝”만

[핵심: 배포 2종을 한 폴더에서 지원]
단, "프로젝트 폴더 1개" 안에서 아래 2가지 배포 형태를 모두 지원해야 한다:
A) GitHub Pages (GitHub Actions로 gh-pages에 자동 배포)
B) Vercel (Preview/Production 배포 가능)

1) Vite base path를 환경변수로 제어한다.
   - 기본(base=/)은 Vercel
   - GitHub Pages 배포 시 base=/<repo_name>/ 로 자동 적용
2) 다음을 구현한다:
   - `vite.config.ts`에서 `base: process.env.VITE_BASE ?? "/"` 형태로 처리
   - `.env` (로컬)에는 VITE_BASE="/" 기본값
   - GitHub Actions에서는 VITE_BASE="/aauhsoj_port/"로 설정해서 빌드
3) GitHub Actions 워크플로우 추가:
   - .github/workflows/deploy.yml
   - main push 시 실행
   - `npm ci` → `npm run build:data` → `npm run build`
   - dist를 gh-pages에 배포 (actions/configure-pages + upload-pages-artifact + deploy-pages 또는 peaceiris/actions-gh-pages 중 하나)
   - repo 설정에 맞춘 안내를 README에 포함
4) Vercel 설정 파일 추가(선택):
   - vercel.json (필수는 아니지만, SPA 라우팅이면 rewrites 설정)
   - React Router 사용 시 404 rewrite를 걸어 새로고침 깨짐 방지
5) 로컬 실행:
   - `npm install`
   - `npm run build:data`
   - `npm run dev` 로 localhost 확인
   - 라우터가 있으면 로컬에서도 정상 작동 확인

[추가 구현]
- 다크모드 토글(선택): 기본은 라이트, 다크는 가독성 우선
- SEO: title/description, og 태그, favicon
- README.md에 아래 3가지 사용법을 "명령어 그대로" 적는다:
  - Localhost 실행
  - GitHub Actions + Pages 배포 방법(Repo settings 포함)
  - Vercel 배포 방법(Import 후 build command 등)

[추가 제약]
- 모든 작업은 단일 프로젝트 폴더 안에서 해결한다.
- 별도 모노레포/서브프로젝트/2개의 폴더로 나누지 말 것.
- 배포 방식만 다르고 코드는 하나여야 한다.

[출력 형식]
- 레포 파일 트리와 함께, 각 파일의 전체 코드 제공
- 실행/배포 명령어를 단계별로 제공
- "완료 체크리스트"로 위 요구사항이 전부 충족되었는지 확인 가능하게 작성

시작하라.
