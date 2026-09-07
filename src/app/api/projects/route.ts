import { NextResponse } from 'next/server';
import { Project } from '@/types/project';
import { projects } from './data';

// GET /api/projects
export async function GET() {
  return NextResponse.json(projects);
}

// POST /api/projects
export async function POST(request: Request) {
  const body = await request.json();

  const newProject: Project = {
    id: crypto.randomUUID(), // String(Date.now()),でも良いが randumId を振ると実務的なので変更
    name: body.name,
    status: 'active',
  };

  projects.push(newProject);

  return NextResponse.json(newProject, { status: 201 });
}

// PATCH /api/projects/:id
export async function PATCH(request: Request) {

  // URLからidを取得

  // idに一致するProjectを探す

  // statusをactive ⇄ archivedに変更

  // 変更したProjectを返す
}