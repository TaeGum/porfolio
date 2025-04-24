import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Card className="bg-white border shadow-sm rounded-lg">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
        <p className="mb-4 text-sm text-gray-600">{project.summary}</p>
        <Button asChild className="mt-auto">
          <Link href={`/projects/${project.id}`}>상세 보기</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
