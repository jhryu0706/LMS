import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
    return (
        <div className="p-6">
            <Link href="/teacher/create">
            <Button>
                New Course
            </Button>
            </Link>
            Courses Page!
        </div>
    );
}

export default CoursesPage;