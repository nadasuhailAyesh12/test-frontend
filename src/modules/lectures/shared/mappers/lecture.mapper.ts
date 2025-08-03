import { Lecture, LectureResponse, LecturesListResponse } from '../models/lecture.interface';

export const mapLectureResponseToLecture = (response: LectureResponse): Lecture => {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    duration: response.duration_minutes,
    level: response.difficulty_level,
    category: response.category_name,
    instructor: response.instructor_name,
    thumbnailUrl: response.thumbnail_url,
    videoUrl: response.video_url,
    createdAt: response.created_at,
    updatedAt: response.updated_at,
    isCompleted: response.is_completed || false,
    progress: response.progress_percentage || 0,
  };
};

export const mapLecturesListResponse = (response: LecturesListResponse): {
  lectures: Lecture[];
  total: number;
  page: number;
  limit: number;
} => {
  return {
    lectures: response.data.map(mapLectureResponseToLecture),
    total: response.total,
    page: response.page,
    limit: response.limit,
  };
};