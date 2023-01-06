import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import userModule from './modules/user'

export function setupProdMockServer() {
  createProdMockServer([...userModule])
}
