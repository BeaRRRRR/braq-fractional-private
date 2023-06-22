export interface UserDataStore {
  itemCount: number,
  setItemCount: (count: number) => void
}

export const createUserDataSlice = (set) => ({
  itemCount: 0,
  setItemCount: (count) => set((state) => ({ itemCount: count })),
})
