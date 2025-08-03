// import { create } from 'zustand';
// import { Lecture } from '../modules/models/lecture.model';
// import { LectureService } from '../modules/lectures/services/lecture.service';

// interface LectureState {
//   lectures: Lecture[];
//   loading: boolean;
//   error: string | null;
//   total: number;
//   page: number;
//   limit: number;
//   filters: {
//     category?: string;
//     level?: string;
//     search?: string;
//   };
// }

// interface LectureActions {
//   fetchLectures: (params?: any) => Promise<void>;
//   setFilters: (filters: Partial<LectureState['filters']>) => void;
//   clearError: () => void;
//   resetState: () => void;
// }

// const initialState: LectureState = {
//   lectures: [],
//   loading: false,
//   error: null,
//   total: 0,
//   page: 1,
//   limit: 10,
//   filters: {},
// };

// export const useLectureStore = create<LectureState & LectureActions>((set, get) => ({
//   ...initialState,

//   fetchLectures: async (params = {}) => {
//     set({ loading: true, error: null });

//     try {
//       const currentState = get();
//       const response = await LectureService.getLectures({
//         page: params.page || currentState.page,
//         limit: params.limit || currentState.limit,
//         category: params.category || currentState.filters.category,
//         level: params.level || currentState.filters.level,
//         search: params.search || currentState.filters.search,
//       });

//       set({
//         lectures: response.lectures,
//         total: response.total,
//         page: response.page,
//         limit: response.limit,
//         loading: false,
//       });
//     } catch (error) {
//       set({
//         error: error instanceof Error ? error.message : 'An error occurred',
//         loading: false,
//       });
//     }
//   },

//   setFilters: (filters) => {
//     set((state) => ({
//       filters: { ...state.filters, ...filters },
//       page: 1, // Reset to first page when filters change
//     }));
//   },

//   clearError: () => {
//     set({ error: null });
//   },

//   resetState: () => {
//     set(initialState);
//   },
// }));