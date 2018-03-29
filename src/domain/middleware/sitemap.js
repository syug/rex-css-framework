import { Routes } from './routes';


// Overview
const HOME = {
  'text': {
    'en': 'Welcome',
    'jp': '歓迎'
  },
  'url': Routes.HOME,
  'disabled': false
};
const OVERVIEW_DOWNLOADS = {
  'text': {
    'en': 'Downloads',
    'jp': 'ダウンロード'
  },
  'url': Routes.OVERVIEW_DOWNLOADS,
  'disabled': false
};
const OVERVIEW_GET_STARTED = {
  'text': {
    'en': 'Get started',
    'jp': '始めよう'
  },
  'url': Routes.OVERVIEW_GET_STARTED,
  'disabled': false
};
const OVERVIEW_REPOSITORY = {
  'text': {
    'en': 'Repository',
    'jp': 'リポジトリ'
  },
  'url': Routes.OVERVIEW_REPOSITORY,
  'disabled': false
};
const OVERVIEW_CHANGELOG = {
  'text': {
    'en': 'Changelog',
    'jp': '変更履歴'
  },
  'url': Routes.OVERVIEW_CHANGELOG,
  'disabled': true
};


// Reference
const REFERENCE_COLORS = {
  'text': {
    'en': 'Colors',
    'jp': 'カラー'
  },
  'url': Routes.REFERENCE_COLORS,
  'disabled': false
};
const REFERENCE_CONTEXTUAL_COLORS = {
  'text': {
    'en': 'Contextual colors',
    'jp': 'コンテキストカラー'
  },
  'url': Routes.REFERENCE_CONTEXTUAL_COLORS,
  'disabled': false
};
const REFERENCE_ICONS = {
  'text': {
    'en': 'Icons',
    'jp': 'アイコン'
  },
  'url': Routes.REFERENCE_ICONS,
  'disabled': false
};


// Foundation
const FOUNDATION_BUTTONS = {
  'text': {
    'en': 'Buttons',
    'jp': 'ボタン'
  },
  'url': Routes.FOUNDATION_BUTTONS,
  'disabled': false
};
const FOUNDATION_DROPDOWNS = {
	'text': {
		'en': 'Dropdown buttons',
		'jp': 'ドロップダウンボタン'
	},
	'url': Routes.FOUNDATION_DROPDOWNS,
	'disabled': false
};
const FOUNDATION_INPUTS = {
  'text': {
    'en': 'Inputs',
    'jp': '入力'
  },
  'url': Routes.FOUNDATION_INPUTS,
  'disabled': false
};
const FOUNDATION_LISTS = {
  'text': {
    'en': 'Lists',
    'jp': 'リスト'
  },
  'url': Routes.FOUNDATION_LISTS,
  'disabled': false
};
const FOUNDATION_SELECTS = {
  'text': {
    'en': 'Selects',
    'jp': 'セレクト'
  },
  'url': Routes.FOUNDATION_SELECTS,
  'disabled': false
};
const FOUNDATION_TABLES = {
  'text': {
    'en': 'Tables',
    'jp': 'テーブル'
  },
  'url': Routes.FOUNDATION_TABLES,
  'disabled': false
};
const FOUNDATION_TEXT_AREA = {
  'text': {
    'en': 'Text area',
    'jp': 'テキストエリア'
  },
  'url': Routes.FOUNDATION_TEXT_AREA,
  'disabled': false
};
const FOUNDATION_TYPOGRAPHY = {
  'text': {
    'en': 'Typography',
    'jp': 'タイポグラフィ'
  },
  'url': Routes.FOUNDATION_TYPOGRAPHY,
  'disabled': false
};


// Component styles
const COMPONENT_STYLES_ALERTS = {
  'text': {
    'en': 'Alerts',
    'jp': 'アラート'
  },
  'url': Routes.COMPONENT_STYLES_ALERTS,
  'disabled': false
};
const COMPONENT_STYLES_BREADCRUMBS = {
  'text': {
    'en': 'Breadcrumbs',
    'jp': 'パン粉'
  },
  'url': Routes.COMPONENT_STYLES_BREADCRUMBS,
  'disabled': false
};
const COMPONENT_STYLES_CARDS = {
  'text': {
    'en': 'Cards',
    'jp': 'カード'
  },
  'url': Routes.COMPONENT_STYLES_CARDS,
  'disabled': true
};
const COMPONENT_STYLES_CAROUSELS = {
  'text': {
    'en': 'Carousels',
    'jp': 'カルーセル'
  },
  'url': Routes.COMPONENT_STYLES_CAROUSELS,
  'disabled': true
};
const COMPONENT_STYLES_INDICATORS = {
	'text': {
		'en': 'Indicators',
		'jp': 'インディケーターズ'
	},
	'url': Routes.COMPONENT_STYLES_INDICATORS,
	'disabled': false
};
const COMPONENT_STYLES_LANGUAGE_SWITCHER = {
  'text': {
    'en': 'Language switcher',
    'jp': '言語切り替え'
  },
  'url': Routes.COMPONENT_STYLES_LANGUAGE_SWITCHER,
  'disabled': false
};
const COMPONENT_STYLES_PAGINATION = {
  'text': {
    'en': 'Pagination',
    'jp': 'ページネーション'
  },
  'url': Routes.COMPONENT_STYLES_PAGINATION,
  'disabled': false
};
const COMPONENT_STYLES_RATING = {
  'text': {
    'en': 'Rating',
    'jp': '評価'
  },
  'url': Routes.COMPONENT_STYLES_RATING,
  'disabled': false
};
const COMPONENT_STYLES_SEARCH_BAR = {
  'text': {
    'en': 'Search bar',
    'jp': 'サーチ'
  },
  'url': Routes.COMPONENT_STYLES_SEARCH,
  'disabled': false
};
const COMPONENT_STYLES_TABS = {
  'text': {
    'en': 'Tabs',
    'jp': 'タブ'
  },
  'url': Routes.COMPONENT_STYLES_TABS,
  'disabled': false
};
const COMPONENT_STYLES_TRACK = {
  'text': {
    'en': 'Track',
    'jp': 'トラック'
  },
  'url': Routes.COMPONENT_STYLES_TRACK,
  'disabled': false
};
const COMPONENT_STYLES_SLIDER = {
	'text': {
		'en': 'Slider',
		'jp': 'スライダー'
	},
	'url': Routes.COMPONENT_STYLES_SLIDER,
	'disabled': false
};
const COMPONENT_STYLES_MENU_LISTS = {
  'text': {
    'en': 'Menu lists',
    'jp': 'メニューリスト'
  },
  'url': Routes.COMPONENT_STYLES_MENU_LISTS,
  'disabled': false
};

// Sitemap
export const Sitemap = {
  'ROOT': {
    'INDEX': Routes.SITE_INDEX
  },
  'CONTENT': [
    {
      'text': 'Overview',
      'list': [
        HOME,
        OVERVIEW_DOWNLOADS,
        OVERVIEW_REPOSITORY
      ]
    },
    {
      'text': 'Reference',
      'list': [
        REFERENCE_COLORS,
        REFERENCE_CONTEXTUAL_COLORS,
        REFERENCE_ICONS
      ]
    },
    {
      'text': 'HTML elements',
      'list': [
        FOUNDATION_BUTTONS,
        FOUNDATION_DROPDOWNS,
        FOUNDATION_INPUTS,
        FOUNDATION_LISTS,
        FOUNDATION_SELECTS,
        FOUNDATION_TABLES,
        FOUNDATION_TEXT_AREA,
        FOUNDATION_TYPOGRAPHY
      ]
    },
    {
      'text': 'Component styles',
      'list': [
        COMPONENT_STYLES_ALERTS,
        COMPONENT_STYLES_BREADCRUMBS,
        COMPONENT_STYLES_CARDS,
        COMPONENT_STYLES_CAROUSELS,
        COMPONENT_STYLES_INDICATORS,
        COMPONENT_STYLES_LANGUAGE_SWITCHER,
        COMPONENT_STYLES_MENU_LISTS,
        COMPONENT_STYLES_PAGINATION,
        COMPONENT_STYLES_RATING,
        COMPONENT_STYLES_SEARCH_BAR,
        COMPONENT_STYLES_SLIDER,
        COMPONENT_STYLES_TABS,
        COMPONENT_STYLES_TRACK
      ]
    }
  ]
};
