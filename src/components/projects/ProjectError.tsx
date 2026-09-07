type Props = {
  message: string;
}

export function ProjectError ({ message }: Props ) {
  return <p>{ message }</p>
}