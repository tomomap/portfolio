import { NextResponse } from "next/server";
import { projects } from '../data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);

  return NextResponse.json(project);
  
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);
  if (!project) {
    return NextResponse.json(
      { error: 'Project not find' },
      { status: 404 }
    )
  }

  const body = await request.json();

  if (body.name !== undefined) {
    project.name = body.name;
  }
  if (body.status !== undefined) {
    project.status = body.status;
  }

  return NextResponse.json(project);
  
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const projectIndex = projects.findIndex(
    (project) => project.id === id
  );

  if (projectIndex === -1) {
    return NextResponse.json(
      { error: 'Project not find' },
      { status: 404 }
    );
  }

  projects.splice(projectIndex, 1);

  return NextResponse.json({ message: 'Project deleted' })
  
}

