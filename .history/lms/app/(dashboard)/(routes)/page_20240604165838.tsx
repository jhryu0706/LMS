import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
    <p className="text-3xl font-medium text-sky-700">
      This is a protected folder
    </p>
    <Button variant="destructive">Click me</Button>
    </div>
  );
}
