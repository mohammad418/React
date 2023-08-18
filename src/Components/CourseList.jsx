import CourseCard from "./CourseCard";

const courses = [
  {
    id: 0,
    imgUrl: "/public/images/img1.jpg",
    title: "English Lecture",
    description: "Language Lessons With The Most Popular Teachers",
    rate: "⭐️ 4.5",
    start: "2023/05/04",
  },
  {
    id: 1,
    imgUrl: "/public/images/img2.jpg",
    title: "Design Strategy",
    description:
      "Lesson On Planning Design Concept And Proper Planning Of Work",
    rate: "⭐️ 3.9",
    start: "2023/07/01",
  },
  {
    id: 2,
    imgUrl: "/public/images/img3.jpg",
    title: "Business Lecture",
    description:
      "Lecturs On How To Build Your Business Safely Without Fare OfNew Projects",
    rate: "⭐️ 4.2",
    start: "2021/01/01",
  },
];

function CourseList() {
  return (
    <div>
      <div>
        <h1>My Courses (3)</h1>
        <div className="course-status">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
          <div>UpComing</div>
        </div>
      </div>
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
}

export default CourseList;
