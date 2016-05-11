import path from 'path';
import projectPath from './projectpath.babel'

export default {
  entry: projectPath.js() + 'index.js',
  output: {
    path: projectPath.BuildJs(),
    filename: 'script.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : projectPath.js(),
        loader : 'babel'
      }
    ]
  }
};
