import { create } from 'zustand'
import { createUserDataSlice } from './userDataSlice'

export const useBoundStore = create((...a) => ({
  ...createUserDataSlice(...a),
}))

