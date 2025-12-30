---
seo:
  title: 담담 (DamDam) - 다르마베이스
  description: 불교 경전의 깊은 지혜를 기술적으로 구현한 차세대 지식베이스. Nuxt Content v3와 SQLite 엔진 기반의 디지털 아카이브.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
담담(湛湛), [지혜]{.text-primary}를 맑게 담다.

#description
불교 경전과 연구 노트를 유기적으로 연결하는 차세대 지식베이스(PKB). :br
Nuxt Content v3의 강력한 SQL 엔진으로 구축된 **다르마베이스**입니다.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-book-open
  ---
  경전 읽기 시작
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/biwoom/damdam-base
  target: _blank
  ---
  GitHub 저장소
  :::

#default
  :::prose-pre
  ---
  filename: T0001/T0001_001.md
  ---
  ```yaml
  ---
  text_id: "T0001"
  category: "아함부"
  subcategory: "장아함"
  title: "장아함경 - 제1권"
  description: "석가모니 부처님께서 과거 칠불의 인연을 설하시다."
  original_translator: ["불타야사", "축불념"]
  tags: ["과거칠불", "대본경"]
  ---

  # {{ $doc.title }}

  이와 같이 나는 들었다.
  어느 때 부처님께서는...
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
고요함 속에 담긴 기술 (Technology for Calmness)

#links
  :::u-button
  ---
  color: neutral
  size: lg
  to: /getting-started
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  아키텍처 살펴보기
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  SQL 기반 데이터 엔진

  #description
  수천 권의 경전 데이터를 Nuxt Content v3와 SQLite 엔진으로 관리합니다. 복잡한 연기법 구조도 0.1초 만에 연결합니다.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-layout-template
  ---
  #title
  구조화된 스키마 (Zod)

  #description
  경전 ID, 대분류, 역자 등 학술적 메타데이터를 Zod 스키마로 엄격하게 검증하여 데이터의 무결성을 보장합니다.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-edit-3
  ---
  #title
  비주얼 에디팅 (Studio)

  #description
  개발 지식이 없어도 괜찮습니다. Nuxt Studio를 통해 웹상에서 직관적으로 경전을 입력하고 수정할 수 있습니다.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-search
  ---
  #title
  즉각적인 검색

  #description
  방대한 대장경 속에서 원하는 구절을 즉시 찾아냅니다. 키워드, 태그, 카테고리별 정밀 검색을 지원합니다.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-network
  ---
  #title
  유기적 연결 (Link)

  #description
  원문과 해설, 경전과 연구 노트를 하이퍼링크로 연결하여 지식의 맥락을 끊김 없이 탐색할 수 있습니다.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-moon
  ---
  #title
  몰입형 다크 모드

  #description
  눈의 피로를 최소화하는 색상 설계로, 깊은 밤에도 경전 읽기에 온전히 집중할 수 있는 환경을 제공합니다.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  title: 지혜의 바다를 항해할 준비가 되셨나요?
  description: 담담(DamDam)은 누구나 자유롭게 접근하고 기여할 수 있는 열린 불교 지식 플랫폼을 지향합니다. 현재는 편집권한이 제한되어 있습니다. 차후 편집권한이 게스트모드에서 가능하도록 개선할 예정입니다.
  links:
    - label: 다르마베이스 입장하기
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: 프로젝트 기여하기
      to: 'https://github.com/biwoom/damdam-base'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  class: dark:bg-neutral-950
  ---
  :stars-bg
  :::
::
