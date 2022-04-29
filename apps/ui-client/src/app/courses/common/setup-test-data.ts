import { Course } from '../model/course';
import { COURSES } from '@nx-apps/server';
import { sortCoursesBySeqNo } from '../home/sort-course-by-seq';

export function setupCourses(): Course[] {
    return COURSES.sort(sortCoursesBySeqNo) as Course[];
}
