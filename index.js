import AbstractChart from './src/abstract-chart'
import LineChart from './src/line-chart'
import BarChart from './src/bar-chart'
import PieChart from './src/pie-chart'
import ProgressChart from './src/progress-chart'
import ContributionGraph from './src/contribution-graph'

global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

export {
  AbstractChart,
  BarChart,
  LineChart,
  PieChart,
  ProgressChart,
  ContributionGraph
}
