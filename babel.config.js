module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@screens': './src/screens',
          '@entities': './src/entities',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};
