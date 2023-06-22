import { create } from 'zustand'
import { createUserDataSlice, UserDataStore } from './userDataSlice'

interface Store extends UserDataStore {}

export const useBoundStore = create<Store>((...a) => ({
  //@ts-ignore
  ...createUserDataSlice(...a),
}))

