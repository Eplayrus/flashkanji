import type { KanjiCard, LessonManifestItem } from "../types";

interface LessonPayload {
  lesson: Pick<LessonManifestItem, "id" | "title" | "jlpt" | "order">;
  items: Omit<KanjiCard, "id" | "lessonId" | "lessonTitle" | "lessonOrder">[];
}

interface CourseManifest {
  version: number;
  course: string;
  lessons: LessonManifestItem[];
}

export interface CourseData {
  lessons: Array<LessonManifestItem & { items: KanjiCard[] }>;
  cards: KanjiCard[];
}

export class DataService {
  constructor(private readonly baseUrl = ".") {}

  async loadCourse(): Promise<CourseData> {
    const manifest = await this.getJson<CourseManifest>("data/lessons.json");
    const lessons = await Promise.all(
      manifest.lessons.map(async (lesson) => {
        const payload = await this.getJson<LessonPayload>(lesson.file);
        const items = payload.items.map((item) => ({
          ...item,
          id: String(item.id),
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          lessonOrder: lesson.order
        }));
        return { ...lesson, ...payload.lesson, items };
      })
    );

    return {
      lessons,
      cards: lessons.flatMap((lesson) => lesson.items)
    };
  }

  private async getJson<T>(path: string): Promise<T> {
    const base = this.baseUrl.replace(/\/$/, "");
    const cleanPath = path.replace(/^\//, "");
    const response = await fetch(`${base}/${cleanPath}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Cannot load ${path}`);
    return response.json() as Promise<T>;
  }
}
