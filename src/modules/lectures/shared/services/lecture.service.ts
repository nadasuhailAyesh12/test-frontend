// import { apiClient } from '../api/apiClient';
// import { LecturesListRequest, LecturesListResponse } from '../models/lecture.model';
// import { mapLecturesListResponse } from '../mappers/lecture.mapper';

// export class LectureService {
//   static async getLectures(params: LecturesListRequest = {}): Promise<{
//     lectures: any[];
//     total: number;
//     page: number;
//     limit: number;
//   }> {
//     try {
//       const response = await apiClient.get<LecturesListResponse>('/lectures', {
//         params: {
//           page: params.page || 1,
//           limit: params.limit || 10,
//           category: params.category,
//           level: params.level,
//           search: params.search,
//         },
//       });

//       return mapLecturesListResponse(response.data);
//     } catch (error) {
//       console.error('Error fetching lectures:', error);
//       throw error;
//     }
//   }

//   static async getLectureById(id: string) {
//     try {
//       const response = await apiClient.get(`/lectures/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching lecture:', error);
//       throw error;
//     }
//   }

//   static async getCategories() {
//     try {
//       const response = await apiClient.get('/lectures/categories');
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       throw error;
//     }
//   }
// }