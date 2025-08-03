export interface Lecture {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  instructor: string;
  thumbnailUrl: string;
  videoUrl: string;
  createdAt: string;
  updatedAt: string;
  isCompleted?: boolean;
  progress?: number; // 0-100
}

export interface LectureResponse {
  id: string;
  title: string;
  description: string;
  duration_minutes: number;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  category_name: string;
  instructor_name: string;
  thumbnail_url: string;
  video_url: string;
  created_at: string;
  updated_at: string;
  is_completed?: boolean;
  progress_percentage?: number;
}

export interface LecturesListResponse {
  data: LectureResponse[];
  total: number;
  page: number;
  limit: number;
}

export interface LecturesListRequest {
  page?: number;
  limit?: number;
  category?: string;
  level?: string;
  search?: string;
}