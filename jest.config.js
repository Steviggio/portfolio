export default {
  testEnvironnement: "jsdom",
  // Autres options de configuration Jest
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // Module 
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
  },
};
